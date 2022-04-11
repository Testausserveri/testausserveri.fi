import styles from './GradientTitle.module.css'

export function GradientTitle({children}) {
    return (
        <h1 className={styles.gradientTitle}>
            {children}
        </h1>
    )
}