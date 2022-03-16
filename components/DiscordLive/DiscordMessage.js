/**
 * DiscordMessage component is not currently used
 * but we have kept it for future uses, where we may need a Discord message with relative design
 */
import styles from "./DiscordMessage.module.css"

export function DiscordMessage() {
    return (
        <div className={styles.discordMessage}>
            <div className={styles.discordMessageInner}>
                <div className={styles.discordAuthorAvatar}>
                    <img src="https://cdn.discordapp.com/embed/avatars/4.png" alt="miksu" />
                </div>
                <div className={styles.discordMessageContent}>
                    <span className={styles.discordAuthorInfo}>
                        <span className={styles.discordAuthorUsername}>miksu</span>
                        </span>
                    <span className={styles.discordMessageTimestamp}>03/16/2022</span>
                    <div className={styles.discordMessageBody}>
                        <span className={styles.discordMessageMarkup}>
                            Testi
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}