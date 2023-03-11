import { ReactNode } from 'react'
import { StatCard } from './StatCard'
import styles from './StatGroup.module.css'

export type StatGroupProps = {
    stats?: { label: string, value: ReactNode }[]
}

export function StatGroup({ stats }: StatGroupProps) {
    if (!stats) return <></>

    return (
        <div className={styles.statGroup}>
            {stats.map(({ label, value }) => (
                <StatCard key={label} label={label} value={value} />
            ))}
        </div>
    )
}