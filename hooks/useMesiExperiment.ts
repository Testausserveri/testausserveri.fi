import { useState, useEffect } from 'react'

export function useMesiExperiment() {
    const [experimentEnabled, setExperimentEnabled] = useState(false)
    useEffect(() => {
        if (document.cookie.includes("mesiexperiment=true")) setExperimentEnabled(true)
    }, [])
    return experimentEnabled
}
