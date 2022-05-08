import styles from './Title.module.css'

export function Title(props) {
    return (
        <h1 className={styles.title} {...props}>
            {props.children}
        </h1>
    )
}