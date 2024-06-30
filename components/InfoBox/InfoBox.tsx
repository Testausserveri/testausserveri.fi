import Image from "next/image"
import styles from './InfoBox.module.css'
import exclamationIcon from '../../assets/exclamation.svg'
import { PropsWithChildren } from 'react'

export type InfoBoxProps = PropsWithChildren<{}>;

export function InfoBox({children}: InfoBoxProps) {
    return (
        <div className={styles.infoBox}>
            <div>
                <Image
                    src={exclamationIcon}
                    alt="Huutomerkki"
                    width={17}
                    height={32}
                    unoptimized
                />
            </div>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
}
