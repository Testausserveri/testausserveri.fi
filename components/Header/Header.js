import { CapsuleButton, ButtonIcon } from '../Button/CapsuleButton'
import { Logo } from '../Logo/Logo'
import { Navigation } from '../Navigation/Navigation'
import styles from './Header.module.css'
import DiscordIcon from '../../assets/DiscordIcon.svg'


export function Header({pages, activePath}) {
    return (
        <div className={styles.header}>
            <Logo className={styles.logo} showBeta={true} />
            <Navigation className={styles.navigation} pages={pages} activePath={activePath} />
            <a href="https://discord.testausserveri.fi">
                <CapsuleButton className={styles.button} variant="small">
                    <ButtonIcon src={DiscordIcon} />
                    Discord
                </CapsuleButton>
            </a>
        </div>
    )
}
