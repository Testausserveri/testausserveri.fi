import Head from 'next/head'
import styled from 'styled-components'
import { Content } from '../components/Content/Content'
import { H1 } from '../components/Title/Title'
import { IoIosCall, IoIosMail, IoLogoGithub } from 'react-icons/io'
import { Footer } from '../components/Footer/Footer'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

const Section = styled.div`
  
  padding: 1.5rem;
  background-color: rgba(108, 108, 108, 0.09);
  border-radius: 0.5rem;
  margin-bottom: 1rem;
  h2 {
    margin: 0;
    padding: 0;
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 1rem;
  }
  p {
    margin-bottom: 0;
  }
  svg {
    vertical-align: middle;
    margin-top: -3px;
    opacity: 0.7;
    margin-right: 0.3rem;
  }
`

export default function Home({ copyrightYear }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      <Head>
          <title>Tietosuojaseloste | Testausserveri</title>
          <meta name="description" content="Testausserveri on kaikille avoin yhteisö koodaamisesta, eettisestä hakkeroinnista ja yleisesti teknologiasta innostuneille nuorille." />
      </Head>
      <Content>
        <H1>Rekisteri - ja tietosuojaseloste</H1>
        <p>
          Tämä on Testausserveri ry:n EU:n yleisen tietosuoja-asetuksen (GDPR) mukainen rekisteri- ja tietosuojaseloste. Laadittu 27. toukokuuta 2022. Viimeisin muutos 27. toukokuuta 2022.
        </p>
        <Section>
          <h2>1. Rekisterinpitäjä</h2>
          <p>
            Testausserveri ry<br />
            <IoIosMail /> <a href="mailto:masterminds@testausserveri.fi">masterminds@testausserveri.fi</a>
          </p>
        </Section>
        <Section>
          <h2>2. Rekisteristä vastaava yhteyshenkilö</h2>
          <p>
            Mikael Hannolainen<br />
            hallituksen puheenjohtaja
          </p>
          <p>
            <IoIosMail /> <a href="mailto:mikael@testausserveri.fi">mikael@testausserveri.fi</a><br />
            <IoIosCall /> <a href="tel:+358403297365">+358 40 329 7365</a>
          </p>
        </Section>
        <Section>
          <h2>3. Rekisterin nimi</h2>
          <p>
            Yhteisön ja yhdistyksen jäsenrekisteri.
          </p>
        </Section>
        <Section>
          <h2>4. Oikeusperuste ja henkilötietojen käsittelyn tarkoitus</h2>
          <p>
            EU:n yleisen tietosuoja-asetuksen mukainen oikeusperuste henkilötietojen käsittelylle on
          </p>
          <ul>
            <li>henkilön suostumus</li>
            <li>yhdistyslaki 503/1989, 11 §</li>
          </ul>
          <p>
            Henkilötietojen käsittelyn tarkoitus on yhteydenpito jäseniin ja verkkopalvelujen sisällön tuottaminen.
          </p>
          <p>
            Tietoja ei käytetä automatisoituun päätöksentekoon tai profilointiin. 
          </p>
        </Section>
        <Section>
          <h2>5. Rekisterin tietosisältö</h2>
          <p>
            <IoLogoGithub />
            <a href="https://github.com/Testausserveri/testausapis/blob/715fe1fa313327124909aa94c16bcc3b059911da/src/database/schemas/userInfo.js">Rekisterin tietokantarakenne on avointa lähdekoodia ja tarkasteltavissa myös GitHubissa</a>.
          </p>
          <p>Rekisteriin tallennettavia tietoja ovat: </p>
          <ul>
            <li>
              Yhdistyksen jäsenyys
              <ul>
                <li>Etu- ja sukunimi</li>
                <li>Asuinkunta</li>
                <li>Sähköpostiosoite</li>
                <li>Reksiterinpitäjän merkinnät
                  <ul>
                    <li>Jäsenyys käsitelty kokouksessa</li>
                    <li>Myönnetyn Google Workspace -käyttäjätilin nimi</li>
                    <li>Jäsenyyden tila</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>Discord-käyttäjä
              <ul>
                <li>Sosiaalisen median integraatiot, mikäli erillinen suostumus annettu</li>
                <li>Käyttäjän nimi ja nimimerkki</li>
                <li>Käyttäjäkohtainen tunniste</li>
              </ul>
            </li>
            <li>
              Käyttäjien luoma data
              <ul>
                <li>Jäsenen osallisuus yhteisön projekteihin</li>
                <li>Jäsenen kuvaus itsestään</li>
              </ul>
            </li>
          </ul>
          <p>
            Discord-käyttäjäintegraatioon liittyvät tiedot päivitetään säännöllisesti useasti vuorokaudessa. Yhdistyksen rekisterin jäsentietoja eronneesta jäsenestä säilytetään enintään 2 kuukautta.
          </p>
          <p>
            Verkkosivuston vierailijoiden IP-osoitteita ja palvelun toiminnoille välttämättömiä evästeitä käsitellään oikeutetun edun perusteella mm. tietoturvasta huolehtimiseksi ja sivuston vierailijoiden tilastotietojen keruuta varten niissä tapauksissa, kun niiden voidaan katsoa olevan henkilötietoja. Kolmansien osapuolten evästeille pyydetään tarvittaessa suostumus erikseen.
          </p>
        </Section>
        <Section>
          <h2>6. Säännönmukaiset tietolähteet</h2>
          <p>
            Rekisteriin tallennettavat tiedot saadaan henkilöiltä mm. lomakkeilta, sähköpostitse, konelukemalla ne integraatioiden rajapinnoista ja muista tilanteista, joissa asiakas luovuttaa tietojaan.
          </p>
        </Section>
        <Section>
          <h2>7. Tietojen säännönmukaiset luovutukset ja tietojen siirto EU:n tai ETA:n ulkopuolelle</h2>
          <p>
            Tietoja ei luovuteta säännönmukaisesti muille tahoille. Tietoja voidaan julkaista siltä osin kuin niin on sovittu jäsenen kanssa.
          </p>
          <p>
            Tietoja ei siirretä EU:n tai ETA:n ulkopuolelle.
          </p>
        </Section>
        <Section>
          <h2>8. Rekisterin suojauksen periaatteet</h2>
          <p>
            Rekisterin käsittelyssä noudatetaan huolellisuutta ja tietojärjestelmien avulla käsiteltävät tiedot suojataan asianmukaisesti. Kun rekisteritietoja säilytetään Internet-palvelimilla, niiden laitteiston fyysisestä ja digitaalisesta tietoturvasta huolehditaan asiaankuuluvasti. Rekisterinpitäjä huolehtii siitä, että tallennettuja tietoja sekä palvelimien käyttöoikeuksia ja muita henkilötietojen turvallisuuden kannalta kriittisiä tietoja käsitellään luottamuksellisesti ja vain niiden luottamushenkilöiden toimesta, joiden työnkuvaan se kuuluu.
          </p>
        </Section>
        <Section>
          <h2>9. Tarkastusoikeus ja oikeus vaatia tiedon korjaamista</h2>
          <p>
            Jokaisella rekisterissä olevalla henkilöllä on oikeus tarkistaa rekisteriin tallennetut tietonsa ja vaatia mahdollisen virheellisen tiedon korjaamista tai puutteellisen tiedon täydentämistä. Mikäli henkilö haluaa tarkistaa hänestä tallennetut tiedot tai vaatia niihin oikaisua, pyyntö tulee lähettää sähköisesti rekisterinpitäjälle. Rekisterinpitäjä voi pyytää tarvittaessa pyynnön esittäjää todistamaan henkilöllisyytensä. Rekisterinpitäjä vastaa asiakkaalle EU:n tietosuoja-asetuksessa säädetyssä ajassa (pääsääntöisesti kuukauden kuluessa).
          </p>
        </Section>
        <Section>
          <h2>10. Muut henkilötietojen käsittelyyn liittyvät oikeudet</h2>
          <p>
            Rekisterissä olevalla henkilöllä on oikeus pyytää häntä koskevien henkilötietojen poistamiseen rekisteristä (&quot;oikeus tulla unohdetuksi&quot;). Niin ikään rekisteröidyillä on <a href="http://eur-lex.europa.eu/legal-content/FI/TXT/?uri=CELEX%3A32016R0679#d1e2144-1-1">muut EU:n yleisen tietosuoja-asetuksen mukaiset oikeudet</a> kuten henkilötietojen käsittelyn rajoittaminen tietyissä tilanteissa. Pyynnöt tulee lähettää sähköisesti rekisterinpitäjälle. Rekisterinpitäjä voi pyytää tarvittaessa pyynnön esittäjää todistamaan henkilöllisyytensä. Rekisterinpitäjä vastaa asiakkaalle EU:n tietosuoja-asetuksessa säädetyssä ajassa (pääsääntöisesti kuukauden kuluessa).
          </p>
        </Section>
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
