import Head from 'next/head'
import styled from 'styled-components'
import { ButtonIcon, CapsuleButton } from '../components/Button/CapsuleButton';
import DiscordIcon from '../assets/DiscordIcon.svg'

import { DiscordLive, HeroDiscordLive } from '../components/DiscordLive/DiscordLive'
import { GradientTitle } from '../components/Title/GradientTitle';
import { StatGroup } from '../components/Stat/StatGroup';
import { Content } from '../components/Content/Content';
import { getGuildInfo, useGuildInfo } from '../hooks/useGuildInfo';
import { useEffect, useRef, useState } from 'react';
import { Leaderboard, LeaderboardGroup } from '../components/Leaderboard/Leaderboard';
import { TimeUtil } from '../utils/TimeUtil';
import { Footer } from '../components/Footer/Footer';

const guildInfoModel = ["memberCount", "membersOnline", "messagesToday", "codingLeaderboard", "messagesLeaderboard"]

const Center = styled.div`
  width: 100%;
  text-align: center;
  z-index: 1;
  position: relative;
  flex-direction: column;
  margin-bottom: 2.5rem;
`

const TextColumns = styled.div`
  margin: 2.5rem 0;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  color: #DBDBDB;
  line-height: 1.4;
  columns: 2;  
  br.mobileBreak {
    display: none;
  }
  @media only screen and (max-width: 670px) {
    columns: 1;
    br.mobileBreak {
      display: block;
    }
  }
`

export default function Home({ssGuildInfo}) {
  const guildInfo = useGuildInfo(guildInfoModel, ssGuildInfo)
  const [heroFocused, setHeroFocused] = useState(false)
  const [stats, setStats] = useState([])

  useEffect(() => {
    setStats([
      {
        "label": "Jäseniä",
        "value": guildInfo?.memberCount
      },
      {
        "label": "Paikalla nyt",
        "value": guildInfo?.membersOnline
      },
      {
        "label": "Viestejä tänään",
        "value": guildInfo?.messagesToday
      },
      {
        "label": "Projekteja",
        "value": 40
      }
    ])
  }, [guildInfo])

  return (
    <div>
      <Head>
        <title>Testausserveri</title>
      </Head>
      <HeroDiscordLive focused={heroFocused} />
      <Center>
        <GradientTitle>
          Nettiyhteisö<br />
          nuorille hakkereille
        </GradientTitle>
        <a href="https://discord.testausserveri.fi">
          <CapsuleButton 
            style={{marginTop: "0.5rem"}} 
            onMouseOver={() => {setHeroFocused(true)}}
            onMouseLeave={() => {setHeroFocused(false)}}>
              <ButtonIcon src={DiscordIcon} />
            Tule juttelemaan!
          </CapsuleButton>
        </a>
      </Center>
      <Content>
        <StatGroup stats={stats} />
        <TextColumns>
          Testausserveri kaikille avoin yhteisö koodaamisesta, eettisestä hakkeroinnista ja yleisesti teknologiasta innostuneille nuorille. Kehitämme yhdessä erilaisia mielenkiintoisia projekteja, joita voit tsekata täältä.
          <br /><br className="mobileBreak" />
          Keskusteluihimme on helppo liittyä matalalla kynnyksellä, sekä kannustamme jäseniämme kehittymään kanssamme.
        </TextColumns>
        <LeaderboardGroup>
          <Leaderboard 
            data={guildInfo.messagesLeaderboard}
            title="Eniten viestejä tänään" />
          
          <Leaderboard 
            data={guildInfo.codingLeaderboard}
            title="Eniten koodannut tällä viikolla"
            valueFormatter={(sec) => TimeUtil.formatSecond(sec)} />
        </LeaderboardGroup>
      </Content>
      <Footer />
    </div>
  )
}

export async function getServerSideProps() {
  const guildInfo = await getGuildInfo(guildInfoModel)

  return { props: { ssGuildInfo: guildInfo } }
}
