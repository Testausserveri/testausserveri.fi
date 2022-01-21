import styles from './Header.module.css'
import Image from 'next/image'
import Link from 'next/link'

const pages = [
    {
      name: "Testausserveri",
      link: "/"
    },
    {
      name: "Projektit",
      link: "/projektit"
    },
    {
      name: "Jäsenet",
      link: "/jasenet"
    }
]

export default function Header({currentPage}) {
    return (
        <header className={styles.header}>
            <Image width={50} height={50} src="/logo.svg" className={styles.logo} />

            <nav className={styles.navigation}>
            <ul>
                {pages.map(page => (
                <Link href={page.link} key={page.name}>
                    <li className={(currentPage == page.link ? styles.active : null)}>{page.name}</li>
                </Link>
                ))}
            </ul>
            </nav>
        </header>
    )
}
