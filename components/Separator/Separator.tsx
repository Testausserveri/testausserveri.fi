import { PropsWithChildren } from 'react';
import styles from './Separator.module.css';

export default function Separator({ children }: PropsWithChildren) {
    return <div className={styles.separator}>{children}</div>
}