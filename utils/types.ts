export type ProjectLinkType = "github" | "homepage" | "link";
export type ProjectMediaType = "image";

type GuildInfoAll = {
  memberCount: number,
  membersOnline: number,
  messagesToday: number,
  codingLeaderboard: {
    name: string,
    value: number
  }[],
  messagesLeaderboard: {
    name: string,
    value: number
  }[]
}

export type GuildInfoModelOption = "memberCount" | "membersOnline" | "messagesToday" | "codingLeaderboard" | "messagesLeaderboard"

export type OptionalExcept<T, K extends keyof T> = Partial<T> & Pick<T, K>

export type GuildInfo<T extends GuildInfoModelOption[]> = OptionalExcept<GuildInfoAll, T[number]>

export type Member = {
  _id: string;
  name: string;
};

export type ShallowProject = {
  _id: string,
  description: string,
  members: Member[],
  tags: string[],
  media: {
    type: ProjectMediaType,
    filename: string,
  },
  name: string,
  slug: string
}

export type DetailedProject = {
  description: {
    short: string,
    full: string
  },
  members: Member[],
  tags: string[],
  media: {
    type: ProjectMediaType,
    filename: string,
    cover?: boolean
  }[],
  links: {
    type: ProjectLinkType,
    url: string,
    name?: string
  }[],
  name: string,
  slug: string
  contributors: {
    id: number,
    name: string,
    avatar: string
  }[],
  readmes: Record<string, string>,
}

export type Me = {
  username?: string,
  _id?: string,
  associationMembership?: {
      firstName?: string,
      lastName?: string,
      city?: string,
      googleWorkspaceName?: string,
      email?: string,
      handledIn?: string,
      status?: string
  }
}
