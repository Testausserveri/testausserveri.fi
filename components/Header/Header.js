import { CapsuleButton, ButtonIcon } from '../Button/CapsuleButton'
import { Logo } from '../Logo/Logo'
import { Navigation } from '../Navigation/Navigation'
import styles from './Header.module.css'
import DiscordIcon from '../../assets/DiscordIcon.svg'
import { useState } from 'react'
import { IoMdKey } from "react-icons/io"

export function Header({pages, activePath}) {
    const [open, setOpen] = useState(false)
    return (
        <div className={`${styles.header} ${open ? styles.open : ""}`}>
            <Logo className={styles.logo} showBeta link />
            <Navigation className={styles.navigation} pages={pages} activePath={activePath} open={open} setOpen={setOpen} />
            <a className={styles.navButtons}>
                <a>
                    <CapsuleButton className={styles.button} small secondary>
                        <IoMdKey />
                        Jäsensivut
                    </CapsuleButton>
                </a>
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
