import styles from './CapsuleButton.module.css'
import Image from 'next/image';
import { PropsWithChildren, useRef, useState } from 'react';

export type ButtonIconProps = {
    src: string
}

export function ButtonIcon({ src }: ButtonIconProps) {
    return (
        <div className={styles.buttonIcon}>
            <Image src={src} width={32} height={32} unoptimized />
        </div>
    )
}

export type CapsuleButtonProps = PropsWithChildren<{
    style?: React.CSSProperties,
    small?: boolean,
    secondary?: boolean,
    className?: string
}>

export function CapsuleButton(props: CapsuleButtonProps) {
    const { style, children, small, secondary, ...otherProps } = props
    const ripple = useRef<HTMLDivElement>(null);
    const [size, setSize] = useState(0)

    function onMouseMove(e) {
        let rect = e.target.getBoundingClientRect()
        ripple.current.style.top = `${e.clientY - rect.top - 50}px`;
        ripple.current.style.left = `${e.clientX - rect.left - 50}px`;
    }
    function onTouchMove(e) {
        let rect = e.target.getBoundingClientRect()
        let touch = e.touches[0]
        ripple.current.style.top = `${touch.clientY - rect.top - 50}px`;
        ripple.current.style.left = `${touch.clientX - rect.left - 50}px`;
    }

    return (
        <div {...otherProps} style={{ ...style, display: "inline-block" }}>
            <button
                onMouseLeave={() => setSize(0)}
                onMouseEnter={() => setSize(1)}
                onMouseDown={() => setSize(1.2)}
                onMouseUp={() => setSize(1)}

                onTouchStart={() => setSize(1)}
                onTouchEnd={() => setSize(0)}
                onTouchMove={onTouchMove}
                onClick={() => setSize(0)}

                onMouseMove={onMouseMove}
                className={`${styles.capsuleButton} ${small ? styles.small : ""} ${secondary ? styles.secondary : ""}`}
            >
                {children}
                {/* @ts-ignore */}
                <div ref={ripple} className={styles.ripple} style={{ "--size": size }}></div>
            </button>
        </div>
    )
}