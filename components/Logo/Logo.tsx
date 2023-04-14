import styles from './Logo.module.css'
import Link from 'next/link';

type InnerLogoProps = {
    className?: string
}

function InnerLogo({ className }: InnerLogoProps) {
    return <div style={{ display: "inline-block" }} className={className}>
        <div className={styles.flex}>
            <div className={styles.logo}></div>
        </div>
    </div>;
}

type LogoProps = {
    link?: boolean,
    className?: string
}

export function Logo({ className, link }: LogoProps) {
    if (link) {
        return (
            <div className={className}>
                <Link href="/" passHref>
                    <InnerLogo />
                </Link>
            </div>
        )
    } else {
        return <InnerLogo className={className} />
    }
}
