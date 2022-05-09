import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import TextLoop from "react-text-loop";
import { ButtonIcon, CapsuleButton } from '../components/Button/CapsuleButton';
import DiscordIcon from '../assets/DiscordIcon.svg'

import { DiscordLive, HeroDiscordLive } from '../components/DiscordLive/DiscordLive'
import { Title } from '../components/Title/Title';
import { StatGroup } from '../components/Stat/StatGroup';
import { Content } from '../components/Content/Content';
import { getGuildInfo, useGuildInfo } from '../hooks/useGuildInfo';
import { useEffect, useRef, useState } from 'react';
import { Leaderboard, LeaderboardGroup } from '../components/Leaderboard/Leaderboard';
import { TimeUtil } from '../utils/TimeUtil';
import { Footer } from '../components/Footer/Footer';
import { GradientText } from '../components/GradientText/GradientText';

const guildInfoModel = ["memberCount", "membersOnline", "messagesToday", "codingLeaderboard", "messagesLeaderboard"]

const Center = styled.div`
  width: 100%;
  text-align: center;
  z-index: 1;
  position: relative;
  flex-direction: column;
  margin-bottom: 2.5rem;
`

const Container = styled.div`
  margin-top: 13em;
  @media screen and (max-height: 900px) {
    margin-top: 5em;
  }
  @media screen and (max-width: 670px) {
    margin-top: 5em;
  }
`

const MainContent = styled.div`
  margin: 6em auto;
`

const TextColumns = styled.div`
  margin: 2.5rem .5rem;
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
  font-size: 2.8rem;
  width: 90%;
  margin: 0 auto;
  @media only screen and (max-width: 670px) {
    display: block;
  }
  @media screen and (max-width: 670px) {
    font-size: 2.2rem;
  }
`


const TitleGradientText = styled(GradientText)`
  font-size: 2.8rem;
  @media screen and (max-width: 670px) {
    font-size: 2.2rem;
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
    <Container>
      <Head>
        <title>Testausserveri</title>
      </Head>
      <HeroDiscordLive focused={heroFocused} />
      <Center>
        <Title style={{overflow: "hidden"}}>
          <TitleStaticGradientText>
            Aktiivinen yhteisö 
            kaikille<br />
          </TitleStaticGradientText>
          <TextLoop>
          <TitleGradientText>hakkereille</TitleGradientText>
              <TitleGradientText>koodareille</TitleGradientText>
              <TitleGradientText>Linux-velhoille</TitleGradientText>
              <TitleGradientText>radioamatööreille</TitleGradientText>
              <TitleGradientText>graafikoille</TitleGradientText>
              <TitleGradientText>3D-artisteille</TitleGradientText>
          </TextLoop>
        </Title>
        <a target="_blank" href="https://discord.testausserveri.fi">
          <CapsuleButton 
            style={{margin: "-0.3rem 0 0.4rem 0"}} 
            onMouseOver={() => {setHeroFocused(true)}}
            onMouseLeave={() => {setHeroFocused(false)}}>
              <ButtonIcon src={DiscordIcon} />
            Liity Discordiimme!
          </CapsuleButton>
        </a>
      </Center>
      <MainContent>
        <Content>
          <StatGroup stats={stats} />
          <TextColumns>
            Testausserveri kaikille avoin yhteisö koodaamisesta, eettisestä hakkeroinnista ja yleisesti teknologiasta innostuneille nuorille. Kehitämme yhdessä erilaisia mielenkiintoisia projekteja, joita voit tsekata <Link href="">täältä</Link>.
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
              valueFormatter={(sec) => TimeUtil.formatSecond(sec)} />
          </LeaderboardGroup>
        </Content>
      </MainContent>
      <Footer />
    </Container>
  )
}

export async function getServerSideProps() {
  const guildInfo = await getGuildInfo(guildInfoModel)

  return { props: { ssGuildInfo: guildInfo } }
}
