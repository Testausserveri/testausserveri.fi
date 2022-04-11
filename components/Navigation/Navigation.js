import Link from 'next/link'
import styles from './Navigation.module.css'

export function Navigation({className, pages, activePath}) {
    return (
        <div className={className}>
            <ul className={styles.items}>
                {pages.map(page => (
                    <Link key={page.label} href={page.path}>
                        <li className={activePath == page.path ? `${styles.active} ${styles.item}` : styles.item}>{page.label}</li>
                    </Link>
                ))}  
            </ul>
        </div>
    )
}
