"use client";

import { FaClipboard } from "react-icons/fa";
import styles from './mdxComponents.module.scss';

export const Terminal = ({children}: {children: React.ReactNode}) => {
    if (!children) return <></>
    function copyToClipboard(e: any) {
        // sowwy react
        console.log(e.currentTarget, e.currentTarget.parentElement)
        navigator.clipboard.writeText(e.currentTarget.parentElement.querySelector('div').innerText.trim());
        e.currentTarget.parentElement.classList.add(styles.copied);
        setTimeout((el) => {
            el.classList.remove(styles.copied);
        }, 800, e.currentTarget.parentElement)
    }
    return <div className={styles.terminal}>
      <div>
        <ul>{children}</ul>
      </div>
      <div onClick={(e) => copyToClipboard(e)}>
        <FaClipboard />
      </div>
    </div>
}
