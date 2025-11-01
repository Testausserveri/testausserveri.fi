"use client";

import { H2 } from '@/components/Title/Title';
import { GradientText } from '@/components/GradientText/GradientText';
import { Explanation } from '@/components/Explanation/Explanation';
import { Me } from '@/utils/types';
import Link from 'next/link';
import { CapsuleButton } from '@/components/Button/CapsuleButton';
import styles from './me.module.scss';
import api from '@/utils/api';
import { EditableField } from './components/EditableField';
import { useState } from 'react';

export function AssociationMembershipCard({ authenticated: initialAuthenticated }: { authenticated: Me | null }) {
    const [authenticated, setAuthenticated] = useState(initialAuthenticated);
    const notMember = authenticated?.associationMembership?.status != "MEMBER"

    const updateMemberData = async (updates: { city?: string; email?: string }) => {
        const response = await api.membersArea.updateMember(updates);
        if (authenticated?.associationMembership) {
            setAuthenticated({
                ...authenticated,
                associationMembership: {
                    ...authenticated.associationMembership,
                    ...updates
                }
            });
        }
    };

    return (
        <div className={styles.assocationMembershipCard} >
            <div className={`${styles.member} ${notMember ? styles.disabled : ""}`}>
                <div>
                    <H2 style={{ marginBottom: '0.4em' }}>
                        <GradientText style={{ fontSize: '1.5rem' }}>
                            {notMember ? "Testaus" : authenticated?.associationMembership?.firstName} {notMember ? "Koiranen" : authenticated?.associationMembership?.lastName}
                        </GradientText>
                    </H2>
                    <div className={styles.fieldRow}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            {notMember ? (
                                "Tuotantoserveri"
                            ) : (
                                <EditableField
                                    value={authenticated?.associationMembership?.city || ""}
                                    onUpdate={async (newValue: string) => {
                                        await updateMemberData({ city: newValue });
                                    }}
                                    type="text"
                                    municipalityList
                                />
                            )}
                            <Explanation>
                                Yhdistyslaki velvoittaa meitä pitämään luetteloa kunkin jäsenen nimestä ja asuinkunnasta. (Yhdistyslaki 503/1989, 11 §)
                            </Explanation>
                        </span>
                    </div>
                    <div className={styles.fieldRow}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            {notMember ? (
                                "hauhau@koira.testausserveri.fi"
                            ) : (
                                <EditableField
                                    value={authenticated?.associationMembership?.email || ""}
                                    onUpdate={async (newValue: string) => {
                                        await updateMemberData({ email: newValue });
                                    }}
                                    type="email"
                                />
                            )}
                            <Explanation>
                                Sähköpostiisi tulee mm. tärkeitä tiedotteita kuten tapahtumakutsuja.
                            </Explanation>
                        </span>
                    </div>
                </div>
                <div>
                    <p>
                        Olet Testausserveri ry:n jäsen alkaen {notMember ? "12/2050" : authenticated?.associationMembership?.acceptedAt || authenticated?.associationMembership?.handledIn}. 
                    </p>
                    <p>
                        Jäsenyys on ilmaista.
                    </p>
                </div>
            </div>
            <div className={styles.notMember} style={!notMember ? { display: "none" } : {}}>
                { authenticated?.associationMembership?.status == "RECEIVED" ?
                <>
                    <p>Jäsenhakemuksesi on vastaanotettu ja siihen palataan pian.</p>
                </>                
                : 
                <>
                    <p>Et ole vielä yhdistyksen jäsen. Skill issue. </p>
                    <Link href="/apply">
                        <CapsuleButton small>Jätä jäsenhakemus</CapsuleButton>
                    </Link>
                </>}
            </div>
        </div>
    )
}
