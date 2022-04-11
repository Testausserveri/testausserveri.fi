import { useEffect, useState } from "react"

export async function getGuildInfo() {
    const response = await fetch("https://api.testausserveri.fi/v1/discord/guildInfo")
    const data = await response.json()

    return data
}

export function useGuildInfo(ss) {
    const [guildInfo, setGuildInfo] = useState(ss || {})

    async function update() {
        console.log("Updating gi")
        setGuildInfo(await getGuildInfo())
    }
    useEffect(() => {
        setInterval(update, 5000)
    }, [])

    return guildInfo
}