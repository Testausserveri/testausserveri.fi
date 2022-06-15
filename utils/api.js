export const apiServer = process.env.NEXT_PUBLIC_API_SERVER
export const apiServerMedia = process.env.NEXT_PUBLIC_API_SERVER_MEDIA

export async function getGuildInfo(guildInfoModel) {
    const response = await fetch(`https://api.testausserveri.fi/v1/discord/guildInfo${guildInfoModel ? "?r=" + guildInfoModel.join(",") : ""}`)
    const data = await response.json()
    return data
}

export const projects = {
    all: async function () {
        const response = await fetch(`${apiServer}/v1/projects`)
        const projects = await response.json()
        return projects
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
