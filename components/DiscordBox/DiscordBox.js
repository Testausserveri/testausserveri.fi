import styles from './DiscordBox.module.css'
import CountUp from 'react-countup'
import { useEffect, useState } from 'react'

function useApiGuildInfo() {
    const [data, setData] = useState({})
    useEffect(() => {
        async function updateGuildInfo() {
            const response = await fetch('https://api.testausserveri.fi/v1/discord/guildInfo')
            const data = await response.json()
            console.log(data)
            setData(data)
        }

        const reload = setInterval(updateGuildInfo, 5000)
        updateGuildInfo()

        return () => {
            clearInterval(reload)
        }
    }, [])

    return data
}

function InfoBlock({name, value}) {
    return (
        <span className={styles.infoBlock}>
            <span className={styles.infoHeading}>
                {name}
            </span>
            <span className={styles.infoValue} id="memberCount"><CountUp 
            end={value || 0} 
            separator=" "
            duration={0.5}
            /></span>
        </span>
    )
}
export default function DiscordBox() {
    const guildInfo = useApiGuildInfo()

    return (
        <fieldset className={styles.discordBox}>
            <legend>Liity jäseneksi!</legend>

            <a href="https://discord.testausserveri.fi" className={styles.joinButton}>
                Liity Discordiimme!
            </a>
            <div className={styles.joinInfo}>
                <InfoBlock name="Jäseniä" value={guildInfo?.memberCount} />
                <InfoBlock name="Viestejä tänään" value={guildInfo?.messagesToday} />
            </div>
                
        </fieldset>
    )
}