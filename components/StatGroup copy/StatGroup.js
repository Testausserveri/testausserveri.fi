import { StatCard } from '../Stat/StatCard'
import styles from './StatGroup.module.css'
export function StatGroup({stats}) {
    if (!stats) return <></>
    return (
        <div className={styles.statGroup}>
            {stats.map(({label, value}) => (
                <StatCard label={label} value={value} />            
            ))}   
        </div>
    )
}