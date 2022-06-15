import { apiServerMedia } from "./api"

export class Member {
    constructor(data) {
        this.id = data._id
        this.name = data.name
    }
    get avatar() {
        return `${apiServerMedia}/v1/media/avatars/${this.id}`
    }
}