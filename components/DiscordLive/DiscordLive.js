import { DiscordMessage, DiscordMessages } from '@skyra/discord-components-react'
import styles from './DiscordLive.module.css'
export function DiscordLive({stats}) {
    return (
        <div className={styles.discordBackground}>
            <div className={styles.liveArea}>
                <DiscordMessages className={styles.discordMessages}>
                    <DiscordMessage author="miksu" avatar="red">
                        Hi, I'm new here too!
                    </DiscordMessage>
                    
                </DiscordMessages>
            </div>
        </div>
    )
}