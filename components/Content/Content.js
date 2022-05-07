import styles from './Content.module.css'

export function Content({children, noMargin}) {
    return (
        <div className={styles.content} style={noMargin ? {marginBottom: 0} : {}}>
            {children}
        </div>
    )
}