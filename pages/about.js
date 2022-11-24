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


import { useGuildInfo } from '../hooks/useGuildInfo'
import api from '../utils/api'
import { GridGallery } from '../components/GridGallery/GridGallery'
import { Footer } from '../components/Footer/Footer'

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
