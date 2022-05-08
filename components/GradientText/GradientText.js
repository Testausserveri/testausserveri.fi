import styles from './GradientText.module.css'

export function GradientText(props) {
    return (
        <span {...props} className={props.className ? `${styles.gradientText} ${props.className}` : styles.gradientText}>
            {props.children}
        </span>
    )
}