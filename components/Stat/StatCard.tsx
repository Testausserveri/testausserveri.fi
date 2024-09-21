import { ReactNode } from 'react'
import styles from './StatCard.module.css'

export type Stat = { label: string, value: ReactNode }

export type StatCardProps = Stat

export function StatCard({ label, value }: StatCardProps) {
    return (
        <div className={styles.statCard}>
            <span className={styles.label}>{label}</span>
            <span className={styles.value}>{value}</span>
        </div>
    )
}