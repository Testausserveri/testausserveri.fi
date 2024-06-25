import { DiscordMessage, DiscordMessages } from "@skyra/discord-components-react"
import { ReactNode } from "react"
import styles from './DiscordLive.module.css'
import { formatDiscordContent } from "./DiscordLive"
import { TimeUtil } from "../../utils/TimeUtil"

type DiscordMessageType = {
  id: number,
  author: {
    name: string,
    avatar: string,
    color: string
  },
  content: string,
  timestamp: number
}

type DiscordMessageListProps = {
  visibleMessages: DiscordMessageType[],
  recursiveContent: (i: number) => ReactNode
}

export default function DiscordMessageList({ visibleMessages, recursiveContent }: DiscordMessageListProps) {
  return <DiscordMessages className={styles.discordMessages}>
    {visibleMessages.map((message, i) => visibleMessages[i - 1]?.author?.name != visibleMessages[i].author.name ? (
      <DiscordMessage
        key={message.id}
        avatar={`/discordlive/avatars/${message.author.avatar}`}
        timestamp={TimeUtil.formatTimestamp(message.timestamp)}
        author={message.author.name}
        roleColor={message.author.color}
      >
        <span className="discord-message-markup">{formatDiscordContent(message.content)}</span>
        <span className="discord-message-markup">{recursiveContent(i)}</span>
      </DiscordMessage>
    ) : null
    )}
  </DiscordMessages>
}
