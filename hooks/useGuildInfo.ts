import { useEffect, useState } from "react"
import api from "../utils/api"
import { GuildInfo, GuildInfoModelOption } from "../utils/types"

export function useGuildInfo<T extends GuildInfoModelOption[]>(guildInfoModel: T, ss: GuildInfo<T>) {
    const [guildInfo, setGuildInfo] = useState(ss)

    async function update() {
        console.log("Updating gi")
        setGuildInfo(await api.getGuildInfo(guildInfoModel))
    }
    useEffect(() => {
        setInterval(update, 5000)
    }, [])

    return guildInfo
}