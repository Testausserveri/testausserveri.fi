import { apiServerMedia } from "./api"
import { Me } from "./types"

export const getMemberAvatarUrl = (id: string) => `${apiServerMedia}/v1/media/avatars/${id}`
export const getAuthenticatedMemberAvatarUrl = (authenticatedData: Me) => 
    `https://cdn.discordapp.com/avatars/${authenticatedData.discord.id}/${authenticatedData.discord.avatar}`
