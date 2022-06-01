import FadeIn from 'react-fade-in';
import Link from 'next/link'
import styles from './Navigation.module.css'
import Hamburger from 'hamburger-react'
import styled from 'styled-components'
import { Logo } from '../Logo/Logo'
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export function Navigation({className, pages, activePath, open, setOpen}) {
    const router = useRouter()

    useEffect(() => {
        const onHashChangeStart = (url) => {
            setOpen(false)
        }

        router.events.on("routeChangeComplete", onHashChangeStart)

        return () => {
            router.events.off("routeChangeComplete", onHashChangeStart)
        }
    }, [router.events])

    const openClassName = open ? styles.open : ""
    return (
        <div className={className ? `${className} ${openClassName}` : openClassName}>

            <div className={styles.mobileHeader}>
                {open ? 
                    <Logo className={styles.logo} showBeta link />
                : null}
                <div className={styles.mobileButton}>
                    <Hamburger rounded color="#FFF" toggled={open} toggle={setOpen} />
                </div>
            </div>

            <ul className={styles.items}>
                {pages.map(page => {
                    const Component = () => (
                        <li className={activePath == page.path ? `${styles.active} ${styles.item}` : styles.item}>
                            <Link
                                shallow={true}
                                href={page.path}>
                                {page.label}
                            </Link>
                        </li>
                    )
                    if (open) {
                        return <FadeIn key={page.label} ><Component /></FadeIn>
                    } else {
                        return <Component key={page.label} />
                    }
                })}  
            </ul>
        </div>
    )
}
