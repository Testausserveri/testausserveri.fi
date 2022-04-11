import styles from './Capsule.module.css'

export function Capsule({children, className}) {
    return (
        <span className={`${styles.capsule} ${className}`}>
            {children}
        </span>
    )
}