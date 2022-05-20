import styles from './Projects3D.module.css'
import dynamic from 'next/dynamic';
import { Loading } from '../Loading/Loading';
import { forwardRef, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { Capsule } from '../Capsule/Capsule';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
    ssr: false,
});

const elements = {
    "c037c85b-64a2-461c-9d8e-af49a2a5a484": "a",
    "E74FAEDD-2DDA-4C91-9BF2-C762F5DB1909": "b",
    "42a6a2fe-7362-4701-bef5-3a606b820154": "c",
    "9471749D-42FB-4E19-9215-192DAF72236C": "d"
}

export function Projects3D(props) {
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

    const router = useRouter()
    const [splineLoading, setSplineLoading] = useState(true)

    const tipCapsule = useRef()
    const [tipTimeout, setTipTimeout] = useState(0)
    let previousTimeout

    function findProject(e) {
        const projectId = elements[e.target.id]
        if (!projectId) return false
        const project = projects.find(p => p.id == projectId)
        if (!project) return false
        return project
    }

    function hover(e) {
        const project = findProject(e)
        if (!project) return
        console.log(tipCapsule)
        if(tipCapsule.current) tipCapsule.current.innerHTML = project.name

        if (tipTimeout || previousTimeout) clearTimeout(tipTimeout || previousTimeout)
        previousTimeout = setTimeout(() => {
            setTipTimeout(null)
        }, 1000)
        setTipTimeout(previousTimeout)
    }
    function click(e) {
        const project = findProject(e)
        if (!project) return

        router.push(`/projects/${project.slug}`)
    }

    return (
        <div className={`
        ${splineLoading ? styles.loading : ""}  
        ${tipTimeout > 0 ? styles.tipVisible : ""}  
        ${styles.projects3D}`}>
            <div className={styles.spinner}>
                <Loading />
            </div>
            <div className={styles.splineWrapper}>
                <Spline 
                scene="https://prod.spline.design/9xyPHvl-sfGpOW9a/scene.splinecode"
                onMouseHover={hover}
                onMouseDown={click}
                onLoad={() => {
                    console.log("Spline loaded")
                    setSplineLoading(false)
                }}
                />
            </div>
            <Capsule className={styles.tip} ref={tipCapsule} />
        </div>
    )
}