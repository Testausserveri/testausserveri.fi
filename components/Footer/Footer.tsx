import { Content } from '../Content/Content'
import styles from './Footer.module.css'
import TestausserveriLogo from '../../assets/TestausserveriFullLogo.svg'

import Image from "next/image"
import Link from 'next/link'
import { PropsWithChildren } from 'react'
import { SOCIAL_MEDIA_LINKS } from '@/utils/constants'

const footerLinks = [
    { label: "Tietosuoja", path: "/privacy" },
    { label: "Testausserveri Wiki", path: "https://wiki.testausserveri.fi" },
    { label: "Yhdistyksen säännöt", path: "/association-rules" },
] as const

function SocialMedias() {
    return (
        <ul className={`noLinkStyles ${styles.socials}`}>
            {SOCIAL_MEDIA_LINKS.map(media => (
                <li key={media.name}>
                    <Link href={media.url}>
                        <Image src={media.icon} alt={`${media.name} logo`} height={24} width={24} unoptimized />
                    </Link>
                </li>
            ))}
        </ul>
    )
}

function FooterLinks() {
    return (
        <ul className={`noLinkStyles ${styles.links}`}>
            {footerLinks.map(link => (
                <li key={link.path}>
                    <Link href={link.path}>
                        {link.label}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
function FooterRow({ children }: PropsWithChildren) {
    return (
        <div className={styles.row}>{children}</div>
    )
}

export function Footer() {
    return (
        <div className={styles.footer + " print-hide"}>
            <Content noMargin wider>
                <FooterRow>
                    <div>
                        <div>
                            <div>
                                <Link href="/">
                                    <Image
                                        src={TestausserveriLogo}
                                        alt="Testausserveri logo"
                                        className={styles.logo}
                                        style={{marginLeft: "-12px"}}
                                    />
                                </Link>
                                <span className={styles.businessId}>Y-tunnus: 3235794-4</span>
                            </div>
                        </div>
                        <div>
                            <FooterLinks />
                        </div>
                    </div>
                </FooterRow>
                <FooterRow>
                    <div>
                        <div>
                        <ul className={`noLinkStyles ${styles.links} ${styles.linksLeft}`}>
                            <li>
                                <Link href="/credits">
                                    Kehittäjät ja lisenssit
                                </Link>
                            </li>
                            <li>
                                <Link href="mailto:board@testausserveri.fi">
                                    board@testausserveri.fi
                                </Link>
                            </li>
                        </ul>
                        <p style={{margin: 0}}>
                            <br />
                            © {new Date().getFullYear()} Testausserveri ry
                        </p>
                        </div>
                        
                        <div>
                            <SocialMedias />
                        </div>
                    </div>
                </FooterRow>
            </Content>
        </div>
    );
}
