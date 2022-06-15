import styles from './Title.module.css'

export function H1(props) {
    return (
        <h1 className={styles.title} {...props}>
            {props.children}
        </h1>
    )
}

export function H2(props) {
    return (
        <h2 className={styles.title} {...props}>
            {props.children}
        </h2>
    )
}