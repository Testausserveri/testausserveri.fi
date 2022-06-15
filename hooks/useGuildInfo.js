import { useEffect, useState } from "react"
import api from "../utils/api.js"

export function useGuildInfo(guildInfoModel, ss) {
    const [guildInfo, setGuildInfo] = useState(ss || {})

    async function update() {
        console.log("Updating gi")
        setGuildInfo(await api.getGuildInfo(guildInfoModel))
    }
    useEffect(() => {
        setInterval(update, 5000)
    }, [])

    return guildInfo
}