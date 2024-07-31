import Head from 'next/head'
import styled from 'styled-components'
import { Content } from '../../components/Content/Content'
import { H1, H2 } from '../../components/Title/Title'
import { Footer } from '../../components/Footer/Footer'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import TestaushostBannerImg from '../../assets/testaushost-banner.png'
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs'
import { Section } from './members';
import { IoIosCall, IoIosMail, IoLogoGithub } from 'react-icons/io'

export const TwoColumn = styled.div`
    display: flex;
    gap: 1rem;
    >div {
        flex: 1;
    }
    @media screen and (max-width: 568px) {
      flex-direction: column;
    }
`;
export default function CtfPrivacy({ copyrightYear }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      <Head>
        <title>CTF-pelin tietosuojaseloste | Testausserveri</title>
        <meta property="og:site_name" content="Testausserveri" />
        <meta property="og:title" content="CTF-pelin tietosuojaseloste" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Content>
        <Breadcrumbs
          route={[
            { path: "/privacy/", name: "Tietosuoja" },
            { path: `/privacy/events`, name: "CTF-peli" }
          ]} />
        <H1>CTF-pelin tietosuojaseloste</H1>
        <p>
          Tämä tietosuojailmoitus sisältää Euroopan unionin (EU) tietosuoja-asetuksen (EU) 679/2016 13 ja 14 artiklan mukaiset tiedot rekisteröidylle (luonnolliselle henkilölle). Tämä ilmoitus annetaan rekisteröidylle henkilötietoja kerättäessä.
        </p>
        <Section>
          <h2>1. Rekisterinpitäjä</h2>
          <p>
            Testausserveri ry (3235794-4)<br />
            <IoIosMail /> <a href="mailto:board@testausserveri.fi">board@testausserveri.fi</a>
            <br /><br /> 
            Yhteyshenkilö: <br />
            Mikael Hannolainen <br />
            <IoIosMail /> <a href="mailto:mikael@testausserveri.fi">mikael@testausserveri.fi</a>
          </p>
        </Section>
        <Section>
          <h2>2.	Henkilötietojen käsittelyn tarkoitus ja oikeusperuste</h2>
          <p>Henkilötietoja käytetään Testausserverin CTF-pelin toteuttamiseen ja suoritusten seurantaan.</p>
          <p>EU:n yleisen tietosuoja-asetuksen mukainen oikeusperuste henkilötietojen käsittelylle on henkilön suostumus (dokumentoitu, vapaaehtoinen, yksilöity, tietoinen ja yksiselitteinen).</p>
          <p>Tietoja ei käytetä automatisoituun päätöksentekoon tai profilointiin.</p>
        </Section>
        <Section>
          <h2>3.	Käsiteltävät henkilötiedot</h2>
          <p>
            Testausserverin CTF-pelin rekisteriin sisällytetään osallistujan nimimerkki ja sähköpostiosoite. 
          </p>
          <p>
            Lisäksi palvelin kerää lokitietoja, jotka sisältävät esimerkiksi IP-osoitteita, selaimen tyyppejä ja käyntiaikoja. Näitä tietoja käytetään palvelun turvallisuuden ja toimivuuden varmistamiseen.
          </p>
        </Section>
        <Section>
          <h2>4.	Henkilötietojen säilytysaika</h2>
          <p>Osallistujan perustietoja ja suoritustietoja säilytetään 2 vuotta viimeisimmästä suorituksesta lukien. Lokitietoja säilytetään enintään kuusi kuukautta.</p>
        </Section>
        <Section>
          <h2>5.	Säännönmukaiset tietolähteet</h2>
          <p>Tietojen lähde on osallistuja. Rekisteriin tallennettavat tiedot saadaan osallistujalta palveluun rekisteröinnin yhteydessä sekä osallistujan palveluun syöttämistä tiedoista.</p>
        </Section>
        <Section>
          <h2>6.	Henkilötietojen käsittelijät ja vastaanottajat</h2>
          <p>Henkilötietoja käsittelee ainoastaan rekisterinpitäjien henkilöstö, joiden tehtävän hoitaminen edellyttää pääsyä tietoihin.</p>
          <p>Palvelimet sijaitsevat Suomessa ja Ruotsissa.</p>
        </Section>
        <Section>
          <h2>7.	Tietojen luovuttaminen</h2>
          <p>Tietoja ei luovuteta säännönmukaisesti muille tahoille. </p>
          <p>Testausserverillä on oikeus luovuttaa osallistujien henkilötietoja CTF-pelin järjestämiseen osallistuville yhteistyötahoille.</p>
          <p>Viranomaisille henkilötietoja luovutetaan voimassa olevan lainsäädännön sallimissa ja velvoittamissa rajoissa.</p>
        </Section>
        <Section>
          <h2>8.	Tietojen siirto EU:n tai ETA-maiden ulkopuolelle</h2>
          <p>Rekisterin tietoja ei siirretä EU/ETA-maiden ulkopuolelle.</p>
        </Section>
        <Section>
          <h2>9. Rekisterin suojauksen periaatteet</h2>
          <p>Rekisteriin tallennettavat tiedot suojataan asianmukaisesti. Tiedot ovat käyttäjätunnuksilla, salasanoilla ja muilla tarvittavilla teknillisillä toimenpiteillä suojattuja. Henkilötietoihin on pääsy vain niillä henkilöillä, jotka tarvitsevat tietoja tehtävissään.</p>
        </Section>
        <Section>
          <h2>10.	Rekisteröidyn oikeudet</h2>
          <h3>10.1.	Oikeus tarkastaa tiedot</h3>
          <p>Rekisteröidyllä on oikeus tarkastaa, mitä häntä koskevia tietoja on tallennettu ja saada jäljennös tiedoista. Rekisteröidyn tulee lähettää tarkastuspyyntö <a href="mailto:board@testausserveri.fi">board@testausserveri.fi</a>-sähköpostiosoitteeseen. Rekisteröidyn tulee esittää tarkastuspyynnössä tiedon etsimiseen tarpeelliset tiedot. Tarvittaessa rekisterinpitäjä kysyy lisätietoja rekisteröidyn tunnistamiseksi.</p>
          <p>Tarkastuspyynnön vastaus toimitetaan tarkastuspyynnön esittäneelle sähköpostitse. </p>

          <h3>10.2.	Oikeus tiedon korjaamiseen</h3>
          <p>Rekisterinpitäjä huolehtii omien mahdollisuuksiensa mukaan käsittelemiensä henkilötietojen laadusta. Rekisterinpitäjä oikaisee, poistaa tai täydentää virheellisen tai tarpeettoman henkilötiedon oma-aloitteisesti tai rekisteröidyn vaatimuksesta.</p>

          <h3>10.3.	Oikeus käsittelyn rajoittamiseen</h3>
          <p>Rekisteröidyllä on oikeus siihen, että rekisterinpitäjä rajoittaa käsittelyä, jos rekisteröity esimerkiksi kiistää henkilötietojen paikkansapitävyyden. Tällöin käsittelyä rajoitetaan ajaksi, jonka kuluessa rekisterinpitäjä voi varmistaa niiden paikkansapitävyyden.</p>

          <h3>10.4.	Oikeus vaatia tietojen poistamista tai vastustaa tietojen käsittelyä</h3>
          <p>Rekisteröidyllä on oikeus vaatia henkilötietojensa poistamista tai vastustaa niiden käsittelyä silloin kun se perustuu oikeutettuun etuun lähettämällä sähköpostia osoitteeseen <a href="mailto:board@testausserveri.fi">board@testausserveri.fi</a>.</p>

          <h3>10.5.	Oikeus tehdä valitus valvontaviranomaiselle</h3>
          <p>Rekisteröity voi tehdä henkilötietojen käsittelystä valituksen valvovalle viranomaiselle, joka on tietosuojavaltuutettu.</p>
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
