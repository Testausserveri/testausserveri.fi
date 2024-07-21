import { ReactNode } from 'react'
import { Stat, StatCard } from './StatCard'
import styles from './StatGroup.module.css'

export type StatGroupProps = {
    stats?: Stat[]
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