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
                        <Link 
                            shallow={true} 
                            key={page.label} 
                            href={page.path}>
                            <li 
                                className={activePath == page.path ? `${styles.active} ${styles.item}` : styles.item}>
                                {page.label}
                            </li>
                        </Link>
                    )
                    if (open) {
                        return <FadeIn><Component /></FadeIn>
                    } else {
                        return <Component />
                    }
                })}  
            </ul>
        </div>
    )
}
