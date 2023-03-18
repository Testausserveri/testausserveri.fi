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
        <ul className={styles.breadcrumbs + " noLinkStyles"}>
            {route.map(breadcrumb => (
                <li key={breadcrumb.name}>
                    <Link href={breadcrumb.path}>{breadcrumb.name}</Link>
                </li>
            ))}
        </ul>
    )
}
