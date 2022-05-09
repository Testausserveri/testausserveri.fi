import Image from 'next/image'
import { Logo } from '../Logo/Logo'
import { Navigation } from '../Navigation/Navigation'
import styles from './Header.module.css'
import GithubIcon from '../../assets/GithubIcon.svg'
import { useState } from 'react'


export function Header({pages, activePath}) {
    const [open, setOpen] = useState(false)
    return (
        <div className={`${styles.header} ${open ? styles.open : ""}`}>
            <Logo className={styles.logo} showBeta link />
            <Navigation className={styles.navigation} pages={pages} activePath={activePath} open={open} setOpen={setOpen} />
            <a target="_blank" href="https://github.com/testausserveri">
                <Image src={GithubIcon} height={24} width={24} unoptimized />
            </a>
        </div>
    )
}
