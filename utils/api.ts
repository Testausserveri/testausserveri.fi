export const apiServer = process.env.NEXT_PUBLIC_API_SERVER
export const apiServerMedia = process.env.NEXT_PUBLIC_API_SERVER_MEDIA

type GuildInfoAll = {
    memberCount: number,
    membersOnline: number,
    messagesToday: number,
    codingLeaderboard: {
        name: string,
        value: number
    }[],
    messagesLeaderboard: {
        name: string,
        value: number
    }[]
}

export type GuildInfoModelOption = "memberCount" | "membersOnline" | "messagesToday" | "codingLeaderboard" | "messagesLeaderboard"

export type OptionalExcept<T, K extends keyof T> = Partial<T> & Pick<T, K>

export type GuildInfo<T extends GuildInfoModelOption[]> = OptionalExcept<GuildInfoAll, T[number]>

export async function getGuildInfo<T extends GuildInfoModelOption[]>(guildInfoModel: T) {
    const response = await fetch(`${apiServer}/v1/discord/guildInfo${guildInfoModel ? "?r=" + guildInfoModel.join(",") : ""}`)
    const data = await response.json()
    return data as GuildInfo<T>
}

export type ApiProject = {
    _id: string,
    description: string,
    members: never[],
    tags: string[],
    media: {
        type: "image",
        filename: string,
    },
    name: string,
    slug: string
}

const all = async function (query?: string | string[][] | Record<string, string> | URLSearchParams | undefined) {
    if (query) query = "?" + new URLSearchParams(query).toString()
    const response = await fetch(`${apiServer}/v1/projects${query || ""}`)
    const projects = await response.json()
    return projects as ApiProject[]
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

export type FindProject = {
    description: {
        short: string,
        full: string
    },
    members: {
        _id: string,
        name: string
    },
    tags: string[],
    media: {
        type: "image",
        filename: string,
        cover: boolean
    }[],
    links: {
        type: "github" | "homepage" | "link",
        url: string
    }[],
    name: string,
    slug: string
    contributors: {
        id: number,
        name: string,
        avatar: string
    }[],
    readmes: Record<string, string>,
    status: "not found"
}

const find = async function (slug: string) {
    const response = await fetch(`${apiServer}/v1/projects/${slug}`)
    const project = await response.json() as FindProject
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
