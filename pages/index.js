import Head from 'next/head'
import FadeIn from 'react-fade-in';
import styled from 'styled-components'

import { DiscordLive } from '../components/DiscordLive/DiscordLive'
import { GradientTitle } from '../components/Title/GradientTitle';

const HeroInner = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -1.5rem;
  position: relative;
  overflow: hidden;
  transition: opacity 1s;
  &:after {
    content: ' ';
    width: 100%;
    bottom: 0;
    position: absolute;
    left: 0;
    height: 100%;
    z-index: 1;
    background: linear-gradient(180deg, rgba(13, 13, 13, 0) 0%, #0D0D0D 66.67%, #0D0D0D 96.87%);
  }
`
const Center = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 0rem;
`
function HeroOuter({style, className}) {
  return (
    <div style={style} className={className}>
      <HeroInner>
        <FadeIn>
          <DiscordLive />
        </FadeIn>
      </HeroInner>
    </div>
  )
}

const Hero = styled(HeroOuter)`
`

export default function Home() {
  return (
    <div>
      <Head>
          <title>Testausserveri</title>
      </Head>
      <Hero />
      <Center>
        <GradientTitle>
          Nettiyhteisö<br />
          nuorille hakkereille
        </GradientTitle>
      </Center>
    </div>
  )
}
