import { CapsuleButton, ButtonIcon } from '../Button/CapsuleButton'
import { Logo } from '../Logo/Logo'
import { Navigation } from '../Navigation/Navigation'
import styles from './Header.module.css'
import DiscordIcon from '../../assets/DiscordIcon.svg'
import { useEffect, useState } from 'react'
import { IoMdKey } from "react-icons/io"
import api from '../../utils/api'
import { getMemberAvatarUrl } from '../../utils/Member'
import styled from 'styled-components'
import Image from 'next/image'
import { Me } from '../../utils/types'
import Link from 'next/link'


export type HeaderProps = {
    pages: {
        label: string,
        path: string
    }[],
    activePath: string,
    authenticated: Me
}

const Avatar = styled(Image)`
    max-width: 1.5em !important;
    max-height: 1.5em !important;
    transform: scale(1.4);
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 0.7em;
    z-index: 50;
`

export function Header({ pages, activePath, authenticated = {} }: HeaderProps) {
    const [open, setOpen] = useState(false)


    return (
        <div className={`${styles.header} ${open ? styles.open : ""}`}>
            <Logo className={styles.logo} showBeta link />
            <Navigation className={styles.navigation} pages={pages} activePath={activePath} open={open} setOpen={setOpen} />
            <div className={styles.navButtons}>
                { authenticated.username ? 
                    <>
                        <Link href="/me" passHref>
                            <CapsuleButton className={styles.button} small secondary>
                                <Avatar alt="Avatar" width="50" height="50" src={getMemberAvatarUrl(authenticated._id)} /> 
                                { authenticated.username }
                            </CapsuleButton>
                        </Link>
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
                        <ButtonIcon alt="Discord" src={DiscordIcon} />
                        Discord
                    </CapsuleButton>
                </a>
            </div>
        </div>
    )
}
