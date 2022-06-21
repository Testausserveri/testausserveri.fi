export const apiServer = process.env.NEXT_PUBLIC_API_SERVER
export const apiServerMedia = process.env.NEXT_PUBLIC_API_SERVER_MEDIA

export async function getGuildInfo(guildInfoModel) {
    const response = await fetch(`${apiServer}/v1/discord/guildInfo${guildInfoModel ? "?r=" + guildInfoModel.join(",") : ""}`)
    const data = await response.json()
    return data
}

export const projects = {
    all: async function (query) {
        if (query) query = "?" + new URLSearchParams(query).toString()
        const response = await fetch(`${apiServer}/v1/projects${query || ""}`)
        const projects = await response.json()
        return projects
    },
    suggest: async function (slug) {
        return (await this.all({
            suggested: true
        })).filter(project => project.slug != slug)
    },
    slugs: async function () {
        return this.all({
            slugs: true
        })
    },
    find: async function (slug) {
        const response = await fetch(`${apiServer}/v1/projects/${slug}`)
        const project = await response.json()
        return project
    }
}

const api = {
    getGuildInfo,
    projects
}

export default api
