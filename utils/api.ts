import { DetailedProject, GuildInfo, GuildInfoModelOption, ShallowProject } from "./types"

export const apiServer = process.env.NEXT_PUBLIC_API_SERVER
export const apiServerMedia = process.env.NEXT_PUBLIC_API_SERVER_MEDIA

export async function getGuildInfo<T extends GuildInfoModelOption[]>(guildInfoModel: T) {
    const response = await fetch(`${apiServer}/v1/discord/guildInfo${guildInfoModel ? "?r=" + guildInfoModel.join(",") : ""}`)
    const data = await response.json()
    return data as GuildInfo<T>
}



const all = async function (query?: string | string[][] | Record<string, string> | URLSearchParams | undefined) {
    if (query) query = "?" + new URLSearchParams(query).toString()
    const response = await fetch(`${apiServer}/v1/projects${query || ""}`)
    const projects = await response.json()
    return projects as ShallowProject[]
}
const suggest = async function (slug: string) {
    return (await all({
        suggested: "true"
    })).filter(project => project.slug != slug)
}
const slugs = async function () {
    return all({
        slugs: "true"
    })
}

const find = async function (slug: string) {
    const response = await fetch(`${apiServer}/v1/projects/${slug}`)
    const project = await response.json() as DetailedProject | {
        status: "not found"
    }
    return project
}

const api = {
    getGuildInfo,
    projects: {
        all,
        suggest,
        slugs,
        find
    }
}

export default api
