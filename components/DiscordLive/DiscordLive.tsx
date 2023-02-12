import FadeIn from 'react-fade-in';
import { DiscordCustomEmoji, DiscordMessage, DiscordMessages } from '@skyra/discord-components-react'
import { useEffect, useState } from 'react'
import styles from './DiscordLive.module.css'

type DiscordMessage = {
    id: number,
    author: {
        name: string,
        avatar: string,
        color: string
    },
    content: string,
    timestamp: number
}

const wrapEmojis = (text: string) => {
    const textArray = text.split(/<|>/gi);
    return textArray.map(str => {
        const params = /:.+?:(\d+)/gi.exec(str)
        if (params) {
            return <DiscordCustomEmoji url={"https://cdn.discordapp.com/emojis/" + params[1] + ".png"} />;
        }
        return str;
    });
}

function formatDiscordContent(content: string) {
    return wrapEmojis(content)
}

export function DiscordLive({ mobile, className }: {
    mobile?: boolean,
    className?: string
}) {
    const replayStartFrom = 8
    const replaySpeedUpMultiplier = 3
    const replayMaxWaitTime = 3000
    const [messages, setMessages] = useState<DiscordMessage[]>([])

    useEffect(() => {
        fetch("/discordlive/replay.json").then(response => {
            if (response.ok) {
                response.json().then(data => {
                    console.log(data)
                    setMessages(data)
                })
            }
        })
    }, [])

    const [visibleMessages, setVisibleMessages] = useState(messages.slice(0, replayStartFrom))

    useEffect(() => {
        function next(index: number) {
            const waitTime = Math.min((messages[index + 1]?.timestamp - messages[index]?.timestamp) / replaySpeedUpMultiplier, replayMaxWaitTime)
            console.log(waitTime)
            setTimeout(() => {
                setVisibleMessages(messages.slice(0, index + 1))
                if (index < messages.length) next(index + 1)
            }, waitTime)
        }
        next(replayStartFrom)
    }, [messages])

    function recursiveContent(i: number) {
        if (!visibleMessages[i + 1]) return
        if (visibleMessages[i + 1].author.name == visibleMessages[i].author.name) {
            return <>
                <br />
                {formatDiscordContent(visibleMessages[i + 1].content)}
                {recursiveContent(i + 1)}
            </>
        }
    }
    return (
        <div className={(mobile ? `${styles.discordBackground} ${styles.mobile}` : styles.discordBackground) + " " + (className || "")}>
            <div className={styles.liveArea}>
                <div className={styles.liveAreaInner}>
                    <DiscordMessages className={styles.discordMessages}>
                        {visibleMessages.map((message, i) =>
                            visibleMessages[i - 1]?.author?.name != visibleMessages[i].author.name ? (
                                <DiscordMessage key={message.id} avatar={`/discordlive/avatars/${message.author.avatar}`} author={message.author.name} roleColor={message.author.color}>
                                    <span className="discord-message-markup">{formatDiscordContent(message.content)}</span>
                                    <span className="discord-message-markup">{recursiveContent(i)}</span>
                                </DiscordMessage>
                            ) : null
                        )}
                    </DiscordMessages>
                </div>
            </div>
        </div>
    )
}

export function HeroDiscordLive({ focused }: {
    focused: boolean
}) {
    const notMobile = (typeof window !== "undefined") ? !(('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (("msMaxTouchPoints" in navigator && typeof navigator.msMaxTouchPoints === "number" ? navigator.msMaxTouchPoints : 0) > 0)) : true

    return (
        <div className={focused && notMobile ? styles.focusHero : ""} style={{ position: "relative" }}>
            <div className={styles.cover} />
            <div className={styles.hero}>
                <FadeIn>
                    <div style={{ perspective: "100px" }}>
                        <DiscordLive className={styles.heroDiscordLive} mobile={!notMobile} />
                    </div>
                </FadeIn>
            </div>
        </div>
    )
}