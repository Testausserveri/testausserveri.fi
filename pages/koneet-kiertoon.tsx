import Head from 'next/head'
import styled from 'styled-components'
import { Content } from '../components/Content/Content'
import { H1 } from '../components/Title/Title'
import { Footer } from '../components/Footer/Footer'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { Gallery } from '../components/Gallery/Gallery'
import { InfoBox } from '../components/InfoBox/InfoBox'
import ComputersInCarImg from '../assets/koneet-kiertoon.jpeg'
import Image from 'next/image'
import { CapsuleButton } from '../components/Button/CapsuleButton'

const Section = styled.div`

  margin-top: 3rem;
  margin-bottom: 1rem;

  h2 {
    margin: 0;
    padding: 0;
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 1.8rem;
  }

  h3 {
    margin: 0;
    padding: 0;
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 1.rem;
  }

  h4 {
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
const Device = styled.div`

  display: flex;
  margin-top: 1rem;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: rgba(108, 108, 108, 0.09);
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-sizing: border-box;

  p, h3 {
    width: 100%;
  }

  div {
    width: 65%;
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: stretch;
    flex-wrap: wrap;
  }
  div:nth-child(2) {
    width: 35%;
  }

  div > ul {
    width: 100%;
    margin-top: -1rem;
  }

  div > ul > li {
    height: 70%;
  }
`;

const DeviceAmount = styled.div`
  text-transform: uppercase;
  color: rgba(255,255,255,0.6);
  width: auto !important;
  text-align: left;
  margin-bottom: 1rem !important;
`
const SpecList = styled.div`

  display: flex;
  margin-top: 1rem;
  flex-direction: column;
  min-width: 50%
  height: 
  justify-content: flex-start;

  p {
    width: 100%;
    margin-top: 0.2rem;
  }

  @media(max-width: 1090px) {
    width: 100% !important;
  }
`

const ResponsiveSplitFlex = styled.div`

  display: flex;
  width: 100% !important;
  flex-wrap: nowrap !important;

  div > div {
    height: 80%;
    width: 100%;
  }


  @media(max-width: 1090px) {
    flex-direction: column-reverse;
    align-items: flex-start;

    div:nth-child(2) {
      flex-wrap: nowrap;
      width: 100%;
      height: 20rem;

      ul {
        margin-top: 1rem;
        margin-left: 1rem;
      }

      ul > li {
        height: 3rem;
        margin-right: 100%;
        margin-bottom: 0.5rem;
      }
    }
  }

  @media(max-width: 776px) {

    div:nth-child(2) {
      width: 100%;
      height: auto;
      flex-wrap: wrap;
      margin-top: unset;
      height: 25rem !important;

      ul {
        margin-block: 1rem;
        margin-left: unset;
      }

      ul > li {
        height: 3rem;
        margin-right: 0.5rem;
      }
    }
  }
`

const SideFigure = styled.figure`
  width: 300px;
  float: right;
  margin: 0 0 0 1rem;
  @media only screen and (max-width: 600px) {
    width: 100%;
    margin: 0.5rem 0 1.5rem 0;
    img {
      width: 100%;
      object-fit: cover;
    }
  }
