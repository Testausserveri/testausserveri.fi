import { StatCard } from './StatCard'
import styles from './StatGroup.module.css'
export function StatGroup({stats}) {
    if (!stats) return <></>
    return (
        <div className={styles.statGroup}>
            {stats.map(({label, value}) => (
                <StatCard key={label} label={label} value={value} />            
            ))}   
        </div>
    )
}