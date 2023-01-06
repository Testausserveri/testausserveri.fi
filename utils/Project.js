import { apiServerMedia } from "./api"
import { Member } from "./Member"
import GithubIcon from '../assets/GithubIcon.svg'
import { BiHome, BiLink } from "react-icons/bi";
import Image from 'next/image'

class ProjectMedia {
    type
    filename
    cover

    constructor(data) {
        this.type = data.type
        this.filename = data.filename
        this.cover = data.cover
    }
    get url() {
        return `${apiServerMedia}/v1/media/projects/${this.filename}`
    }
}

class ProjectLink {
    /**
     * @type {('github'|'homepage'|'link')}
     */
    type

    /**
     * Link's full URL
     * @type {String}
     */
    url

    /**
     * If link is external, the name for the site
     * Can be pulled from page's HTML title in the backend
     */
    name

    constructor(data) {
        this.type = data.type
        this.url = data.url
        this.url = (this.url.indexOf('://') === -1) ? 'https://' + this.url : this.url;
        this.name = data.name
    }

    /**
     * Display title
     */
    get title() {
        if (this.type == "link" && this.name) return this.name
        if (this.type == "homepage") return "Kotisivut"
        if (this.type == "github") return "GitHub"

        return ""
    }

    /**
     * Display icon
     */
    get icon() {
        if (this.type === "link") return <BiLink size={20} />
        if (this.type === "homepage") return <BiHome size={20} />
        if (this.type === "github") return <Image src={GithubIcon} height={20} width={20} unoptimized />

        return null;
    }

    /**
     * Literally "display url"
     * It's the url for display purposes, but a short variant
     */
    get displayURL() {
        if (this.type == "github") return this.url.match(/github.com\/([^\/]+)\/([^\/]+)/).slice(1,3).join("/")
        return new URL(this.url).hostname
    }
}
export class Project {
    id
    name
    slug
    description
    members
    media
    tags
    links
    contributors

    constructor(data) {
        if (data._id) this.id = data._id
        this.name = data.name
        this.slug = data.slug

        if (typeof data.description == "object") {
            this.description = data.description
        } else {
            this.description = {
                short: data.description
            }
        }
        this.members = data.members.map(data => new Member(data))
        
        if (data.media.constructor === Array) {
            this.media = data.media.map(data => new ProjectMedia(data))
        } else {
            this.media = [new ProjectMedia({...data.media, cover: true})]
        }
        this.tags = data.tags

        if (data.links) {
            this.links = data.links.map(link => new ProjectLink(link))
        }

        this.contributors = data.contributors
        this.readmes = data.readmes
    }

    get cover() {
        return this.media.find(item => item.cover)
    }
}
