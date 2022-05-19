import styles from './Loading.module.css'

export function Loading(props) {
    return (
        <span {...props} className={props.className ? styles.loader + " " + props.className : styles.loader} />
    )
}