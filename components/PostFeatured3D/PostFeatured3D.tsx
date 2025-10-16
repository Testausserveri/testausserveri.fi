"use client";

import styles from './PostFeatured3D.module.scss'
import { ReactNode, useEffect, useRef, useState } from 'react';
import { Capsule } from '../Capsule/Capsule';
import { HiOutlineCubeTransparent } from 'react-icons/hi'
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import Image from 'next/image';
import Spline from '@splinetool/react-spline';

export function PostFeatured3D({splineURL, placeholderBlurDataURL, placeholderSrc}: {splineURL: string, placeholderBlurDataURL: string, placeholderSrc: string}) {
    const [splineLoading, setSplineLoading] = useState(true)

    const tipCapsule = useRef<HTMLSpanElement>(null)
    const [tipTimeout, setTipTimeout] = useState<NodeJS.Timeout | number | undefined>(0)

    return (
        <div className={`${styles.postFeatured3D} 
        ${splineLoading ? styles.loading : styles.loaded} ${(typeof tipTimeout === "number" && tipTimeout > 0) ? styles.tipVisible : ""}`} style={{marginRight: "70px", marginBottom: "20px"}}>
            <Image
                className={styles.placeholder}
                fill={true} 
                placeholder='blur' 
                blurDataURL={placeholderBlurDataURL}
                src={placeholderSrc}
                sizes="(max-width: 800px) 100vw, 70vw"
                alt="Artikkelin kuva" />
            <SplineOptimizer
                onUnmount={() => setSplineLoading(true)}
            >
                <div className={styles.splineWrapper}>
                    <Spline
                        scene={splineURL}
                        renderOnDemand={true}
                        onLoad={() => {
                            console.debug("Spline loaded")
                            setTimeout(() => {
                                setSplineLoading(false)
                            }, 1000);
                        }}
                    />
                </div>
            </SplineOptimizer>
            <Capsule className={styles.tip} ref={tipCapsule} />
            <Tooltip id="rotate-3d-tooltip">Voit pyörittää 3D-mallia raahaamalla hiirtä!</Tooltip>
            <span className={styles.cube} data-tooltip-id="rotate-3d-tooltip">
                <HiOutlineCubeTransparent />
            </span>
        </div>
    )
}

export default function SplineOptimizer({ children, onUnmount }: { children: ReactNode, onUnmount?: () => void, beforeUnmount?: () => void }) {
    const ref = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.1 }
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        if (!isVisible && typeof onUnmount == "function") onUnmount()
        console.debug("Spline", isVisible ? "mounted" : "unmounted")
    }, [isVisible])

    return (
        <div ref={ref}>
            {isVisible ? children : null}
        </div>
    )
}
