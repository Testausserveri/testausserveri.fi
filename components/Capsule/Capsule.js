import styles from './Capsule.module.css'

export function Capsule({children}) {
    return (
        <span className={styles.capsule}>
            {children}
        </span>
    )
}