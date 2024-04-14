import Head from 'next/head'
import { Content } from '../components/Content/Content'
import { H2 } from '../components/Title/Title'
import styled from 'styled-components'
import Image from "next/legacy/image"

// pictures
import testausmeetImg from '../assets/about/testausmeet.jpg'
import assemblyImg from '../assets/about/grid/assembly.jpg'
import hackdayImg from '../assets/about/grid/hackday.jpg'
import junctionImg from '../assets/about/grid/junction.jpg'
import tacobellImg from '../assets/about/grid/tacobell.jpg'

// board pictures
import hanBoardImg from '../assets/about/board/han.jpeg'
import ellBoardImg from '../assets/about/board/ell.jpeg'
import mkrBoardImg from '../assets/about/board/mkr.jpeg'
import sinBoardImg from '../assets/about/board/sin.jpeg'
import serBoardImg from '../assets/about/board/ser.jpeg'
import oikBoardImg from '../assets/about/board/oik.jpeg'

// icons
import GithubIcon from '../assets/GithubIcon.svg'
import InstagramIcon from '../assets/InstagramIcon.svg'
import YoutubeIcon from '../assets/YoutubeIcon.svg'
import TwitterIcon from '../assets/TwitterIcon.svg'

import { useGuildInfo } from '../hooks/useGuildInfo'
import api from '../utils/api'
import { GridGallery } from '../components/GridGallery/GridGallery'
import { Footer } from '../components/Footer/Footer'
import Link from 'next/link'
import { CapsuleButton } from '../components/Button/CapsuleButton'
import { Collaborations } from '../components/Collaborations/Collaborations'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { GuildInfo } from '../utils/types'

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
    span:nth-child(3) {
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
export default function LoginPage({ ssGuildInfo, copyrightYear }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { memberCount } = useGuildInfo(["memberCount"], ssGuildInfo)

  return (
    <div>
      <Head>
        <title>Tietoa meistä | Testausserveri</title>
        <meta name="description" content="Testausserveri on kaikille avoin yhteisö koodaamisesta, eettisestä hakkeroinnista ja yleisesti teknologiasta innostuneille nuorille." />
      </Head>
      <Content wider>
        <DisplayImage
          placeholder="blur"
          src={testausmeetImg}
          alt="Kuva Testausmeetistä. Noin 20 Testausserverin jäsentä istuu pöydän ääressä ja katsoo suurta näyttöä, jossa esitellään hallitusehdokkaita."
        />
      </Content>
      <Content>
        {/*<p style={{ textAlign: "right", fontStyle: "italic", marginTop: "0" }}>Testausmeet 5/2022</p>*/}
        <p style={{ marginTop: "1.5rem" }}>
          Testausserveri ry on vuonna 2021 perustettu voittoa tavoittelematon yhdistys, jonka tavoitteena on edistää ja mahdollistaa nuorten tietotekniikka- ja kyberharrastuneisuutta.
          Yhdistyksen keskeisin toiminto on sen {memberCount} jäsenen Discord-yhteisö, jossa nuoret pääsevät verkostoitumaan vertaistensa kanssa.
        </p>
        <p>
          Yhteisömme tavoitteena on innostaa nuoria oppimaan uutta ja hiomaan jo olemassaolevia taitojaan tietotekniikka- ja kyberalalla.
          Yhdistyksemme jäsenistön laaja asiantuntemus mahdollistaa tukevaa toimintaamme: yhteisössämme voi saada apua kaikesta koodaamisen perusteista eettisen hakkeroinnin periaatteisiin.
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
      <Content>

        {/*<p style={{ textAlign: "right", fontStyle: "italic", marginTop: "-2rem" }}>Testausserveri Assembly, Junction ja LähiTapiola hack day -tapahtumissa, sekä perinteinen Testausmeet illallinen</p>*/}

        <H2 style={{ marginTop: "1.5rem" }}>Tavoitteemme</H2>
        <p>
          Tavoitteenamme on ylläpitää yhdistyksessämme ja Discord-yhteisössämme hyvää ilmapiiriä, joka antaa tasavertaiset mahdollisuudet kaikille oppia uutta tietotekniikasta tai hioa olemassa olevia taitojaan.
        </p>
        <p>
          Pyrimme myös toimimaan tietotekniikka- ja kyberaloilla nuorten eduksi erilaisten yhteistyökumppaniemme kanssa, kuin mediassakin.
          Tavoitteenamme on tuoda ohjelmointia ja eettistä hakkerointia harrastuksina entistä enemmän suurten yleisöjen eteen.
        </p>
        <H2>Yhdistyksen järjestäytyminen</H2>
        <p>
          Järjestämme muutaman kerran vuodessa <a href="https://wiki.testausserveri.fi/wiki/Testausmeet">Testausmeetin</a>.
          Tapahtumassa pääsee tapaamaan kasvoja nimimerkkien takaa, verkostoitumaan, puhumaan kaikesta &quot;tech&quot; ja ennen kaikkea nauttimaan rennosta ajanvietosta.
          Kutsu tulee Discordiin tiedotteena, sekä yhdistyksemme jäsenten henkilökohtaisiin sähköpostiosoitteisiin.
          Testausmeetin ohella järjestetään yleensä yhdistyksen kokous, jossa päätetään virallisesti yhdistyksen asioista.
        </p>
        <p>
          Yhdistyksemme osallistuu lukuisiin tietotekniikka- ja kyberalan tapahtumiin ja kilpailuihin, kuten hackathoneihin, CTF-kilpailuihin ja hack-day tapahtumiin.
          Kenellä tahansa yhdistyksen jäsenellä on mahdollisuus päästä osallistumaan näihin tapahtumiin ja kilpailuihin ilmaiseksi.
        </p>

        <H2>Tutustu toimintaamme</H2>
        <p>
          Testausserveri tuottaa sisältöä seuraaviin sosiaalisiin medioihin ja palveluihin. Etenkin Instagramissa pääsee tutustumaan yhteisömme kohohetkiin.
        </p>
        <Grid className="soc">
          {[
            ["Instagram", "https://instagram.com/testausserveri", InstagramIcon],
            ["Youtube", "https://youtube.com/@testausserveri", YoutubeIcon],
            ["Github", "https://github.com/testausserveri", GithubIcon],
            ["Twitter", "https://twitter.com/testausserveri", TwitterIcon],
          ].map((social) => (
            (<SocialLink href={social[1]} key={social[0]}>
              <Image src={social[2]} alt={`${social[0]} logo`} height={24} width={24} unoptimized />
              {social[0]}
            </SocialLink>)
          ))}
        </Grid>
        <H2>Yhdistysjärjestys</H2>
        <p>
          Yhdistyksen hallitukseen kuuluvat toimikaudella 2024 seuraavat henkilöt (henkilökohtaiset sähköpostiosoitteet etunimi@testausserveri.fi, jollei toisin mainittu):
        </p>
        <Grid className="board">
          {([
            [sinBoardImg, "Eemil Sinkko", "puheenjohtaja, talous"],
            [ellBoardImg, "Antti Ellilä", "varapuheenjohtaja, tietojärjestelmät"],
            [hanBoardImg, "Mikael Hannolainen", "sihteeri"],
            [mkrBoardImg, "Ruben Mkrtumyan", "hallituksen jäsen"],
            [serBoardImg, "Sergey Ichtchenko", "hallituksen jäsen, yhteistyöt"],
            [oikBoardImg, "Niilas Oikarainen", "hallituksen jäsen"]
          ] as const).map(person => (
            <PersonIntroduction key={person[1]}>
              <span>
                <Image width="64" height="64" src={person[0]} placeholder="blur" alt={person[1]} />
              </span>
              <span>{person[1]}</span>
              <span>{person[2]}</span>
            </PersonIntroduction>
          ))}
        </Grid>
        <H2>Jäsenyys yhdistyksessämme</H2>
        <p>
          Yhteisön toimintaan osallistuminen ei vaadi yhdistyksemme jäsenyyttä. Kaikki ovat tervetulleita! Jäsenyys mahdollistaa kuitenkin osallistumisesi toimintaamme aktiivisemmin, sekä pääsyn lukuisiin eri jäsenyysetuihin.
        </p>
        <a href="https://testausserveri.fi/apply"><CapsuleButton>Täytä jäsenhakemus</CapsuleButton></a>
        <p>
          Jäsenhakemukset käsitellään aina seuraavassa yhdistyksen kokouksessa. Jäsenenä saa äänioikeuden, sekä pääsyn Testausserverin @testausserveri.fi sähköposti-, Mastodon- ja Bitwarden-palveluihin.
        </p>

        <H2>Ketkä tukevat meitä?</H2>
        <p>Teemme yhteistyötä tällä hetkellä seuraavien organisaatioiden kanssa:</p>
        <Collaborations style={{ margin: "2.5rem 0" }} noTitle />
        <p>
          Lisäksi, jotkut yhteisömme jäsenet ovat tukeneet meitä taloudellisesti, joten suuri kiitos myös heille. Yhdistyksen rahankäyttö on läpinäkyvää ja kaikille nähtävillä <a href="http://opencollective.com/testausserveri-ry">OpenCollective-palvelussa</a>.
        </p>
      </Content>
      <Footer copyrightYear={copyrightYear} />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<{
  ssGuildInfo: GuildInfo<"memberCount"[]>,
  copyrightYear: number
}> = async ({ req, res }) => {
  const guildInfo = await api.getGuildInfo(["memberCount"])

  res.setHeader(
    'Cache-Control',
    'public, maxage=300, stale-if-error=300'
  )

  return {
    props: {
      ssGuildInfo: guildInfo,
      copyrightYear: new Date().getFullYear()
    }
  }
}
