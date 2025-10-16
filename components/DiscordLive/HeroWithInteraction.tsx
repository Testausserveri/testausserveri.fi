"use client";

import { useState } from 'react';
import HeroDiscordLive from './DiscordLive';
import Link from 'next/link';
import styled from 'styled-components';
import { ButtonIcon, CapsuleButton } from '../Button/CapsuleButton';
import DiscordIcon from '../../assets/DiscordIcon.svg';
import { H1 } from '../Title/Title';
import { GradientText } from '../GradientText/GradientText';
import { TextLoop } from '../TextLoop/TextLoop';
import { usePlausible } from 'next-plausible';

const Center = styled.div`
  width: 100%;
  text-align: center;
  z-index: 1;
  position: relative;
  flex-direction: column;
  margin-bottom: 2.5rem;
`

const CTAButtonRow = styled.div`
  margin: -0.3rem 0 0.4rem 0;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: center;
  @media (max-width: 370px) {
    flex-direction: column;
  }
`;

const TitleStaticGradientText = styled(GradientText)`
  @media only screen and (max-width: 670px) {
    display: block;
  }
`

export function HeroWithInteraction() {
    const [heroFocused, setHeroFocused] = useState(false);
    const plausible = usePlausible();

    return (
        <>
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
                <CTAButtonRow>
                    <Link href="https://discord.testausserveri.fi" onClick={() => plausible("joinDiscord", { props: { source: "hero" } })}>
                        <CapsuleButton
                            onMouseOver={() => { setHeroFocused(true) }}
                            onMouseLeave={() => { setHeroFocused(false) }}>
                            <ButtonIcon src={DiscordIcon} alt="Discord logo" />
                            Tule juttelemaan!
                        </CapsuleButton>
                    </Link>
                    <Link href="/apply">
                        <CapsuleButton secondary>
                            Jäseneksi
                        </CapsuleButton>
                    </Link>
                </CTAButtonRow>
            </Center>
        </>
    )
}

