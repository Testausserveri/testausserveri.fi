import styles from './Collaborations.module.css'

import saucesoft from '../../assets/collaborations/saucesoft.svg'
import genz from '../../assets/collaborations/genz.png'
import w4cfi from '../../assets/collaborations/w4cfi.png'
import { CSSProperties } from 'react'

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
                    <a href="https://saucesoft.io" target="_blank">
                        <img src={saucesoft.src} height={80} />
                    </a>
                </li>
                <li>
                    <a href="https://challenge.fi" target="_blank">
                        <img src={genz.src} height={80} />
                    </a>
                </li>
                <li>
                    <a href="https://www.women4cyberfinland.com/" target="_blank">
                        <img src={w4cfi.src} height={80} />
                    </a>
                </li>
            </ul>
        </div>
    )
}
