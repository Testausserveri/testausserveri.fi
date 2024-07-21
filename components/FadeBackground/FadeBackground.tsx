import styles from './FadeBackground.module.css'
import { PropsWithChildren } from 'react'

export type FadeBackgroundProps = PropsWithChildren<{
    url: string
}>

export function FadeBackground({ url, children }: FadeBackgroundProps) {
    /* @ts-ignore */
    return ( <div className={styles.fadeBackground} style={url ? { "--bg": `url('${url}')` } : {}}>{children}</div>
    )
}
