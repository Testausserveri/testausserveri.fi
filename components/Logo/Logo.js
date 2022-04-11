import styles from './Logo.module.css'
import Image from 'next/image';
import TestausserveriLogo from '../../assets/TestausserveriLogo.svg'

export function Logo({className}) {
    return (
        <div className={className}>
           <div className={styles.logo}></div>
        </div>
    )
}