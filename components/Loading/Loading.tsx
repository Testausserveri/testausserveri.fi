import { ClassAttributes, HTMLAttributes } from 'react'
import styles from './Loading.module.css'

export type LoadingProps = JSX.IntrinsicAttributes & ClassAttributes<HTMLSpanElement> & HTMLAttributes<HTMLSpanElement>

export function Loading(props: LoadingProps) {
    return (
        <span {...props} className={props.className ? styles.loader + " " + props.className : styles.loader} />
    )
}