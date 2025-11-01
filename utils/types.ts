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
  }[],
  associationMembershipCount: number
}

export type GuildInfoModelOption = "memberCount" | "membersOnline" | "messagesToday" | "codingLeaderboard" | "messagesLeaderboard" | "associationMembershipCount"

export type OptionalExcept<T, K extends keyof T> = Partial<T> & Pick<T, K>

export type GuildInfo<T extends GuildInfoModelOption[]> = OptionalExcept<GuildInfoAll, T[number]>

export type Member = {
  name: string;
  _id: string | number;
  avatar?: string;
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
  status?: string,
  username?: string,
  _id?: string,
  discord: {
    avatar: string,
    id: string
  },
  associationMembership?: {
      firstName?: string,
      lastName?: string,
      city?: string,
      googleWorkspaceName?: string,
      email?: string,
      handledIn?: string,
      acceptedAt?: string,
      status?: string
  }
}

export type ApplyForm = {
  firstName: string,
  lastName: string,
  city: string,
  email: string
}

export type ApplyResponse = {
  status: "ok" | "error"
}

enum MemberDisplayNameKind {
  FirstNameAndLastNameInitial = 1,
  Nickname = 2,
  Username = 3,
  Id = 4
}

export type MemberDisplayNameResponse = {
  displayName: string,
  kind: MemberDisplayNameKind
}

export type BankingTransaction = {
  credit_debit_indicator: "DBIT" | "CRDT";
  currency: string;
  amount: number | null;
  id: string;
  name: string | null;
  date: string;
  remittance_information: string | null;
}

export type BankingResponse = {
  balance: {
    date: string;
    amount: number | null;
  } | null;
  transactions: BankingTransaction[];
}

export type PostDetails = {
  title: string;
  category: string;
  feature_image: string;
  excerpt: string;
  authors?: string[];
  authorsResolved?: Member[];
  datetime: Date;
  slug: string;
  readingTime: number;
  url?: string;
  imagePlaceholder: string;
  imageUrl: string;
  /* Feature 3D loading image, a still photo */
  feature_spline_image?: string;
  /* Feature 3D Spline URL */
  feature_spline?: string;
  splineImagePlaceholderUrl?: string | null;
  splineImageUrl?: string | null;
  splineUrl?: string | null;
};