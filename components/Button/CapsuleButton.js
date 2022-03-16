import styles from './CapsuleButton.module.css'
import Image from 'next/image';

export function ButtonIcon({src}) {
    return (
        <div className={styles.buttonIcon}>
            <Image src={src} width={32} height={32} unoptimized />
        </div>
    )
}

export function CapsuleButton({children}) {
    return (
        <div className={styles.capsuleButton}>
            {children}
        </div>
    )
}