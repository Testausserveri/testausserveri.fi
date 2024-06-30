import { apiServerMedia } from "./api"
import GithubIcon from '../assets/GithubIcon.svg'
import { BiHome, BiLink } from "react-icons/bi";
import Image from "next/legacy/image"
import { ProjectLinkType, ProjectMediaType } from "./types";

export type ProjectMedia = {
    type: ProjectMediaType
    filename: string
    cover: boolean
}

export const getProjectMediaUrl = (filename: string) => `${apiServerMedia}/v1/media/projects/${filename}`

export type ProjectLink = {
    type: ProjectLinkType
    url: string
    name: string
}

export const getProjectLinkTitle = (type: ProjectLinkType, name: string) => {
    if (type == "link" && name) return name
    if (type == "homepage") return "Kotisivut"
    if (type == "github") return "GitHub"

    throw new Error("Invalid project link type")
}

export const getProjectLinkIcon = (type: ProjectLinkType) => {
    if (type === "link") return <BiLink size={20} />
    if (type === "homepage") return <BiHome size={20} />
    if (type === "github") return <Image src={GithubIcon} alt="Github icon" height={20} width={20} unoptimized />
    throw new Error("Invalid project link type")
}

export const getProjectLinkUrl = (type: ProjectLinkType, url: string) => {
    if (type == "github") return url.match(/github.com\/([^\/]+)\/([^\/]+)/).slice(1, 3).join("/")
    return new URL(url).hostname
}
