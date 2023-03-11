import styles from './Content.module.css'
import { PropsWithChildren } from "react";

export function Content({ children, noMargin }: PropsWithChildren<{ noMargin?: boolean }>) {
    return (
        <div className={styles.content} style={noMargin ? { marginBottom: 0 } : {}}>
            {children}
        </div>
    )
}