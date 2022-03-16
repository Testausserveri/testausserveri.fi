import styles from './StatCard.module.css'

export function StatCard({label, value}) {
    return (
        <div className={styles.statCard}>
            <span className={styles.label}>{label}</span>
            <span className={styles.value}>{value}</span>
        </div>
    )
}