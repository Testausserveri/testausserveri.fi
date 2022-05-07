import styles from './Logo.module.css'
import Image from 'next/image';
import TestausserveriLogo from '../../assets/TestausserveriLogo.svg'
import { Capsule } from '../Capsule/Capsule';
import Link from 'next/link';
import React from 'react';

export function Logo({className, showBeta, link}) {
    const Component = () => (
        <div style={{display: "inline-block"}}>
            <div className={styles.flex}>
                <div className={styles.logo}></div>
                {showBeta ? <Capsule className={styles.capsule}>BETA</Capsule> : null}
            </div>
        </div>
    )
    if (link) {
        return (
            <div className={className}>
                <Link href="/" passHref>
                    <a>
                        <Component />
                    </a>
                </Link>
            </div>
        )
    } else {
        return <Component className={className} />
    }
}