import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import { TextLoop } from "../components/TextLoop/TextLoop";
import { ButtonIcon, CapsuleButton } from '../components/Button/CapsuleButton';
import DiscordIcon from '../assets/DiscordIcon.svg'

import { DiscordLive, HeroDiscordLive } from '../components/DiscordLive/DiscordLive'
import { H1 } from '../components/Title/Title';
import { StatGroup } from '../components/Stat/StatGroup';
import { Content } from '../components/Content/Content';
import { useGuildInfo } from '../hooks/useGuildInfo';
import { useEffect, useRef, useState } from 'react';
import { Leaderboard, LeaderboardGroup } from '../components/Leaderboard/Leaderboard';
import { TimeUtil } from '../utils/TimeUtil';
import { Footer } from '../components/Footer/Footer';
import { GradientText } from '../components/GradientText/GradientText';
import api from '../utils/api';
import { Collaborations } from '../components/Collaborations/Collaborations';

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

const TitleStaticGradientText = styled(GradientText)`
  @media only screen and (max-width: 670px) {
    display: block;
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
        <H1 style={{ 
          overflow: "hidden", 
          display: "flex", 
          alignItems: "center", 
          flexDirection: "column",
          fontWeight: "bold"
        }}>
          <TitleStaticGradientText>
            Yhteisö
            nuorille<br />
          </TitleStaticGradientText>
          <TextLoop>
              <GradientText>hakkereille</GradientText>
              <GradientText>koodareille</GradientText>
              <GradientText>Linux-velhoille</GradientText>
              <GradientText>radioamatööreille</GradientText>
              <GradientText>graafikoille</GradientText>
              <GradientText>3D-artisteille</GradientText>
          </TextLoop>
        </H1>
        <a href="https://discord.testausserveri.fi">
          <CapsuleButton 
            style={{margin: "-0.3rem 0 0.4rem 0"}} 
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
            title="Eniten viestejä viikon sisään" />
          
          <Leaderboard 
            data={guildInfo.codingLeaderboard}
            title="Eniten koodannut viikon sisään"
            explanation={<span>
              Tilasto kerätään koodieditoreiden <Link href="/projects/testaustime">Testaustime-lisäosalla</Link>
            </span>}
            valueFormatter={(sec) => TimeUtil.formatSecond(sec)} />
        </LeaderboardGroup>
        <Collaborations />
      </Content>
      <Footer />
    </div>
  )
}

export async function getServerSideProps({req, res}) {
  const guildInfo = await api.getGuildInfo(guildInfoModel)

  res.setHeader(
    'Cache-Control',
    'public, maxage=300, stale-if-error=300'
  )

  return { props: { ssGuildInfo: guildInfo } }
}
