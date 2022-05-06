import { useEffect, useState } from "react"

export async function getGuildInfo(guildInfoModel) {
    const response = await fetch(`https://api.testausserveri.fi/v1/discord/guildInfo${guildInfoModel ? "?r=" + guildInfoModel.join(",") : ""}`)
    const data = await response.json()

    return data
}

export function useGuildInfo(guildInfoModel, ss) {
    const [guildInfo, setGuildInfo] = useState(ss || {})

    async function update() {
        console.log("Updating gi")
        setGuildInfo(await getGuildInfo(guildInfoModel))
    }
    useEffect(() => {
        setInterval(update, 5000)
    }, [])

    return guildInfo
}