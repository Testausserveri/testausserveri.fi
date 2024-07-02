import styles from './Collaborations.module.css'

import assembly from '../../assets/collaborations/assembly.svg'
import aatos from '../../assets/collaborations/aatos.svg'
import nextgen from '../../assets/collaborations/nextgen.png'
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
                    <Link href="https://challenge.fi" target="_blank">
                        <Image src={nextgen} height={80} alt="Next Gen logo" />
                    </Link>
                </li>
                <li>
                    <Link href="https://aatos.app/" target="_blank">
                        <Image src={aatos} height={80} alt="Aatos Legal Technology logo" />
                    </Link>
                </li>
                <li>
                    <Link href="https://assembly.org/" target="_blank">
                        <Image src={assembly} height={80} alt="Assembly logo" />
                    </Link>
                </li>
                <li>
                    <Link href="https://www.women4cyberfinland.com/" target="_blank">
                        <Image src={w4cfi} height={80} alt="W4CFI logo" />
                    </Link>
                </li>
                <li>
                    <Link href="https://poliisi.fi/cybercrime-exit" target="_blank">
                        <Image src={krp} height={80} alt="KRP logo" />
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
