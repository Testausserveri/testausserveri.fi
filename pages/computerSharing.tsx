import Head from 'next/head'
import styled from 'styled-components'
import { Content } from '../components/Content/Content'
import { H1 } from '../components/Title/Title'
import { Footer } from '../components/Footer/Footer'
import { InferGetServerSidePropsType, getServerSideProps } from 'next'
import { Gallery } from '../components/Gallery/Gallery'

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
  padding: 1rem;
  border-radius: 0.5rem;
  p, h3 {
    width: 100%;
  }
  div {
    width: 50%;
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: stretch;
    flex-wrap: wrap;
  }
  div > div {
    height: 80%;
    width: 100%;
  }
  div > ul {
    width: 100%;
    margin-top: -1rem;
  }
  div > ul > li {
    height: 70%;
  }
`
const SpecList = styled.div`

  display: flex;
  margin-top: 1rem;
  flex-direction: column;
  width: 50%
  justify-content: flex-start;
  p {
    width: 100%;
    margin-top: 0.2rem;
  }
`

export default function ComputerShare({ copyrightYear }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      <Head>
          <title>Koneet kiertoon | Testausserveri</title>
          <meta name="description" content="Testausserveri on kaikille avoin yhteisö koodaamisesta, eettisestä hakkeroinnista ja yleisesti teknologiasta innostuneille nuorille." />
      </Head>
      <Content>
        <H1>Koneet kiertoon kampanja</H1>
        <p><b>Tämän sivun tietoja täydennetään vielä. Kampanjan alkamisesta tiedoitetaan erikseen.</b></p>
        <p>
          Testausserveri ry organisoi yksityisen lahjoittajan lahjoittamien tietokoneiden ja palvelimien jakamisen yhdistyksen jäsenille ja hyväntekeväisyyteen.
          Kampanjan tavoitteena on antaa turhiksi jääneille vanhoille, mutta edelleen moneen eri käyttötarkoituksiin sopiville, tietokoneille ja palvelimille uusi elämä.
          Jaossa on toimistokäytössä olleita pöytäkoneita ja kannettavia, sekä tuotantovalmiita palvelimia.*
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
            <h3>HP Workstation Z240 (15 kpl)</h3>
            <p>
              Nämä HP:n Workstation koneet ovat täydellisiä kevyeen jokapäiväiseen käyttöön ja palvelimeksi hurisemaan vaikka oman huoneen nurkkaan.
              Koneet ovat hyvässä kunnossa, mutta niiden lämpötahna on suhteellisen vanhaa, joten sen vaihtamisella koneista saa varmasti lisää tehoa.
              Koneiden koteloissa saattaa olla kaikenkokoisia pintanaarmuja.
              Koneen eri konfiguraatiot ovat valittavissa hakulomakkeessa. Valitsethan itsellesi sopivimman vaihtoehdon ja perustele valintaasi hakemuksessa,
              jotta tarvittaessa voidaan valita parhain mahdollinen vaihtoehtoinen konfiguraatio.
            </p>
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
                &nbsp;Samsung 860 EVO (? Gt, ? Gt/s) /
                <br />
                &nbsp;Micron 1100 (256 Gt, 6 Gt/s) /
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
              <p><b>Käyttöjärjestelmä:</b> ?</p>
              <p><b>Virtalähde:</b> 400W (80 PLUS PLATINUM, HP)</p>
              <p><b>Mitat:</b> 40 x 44 x 17 (cm)</p>
              <p><b>Paino:</b> n. ?kg (riippuen kokoonpanosta)</p>
            </SpecList>
            <Gallery media={
              [
                "/computer-sharing-assets/workstationFrontSide.png",
                "/computer-sharing-assets/workstationInternalsSide.png",
                "/computer-sharing-assets/worksationBackSide.png"
              ].map((str) => ({ url: str }))
            }/> 
            <p>Huom. kuvassa olevasta koneesta puuttuu kiintolevy. Tämä oli kuvaajan moka. Kaikissa koneissa on joku ylhäällä mainituista kiintolevyistä.</p>
          </Device>
          <Device>
            <h3>HP EliteBook 840 G5 (? kpl)</h3>
            <p>
              Nämä päivittäisessä toimistokäytössä olleet kannettavat ovat hyvässä kunnossa muutamia pintanaarmuja lukuunottamatta.
              Kokonaisuutena tämä HP:n kannettava on oikein toimiva päivittäiseen käyttöön esimerkiksi ohjelmointia, kevyttä pelaamista tai opiskelua varten.
              Modernit ominaisuudet, kuten Windows Hello, antavat tälle kannettavalle modernin tuntuman sen tukevien metallisten rakenteiden kanssa.
            </p>
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
          </Device>
          <Device>
            <h3>HP EliteBook 820 G4 (? kpl)</h3>
            <p>
              Nämä päivittäisessä toimistokäytössä olleet kannettavat ovat suhteellisen hyvässä kunnossa. Kannettavissa on kaikenlaisia naarmuja ja käytön jälkiä.
              Kokonaisuutena tämä HP:n kannettava on hyvä kevyempään käyttöön. Ikänsä takia näiden kannettavien näytöissä saattaa olla &quot;burn-in&quot; jälkiä.
              Kannettavan muovinen kotelo ja vanhahtava ulkomuoto antavat kuitenkin turhan synkän kuvan niistä. Näistä kannettavista voi saada vielä paljon irti!
            </p>
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
          </Device>
        </Section>
        <Section>
          <h2>Lahjoituksen saamisen kynnysehdot</h2>
          <p>
            Koneet kiertoon -kampanjan tavoitteena on yhdistyksemme tavoitteiden mukaisesti edistää tietotekniikka- ja kyberturvallisuus harrastuneisuutta.
            Lahjoutuksen vastaanottaminen edellyttää kyselyyn vastaamista, jossa toivomme lahjoitusta hakevien kirjoittavan hieman laajemmin eri käyttötarkoituksista, joihin lahjoitettava laite/laitteet menisivät.
          </p>
          <p>
            Kynnysehdot tarkemmin:
            TBD
          </p>
          <p>
            Vastaa kyselyyn ja hae lahjoutusta:
            TBA
          </p>
        </Section>
        <p>
          * Testausserveri ry ei korvaa mahdollisia postituskuluja (mahdollisista toimituksista sovitaan erikseen), eikä anna lahjoitettaville laitteille minkäänlaista takuuta toimivuudesta tai sopivuudesta mihinkään käyttötarkoitukseen.
          Lahjoittajan saajan vastuulla on taata lahjoitetun laitteen toimivuus ja kunto ennen lahjoituksen vastaanottamista.
          Lahjoituksesta voi kieltäytyä missä tahansa lahjoituksen käsittelyn vaiheessa ennen laitteen virallista luovuttamista.
          Testausserveri ry ei ota vastaan mistään syistä laitteiden palautuksia niiden virallisen luovuttamisen jälkeen.
          Virallinen luovutus todennetaan luovutus-sopimuksella, jonka lahjoitustapahtuman molemmat osapuolet allekirjoittavat (sopimus vielä kesken).
        </p>
        <p>Kuvat: Testausserveri ry (kaikki oikeudet pidetään)</p>
      </Content>
      <Footer copyrightYear={copyrightYear} />
    </div>
    )
  }