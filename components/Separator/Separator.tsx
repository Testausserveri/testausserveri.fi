import { PropsWithChildren } from 'react';
import styles from './Separator.module.css';

export default function Separator({ children, ...rest }: PropsWithChildren) {
    return <div className={styles.separator} {...rest}>{children}</div>
}