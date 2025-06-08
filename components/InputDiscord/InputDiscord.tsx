'use client';

import { PropsWithChildren, useEffect, useState } from 'react'
import styles from './InputDiscord.module.css'
import DiscordIcon from '../../assets/DiscordIcon.svg'
import { ButtonIcon, CapsuleButton } from '../../components/Button/CapsuleButton';
import { HiOutlineSwitchHorizontal } from "react-icons/hi";
import { usePlausible } from 'next-plausible';
import { useAuth } from '@/contexts/AuthContext';
import { getAuthenticatedMemberAvatarUrl } from '@/utils/Member';

export type InputDiscordProps = PropsWithChildren<{
    className?: string
}>

export type AuthorizationData = {
    status?: "ok" | "already-member",
    since?: string,
    id?: string,
    username?: string,
    avatar?: string,
    token?: string
}

export const InputDiscord = ((props: InputDiscordProps) => {
    const plausible = usePlausible();
    const { authenticated: authenticatedData, refetch } = useAuth();
    const authenticated = authenticatedData?.username != null;


    useEffect(() => {
        console.log("registered");
        const handleMessage = async (event: any) => {
            if (event.origin !== window.location.origin) return;
            plausible("inputDiscordSuccess");
            console.log(event.data);
            refetch();
        };
        window.addEventListener("message", handleMessage, false);
        return () => {
            window.removeEventListener("message", handleMessage, false);
        };
    }, []); 

    const classNames = [props.className, styles.inputdiscord, authenticated ? styles.authorized : ""]

    return (
        <>
            <label className={styles.inputdiscordLabel}>Discord-käyttäjä</label>
            { authenticated ? 
                <>
                    <div className={classNames.join(' ')}>
                        <img src={getAuthenticatedMemberAvatarUrl(authenticatedData)} />
                        <div>
                            <span>{authenticatedData.username}</span>
                        </div>
                        <div>
                            <a onClick={async () => {
                                await fetch('/api/v1/logout', { method: 'GET' });
                                refetch();
                            }}>
                                <HiOutlineSwitchHorizontal />
                            </a>
                        </div>
                    </div>
                </>
            :
                <div className={classNames.join(' ')}>
                    <a href={process.env.NEXT_PUBLIC_LOGIN_URL + "&state=opener"} target="_blank" rel="opener" onClick={() => {plausible("inputDiscordBegin")}}>
                        <CapsuleButton small>
                            <ButtonIcon alt="Discord" src={DiscordIcon} />
                            Linkitä Discord-käyttäjäsi
                        </CapsuleButton>
                    </a>
                </div>
            }
        </>
    )
})
