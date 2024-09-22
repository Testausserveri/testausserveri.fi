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
export default function HostPrivacy({ copyrightYear }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      <Head>
        <title>Testaushost tietosuojakäytäntö | Testausserveri</title>
        <meta name="description" content="Testausserveri ry yhdessä Osphostin kanssa tarjoavat nuorille maksutonta palvelintilaa. Liity yhdistyksen jäseneksi ja ota sivutilasi käyttöön!" />
        <meta property="og:site_name" content="Testausserveri" />
        <meta property="og:title" content="Testaushost tietosuojakäytäntö" />
        <meta property="og:image" content={"https://testausserveri.fi" + TestaushostBannerImg.src} />
        <meta property="og:description" content="Testausserveri ry yhdessä Osphostin kanssa tarjoavat nuorille maksutonta palvelintilaa. Liity yhdistyksen jäseneksi ja ota sivutilasi käyttöön!" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Content>
        <Breadcrumbs
          route={[
            { path: "/privacy/", name: "Tietosuoja" },
            { path: `/privacy/host`, name: "Testaushost" }
          ]} />
        <H1>Testaushost tietosuojakäytäntö</H1>
        <p>
          Tämä tietosuojailmoitus sisältää Euroopan unionin (EU) tietosuoja-asetuksen (EU) 679/2016 13 ja 14 artiklan mukaiset tiedot rekisteröidylle (luonnolliselle henkilölle). Tämä ilmoitus annetaan rekisteröidylle henkilötietoja kerättäessä.
        </p>
        <Section>
          <h2>1. Rekisterinpitäjät</h2>
          <TwoColumn>
            <div>
              <p>
                <b>Testausserveri ry</b><br /> 
                Yhteyshenkilö: <br />
                Mikael Hannolainen <br />
                <IoIosMail /> <a href="mailto:mikael@testausserveri.fi">mikael@testausserveri.fi</a>
              </p>
            </div>
            <div>
              <p>
                <b>Osphost ry</b> <br /> 
                Yhteyshenkilö: <br />
                Jani Hiltunen <br />
                <IoIosMail /> <a href="mailto:jmh@osphost.fi">jmh@osphost.fi</a>
              </p>
            </div>
          </TwoColumn>
          <p>
            Rekisterinpitäjiin yhdessä voi olla myös yhteydessä sähköpostitse <a href="mailto:host@testausserveri.fi">host@testausserveri.fi</a>.
          </p>
        </Section>
        <Section>
          <h2>2.	Henkilötietojen käsittelyn tarkoitus ja oikeusperuste</h2>
          <p>Henkilötietojen käsittelyn tarkoitus on käyttäjälle rekisteröityjen webhosting-, shell-, DNS-, sähköposti- tai muiden internet-palveluiden toteuttaminen. </p>
          <p>Henkilötietojen käsittelyn oikeusperuste on henkilön ja Testausserveri ry:n välinen sopimus.</p>
          <p>Tietoja ei käytetä automatisoituun päätöksentekoon tai profilointiin.</p>
        </Section>
        <Section>
          <h2>3.	Henkilötietojen säilytysaika</h2>
          <p>Henkilötietoja säilytetään toistaiseksi tietojen antamisesta alkaen, mutta enintään 30 vuorokautta tietojen antamisesta alkaen, mikäli käyttöoikeutta ei hyväksytä. Puretun käyttöoikeuden jälkeen henkilötietoja säilytetään enintään 30 vuorokautta. </p>
        </Section>
        <Section>
          <h2>4.	Käsiteltävät henkilötiedot</h2>
          <p>Käsittelemme seuraavia henkilötietoryhmiä:</p>
          <ul>
            <li>Perustiedot
              <ul>
                <li>Yhdistyksen jäsenen nimi</li>
                <li>Yhdistykseltä jäsenelle myönnetty sähköpostiosoite (@testausserveri.fi)</li>
                <li>Julkinen SSH-avain</li>
                <li>Sopimuspohjaiset tiedot</li>
              </ul>
            </li>
            <li>Lokitiedot
              <ul>
                <li>Käyttäjän IP-osoite, user-agent-tieto</li>
                <li>Istunnon yksilöimisen tiedot</li>
              </ul>
            </li>
          </ul>
        </Section>
        <Section>
          <h2>5.	Säännönmukaiset tietolähteet</h2>
          <p>Yhdistyksen jäsenen tiedot saadaan yhdistyksen jäsenrekisteristä. Jäsen tunnistetaan käyttöoikeuden hakemisen yhteydessä henkilökohtaisilla jäsentunnuksilla kirjautumalla.</p>
        </Section>
        <Section>
          <h2>6.	Henkilötietojen käsittelijät ja vastaanottajat</h2>
          <p>Henkilötietoja käsittelee ainoastaan rekisterinpitäjien henkilöstö, joiden tehtävän hoitaminen edellyttää pääsyä tietoihin.</p>
          <p>Käytämme Google Workspace -palvelua Perustietojen keräämiseen ja käsittelyyn.</p>
        </Section>
        <Section>
          <h2>7.	Tietojen luovuttaminen</h2>
          <p>Jäsenelle myönnetyn sähköpostiosoitteen nimiosaa voidaan käyttää julkisesti käyttäjän aliverkkotunnuksessa. Muilta osin tietoja ei luovuteta säännönmukaisesti muille tahoille. Tietoja voidaan julkaista siltä osin kuin niin on sovittu jäsenen kanssa.</p>
          <p>Viranomaisille henkilötietoja luovutetaan voimassa olevan lainsäädännön sallimissa ja velvoittamissa rajoissa.</p>
        </Section>
        <Section>
          <h2>8.	Tietojen siirto EU:n tai ETA-maiden ulkopuolelle</h2>
          <p>Perustietojen käsittelyyn liittyvät palvelut voivat toimia Euroopan unionin jäsenvaltioiden alueen tai Euroopan talousalueen ulkopuolella. Tietojen siirrossa noudatetaan tällöin tietosuojalainsäädännön vaatimuksia ja käytetään esimerkiksi Euroopan komission mallisopimuslausekkeita sovittaessa tietojen siirrosta henkilötietojen käsittelijätahon kanssa.</p>
        </Section>
        <Section>
          <h2>9.	Rekisteröidyn oikeudet</h2>
          <h3>9.1.	Oikeus tarkastaa tiedot</h3>
          <p>Rekisteröidyllä on oikeus tarkastaa, mitä häntä koskevia tietoja on tallennettu ja saada jäljennös tiedoista. Rekisteröidyn tulee lähettää tarkastuspyyntö <a href="mailto:host@testausserveri.fi">host@testausserveri.fi</a>-sähköpostiosoitteeseen. Rekisteröidyn tulee esittää tarkastuspyynnössä tiedon etsimiseen tarpeelliset tiedot. Tarvittaessa rekisterinpitäjä kysyy lisätietoja rekisteröidyn tunnistamiseksi.</p>
          <p>Tarkastuspyynnön vastaus toimitetaan tarkastuspyynnön esittäneelle sähköpostitse. </p>

          <h3>9.2.	Oikeus tiedon korjaamiseen</h3>
          <p>Rekisterinpitäjät huolehtivat omien mahdollisuuksiensa mukaan käsittelemiensä henkilötietojen laadusta. Rekisterinpitäjät oikaisevat, poistavat tai täydentävät virheellisen tai tarpeettoman henkilötiedon oma-aloitteisesti tai rekisteröidyn vaatimuksesta.</p>

          <h3>9.3.	Oikeus käsittelyn rajoittamiseen</h3>
          <p>Rekisteröidyllä on oikeus siihen, että rekisterinpitäjät rajoittavat käsittelyä, jos rekisteröity esimerkiksi kiistää henkilötietojen paikkansapitävyyden. Tällöin käsittelyä rajoitetaan ajaksi, jonka kuluessa rekisterinpitäjä voi varmistaa niiden paikkansapitävyyden.</p>

          <h3>9.4.	Oikeus vaatia tietojen poistamista tai vastustaa tietojen käsittelyä</h3>
          <p>Rekisteröidyllä on oikeus vaatia henkilötietojensa poistamista tai vastustaa niiden käsittelyä silloin kun se perustuu oikeutettuun etuun lähettämällä sähköpostia osoitteeseen <a href="mailto:host@testausserveri.fi">host@testausserveri.fi</a>.</p>

          <h3>9.5.	Oikeus tehdä valitus valvontaviranomaiselle</h3>
          <p>Rekisteröity voi tehdä henkilötietojen käsittelystä valituksen valvovalle viranomaiselle, joka on tietosuojavaltuutettu.</p>
        </Section>
      </Content>
      <Footer />
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
