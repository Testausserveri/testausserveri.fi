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
export default function EventsPrivacy({ copyrightYear }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      <Head>
        <title>Tapahtumien osallistujarekisterin tietosuojaseloste | Testausserveri</title>
        <meta property="og:site_name" content="Testausserveri" />
        <meta property="og:title" content="Tapahtumien osallistujarekisterin tietosuojaseloste" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Content>
        <Breadcrumbs
          route={[
            { path: "/privacy/", name: "Tietosuoja" },
            { path: `/privacy/events`, name: "Tapahtumat" }
          ]} />
        <H1>Tapahtumien osallistujarekisterin tietosuojaseloste</H1>
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
          <p>Henkilötietoja käytetään tapahtumien toteuttamiseen ja tapahtumasta viestimiseen ilmoittautuneille.</p>
          <p>EU:n yleisen tietosuoja-asetuksen mukainen oikeusperuste henkilötietojen käsittelylle on henkilön suostumus (dokumentoitu, vapaaehtoinen, yksilöity, tietoinen ja yksiselitteinen).</p>
          <p>Tietoja ei käytetä automatisoituun päätöksentekoon tai profilointiin.</p>
        </Section>
        <Section>
          <h2>3.	Henkilötietojen säilytysaika</h2>
          <p>Henkilötietoja säilytetään vain niin kauan kuin tapahtuman järjestäminen sitä edellyttää. Ilmoittautumistiedot hävitetään viimeistään kuukauden kuluttua tapahtumasta. </p>
        </Section>
        <Section>
          <h2>4.	Käsiteltävät henkilötiedot</h2>
          <p>
            Testausserverin tapahtumien osallistujarekisteriin sisällytetään pääsääntöisesti osallistujan nimi ja sähköpostiosoite. 
          </p>
          <p>
            Tapahtumakohtaisesti rekisteriin voidaan sisällyttää myös muita tietoja, esimerkiksi puhelinnumero, erityisruokavalio ja huoltajan tiedot.
          </p>
        </Section>
        <Section>
          <h2>5.	Säännönmukaiset tietolähteet</h2>
          <p>Tietojen lähde on ilmoittautuja. Rekisteriin tallennettavat tiedot saadaan ilmoittautujilta www-lomakkeen kautta lähetetyistä viesteistä sekä sähköpostitse.</p>
          <p>Testausserverin jäsenen tiedot voidaan yhdistää käyttäjätilin perusteella yhdistyksen jäsenrekisteristä.</p>
        </Section>
        <Section>
          <h2>6.	Henkilötietojen käsittelijät ja vastaanottajat</h2>
          <p>Henkilötietoja käsittelee ainoastaan rekisterinpitäjien henkilöstö, joiden tehtävän hoitaminen edellyttää pääsyä tietoihin.</p>
          <p>Testausserveri käyttää Google Workspace -palvelua ilmoittautumistietojen keräämiseen ja käsittelyyn.</p>
        </Section>
        <Section>
          <h2>7.	Tietojen luovuttaminen</h2>
          <p>Tietoja ei luovuteta säännönmukaisesti muille tahoille. </p>
          <p>Testausserverillä on oikeus luovuttaa tapahtumailmoittautumisten sisältämiä henkilötietoja tapahtuman järjestämiseen osallistuville yhteistyötahoille.</p>
          <p>Viranomaisille henkilötietoja luovutetaan voimassa olevan lainsäädännön sallimissa ja velvoittamissa rajoissa.</p>
        </Section>
        <Section>
          <h2>8.	Tietojen siirto EU:n tai ETA-maiden ulkopuolelle</h2>
          <p>Perustietojen käsittelyyn liittyvät palvelut voivat toimia Euroopan unionin jäsenvaltioiden alueen tai Euroopan talousalueen ulkopuolella. Tietojen siirrossa noudatetaan tällöin tietosuojalainsäädännön vaatimuksia ja käytetään esimerkiksi Euroopan komission mallisopimuslausekkeita sovittaessa tietojen siirrosta henkilötietojen käsittelijätahon kanssa.</p>
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
          <p>Rekisteröidyllä on oikeus vaatia henkilötietojensa poistamista tai vastustaa niiden käsittelyä silloin kun se perustuu oikeutettuun etuun lähettämällä sähköpostia osoitteeseen <a href="mailto:host@testausserveri.fi">host@testausserveri.fi</a>.</p>

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
