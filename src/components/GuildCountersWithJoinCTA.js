import { CountUp } from 'use-count-up'

function Counter({value}) {
  if (value) {
    return <CountUp isCounting end={value} duration={1} />;
  } else {
    return <>...</>;
  }
}
export function GuildCountersWithJoinCTA({guildInfo}) {
  return (
    <div className="joinBox">
      <div className="joinBoxInner">
        <a href="https://discord.testausserveri.fi" className="joinButton">
          Liity Discordiimme!
        </a>
        <div className="joinInfo">
          <span className="infoBlock">
            <span className="infoHeading">
              Jäseniä
            </span>
            <span className="infoValue"><Counter value={guildInfo.memberCount} /></span>
          </span>
          <span className="infoBlock">
            <span className="infoHeading">
              Viestejä tänään
            </span>
            <span className="infoValue" id="messageCount"><Counter value={guildInfo.messagesToday} /></span>
          </span>
        </div>
      </div>
    </div>
  )
}