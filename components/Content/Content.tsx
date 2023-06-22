import styles from './Content.module.css'
import { PropsWithChildren } from "react";

export function Content({ children, noMargin, wider }: PropsWithChildren<{ noMargin?: boolean, wider?: boolean }>) {
    return (
        <div className={styles.content} style={{...(noMargin ? { marginBottom: 0 } : {}), ...(wider ? { maxWidth: "1100px"} : {})}}>
            {children}
        </div>
    )
}
