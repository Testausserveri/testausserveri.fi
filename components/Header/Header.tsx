import { CapsuleButton, ButtonIcon } from '../Button/CapsuleButton'
import { Logo } from '../Logo/Logo'
import { Navigation } from '../Navigation/Navigation'
import styles from './Header.module.css'
import DiscordIcon from '../../assets/DiscordIcon.svg'
import { useEffect, useState } from 'react'
import { IoMdKey } from "react-icons/io"
import { LoginView } from '../Login/Login'
import api from '../../utils/api'
import { getMemberAvatarUrl } from '../../utils/Member'
import styled from 'styled-components'


export type HeaderProps = {
    pages: {
        label: string,
        path: string
    }[],
    activePath: string,
    authenticated: Me
}

const Avatar = styled.img`
    width: 1.5em !important;
    height: 1.5em !important;
    transform: scale(1.4);
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 0.7em;
`

export function Header({ pages, activePath, authenticated = {} }: HeaderProps) {
    const [open, setOpen] = useState(false)

    return (
        <div className={`${styles.header} ${open ? styles.open : ""}`}>
            <Logo className={styles.logo} showBeta link />
            <Navigation className={styles.navigation} pages={pages} activePath={activePath} open={open} setOpen={setOpen} />
            <a className={styles.navButtons}>
                { authenticated.username ? 
                    <>
                        <a href="/me">
                            <CapsuleButton className={styles.button} small secondary>
                                <Avatar src={getMemberAvatarUrl(authenticated._id)} /> 
                                { authenticated.username }
                            </CapsuleButton>
                        </a>
                    </>
                : 
                    <>
                        <a href={process.env.LOGIN_URL}>
                            <CapsuleButton className={styles.button} small secondary>
                                <IoMdKey />
                                Jäsensivut
                            </CapsuleButton>
                        </a>
                    </>}
                
                <a href="https://discord.testausserveri.fi">
                    <CapsuleButton className={styles.button} small>
                        <ButtonIcon src={DiscordIcon} />
                        Discord
                    </CapsuleButton>
                </a>
            </a>
        </div>
    )
}
