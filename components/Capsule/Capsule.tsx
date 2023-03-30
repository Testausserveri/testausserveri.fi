import { PropsWithChildren, forwardRef } from 'react'
import styles from './Capsule.module.css'

export type CapsuleProps = PropsWithChildren<{
    className?: string
}>

export const Capsule = forwardRef<HTMLSpanElement, CapsuleProps>((props, ref) => ((
    <span {...props} ref={ref} className={props.className ? `${styles.capsule} ${props.className}` : styles.capsule}>
        {props.children}
    </span>
)))
