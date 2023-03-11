import { ClassAttributes, HTMLAttributes } from 'react'
import styles from './Title.module.css'

export type TitleProps = JSX.IntrinsicAttributes & ClassAttributes<HTMLHeadingElement> & HTMLAttributes<HTMLHeadingElement>;

export function H1(props: TitleProps) {
    return (
        <h1 className={styles.title} {...props}>
            {props.children}
        </h1>
    )
}

export function H2(props: TitleProps) {
    return (
        <h2 className={styles.title} {...props}>
            {props.children}
        </h2>
    )
}