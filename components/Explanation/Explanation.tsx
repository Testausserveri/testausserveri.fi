import styles from './Explanation.module.css'
import { RiQuestionLine } from "react-icons/ri"
import { PropsWithChildren, useId } from 'react';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'

export type ExplanationProps = PropsWithChildren<{}>

export function Explanation({ children }: ExplanationProps) {
    const id = useId();

    return (
        <>
            <Tooltip id={id}>
                {children}
            </Tooltip>
            <span className={styles.explanation} data-tooltip-id={id}><RiQuestionLine /></span>
        </>
    )
}
