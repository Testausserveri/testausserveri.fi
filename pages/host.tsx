import Head from 'next/head'
import styled from 'styled-components'
import { Content } from '../components/Content/Content'
import { H1, H2 } from '../components/Title/Title'
import { Footer } from '../components/Footer/Footer'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { Gallery } from '../components/Gallery/Gallery'
import { InfoBox } from '../components/InfoBox/InfoBox'
import TestaushostBannerImg from '../assets/testaushost-banner.png'
import Image from 'next/image'
import { CapsuleButton } from '../components/Button/CapsuleButton'
import { IoMdKey } from "react-icons/io"
import { NavigateLink } from '../components/NavigateLink/NavigateLink'
import { Capsule } from '../components/Capsule/Capsule'


export default function Host({ copyrightYear }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      <Head>
          <title>Palvelintila | Testausserveri</title>
          <meta name="description" content="Testausserveri ry yhdessä Osphostin kanssa tarjoavat nuorille maksutonta palvelintilaa. Liity yhdistyksen jäseneksi ja ota sivutilasi käyttöön!" />
          <meta property="og:site_name" content="Testausserveri" />
          <meta property="og:title" content="Palvelintila" />
          <meta property="og:image" content={"https://testausserveri.fi" + TestaushostBannerImg.src} />
          <meta property="og:description" content="Testausserveri ry yhdessä Osphostin kanssa tarjoavat nuorille maksutonta palvelintilaa. Liity yhdistyksen jäseneksi ja ota sivutilasi käyttöön!" />
          <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Content>
        <H1>Palvelintila <Capsule style={{fontSize: ".8rem", transform: "translateY(-6px)", marginLeft: "0.3em", display: "inline-block"}}>BETA</Capsule></H1>
        <p>Testausserveri ry:n jäsenet saavat maksutta käyttöoikeuden palvelimelle, johon jäsenelle on varattu:</p>
        <ul>
          <li>3 Gt tallennustilaa </li>
          <li>512 Mt muistia</li>
          <li>SSH / SFTP -yhteysmahdollisuudet</li>
        </ul>
        <p>Palvelimella voit ajaa mm. omaa www-sivua, NodeJS- tai Python-ohjelmia. Oletuksena saat alidomainin muodossa nimi.txx.fi, jossa nimi on sama kuin jäsensähköpostiosoitteessasi.</p>
        <p>Saatavilla on myös sähköposti ja DNS omalle domainille! Näitä lisäpalveluita voit pyytää sähköpostitse <a href="mailto:host@testausserveri.fi">host@testausserveri.fi</a>.</p>
        <p>Jäsenetu on toteutettu yhteistyössä Testausserveri ry:n ja Osphostin kanssa. Mikäli tarvitset enemmän palvelinkapasiteettia valmiille avoimen lähdekoodin projektillesi, voit hakea sitä suoraan <a href="https://osphost.fi">Osphostilta</a>.</p>
        <a href="/host/enable">
          <CapsuleButton style={{marginRight: ".75em", marginTop: ".75em"}}>
            <IoMdKey style={{fontSize: "1em", transform: "scale(1.3)"}} />
            Ota sivutila käyttöön
          </CapsuleButton>
        </a>
        <a href="/apply">
          <CapsuleButton style={{marginTop: ".75em"}} secondary>
            Täytä jäsenhakemus
          </CapsuleButton>
        </a>
        <H2>Käyttöehdot ja tietosuoja</H2>
        <NavigateLink href="/host/terms">Käyttöehtosopimus</NavigateLink>
        <NavigateLink href="/host/dpa">Henkilötietojen käsittelyn vakiolausekkeet ja lisäliitteet</NavigateLink>
        <NavigateLink href="/host/privacy">Tietosuojakäytäntö</NavigateLink>
      </Content>
      <Footer copyrightYear={copyrightYear} />
    </div>
    )
  }

export const getServerSideProps: GetServerSideProps<{
  copyrightYear: number
}> = async ({ req, res }) => {
  res.setHeader(
    'Cache-Control',
    'public, maxage=300, stale-if-error=300'
  )

  return {
    props: {
      copyrightYear: new Date().getFullYear()
    }
  }
}
