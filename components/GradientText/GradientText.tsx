import { ClassAttributes, HTMLAttributes } from 'react'
import styles from './GradientText.module.css'

export type GradientTextProps = JSX.IntrinsicAttributes & ClassAttributes<HTMLSpanElement> & HTMLAttributes<HTMLSpanElement>

export function GradientText(props: GradientTextProps) {
    return (
        <span {...props} className={props.className ? `${styles.gradientText} ${props.className}` : styles.gradientText}>
            {props.children}
        </span>
    )
}