import { CapsuleButton, ButtonIcon } from '../Button/CapsuleButton'
import { Logo } from '../Logo/Logo'
import { Navigation } from '../Navigation/Navigation'
import styles from './Header.module.css'
import DiscordIcon from '../../assets/DiscordIcon.svg'


export function Header({}) {
    return (
        <div className={styles.header}>
            <Logo className={styles.logo} />
            <Navigation className={styles.navigation} />
            <CapsuleButton className={styles.button} variant="small">
                <ButtonIcon src={DiscordIcon} />
                Discord
            </CapsuleButton>
        </div>
    )
}
