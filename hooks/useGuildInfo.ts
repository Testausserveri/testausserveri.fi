import { useEffect, useState } from "react"
import api from "../utils/api"
import { GuildInfo, GuildInfoModelOption } from "../utils/types"

export function useGuildInfo<T extends GuildInfoModelOption[]>(guildInfoModel: T, ss: GuildInfo<T>) {
    const [guildInfo, setGuildInfo] = useState(ss)

    async function update() {
        console.log("Updating guildInfo")
        setGuildInfo(await api.getGuildInfo(guildInfoModel))
    }
    useEffect(() => {
        const interval = setInterval(update, 5000)
        console.log(`Hooking useGuildInfo (${guildInfoModel.join()})`, interval)

        return () => {
            console.log("Unhooking useGuildInfo", interval)
            clearInterval(interval)
        }   
    }, [])

    return guildInfo
}
