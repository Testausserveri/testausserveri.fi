import { apiServerMedia } from "./api"

export const getMemberAvatarUrl = (id: string) => `${apiServerMedia}/v1/media/avatars/${id}`

