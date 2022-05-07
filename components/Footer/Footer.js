import { Content } from '../Content/Content'
import styles from './Footer.module.css'
import TestausserveriLogo from '../../assets/TestausserveriFullLogo.svg'
import Image from 'next/image'
import Link from 'next/link'

const footerLinks = [
    { label: "Etusivu", path: "/" },
    { label: "Jäsenet", path: "/members" },
    { label: "Projektit", path: "/projects" },
    { label: "Mediassa", path: "/in-media" },
] 

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
            <Content>
                <FooterRow>
                    <div>
                        <img src={TestausserveriLogo} />
                    </div>
                    <div>
                        <FooterLinks />
                    </div>
                </FooterRow>
            </Content>
        </div>
    )
}
