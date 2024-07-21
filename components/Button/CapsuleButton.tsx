"use client";

import styles from './CapsuleButton.module.css'
import Image from "next/image";
import { DetailedHTMLProps, HTMLAttributes, MouseEventHandler, PropsWithChildren, TouchEventHandler, useRef, useState } from 'react';

export type ButtonIconProps = {
    src: string,
    alt: string,
}

export function ButtonIcon({ src, alt }: ButtonIconProps) {
    return (
        <div className={styles.buttonIcon}>
            <Image src={src} alt={alt} width={32} height={32} unoptimized />
        </div>
    )
}

export type CapsuleButtonProps = PropsWithChildren<{
    style?: React.CSSProperties,
    small?: boolean,
    secondary?: boolean,
    disabled?: boolean
}> & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export function CapsuleButton(props: CapsuleButtonProps) {
    const { style, children, small, secondary, ...otherProps } = props
    const ripple = useRef<HTMLDivElement>(null);
    const [size, setSize] = useState(0)

    const onMouseMove: MouseEventHandler<HTMLButtonElement> = (e) => {
        if (!ripple.current) return
        const rect = e.currentTarget.getBoundingClientRect()
        ripple.current.style.top = `${e.clientY - rect.top - 50}px`;
        ripple.current.style.left = `${e.clientX - rect.left - 50}px`;
    }
    const onTouchMove: TouchEventHandler<HTMLButtonElement> = (e) => {
        if (!ripple.current) return
        const rect = e.currentTarget.getBoundingClientRect()
        const touch = e.touches[0]
        ripple.current.style.top = `${touch.clientY - rect.top - 50}px`;
        ripple.current.style.left = `${touch.clientX - rect.left - 50}px`;
    }
    if (props.disabled) {
        return (
            <div {...otherProps} style={{ ...style, display: "inline-block" }}>
                <button
                    className={`${styles.capsuleButton} ${small ? styles.small : ""} ${secondary ? styles.secondary : ""}` + ` ${styles.disabled}`}
                >
                    {children}
                </button>
            </div>
        )
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
