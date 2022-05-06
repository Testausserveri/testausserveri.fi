import Head from 'next/head'
import FadeIn from 'react-fade-in';
import styled from 'styled-components'
import { ButtonIcon, CapsuleButton } from '../components/Button/CapsuleButton';
import DiscordIcon from '../assets/DiscordIcon.svg'

import { DiscordLive } from '../components/DiscordLive/DiscordLive'
import { GradientTitle } from '../components/Title/GradientTitle';
import { StatGroup } from '../components/Stat/StatGroup';
import { Content } from '../components/Content/Content';
import { getGuildInfo, useGuildInfo } from '../hooks/useGuildInfo';
import { useEffect, useState } from 'react';
import { Leaderboard, LeaderboardGroup } from '../components/Leaderboard/Leaderboard';
import { useLeaderboard } from '../hooks/useLeaderboard';
import { TimeUtil } from '../utils/TimeUtil';

const time = new TimeUtil()

const Hero = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -1.5rem;
  position: relative;
  overflow: hidden;
  margin-bottom: -22rem;
  @media only screen and (max-width: 670px) {
    margin-bottom: -30rem;
  }
  &:after {
    content: ' ';
    width: 100%;
    bottom: 0;
    position: absolute;
    left: 0;
    height: 100%;
    z-index: 1;
    background: linear-gradient(180deg, rgba(13, 13, 13, 0) 0%, #0D0D0D 66.67%, #0D0D0D 96.87%);
    @media only screen and (max-width: 670px) {
      background: linear-gradient(180deg, rgba(13, 13, 13, 0) 0%, #0D0D0D 50%, #0D0D0D 96.87%);

    }
  }
`
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
  const guildInfo = useGuildInfo(ssGuildInfo)
  const codingLeaderboard = useLeaderboard()
  
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
      <Hero>
        <FadeIn>
          <DiscordLive />
        </FadeIn>
      </Hero>
      <Center>
        <GradientTitle>
          Nettiyhteisö<br />
          nuorille hakkereille
        </GradientTitle>
        <a href="https://discord.testausserveri.fi">
          <CapsuleButton style={{marginTop: "0.5rem"}}>
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
            data={[
              {name: "Testauskoira", value: 1900},
              {name: "Timo", value: 800},
              {name: "Pasi", value: 3000},
              {name: "Sonni", value: 200},
              {name: "Vladimir", value: 8000},
            ]}
            title="Eniten viestejä tänään" />
          <Leaderboard 
            data={codingLeaderboard}
            title="Eniten koodannut tällä viikolla"
            valueFormatter={(sec) => TimeUtil.formatSecond(sec)} />
        </LeaderboardGroup>
      </Content>
    </div>
  )
}

export async function getServerSideProps() {
  const guildInfo = await getGuildInfo()

  return { props: { ssGuildInfo: guildInfo } }
}
