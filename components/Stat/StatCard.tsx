import { ReactNode } from 'react'
import styles from './StatCard.module.css'

export type StatCardProps = {
    label: ReactNode,
    value: ReactNode
}

export function StatCard({ label, value }: StatCardProps) {
    return (
        <div className={styles.statCard}>
            <span className={styles.label}>{label}</span>
            <span className={styles.value}>{value}</span>
        </div>
    )
}