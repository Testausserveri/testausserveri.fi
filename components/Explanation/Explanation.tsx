import styles from './Explanation.module.css'
import { RiQuestionLine } from "react-icons/ri"
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { PropsWithChildren } from 'react';

export type ExplanationProps = PropsWithChildren<{}>

export function Explanation({ children }: ExplanationProps) {
    return (
        <Tippy 
            className="tip"
            interactive={true} 
            content={children}>
            <span className={styles.explanation}><RiQuestionLine /></span>
        </Tippy>
    )
}