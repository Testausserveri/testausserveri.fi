import styles from './CapsuleButton.module.css'
import Image from 'next/image';
import { useRef, useState } from 'react';

export function ButtonIcon({src}) {
    return (
        <div className={styles.buttonIcon}>
            <Image src={src} width={32} height={32} unoptimized />
        </div>
    )
}

export function CapsuleButton(props) {
    const {style, children, variant, className} = props
    const ripple = useRef()
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
        <div {...props} style={{...style, display: "inline-block"}}>
            <button 
                onMouseLeave={() => setSize(0)} 
                onMouseEnter={() => setSize(1)} 
                onMouseDown={() => setSize(1.4)} 
                onMouseUp={() => setSize(1)} 

                onTouchStart={() => setSize(1)}
                onTouchEnd={() => setSize(1)}
                onTouchMove={onTouchMove}
                onClick={() => setSize(1)}

                onMouseMove={onMouseMove} 
                className={(variant === "small" ? `${styles.capsuleButton} ${styles.small}` : styles.capsuleButton)}>
                {children}
                <div ref={ripple} className={styles.ripple} style={{"--size": size}}></div>
            </button>
        </div>
    )
}
