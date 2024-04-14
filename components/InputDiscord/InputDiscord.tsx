'use client';

import { PropsWithChildren, useEffect, useState } from 'react'
import styles from './InputDiscord.module.css'
import DiscordIcon from '../../assets/DiscordIcon.svg'
import { ButtonIcon, CapsuleButton } from '../../components/Button/CapsuleButton';
import { HiOutlineSwitchHorizontal } from "react-icons/hi";

export type InputDiscordProps = PropsWithChildren<{
    className?: string,
    setDiscordData: Function,
    discordData: AuthorizationData
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
    const {discordData: data, setDiscordData: setData} = props;

    useEffect(() => {
        console.log("registered");
        const handleMessage = async (event: any) => {
            if (event.origin !== window.location.origin) return;
            console.log(event.data);
            setData(JSON.parse(event.data));
        };
        window.addEventListener("message", handleMessage, false);
        return () => {
            window.removeEventListener("message", handleMessage, false);
        };
    }, []); 

    const classNames = [props.className, styles.inputdiscord, data.status != null ? styles.authorized : ""]

    return (
        <>
            <label className={styles.inputdiscordLabel}>Discord-käyttäjä</label>
            { data.status != null ? 
                <>
                    <div className={classNames.join(' ')}>
                        <img src={`https://cdn.discordapp.com/avatars/${data.id}/${data.avatar}`} />
                        <div>
                            <span>{data.username}</span>
                        </div>
                        <div onClick={() => {setData({})}}>
                            <HiOutlineSwitchHorizontal />
                        </div>
                    </div>
                </>
            :
                <div className={classNames.join(' ')}>
                    <a href={process.env.LOGIN_URL_APPLY} target="_blank" rel="opener">
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
