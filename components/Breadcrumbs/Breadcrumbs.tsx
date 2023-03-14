import Link from 'next/link'
import styles from './Breadcrumbs.module.css'

export type BreadcrumbsProps = {
    route: {
        name: string
        path: string
    }[]
}

export function Breadcrumbs({ route }: BreadcrumbsProps) {
    return (
        <ul className={styles.breadcrumbs}>
            {route.map(breadcrumb => (
                <Link href={breadcrumb.path} key={breadcrumb.name + "." + breadcrumb.path}>
                    <li key={breadcrumb.name}>{breadcrumb.name}</li>
                </Link>
            ))}
        </ul>
    )
}
