import Link from 'next/link'
import styles from './Breadcrumbs.module.css'

export function Breadcrumbs({data}) {
    return (
        <ul className={styles.breadcrumbs}>
            {data.map(breadcrumb => (
                <Link href={breadcrumb.path}>
                    <li key={breadcrumb.name}>{breadcrumb.name}</li>
                </Link>
            ))}
        </ul>
    )
}