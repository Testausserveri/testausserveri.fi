import { DiscordCustomEmoji, DiscordMessage } from '@skyra/discord-components-react'
import { ReactNode, useEffect, useState } from 'react'
import styles from './DiscordLive.module.css'
import { FadeIn } from '../FadeIn/FadeIn'
import Image from 'next/image'
import DiscordImage from './discord.png'
import DiscordImageMobile from './discord-mobile.png'
import dynamic from 'next/dynamic'
const DiscordMessageList = dynamic(() => import('./DiscordMessageList'), { ssr: false })

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
            return <DiscordCustomEmoji key={str + "-" + params.join(".")} url={"https://cdn.discordapp.com/emojis/" + params[1] + ".png"} />;
        }
        return str;
    });
}

export function formatDiscordContent(content: string) {
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

    function recursiveContent(i: number): ReactNode {
        if (!visibleMessages[i + 1]) return null
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
            <Image
                src={DiscordImage}
                alt="Discord application"
                fill
                className={styles.desktopImage}
            />
            <Image
                src={DiscordImageMobile}
                alt="Discord application"
                fill
                className={styles.mobileImage}
            />
            <div className={styles.liveArea}>
                <div className={styles.liveAreaInner}>
                    <DiscordMessageList visibleMessages={visibleMessages} recursiveContent={recursiveContent} />
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

export default HeroDiscordLive;
