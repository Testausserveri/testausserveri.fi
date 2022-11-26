import Head from 'next/head'
import { Content } from '../components/Content/Content'
import { H2 } from '../components/Title/Title'
import styled from 'styled-components'
import Image from 'next/image'

import testausmeetImg from '../assets/about/testausmeet.jpg'
import assemblyImg from '../assets/about/grid/assembly.jpg'
import hackdayImg from '../assets/about/grid/hackday.jpg'
import junctionImg from '../assets/about/grid/junction.jpg'
import tacobellImg from '../assets/about/grid/tacobell.jpg'

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

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 1rem;
  width: 100%;
  margin: 2.5rem 0;
  @media only screen and (max-width: 650px) {
    grid-template-columns: 1fr 1fr;
  }
  &.board {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    @media only screen and (max-width: 650px) {
      grid-template-columns: 1fr 1fr;
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
  >a {
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
  }
  >a:hover {
    background-color: rgba(108, 108, 108, 0.15);
  }
`



const DisplayImage = styled(Image)`
  border-radius: 0.5rem;
`
export default function LoginPage({ssGuildInfo}) {
  const {memberCount} = useGuildInfo(["memberCount"], ssGuildInfo)

  return (
    <div>
      <Head>
          <title>Tietoa | Testausserveri</title>
      </Head>
      <Content>
        <DisplayImage src={testausmeetImg} />
        <p style={{marginTop: "2.5rem"}}>
          Testausserveri ry on vuonna 2021 perustettu yhdistys, jonka tavoitteena on edistää nuorten tietotekniikka- ja kyberharrastuneisuutta. Yhdistyksen keskeisin toiminto on sen {memberCount} jäsenen Discord-yhteisö, jossa nuoret pääsevät verkostoitumaan vertaistensa kanssa. 
        </p>
        <p>
          Yhteisö kannustaa nuoria harrastuksen parissa kehittymiseen. Lisäksi osallistumme moniin alan tapahtumiin ja kilpailuihin, kuten hackathonit, alan festivaalit, CTFät ja hack dayt. Yhteisön jäsenten on mahdollista osallistua yhteisiin avointen lähdekoodien projekteihin. 
        </p>
        <GridGallery media={[assemblyImg, junctionImg, hackdayImg, tacobellImg]} />
        <p>
          Tavoitteenamme on luoda hyvä ilmapiiri ja tasavertaiset mahdollisuudet kaikille nuorille kehittyä harrastuksen parissa.
        </p>
        <H2>Yhdistyksen järjestäytyminen</H2>
        <p>
          Yhdistys järjestää muutaman kerran vuodessa <a href="https://wiki.testausserveri.fi/wiki/Testausmeet">Testausmeetin</a>. Tapahtumassa pääsee tapaamaan kasvoja nimimerkkien takaa ja nauttia päivästä yhdessä. Kutsu tulee Discordin tiedotteissa ja yhdistyksen jäsenten henkilökohtaisiin sähköpostiosoitteisiin. Testausmeetin ohella järjestetään yhdistyksen kokous, jossa päätetään formaalisti yhdistyksen asioista.  
        </p>
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
            <Link href={social[1]}>
              <a key={social[0]}>
                <Image src={social[2]} height={24} width={24} unoptimized />
                {social[0]}
              </a>
            </Link>
          ))}
        </Grid>
        <p>
          Yhdistyksen hallitukseen kuuluvat toimikaudella 2022 seuraavat henkilöt.
        </p>
        <Grid className="board">
            {[
              ["61d8b737a16588f423624ed5", "Mikael Hannolainen", "puheenjohtaja"],
              ["61d8846356a221b65bfae359", "Eemil Sinkko", "varapuheenjohtaja"],
              ["61d8a2b6955c44fe1def464c", "Ruben Mkrtumyan", "hallituksen jäsen"],
              ["628fdc44ab7f1e9af65af1c8", "Petri Heinämäki", "hallituksen jäsen, viestintä"],
              ["61ea7506d66ff6e90380220f", "Antti Ellilä", "hallituksen jäsen, tietojärjestelmät"]
            ].map((person) => (
              <a>
                <img src={"https://api.testausserveri.fi/v1/media/avatars/" + person[0]} />

                <span>{person[1]}</span>
                <span>{person[2]}</span>
              </a>
            ))}
        </Grid>
        <H2>Jäsenyys yhdistyksessä</H2>
        <p>
          Yhteisön toimintaan osallistuminen ei vaadi jäsenyyttä yhdistyksessä. Kaikki ovat tervetulleita!
        </p>
        <a href="https://testausserveri.fi/link/jasenhakemus"><CapsuleButton>Täytä jäsenhakemus</CapsuleButton></a>
        <p>
          Jäsenhakemukset käsitellään aina seuraavassa yhdistyksen kokouksessa. Jäsenenä saat äänioikeuden ja myös jäsenetuna @testausserveri.fi-sähköpostiosoitteen.
        </p>
        <H2>Ketkä tukevat meitä?</H2>
        <p>Teemme yhteistyötä tällä hetkellä seuraavien organisaatioiden kanssa.</p>
        <Collaborations style={{margin: "2rem 0"}} noTitle />
        <p>
          Lisäksi jotkut yhteisömme jäsenet ovat tukeneet meitä taloudellisesti, joten suuri kiitos myös heille. Yhdistyksen raha on läpinäkyvää ja nähtävillä <a href="http://opencollective.com/testausserveri-ry">OpenCollectivessa</a>.
        </p>
      </Content>
      <Footer />

    </div> 
  )
}
  
export async function getServerSideProps({req, res}) {
  const guildInfo = await api.getGuildInfo(["memberCount"])

  res.setHeader(
    'Cache-Control',
    'public, maxage=300, stale-if-error=300'
  )

  return { props: { ssGuildInfo: guildInfo } }
}
