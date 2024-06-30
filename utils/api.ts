import { PHASE_PRODUCTION_BUILD } from "next/dist/shared/lib/constants"
import { ApplyForm, ApplyResponse, DetailedProject, GuildInfo, GuildInfoModelOption, Me, ShallowProject } from "./types"


export const apiServer = ( process.env.NEXT_PHASE === PHASE_PRODUCTION_BUILD ? process.env.NEXT_PUBLIC_API_SERVER : `${process.env.NEXT_PUBLIC_URL}/api`) // proxied in next.config.js
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

const me = async function (cookies?: string) {
    const response = await fetch(`${apiServer}/v1/me`, {
        credentials: 'include',
        ...(cookies ? { 
            headers: {
                Cookie: cookies
            } 
        } : {} )
    })
    const data = await response.json() as Me
    return data
}

const apply = async function (applyForm: ApplyForm) {
    const response = await fetch(`${apiServer}/v1/apply/submit`, { 
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(applyForm)
     })
    const data = await response.json() as ApplyResponse
    return data
}

const api = {
    getGuildInfo,
    projects: {
        all,
        suggest,
        slugs,
        find
    },
    membersArea: {
        me
    },
    apply: {
        submit: apply
    }
}

export default api
