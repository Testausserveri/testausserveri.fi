
import styles from './Projects3D.module.css'
import dynamic from 'next/dynamic';
import { useRef, useState } from 'react';
import { Capsule } from '../Capsule/Capsule';
import { HiOutlineCubeTransparent } from 'react-icons/hi'
import { SplineEvent } from '@splinetool/runtime';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'

const Spline = dynamic(() => import('@splinetool/react-spline'), {
    ssr: false,
});

const elements = {
    "c037c85b-64a2-461c-9d8e-af49a2a5a484": "a",
    "E74FAEDD-2DDA-4C91-9BF2-C762F5DB1909": "b",
    "42a6a2fe-7362-4701-bef5-3a606b820154": "c",
    "9471749D-42FB-4E19-9215-192DAF72236C": "d"
}

export function Projects3D() {
    const projects = [
        {
            id: "a",
            name: "QR-pyörä",
            slug: "qr-pyora"
        },
        {
            id: "b",
            name: "Abitikku",
            slug: "abitikku"
        },
        {
            id: "c",
            name: "Testaustime",
            slug: "testaustime"
        },
        {
            id: "d",
            name: "Abitti OpenAccess",
            slug: "abitti-openaccess"
        }
    ]

    const [splineLoading, setSplineLoading] = useState(true)

    const tipCapsule = useRef<HTMLSpanElement>(null)
    const [tipTimeout, setTipTimeout] = useState<NodeJS.Timeout | number | undefined>(0)
    let previousTimeout: NodeJS.Timeout | number | undefined = undefined

    function findProject(e: SplineEvent) {
        const id = e.target.id;
        if (id in elements) {
            const projectId = elements[id as keyof typeof elements] // the `as` cast is safe because we know that `id` is a key of `elements`, checked on the line above this one
            if (!projectId) return false
            const project = projects.find(p => p.id == projectId)
            if (!project) return false
            return project
        }
    }

    function hover(e: SplineEvent) {
        const project = findProject(e)
        if (!project) return
        if (tipCapsule.current) tipCapsule.current.innerHTML = project.name

        if (tipTimeout || previousTimeout) clearTimeout(tipTimeout || previousTimeout)
        previousTimeout = setTimeout(() => {
            setTipTimeout(undefined)
        }, 1000)
        setTipTimeout(previousTimeout)
    }

    return (
        <div className={`${styles.projects3D} 
        ${splineLoading ? styles.loading : styles.loaded} ${(typeof tipTimeout === "number" && tipTimeout > 0) ? styles.tipVisible : ""}`} style={{marginRight: "70px", marginBottom: "20px"}}>
            <div className={styles.splineWrapper}>
                <Spline
                    scene="https://prod.spline.design/9xyPHvl-sfGpOW9a/scene.splinecode"
                    onMouseHover={hover}
                    onLoad={() => {
                        console.log("Spline loaded")
                        setTimeout(() => {
                            setSplineLoading(false)
                        }, 1000);
                    }}
                />
            </div>
            <Capsule className={styles.tip} ref={tipCapsule} />
            <Tooltip id="rotate-3d-tooltip">Voit pyörittää 3D-mallia raahaamalla hiirtä!</Tooltip>
            <span className={styles.cube} data-tooltip-id="rotate-3d-tooltip">
                <HiOutlineCubeTransparent />
            </span>
        </div>
    )
}
