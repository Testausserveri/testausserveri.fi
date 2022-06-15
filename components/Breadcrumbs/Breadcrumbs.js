import Link from 'next/link'
import styles from './Breadcrumbs.module.css'

export function Breadcrumbs({route}) {
    return (
        <ul className={styles.breadcrumbs}>
            {route.map(breadcrumb => (
                <Link href={breadcrumb.path}>
                    <li key={breadcrumb.name}>{breadcrumb.name}</li>
                </Link>
            ))}
        </ul>
    )
}