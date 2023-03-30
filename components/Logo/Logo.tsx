import styles from './Logo.module.css'
import Image from "next/legacy/image";
import TestausserveriLogo from '../../assets/TestausserveriLogo.svg'
import { Capsule } from '../Capsule/Capsule';
import Link from 'next/link';

type InnerLogoProps = {
    showBeta?: boolean,
    className?: string
}

function InnerLogo({ showBeta, className }: InnerLogoProps) {
    return <div style={{ display: "inline-block" }} className={className}>
        <div className={styles.flex}>
            <div className={styles.logo}></div>
            {showBeta ? <Capsule className={styles.capsule}>BETA</Capsule> : null}
        </div>
    </div>;
}

type LogoProps = {
    showBeta?: boolean,
    link?: boolean,
    className?: string
}

export function Logo({ className, showBeta, link }: LogoProps) {
    if (link) {
        return (
            <div className={className}>
                <Link href="/" passHref>
                    <InnerLogo showBeta={showBeta} />
                </Link>
            </div>
        )
    } else {
        return <InnerLogo className={className} showBeta={showBeta} />
    }
}