`

export default function ComputerShare({ copyrightYear }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      <Head>
          <title>Koneet kiertoon | Testausserveri</title>
          <meta name="description" content="Testausserveri ry:n Koneet Kiertoon -kampanjassa lahjoitetaan käytettyjä tietokoneita ja palvelimia. Vanhoille laitteille haetaan uusi elämä. Täytä hakemus ja kerro, miten käyttäisit lahjoitettua laitetta!" />
          <meta property="og:site_name" content="Testausserveri" />
          <meta property="og:title" content="Koneet kiertoon -kampanja" />
          <meta property="og:image" content={"https://testausserveri.fi" + ComputersInCarImg.src} />
          <meta property="og:description" content="Testausserveri ry:n Koneet Kiertoon -kampanjassa lahjoitetaan käytettyjä tietokoneita ja palvelimia. Vanhoille laitteille haetaan uusi elämä. Täytä hakemus ja kerro, miten käyttäisit lahjoitettua laitetta!" />
          <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Content>

        <H1>Koneet kiertoon -kampanja</H1>
        <InfoBox>
          <span>Tämän sivun tietoja täydennetään vielä.</span>
        </InfoBox>

        <SideFigure>
          <Image src={ComputersInCarImg} placeholder="blur" alt="Muutama kampanjan tietokone tuotu kesäkuun 2023 Testausmeetiin jaettavaksi" width="300" style={{borderRadius: "0.5rem", marginBottom: "0.5rem"}} />
          <figcaption>Muutama kampanjan tietokone tuotu kesäkuun 2023 Testausmeetiin jaettavaksi</figcaption>
        </SideFigure>
        <p>
          Testausserveri ry organisoi Koneet Kiertoon kampanjan anonyymin lahjoittajan käytettyjen tietokoneiden ja palvelimien lahjoittamista varten.
        </p>
        <p>
          Kampanjan tavoitteena on antaa turhiksi jääneille vanhoille, mutta edelleen moniin eri käyttötarkoituksiin sopiville, tietokoneille ja palvelimille uusi elämä.
          Jaossa on toimistokäytössä olleita pöytäkoneita ja kannettavia, sekä tuotantovalmiita palvelimia.
        </p>
        <p>
          Jos perheessänne on pientä päivitystä kaipaava nuori lupaus, oma läppäri vetelee viimeisiä tai haluat kehittää testaus-GPT:n, täytä hakemus ja kerro mitä tekisit lahjoitetulla laitteella!
        </p>
        <Section>
          <h2>Lahjoitettavat laitteet</h2>
          <p>
            Tässä on alustava lista kaikista lahjoitettavista laitteista ja niiden eri konfiguraatioista. Ilmoitetut määrät saattavat muuttua, mikäli osa laitteista on rikkinäisiä tai vaatii varaosia.
            Kaikki laitteet jaetaan puhdistettuina ja testattuina.
            <br />
            <b>Kaikkien laitteiden yhteydessä annetaan kyseiseen laitteeseen sopiva virtalähde/kaapeli.</b>
          </p>
          <Device>
            <DeviceAmount>Jäljellä 12 / 15 ⤬</DeviceAmount>
            <h3>HP Workstation Z240</h3>
            <p>
              Nämä HP:n Workstation koneet ovat täydellisiä kevyeen jokapäiväiseen käyttöön ja palvelimeksi hurisemaan vaikka oman huoneen nurkkaan.
              Koneet ovat hyvässä kunnossa, mutta niiden lämpötahna on suhteellisen vanhaa, joten sen vaihtamisella koneista saa varmasti lisää tehoa.
              Koneiden koteloissa saattaa olla kaikenkokoisia pintanaarmuja.
              Koneen eri konfiguraatiot ovat valittavissa hakulomakkeessa. Valitsethan itsellesi sopivimman vaihtoehdon ja perustele valintaasi hakemuksessa,
              jotta tarvittaessa voidaan valita parhain mahdollinen vaihtoehtoinen konfiguraatio.
            </p>
            <ResponsiveSplitFlex>
              <SpecList>
                <h4>Tekniset tiedot</h4>
                <p><b>Kotelo:</b> Torni</p>
                <p><b>Suoritin:</b> Intel Core i7-7700 (3.60 GHz - 4.20 GHz, 8 Mt, 4 ydintä)</p>
                <p>
                  <b>Muisti:</b>
                  <br />
                  &nbsp;16 Gt (2x8) DDR4-2400 / DDR4-2666
                  <br />
                  &nbsp;4 muistikantaa, maks. 64 Gt</p>
                <p><b>Piirisarja:</b> ?</p>
                <p>
                  <b>Näytönohjain:</b>
                  <br />
                  &nbsp;NVIDIA QUADRO P2000 (1024 CUDA ydintä, 5 Gt GDDR5, DX12) /
                  <br />
                  &nbsp;NVIDIA QUADRO K2000 (384 CUDA ydintä, 2 Gt GDDR5, DX11) /
                  <br />
                  &nbsp;NVIDIA QUADRO 2000 (192 CUDA ydintä, 1 Gt GDDR5, DX11)
                </p>
                <p>
                  <b>Kiintolevy:</b>
                  <br />
                  &nbsp;Samsung 860 EVO (1 Tt) /
                  <br />
                  &nbsp;Micron 1100 (256 Gt) /
                  <br />
                  &nbsp;PCIe M.2 SSD ??? (? Gt, ?Gt/s)
                </p>
                <p><b>Optinen asema:</b> Super Multi DVD Writer (GUD1N, HP)</p>              
                <p><b>Verkko-ominaisuudet:</b> ?</p>
                <p>
                  <b>Laajennuspaikat:</b>
                  <br />
                  &nbsp;PCIe Gen3 x1 (2 kpl),
                  <br />
                  &nbsp;PCIe Gen3 x16 (1kpl),
                  <br />
                  &nbsp;PCIe Gen3 x16 (4 linjaa kytketty, 1kpl),
                  <br />
                  &nbsp;DDR4-muistipaikkoja (4 kpl) ja
                  <br />
                  &nbsp;SATA 6 Gt/s -liitäntöjä (4 kpl, sisäisiä)
                  <br />
                </p>
                <p><b>Liitännät:</b>                 &nbsp;SD-korttipaikka (1 kpl, edessä)</p>
                <p><b>Käyttöjärjestelmä:</b>                 &nbsp;Osassa Windows lisenssi.</p>
                <p><b>Virtalähde:</b> 400W (80 PLUS PLATINUM, HP)</p>
                <p><b>Mitat:</b> 40 x 44 x 17 (cm)</p>
                <p><b>Paino:</b> n. ?kg (riippuen kokoonpanosta)</p>
              </SpecList>
              <Gallery media={
                [
                  "/computer-sharing-assets/workstationFrontSide.png",
                  "/computer-sharing-assets/workstationInternalsSide.png",
                  "/computer-sharing-assets/workstationBackSide.png"
                ].map((str) => ({ url: str }))
              }/>
            </ResponsiveSplitFlex>
            <p>Huom. kuvassa olevasta koneesta puuttuu kiintolevy. Tämä oli kuvaajan moka. Kaikissa koneissa on joku ylhäällä mainituista kiintolevyistä.</p>
          </Device>
          <Device>
            <DeviceAmount>Jäljellä 2 / 9 ⤬</DeviceAmount>
            <h3>HP EliteBook 840 G5</h3>
            <p>
              Nämä päivittäisessä toimistokäytössä olleet kannettavat ovat hyvässä kunnossa muutamia pintanaarmuja lukuun ottamatta.
              Kokonaisuutena tämä HP:n kannettava on oikein toimiva päivittäiseen käyttöön esimerkiksi ohjelmointia, kevyttä pelaamista tai opiskelua varten.
              Modernit ominaisuudet, kuten Windows Hello, antavat tälle kannettavalle modernin tuntuman sen tukevien metallisten rakenteiden kanssa.
            </p>
            <ResponsiveSplitFlex>
              <SpecList>
                <h4>Tekniset tiedot</h4>
                <p><b>Suoritin:</b> i5-8250U (1.60 GHz - 3.60 GHz, 4 ydintä)</p>
                <p><b>Muisti:</b> 8 Gt (1x8) DDR4-PC4-2400 SODIMMS (1/2 paikkaa käytössä)</p>
                <p><b>Näytönohjain:</b> Intel UHD Graphics 620 (integroitu)</p>
                <p><b>Kiintolevy:</b> 256 Gt Samsung MVZLB256HAHQ-000H1</p>
                <p>
                  <b>Liitännät:</b>
                  <br />
                  &nbsp;Thunderbolt (USB-C liitin)
                  <br />
                  &nbsp;Ethernet (RJ45)
                  <br />
                  &nbsp;2x USB 3.1 Gen 1
                  <br />
                  &nbsp;Smartcard lukija
                  <br />
                  &nbsp;&quot;Docking&quot; liitin
                  <br />
                  &nbsp;HDMI 1.4b
                  <br />
                  &nbsp;Micro-Sim slotti
                  <br />
                  &nbsp;Kuuloke ja mikrofoni komboportti
                  <br />
                  &nbsp;AC-virtaportti
                </p>
                <p><b>Windows Hello:</b> IR-kamerat ja sormenjälkitunnistin.</p>
                <p><b>Lisätietoja:</b> <a href="https://support.hp.com/ca-en/document/c05903000">Valmistajan tuotesivu</a></p>
              </SpecList>
              <Gallery media={
                [
                  "/computer-sharing-assets/newerLaptopFront.png",
                  "/computer-sharing-assets/newerLaptopSideRight.png"
                ].map((str) => ({ url: str }))
              }/>
            </ResponsiveSplitFlex>
          </Device>
          <Device>
            <DeviceAmount>Jäljellä 11 / 11 x</DeviceAmount>
            <h3>HP EliteBook 820 G4</h3>
            <p>
              Nämä päivittäisessä toimistokäytössä olleet kannettavat ovat suhteellisen hyvässä kunnossa. Kannettavissa on kaikenlaisia naarmuja ja käytön jälkiä.
              Kokonaisuutena tämä HP:n kannettava on hyvä kevyempään käyttöön. Ikänsä takia näiden kannettavien näytöissä saattaa olla &quot;burn-in&quot; jälkiä.
              Kannettavan muovinen kotelo ja vanhahtava ulkomuoto antavat kuitenkin turhan synkän kuvan niistä. Näistä kannettavista voi saada vielä paljon irti!
            </p>
            <ResponsiveSplitFlex>
              <SpecList>
                <h4>Tekniset tiedot</h4>
                <p><b>Suoritin:</b> i5-7300U (2.60 GHz - 3.50 GHz, 2 ydintä)</p>
                <p><b>Muisti:</b> 8 Gt (1x8) DDR4-2400 SDRAM</p>
                <p><b>Näytönohjain:</b> Intel HD Graphics 620</p>
                <p><b>Kiintolevy:</b> SANDISK SD8TN8U-256G-1006</p>
                <p>
                  <b>Liitännät:</b>
                  <br />
                  &nbsp;VGA
                  <br />
                  &nbsp;Smartcard lukija
                  <br />
                  &nbsp;USB-C
                  <br />
                  &nbsp;DisplayPort 1.2
                  <br />
                  &nbsp;Ethernet (RJ45)
                  <br />
                  &nbsp;2x USB 3.1 Gen 1
                  <br />
                  &nbsp;&quot;Docking&quot; liitin
                  <br />
                  &nbsp;SD-kortti lukija
                  <br />
                  &nbsp;Kuuloke ja mikrofoni komboportti
                  <br />
                  &nbsp;AC-virtaportti
                </p>
                <p><b>Windows Hello:</b> Sormenjälkitunnistin.</p>
                <p><b>Lisätietoja:</b> <a href="https://support.hp.com/hk-en/document/c05348563">Valmistajan tuotesivu</a></p>
              </SpecList>
              <Gallery media={
                [
                  "/computer-sharing-assets/olderLaptopFront.png",
                  "/computer-sharing-assets/olderLaptopSideRight.png"
                ].map((str) => ({ url: str }))
              }/>  
            </ResponsiveSplitFlex> 
          </Device>
        </Section>
        <Section>
          <h2>Lahjoituksen hakeminen</h2>
          <p>
            Koneet kiertoon -kampanjan tavoitteena on yhdistyksemme tavoitteiden mukaisesti edistää tietotekniikka- ja kyberturvallisuusharrastuneisuutta.
            Lahjoituksen vastaanottaminen edellyttää kyselyyn vastaamista, jossa toivomme lahjoitusta hakevien kirjoittavan hieman laajemmin eri käyttötarkoituksista, joihin lahjoitettava laite/laitteet menisivät.
          </p>
          <p>Hakemukset käsitellään saapumisjärjestyksessä. Mikäli hakemuksesi hyväksytään, teihin ollaan yhteydessä yhdistys-sähköpostinne (nimi@testausserveri.fi) kautta.</p>
          <p>
            Lahjoituksen hakulomakkeen voi voit täyttää täältä: (huom. lomake toistaiseksi auki vain kaikille yhdistyksen jäsenille, vaatii yhdistys-sähköpostin)
            <br />
            <br />
          </p>
          <a href="https://forms.gle/s77YCSEmvtrtujAY8">
            <CapsuleButton>Täytä hakulomake</CapsuleButton>
          </a>
          <p>
            Lahjoitukset jaetaan erissä, joista ensimmäisissä priorisoidaan yhdistyksen jäseniä.
            Lue lisää eri erien kriteereistä ja seuraa kampanjan etenemistä Discord-palvelimemme <a href="https://discord.com/channels/697710787636101202/825456228653072435">Tiedotteet-kanavalla</a>
          </p>
        </Section>
        <Section>
          <h2>Kampanjaehdot</h2>
          <p>
            Testausserveri ry ei korvaa mahdollisia postituskuluja (mahdollisista toimituksista sovitaan erikseen), eikä anna lahjoitettaville laitteille minkäänlaista takuuta toimivuudesta tai sopivuudesta mihinkään käyttötarkoitukseen.
            Lahjoittajan saajan vastuulla on taata lahjoitetun laitteen toimivuus ja kunto ennen lahjoituksen vastaanottamista.
            Lahjoituksesta voi kieltäytyä missä tahansa lahjoituksen käsittelyn vaiheessa ennen laitteen virallista luovuttamista.
            Laitteiden konfiguraatiot vaihtelevat.
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
