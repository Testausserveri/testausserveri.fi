"use client";

//export const dynamic = 'force-static';

import { CapsuleButton } from '@/components/Button/CapsuleButton';
import { Content } from '@/components/Content/Content'
import { Footer } from '@/components/Footer/Footer'
import { H1 } from '@/components/Title/Title'
import api from '@/utils/api';
import { InputDiscord } from '@/components/InputDiscord/InputDiscord';
import { IoMdKey } from 'react-icons/io';
import { Suspense, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

function MembersAreaHome() {
    const searchParams = useSearchParams();
    const auth = useAuth();

    const email = searchParams?.get('email') ?? '';
    const migrationKey = searchParams?.get('migrationKey') ?? '';

    const isValid = useMemo(() => {
        return (
            typeof email === 'string' && email.length > 0 &&
            typeof migrationKey === 'string' && /^[A-Za-z0-9]{128}$/.test(migrationKey)
        );
    }, [email, migrationKey]);

    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [merged, setMerged] = useState<boolean>(false);

    useEffect(() => {
        let mounted = true;
        async function run() {
            setError(null);
            setLoading(true);
            try {
                if (!isValid) {
                    throw new Error('Virheellinen linkki');
                }
                const data = await api.membersArea.migrateLookup(email, migrationKey);
                if (!mounted) return;
                if (!data) {
                    setError('Virheellinen tai vanhentunut linkki.');
                } else {
                    setFirstName(data.firstName);
                    setLastName(data.lastName);
                }
            } catch (e: any) {
                if (!mounted) return;
                setError(e?.message || 'Virhe');
            } finally {
                if (mounted) setLoading(false);
            }
        }
        run();
        return () => { mounted = false };
    }, [email, migrationKey, isValid]);

    async function merge() {
        try {
            setError(null);
            setLoading(true);
            await api.membersArea.migrateSubmit(email, migrationKey);
            // Sign out in background and refresh auth state
            try { await fetch('/api/v1/logout', { method: 'GET' }); } catch {}
            try { (auth as any)?.refetch?.(); } catch {}
            setMerged(true);
        } catch (e: any) {
            setError(e?.message || 'Virhe yhdistämisessä');
        } finally {
            setLoading(false);
        }
    }

    return (
        <article>
            <Content>
                <H1>Yhdistä jäsenyytesi Discordiin</H1>
                {!isValid ? (
                    <p>Virheellinen tai vanhentunut linkki.</p>
                ) : loading ? (
                    <p>Ladataan…</p>
                ) : error ? (
                    <p>{error}</p>
                ) : merged ? (
                    <>
                        <p>Onnistui! Tilisi on yhdistetty. Kirjaudu uudelleen jatkaaksesi.</p>
                        <a href={process.env.NEXT_PUBLIC_LOGIN_URL}>
                            <CapsuleButton small secondary>
                                <IoMdKey />
                                Kirjaudu sisään
                            </CapsuleButton>
                        </a>
                    </>
                ) : (
                    <>
                        <p>Olet yhdistämässä jäsenyyttä: <strong>{firstName} {lastName}</strong></p>
                        <InputDiscord />
                        <a onClick={() => auth.authenticated?.username && merge()}>
                            <CapsuleButton disabled={loading || !auth.authenticated?.username}>Jatka</CapsuleButton>
                        </a>
                    </>
                )}
            </Content>
            <Footer />
        </article>
    )
}

export default function MigratePage() {
    return (
        <Suspense fallback={(
            <article>
                <Content>
                    <H1>Yhdistä jäsenyytesi Discordiin</H1>
                    <p>Ladataan…</p>
                </Content>
                <Footer />
            </article>
        )}>
            <MembersAreaHome />
        </Suspense>
    )
}