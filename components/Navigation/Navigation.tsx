import Link from 'next/link'
import styles from './Navigation.module.css'
import Hamburger from 'hamburger-react'
import { Logo } from '../Logo/Logo'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { FadeIn } from '../FadeIn/FadeIn';

export type NavigationProps = {
    className?: string,
    pages: {
        label: string,
        path: string
    }[],
    activePath: string,
    open: boolean,
    setOpen: (open: boolean) => void
}

export function Navigation({ className, pages, activePath, open, setOpen }: NavigationProps) {
    const router = useRouter()

    useEffect(() => {
        const onHashChangeStart = () => {
            setOpen(false)
        }

        router.events.on("routeChangeComplete", onHashChangeStart)

        return () => {
            router.events.off("routeChangeComplete", onHashChangeStart)
        }
    }, [router.events, setOpen])

    const openClassName = open ? styles.open : ""
    return (
        <div className={className ? `${className} ${openClassName}` : openClassName}>

            <div className={styles.mobileHeader}>
                {open ?
                    <Logo className={styles.logo} link />
                    : null}
                <div className={styles.mobileButton}>
                    <Hamburger rounded color="#FFF" toggled={open} toggle={setOpen} />
                </div>
            </div>

            <ul className={`${styles.items} noLinkStyles`}>
                {pages.map(page => {
                    const Component = () => <Link
                        shallow={true}
                        href={page.path}
                        className={activePath == page.path ? `${styles.active} ${styles.item}` : styles.item}>
                        {page.label}
                    </Link>;
                    return (
                        <li key={page.path}>
                            {open ? <FadeIn><Component /></FadeIn> : <Component />}
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}
