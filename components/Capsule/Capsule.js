import { forwardRef } from 'react'
import styles from './Capsule.module.css'

export const Capsule = forwardRef((props, ref) => ((
    <span {...props} ref={ref} className={props.className ? `${styles.capsule} ${props.className}` : styles.capsule}>
        {props.children}
    </span>
)))