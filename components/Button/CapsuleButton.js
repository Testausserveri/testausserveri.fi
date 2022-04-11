import styles from './CapsuleButton.module.css'
import Image from 'next/image';

export function ButtonIcon({src}) {
    return (
        <div className={styles.buttonIcon}>
            <Image src={src} width={32} height={32} unoptimized />
        </div>
    )
}

export function CapsuleButton({children, variant, className}) {
    return (
        <div className={className}>
            <div className={(variant === "small" ? `${styles.capsuleButton} ${styles.small}` : styles.capsuleButton)}>
                {children}
            </div>
        </div>
    )
}