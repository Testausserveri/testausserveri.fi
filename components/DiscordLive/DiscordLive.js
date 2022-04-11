import { DiscordCustomEmoji, DiscordMessage, DiscordMessages } from '@skyra/discord-components-react'
import { useEffect, useState } from 'react'
import styles from './DiscordLive.module.css'
import messages from "./dump.json"

function formatDiscordContent(content) {
    const wrapEmojis = (text) => {
        const textArray = text.split(/<|>/gi);
        return textArray.map(str => {
            const params = /:.+?:(\d+)/gi.exec(str)
            if (params) {
                return <DiscordCustomEmoji url={"https://cdn.discordapp.com/emojis/" + params[1] + ".png"} />;
            }
            return str;
        });
    }

    return wrapEmojis(content)
}

export function DiscordLive({mobile}) {
    const replayStartFrom = 8
    const replaySpeedUpMultiplier = 3
    const replayMaxWaitTime = 3000

    const [visibleMessages, setVisibleMessages] = useState(messages.slice(0, replayStartFrom))
    
    useEffect(() => {
        function next(index) {
            const waitTime = Math.min((messages[index + 1]?.timestamp - messages[index]?.timestamp) / replaySpeedUpMultiplier, replayMaxWaitTime)
            console.log(waitTime)
            setTimeout(() => {
                setVisibleMessages(messages.slice(0, index + 1))
                if (index < messages.length) next(index + 1)
            }, waitTime)
        }
        next(replayStartFrom)
    }, [])

    function recursiveContent(i) {
        if (!visibleMessages[i + 1]) return
        if ( visibleMessages[i + 1].author.name == visibleMessages[i].author.name ) {
            return <>
                <br />
                {formatDiscordContent(visibleMessages[i + 1].content)}
                {recursiveContent(i + 1)}                
            </>
        }
    }
    return (
        <div className={(mobile ? `${styles.discordBackground} ${styles.mobile}` : styles.discordBackground)}>
            <div className={styles.liveArea}>
                <div className={styles.liveAreaInner}>
                    <DiscordMessages className={styles.discordMessages}>
                        {visibleMessages.map((message, i) => 
                            visibleMessages[i - 1]?.author?.name != visibleMessages[i].author.name ? (
                                <DiscordMessage key={message.id} avatar={message.author.avatar} author={message.author.name} roleColor={message.author.color}>
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
