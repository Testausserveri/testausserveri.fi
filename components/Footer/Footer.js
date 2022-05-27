import { Content } from '../Content/Content'
import styles from './Footer.module.css'
import TestausserveriLogo from '../../assets/TestausserveriFullLogo.svg'

import GithubIcon from '../../assets/GithubIcon.svg'
import InstagramIcon from '../../assets/InstagramIcon.svg'
import Image from 'next/image'
import Link from 'next/link'

const footerLinks = [
    { label: "Status", path: "https://status.testausserveri.fi" },
    { label: "Tietosuojaseloste", path: "/privacy" },
    { label: "Testausserveri Wiki", path: "https://wiki.testausserveri.fi" },
    { label: "Yhdistyksen säännöt", path: "https://testausserveri.fi/yhdistyksen-saannot.pdf" },
] 

const socialMedias = [
    {
        icon: GithubIcon,
        name: "GitHub",
        url: "https://github.com/Testausserveri"
    },
    {
        icon: InstagramIcon,
        name: "Instagram",
        url: "https://instagram.com/Testausserveri"
    }
] 

function SocialMedias() {
    return (
        <ul className={styles.socials}>
            {socialMedias.map(media => (
                <li key={media.name}>
                    <Link href={media.url}>
                        <div>
                            <Image src={media.icon} height={24} width={24} unoptimized />
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

function FooterLinks() {
    return (
        <ul className={styles.links}>
            {footerLinks.map(link => (
                <li key={link.path}>
                    <Link href={link.path}>
                        {link.label}
                    </Link>
                </li>
            ))}
        </ul>
    )
}
function FooterRow({children}) {
    return (
        <div className={styles.row}>{children}</div>
    )
}
export function Footer({}) {
    return (
        <div className={styles.footer}>
            <Content noMargin>
                <FooterRow>
                    <div>
                        <div>
                            <Link href="/">
                                <img src={TestausserveriLogo.src}  className={styles.logo} />
                            </Link>
                        </div>
                        <p>
                            <Link href="/credits">
                                Kehittäjät ja lisenssit
                            </Link>
                            <br />
                            © 2022 Testausserveri ry
                        </p>
                    </div>
                    <div>
                        <div>
                            <FooterLinks />
                        </div>
                        <div>
                            <SocialMedias />
                        </div>
                    </div>
                </FooterRow>
            </Content>
        </div>
    )
}
