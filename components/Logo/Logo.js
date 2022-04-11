import styles from './Logo.module.css'
import Image from 'next/image';
import TestausserveriLogo from '../../assets/TestausserveriLogo.svg'
import { Capsule } from '../Capsule/Capsule';

export function Logo({className, showBeta}) {
    return (
        <div className={className}>
            <div className={styles.flex}>
                <div className={styles.logo}></div>
                {showBeta ? <Capsule className={styles.capsule}>BETA</Capsule> : null}
            </div>
        </div>
    )
}