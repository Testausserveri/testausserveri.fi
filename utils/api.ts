import { ApplyForm, ApplyResponse, DetailedProject, GuildInfo, GuildInfoModelOption, Me, MemberDisplayNameResponse, ShallowProject, BankingResponse } from "./types"

// to-do: should we be using proxied /api/v1/* route or api.testausserveri.fi
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


const getMemberDisplayName = async function (id: string) {
    const response = await fetch(`${apiServer}/v1/displayName?id=${id}`, {
        headers: {
            'X-Testausapis-Secret': process.env.INTERNAL_API_SECRET || ""
        }
    })
    const { displayName } = await response.json() as MemberDisplayNameResponse
    return displayName
}

const withAuth = async (options: RequestInit = {}): Promise<RequestInit> => {
    const authOptions: RequestInit = {
        ...options,
        credentials: typeof window !== 'undefined' ? 'include' : undefined,
    }

    if (typeof window === 'undefined') {
        const { cookies } = await import('next/headers')
        const cookieStore = cookies()
        const sessionCookie = cookieStore.get('connect.sid')
        
        if (sessionCookie) {
            authOptions.headers = {
                ...authOptions.headers,
                'Cookie': `connect.sid=${sessionCookie.value}`
            }
        }
    }

    return authOptions
}

const me = async function () {
    const response = await fetch(`${apiServer}/v1/me`, await withAuth())
    const data = await response.json() as Me
    return data
}

const banking = async function () {
    const response = await fetch(`${apiServer}/v1/banking`, await withAuth())
    if (!response.ok) {
        let message = 'Virhe';
        try {
            const body = await response.json() as any
            message = (body?.message || body?.error || message)
        } catch {}
        const error: any = new Error(message)
        error.status = response.status
        throw error
    }
    const data = await response.json() as BankingResponse
    return data
}

const apply = async function (applyForm: ApplyForm) {
    const response = await fetch(`${apiServer}/v1/apply`, await withAuth({ 
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(applyForm)
    }))
    const data = await response.json() as ApplyResponse
    return data
}

const updateMember = async function (updates: { city?: string; email?: string }) {
    const response = await fetch(`${apiServer}/v1/me`, await withAuth({
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updates)
    }))

    const data = await response.json();

    if (!response.ok || (typeof data === 'object' && data?.status === 'error')) {
        const message = typeof data === 'object' && (data.message || data.error) ? data.message || data.error : 'Virhe päivityksessä';
        throw new Error(message);
    }

    return data;
}

const api = {
    getGuildInfo,
    getMemberDisplayName,
    projects: {
        all,
        suggest,
        slugs,
        find
    },
    membersArea: {
        me,
        apply,
        updateMember,
        banking
    },
}

export default api
