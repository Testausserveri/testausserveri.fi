import styles from './Projects3D.module.css'
import dynamic from 'next/dynamic';
import { Loading } from '../Loading/Loading';
import { useState } from 'react';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
    ssr: false,
});

export function Projects3D(props) {
    const [splineLoading, setSplineLoading] = useState(true)
    return (
        <div className={splineLoading ? `${styles.loading} ${styles.projects3D}` : styles.projects3D}>
            <div className={styles.spinner}>
                <Loading />
            </div>
            <div className={styles.splineWrapper}>
                <Spline 
                scene="https://prod.spline.design/9xyPHvl-sfGpOW9a/scene.splinecode"
                onLoad={() => setSplineLoading(false)}
                />
            </div>
        </div>
    )
}