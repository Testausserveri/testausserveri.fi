import { PropsWithChildren, forwardRef } from 'react'
import styles from './Capsule.module.css'

export type CapsuleProps = PropsWithChildren<{
    className?: string,
    style: React.CSSProperties
}>

export const Capsule = forwardRef<HTMLSpanElement, CapsuleProps>((props, ref) => ((
    <span {...props} ref={ref} className={props.className ? `${styles.capsule} ${props.className}` : styles.capsule} style={props.style}>
        {props.children}
    </span>
)))
