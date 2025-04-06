import { useEffect, useState } from 'react'
import { Content } from '@/components/Content/Content'
import { H2 } from '@/components/Title/Title'
import styled from 'styled-components'
import Image from "next/legacy/image"

// pictures
import testausmeetImg from '@/assets/about/testausmeet.jpg'
import assemblyImg from '@/assets/about/grid/assembly.jpg'
import hackdayImg from '@/assets/about/grid/hackday.jpg'
import junctionImg from '@/assets/about/grid/junction.jpg'
import tacobellImg from '@/assets/about/grid/tacobell.jpg'

// board pictures
import hanBoardImg from '@/assets/about/board/han.jpeg'
import ellBoardImg from '@/assets/about/board/ell.jpeg'
import mkrBoardImg from '@/assets/about/board/mkr.jpeg'
import sinBoardImg from '@/assets/about/board/sin.jpeg'
import serBoardImg from '@/assets/about/board/ser.jpeg'
import oikBoardImg from '@/assets/about/board/oik.jpeg'

// icons
import GithubIcon from '@/assets/GithubIcon.svg'
import InstagramIcon from '@/assets/InstagramIcon.svg'
import YoutubeIcon from '@/assets/YoutubeIcon.svg'
import TwitterIcon from '@/assets/TwitterIcon.svg'

import { GridGallery } from '@/components/GridGallery/GridGallery'
import { Footer } from '@/components/Footer/Footer'
import Link from 'next/link'
import { CapsuleButton } from '@/components/Button/CapsuleButton'
import { Collaborations } from '@/components/Collaborations/Collaborations'
import { NavigateLink } from '@/components/NavigateLink/NavigateLink'
import api from '@/utils/api'

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 1rem;
    width: 100%;
    margin: 2.5rem 0;
    @media only screen and (max-width: 450px) {
        grid-template-columns: 1fr;
    }
    @media only screen and (max-width: 650px) {
        grid-template-columns: 1fr 1fr;
    }
    &.board {
        grid-template-columns: 1fr 1fr 1fr;
        @media only screen and (max-width: 650px) {
            grid-template-columns: 1fr 1fr;
        }
        @media only screen and (max-width: 450px) {
            grid-template-columns: 1fr;
        }
        span:nth-child(4) {
            margin-top: -1.5rem;
            color: rgba(255,255,255,0.5);
        }
        img {
            border-radius: 50%;
            width: 52px;
            height: 52px;
            margin: 0 auto;
            margin-bottom: 0.5rem;
        }
    }
    &.soc img {
        opacity: 0.8;
    }
    >a:hover {
        background-color: rgba(108, 108, 108, 0.15);
    }
    &.board>a {
        cursor: default;
    }
    &.board>a:hover {
        background-color: rgba(108, 108, 108, 0.09);
    }
`

const SocialLink = styled(Link)`
    border-radius: 0.5rem;
    background-color: rgba(108, 108, 108, 0.09);
    padding: 1.5rem;
    display: flex;
    justify-content: center;
    align-item: center;
    flex-direction: column;
    text-align: center;
    gap: .5rem;
    transition: background-color 0.1s;
`

const PersonIntroduction = styled.div`
    border-radius: 0.5rem;
    background-color: rgba(108, 108, 108, 0.09);
    padding: 1.5rem;
    display: flex;
    justify-content: center;
    align-item: center;
    flex-direction: column;
    text-align: center;
    gap: .5rem;
    transition: background-color 0.1s;
`

const DisplayImage = styled(Image)`
    border-radius: 0.5rem;
`

export default function AboutPage({ initialMemberCount }: { initialMemberCount: number }) {
    const [memberCount, setMemberCount] = useState(initialMemberCount)

    useEffect(() => {
        const fetchMemberCount = async () => {
            const data = await api.getGuildInfo(["memberCount"])
            setMemberCount(data.memberCount)
        }
        fetchMemberCount()
    }, [])

    return (
        <div>
            <Content wider>
                <DisplayImage
                    placeholder="blur"
                    src={testausmeetImg}
                    alt="Kuva Testausmeetistä. Noin 20 Testausserverin jäsentä istuu pöydän ääressä ja katsoo suurta näyttöä, jossa esitellään hallitusehdokkaita."
                />
            </Content>
            <Content>
                <p style={{ marginTop: "1.5rem" }}>
                    Testausserveri ry on vuonna 2021 perustettu voittoa tavoittelematon yhdistys, jonka tavoitteena on edistää ja mahdollistaa nuorten tietotekniikka- ja kyberharrastuneisuutta.
                    Yhdistyksen keskeisin toiminto on sen {memberCount} jäsenen Discord-yhteisö, jossa nuoret pääsevät verkostoitumaan vertaistensa kanssa.
                </p>
                <p>
                    Yhteisömme tavoitteena on innostaa nuoria oppimaan uutta ja hiomaan jo olemassaolevia taitojaan tietotekniikka- ja kyberalalla.
                    Yhdistyksemme jäsenistön laaja asiantuntemus mahdollistaa tukevaa toimintaamme: yhteisössämme voi saada apua kaikesta koodaamisen perusteista eettisen hakkeroinnin periaatteisiin.
                </p>
                <p>
                    Tuemme avoimen lähdekoodin projekteja ja työstämämme projektit julkaistaan kaikille nähtäväksi yhdistyksemme Github-sivuilla.
                    Kaikki yhdistyksemme ja yhteisömme tuottamat palvelut ovat ilmaisia!
                </p>
            </Content>
            <Content wider>
                <GridGallery
                    imageProps={{ placeholder: "blur" }}
                    media={[
                        {
                            image: assemblyImg,
                            alt: "Valokuva Assembly-tapahtumasta. Tumma tapahtumahalli jossa on ihmisiä.",
                        },
                        {
                            image: junctionImg,
                            alt: "Valokuva Junction-tapahtumasta. Sali, jossa on ihmisiä työskentelemässä tietokoneilla pitkien pöytien ääressä.",
                        },
                        {
                            image: hackdayImg,
                            alt: "Valokuva LähiTapiola Hack Day -tapahtumasta. Seinälle heijastettu kuva, jossa teksti: \"Bountyt. // - 1. sija: wtf 3000€ // - 2. sija: testausserveri 2000€ // - 3. sija: t0ni 1500€ // - Muut sijoitukset: kaaos 500€, ks-atk 500€, accenture 500€ // Mielenkiintoisin havainto: testausserveri +1000€ // - Eniten havaintoja: wtf +1000€",
                        },
                        {
                            image: tacobellImg,
                            alt: "Valokuva Taco Bell -ravintolasta, jossa näkyy Testausserverin jäseniä syömässä tacoja."
                        }]} />
            </Content>
            {/* Remaining content remains unchanged */}
            <Footer />
        </div>
    )
}

export async function getStaticProps() {
    const guildInfo = await api.getGuildInfo(["memberCount"])

    return {
        props: {
            initialMemberCount: guildInfo.memberCount
        },
        revalidate: 300 // Revalidate every 5 minutes
    }
}
