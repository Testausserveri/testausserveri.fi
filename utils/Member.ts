import { apiServerMedia } from "./api"

export const getMemberAvatarUrl = (id: string) => `${apiServerMedia}/v1/media/avatars/${id}`

export class Member {
    constructor(data) {
        this.id = data._id
        this.name = data.name
    }
    get avatar() {
        return `${apiServerMedia}/v1/media/avatars/${this.id}`
    }
}