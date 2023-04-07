import styles from './Collaborations.module.css'

import saucesoft from '../../assets/collaborations/saucesoft.svg'
import genz from '../../assets/collaborations/genz.png'
import w4cfi from '../../assets/collaborations/w4cfi.png'
import { CSSProperties } from 'react'
import koodiasuomesta from '../../assets/collaborations/koodiasuomesta.svg'
import krp from '../../assets/collaborations/logo_krp.png'
import Link from 'next/link'
import Image from 'next/image'

export type CollaborationsProps = {
    style?: CSSProperties
    noTitle?: boolean
}

export function Collaborations(props: CollaborationsProps) {
    return (
        <div className={styles.collaborations} style={props.style}>
            {!props.noTitle ?
                <h2>Yhteistyössä</h2>
            : null}
            <ul className="noLinkStyles" style={props.noTitle ? {marginTop: "1rem"} : {}}>
                <li>
                    <Link href="https://saucesoft.io" target="_blank">
                        <Image src={saucesoft} height={80} alt="Saucesoft logo" />
                    </Link>
                </li>
                <li>
                    <Link href="https://challenge.fi" target="_blank">
                        <Image src={genz} height={80} alt="GenZ logo" />
                    </Link>
                </li>
                <li>
                    <Link href="https://www.women4cyberfinland.com/" target="_blank">
                        <Image src={w4cfi} height={80} alt="W4CFI logo" />
                    </Link>
                </li>
                <li>
                    <Link href="https://koodiasuomesta.fi/" target="_blank">
                        <Image src={koodiasuomesta} height={80} alt="Koodia Suomesta logo" />
                    </Link>
                </li>
            </ul>
        </div>
    )
}
