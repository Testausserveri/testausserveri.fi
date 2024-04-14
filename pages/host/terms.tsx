import Head from 'next/head'
import styled from 'styled-components'
import { Content } from '../../components/Content/Content'
import { H1, H2 } from '../../components/Title/Title'
import { Footer } from '../../components/Footer/Footer'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import TestaushostBannerImg from '../../assets/testaushost-banner.png'
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs'
import { Section } from '../privacy';
import { IoIosCall, IoIosMail, IoLogoGithub } from 'react-icons/io'

export default function HostTerms({ copyrightYear }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      <Head>
        <title>Testaushost käyttöehtosopimus | Testausserveri</title>
        <meta name="description" content="Testausserveri ry yhdessä Osphostin kanssa tarjoavat nuorille maksutonta palvelintilaa. Liity yhdistyksen jäseneksi ja ota sivutilasi käyttöön!" />
        <meta property="og:site_name" content="Testausserveri" />
        <meta property="og:title" content="Testaushost käyttöehtosopimus" />
        <meta property="og:image" content={"https://testausserveri.fi" + TestaushostBannerImg.src} />
        <meta property="og:description" content="Testausserveri ry yhdessä Osphostin kanssa tarjoavat nuorille maksutonta palvelintilaa. Liity yhdistyksen jäseneksi ja ota sivutilasi käyttöön!" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Content>
        <Breadcrumbs
          route={[
            { path: "/host/", name: "Palvelintila" },
            { path: `/host/privacy`, name: "Käyttöehtosopimus" }
          ]} />
        <H1>Testaushost käyttöehtosopimus</H1>
        <Section>
            <h2>1. Johdanto</h2>
            <p>Tämän sopimuksen osapuolina ovat Testausserveri ry sekä Testaushost-palveluita (jäljempänä ”Palvelu”) käyttävä yksityishenkilö (jäljempänä ”Käyttäjä”). Palveluilla tarkoitetaan Testausserveri ry:n ja Osphostin yhdessä (jäljempänä ”Palveluntarjoaja”) Käyttäjälle tarjoamia maksuttomia webhosting-, shell-, DNS-, sähköposti- tai muita internet-palveluita (jäljempänä ”Palvelinkapasiteetti”). </p>
            <p>Testausserveri ry tarjoaa Palveluita vain yhdistyksensä varsinaisille jäsenille.</p>
            <p>Käyttämällä Palveluita Käyttäjä sitoutuu noudattamaan näitä käyttöehtoja.</p>
        </Section>
        <Section>
            <h2>2. Käyttöoikeus</h2>
            <p>Käyttöoikeus Palveluun on henkilökohtainen. Käyttäjä ei saa luovuttaa tai myydä käyttöoikeuttaan kolmannelle osapuolelle.</p>
            <p>Käyttöoikeus alkaa siitä hetkestä, kun Käyttäjälle luodaan omasta pyynnöstä käyttöoikeus Palveluun. Käyttöoikeus on voimassa toistaiseksi, mutta sekä Käyttäjällä että Palveluntarjoajalla on oikeus peruuttaa käyttöoikeus. </p>
            <p>Käyttäjä voi päättää käyttöoikeutensa milloin tahansa ilmoittamalla siitä Testausserveri ry:n hallitukselle kirjallisesti. Palveluntarjoaja pidättää oikeuden peruuttaa käyttöoikeuden välittömästi väärinkäytöstapauksissa, yhdistyksen jäsenyyden päättyessä tai mikäli Käyttäjä rikkoo tämän käyttöehtosopimuksen määräyksiä.</p>
            <p>Käyttöoikeuden päätyttyä, Palveluntarjoaja poistaa Käyttäjän Palvelinkapasiteetin ja kaikki siihen liittyvät tiedot 30 vuorokauden kuluessa. Tietojen poistamisen jälkeen niitä ei voida palauttaa.</p>
            <p>Käyttöoikeuden päättyminen ei vapauta Käyttäjää mahdollisista velvoitteista tai vastuista, jotka ovat syntyneet ennen käytön lopettamista.</p>
        </Section>
        <Section>
            <h2>3. Käytön rajoitukset</h2>
            <p>Tietoliikennehäiriköinti, laittomien tietojen/tiedostojen hallussapito tai muu epäsovelias käyttäytyminen Palvelun alaisuudessa on kielletty. Tämänlaista käyttäytymistä havaittaessa Palveluntarjoaja tulee poistamaan välittömästi asianomaisen tunnuksen, sekä ilmoittamaan Viranomaisille tarpeen vaatiessa.</p>
            <p>Käyttäjä ei saa yrittää saada haltuunsa tai käyttää ylimääräisiä käyttäjäoikeuksia ja/tai resursseja, joita ei ole määritelty Palveluun kuuluviksi. Käyttäjä on velvollinen ilmoittamaan ylläpitäjälle havaitsemistaan tietoturvapoikkeamista ja henkilöistä, jotka rikkovat käyttöehtoja.</p>
            <p>Palveluntarjoajilla on oikeus Suomen lain mukaisiin seuranta- ja valvontatoimenpiteisiin, mikäli on syytä epäillä Käyttäjän häiriköivän tai hänen syyllistyneen laittomiin tai säännönvastaisiin toimenpiteisiin.</p>
        </Section>
        <Section>
            <h2>4. Vastuu ja vahingonkorvaus</h2>
            <p>Käyttäjä vastaa täysimääräisesti kaikesta Palvelinkapasiteettinsa kautta tapahtuvasta toiminnasta ja mahdollisista sen seurauksista. </p>
            <p>Käyttäjä vapauttaa Palveluntarjoajan kaikesta vastuusta, joka liittyy Käyttäjän sivutilan käyttöön tai väärinkäyttöön.</p>
            <p>Käyttäjä sitoutuu korvaamaan Palveluntarjoajalle kaikki vahingot, jotka aiheutuvat Käyttäjän toiminnasta Palvelinkapasiteetilla, mikäli Palveluntarjoaja joutuu kolmannen osapuolen vaatimuksesta korvausvastuuseen.</p>
            <p>Palveluntarjoaja ei ota vastuuta Käyttäjän Palvelinkapasiteetin tai siellä säilytettävien tietojen varmuuskopioinnista. Käyttäjän on itse huolehdittava tärkeiden tietojensa säännöllisestä varmuuskopioinnista.</p>
            <p>Palveluntarjoaja ei myöskään takaa säilytettävien tietojen eheyttä, saatavuutta tai luotettavuutta. Käyttäjä käyttää Palvelinkapasiteettia omalla vastuullaan, ja Palveluntarjoaja ei ole korvausvelvollinen mistään mahdollisista tiedon menetyksistä tai vahingoista, jotka johtuvat tiedon katoamisesta, vahingoittumisesta tai muusta vastaavasta syystä.</p>
            <p>Palveluntarjoaja pyrkii tarjoamaan parhaan mahdollisen tuen ja ylläpidon Palvelinkapasiteetille, mutta ei voi taata keskeytyksetöntä tai virheetöntä palvelua. Käyttäjän on varauduttava mahdollisiin palvelukatkoihin ja muihin häiriöihin.</p>
        </Section>
        <Section>
            <h2>5. Tietoturva</h2>
            <p>Palveluntarjoaja pyrkii varmistamaan sivutilan ja käyttäjätilien turvallisuuden, mutta ei voi taata täydellistä suojaa tietomurroilta tai muilta turvallisuusuhkilta.</p>
            <p>Käyttäjä sitoutuu noudattamaan hyviä tietoturvakäytäntöjä, kuten käyttämään vahvoja salasanoja ja pitämään ohjelmistonsa ajan tasalla.</p>
        </Section>
        <Section>
            <h2>6. Muutokset käyttöehtosopimukseen</h2>
            <p>Testausserveri ry pidättää oikeuden tehdä muutoksia näihin käyttöehtoihin. Muutokset tulevat voimaan heti, kun ne on julkaistu Testausserveri ry:n verkkosivuilla.</p>
            <p>Testausserveri ry:llä on oikeus siirtää tämä sopimus kolmansille osapuolille. Käyttäjällä ei ole oikeutta siirtää sopimusta kolmansille osapuolille.</p>
        </Section>
        <Section>
            <h2>8. Sovellettava laki ja riitojen ratkaisu</h2>
            <p>Tämän sopimuksen ehtoihin sovelletaan Suomen lakia. Tästä sopimuksesta johtuvat riidat pyritään ensisijaisesti ratkaisemaan osapuolten välisissä neuvotteluissa. Mikäli neuvotteluissa ei löydetä ratkaisua kolmenkymmenen (30) vuorokauden kuluessa osapuolten asiaa koskevasta kirjallisesta ilmoituksesta toiselle osapuolelle, ratkaistaan erimielisyys ensimmäisenä asteena Helsingin käräjäoikeudessa.</p>
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
