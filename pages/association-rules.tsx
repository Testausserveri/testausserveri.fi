import Head from 'next/head'
import { Content } from '../components/Content/Content'
import { H1 } from '../components/Title/Title'
import { Footer } from '../components/Footer/Footer'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Testausmeet2Img from '../assets/about/testausmeet2.jpeg'
import { Section } from './privacy';

export default function AssociationRules({ copyrightYear }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <div>
            <Head>
                <title>Yhdistyksen säännöt | Testausserveri</title>
                <meta name="description" content="Testausserveri ry:n tarkoituksena on edistää nuorten tietotekniikka- ja tietoturvaharrastuneisuutta, sekä järjestää aiheeseen liittyviä tapahtumia ja tapaamisia." />
                <meta property="og:site_name" content="Testausserveri" />
                <meta property="og:title" content="Yhdistyksen säännöt" />
                <meta property="og:image" content={"https://testausserveri.fi" + Testausmeet2Img.src} />
                <meta property="og:description" content="Testausserveri ry:n tarkoituksena on edistää nuorten tietotekniikka- ja tietoturvaharrastuneisuutta, sekä järjestää aiheeseen liittyviä tapahtumia ja tapaamisia." />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <Content>
                <H1>Yhdistyksen säännöt</H1>
                <Section>
                    <h2>1. Yhdistyksen nimi ja kotipaikka</h2>
                    <p>Yhdistyksen nimi on Testausserveri ry ja sen kotipaikka on Helsinki.</p>
                </Section>
                <Section>
                    <h2>2. Tarkoitus ja toiminnan laatu</h2>
                    <p>Yhdistyksen tarkoituksena on edistää nuorten tietotekniikka- ja tietoturvaharrastuneisuutta, sekä järjestää aiheeseen liittyviä tapahtumia ja tapaamisia.</p>
                    <p>
                        Tarkoituksensa toteuttamiseksi yhdistys:
                    </p>
                    <ul>
                        <li>ylläpitää yhdistyksen sähköisiä viestintäkanavia ja keskustelufoorumia</li>
                        <li>ylläpitää maksuttomia www-palveluita jäsenilleen</li>
                        <li>toteuttaa, tukee ja ylläpitää tarkoitustaan tukevia hankkeita ja projekteja</li>
                        <li>neuvoo ja ohjaa jäseniään</li>
                        <li>järjestää tapahtumia, kilpailuja ja kursseja</li>
                        <li>kokoaa jäsenet yhteiseen toimintaan ja ylläpitää yhteyksiä muihin alan yhdistyksiin</li>
                        <li>toimii yhteistyössä viranomaisten, järjestöjen, yritysten ja yksityishenkilöiden kanssa</li>
                    </ul>
                    <p>
                        Toimintansa tukemiseksi yhdistys voi:
                    </p>
                    <ul>
                        <li>harjoittaa tarkoitukseen läheisesti liittyvää elinkeino- ja hanketoimintaa</li>
                        <li>jakaa stipendejä, apurahoja, kunniamainintoja ja -kirjoja</li>
                        <li>hankkia tarvittavia aineistoja ja välineitä yhdistyksen käyttöön</li>
                        <li>omistaa toiminnan kannalta tarpeellista irtainta ja kiinteää omaisuutta</li>
                        <li>osallistua julkiseen keskusteluun alaan liittyvissä asioissa</li>
                        <li>ottaa vastaan avustuksia, lahjoituksia ja testamentteja</li>
                        <li>myydä mainostilaa</li>
                        <li>solmia sponsorisopimuksia</li>
                    </ul>
                    <p>
                        Yhdistys voi kuulua jäsenenä yhdistyksiin ja yhteisöihin, joiden tarkoitus vastaa yhdistyksen tarkoitusta tai on sitä lähellä.
                    </p>
                </Section>
                <Section>
                    <h2>3. Jäsenet</h2>
                    <p>Yhdistyksen varsinaiseksi jäseneksi voi liittyä luonnollinen henkilö, joka hyväksyy yhdistyksen tarkoituksen ja säännöt. Varsinaiset jäsenet hyväksyy hakemuksesta yhdistyksen hallitus, hallituksen valtuuttama taho tai hallituksen hyväksymä automaattisen päätöksenteon järjestelmä. Hallitus päättää jäsenten hyväksymismenettelystä ja hyväksymisen edellytyksistä.</p>
                    <p>Kannatusjäseneksi voidaan hyväksyä luonnollinen henkilö tai oikeushenkilö, joka haluaa tukea yhdistyksen tarkoitusta ja toimintaa. Kannattavat jäsenet hyväksyy hakemuksesta yhdistyksen hallitus.</p>
                </Section>
                <Section>
                    <h2>4. Jäsenen eroaminen ja erottaminen</h2>
                    <p>Jäsenellä on oikeus erota yhdistyksestä ilmoittamalla siitä:</p>
                    <ul>
                        <li>kirjallisesti tai muuten todisteellisesti hallitukselle tai sen puheenjohtajalle;</li>
                        <li>hallituksen valtuuttamalle taholle; tai </li>
                        <li>hallituksen hyväksymälle automaattisen päätöksenteon järjestelmälle;</li>
                        <li>taikka ilmoittamalla erosta yhdistyksen kokouksessa merkittäväksi pöytäkirjaan.</li>
                    </ul>
                    <p>Hallitus voi erottaa jäsenen yhdistyksestä, jos jäsen on jättänyt täyttämättä ne velvoitteet, joihin hän on yhdistykseen liittymällä sitoutunut tai on menettelyllään yhdistyksessä tai sen ulkopuolella huomattavasti vahingoittanut yhdistystä tai ei enää täytä laissa taikka yhdistyksen säännöissä mainittuja jäsenyyden ehtoja.</p>
                    <p>Yhdistyksen hallitus voi katsoa jäsenen eronneeksi, jos jäsen on jättänyt jäsenmaksunsa maksamatta siten, ettei hän ole maksanut sitä kalenterivuoden loppuun mennessä.</p>
                    <p>Päätöksessä on mainittava erottamisen syy. Ennen päätöksen tekemistä asianomaiselle jäsenelle on varattava tilaisuus selityksen antamiseen asiassa, paitsi milloin jäsenyyden päättymisen syynä on jäsenmaksun maksamatta jättäminen.</p>
                    <p>Erotetulla ei ole oikeutta vaatia takaisin yhdistykselle suorittamiaan maksuja.</p>
                </Section>
                <Section>
                    <h2>5. Liittymis- ja jäsenmaksu</h2>
                    <p>Varsinaisilta jäseniltä ja kannatusjäseniltä perittävän liittymismaksun ja vuotuisen jäsenmaksun suuruudesta erikseen kummallekin jäsenryhmälle päättää vuosikokous.</p>
                    <p>Hallitus voi vapauttaa jäsenen osittain tai kokonaan liittymis- tai jäsenmaksusta huonon taloudellisen aseman tai muun vastaavan sosiaalisen syyn perusteella tai jos jäsen on tehnyt yhdistykselle huomattavia sen toimintaa tukevia palveluja.</p>
                </Section>
                <Section>
                    <h2>6. Hallitus</h2>
                    <p>Yhdistyksen asioita hoitaa hallitus, johon kuuluu vuosikokouksessa valitut puheenjohtaja ja 2 - 5 muuta varsinaista jäsentä.</p>
                    <p>Hallituksen toimikausi on vuosikokousten välinen aika.</p>
                    <p>Hallitus valitsee keskuudestaan varapuheenjohtajan sekä otta keskuudestaan tai ulkopuoleltaan sihteerin, rahastonhoitajan ja muut tarvittavat toimihenkilöt. Hallitus kokoontuu puheenjohtajan tai hänen estyneenä ollessaan varapuheenjohtajan kutsusta, kun he katsovat siihen olevan aihetta tai kun vähintään puolet hallituksen jäsenistä sitä vaatii. Hallitus on päätösvaltainen, kun vähintään puolet sen jäsenistä, puheenjohtaja tai varapuheenjohtaja mukaanluettuna on läsnä. Äänestykset ratkaistaan ehdottomalla ääntenenemmistöllä. Äänten mennessä tasan ratkaisee puheenjohtajan ääni, vaaleissa kuitenkin arpa.</p>
                </Section>
                <Section>
                    <h2>7. Yhdistyksen nimen kirjoittaminen</h2>
                    <p>Yhdistyksen nimen kirjoittaa hallituksen puheenjohtaja, varapuheenjohtaja, taloudenhoitaja ja sihteeri, kaksi yhdessä tai kukin yhdessä muun hallituksen varsinaisen jäsenen kanssa.</p>
                </Section>
                <Section>
                    <h2>8. Tilikausi</h2>
                    <p>Yhdistyksen tilikausi on kalenterivuosi.</p>
                </Section>
                <Section>
                    <h2>9. Yhdistyksen kokoukset</h2>
                    <p>Yhdistyksen vuosikokous pidetään vuosittain hallituksen määräämänä päivänä tammi-toukokuussa. Yhdistyksen kokous hyväksyy äänestys- ja vaalijärjestyksen.</p>
                    <p>Ylimääräinen kokous pidetään, kun yhdistyksen kokous niin päättää tai kun hallitus katsoo siihen olevan aihetta tai kun vähintään kymmenesosa (1/10) yhdistyksen äänioikeutetuista jäsenistä sitä hallitukselta erityisesti ilmoitettua asiaa varten kirjallisesti vaatii. Kokous on pidettävä kolmenkymmenen vuorokauden kuluessa siitä, kun vaatimus sen pitämisestä on esitetty hallitukselle.</p>
                    <p>Yhdistyksen kokouksissa on jokaisella varsinaisella jäsenellä yksi ääni. Kannatusjäsenellä ei ole äänioikeutta yhdistyksessä. Yhdistyksen kokouksen päätökseksi tulee, ellei säännöissä ole toisin määrätty, se mielipide, jota on kannattanut yli puolet annetuista äänistä.</p>
                    <p>Äänten mennessä tasan ratkaisee kokouksen puheenjohtajan ääni, vaaleissa kuitenkin arpa.</p>
                    <p>Yhdistyksen kokouksiin voi osallistua yhdistyksen hallituksen määrittämin teknisin apuvälinein. Kokouksen etäosallistuminen on mahdollista vain kokouksen aikana (reaaliaikainen osallistuminen). Yhdistyksen hallitus voi päättää kokouskohtaisesti etäosallistumismahdollisuudesta.</p>
                </Section>
                <Section>
                    <h2>10. Yhdistyksen kokousten koollekutsuminen</h2>
                    <p>Hallituksen on kutsuttava yhdistyksen kokoukset koolle vähintään 7 vuorokautta ennen kokousta.</p>
                    <p>Kokouskutsu on lähetettävä jäsenille:</p>
                    <ul>
                        <li>sähköpostitse; ja</li>
                        <li>yhdistyksen verkkosivulla tai yhdistyksen käyttämän sosiaalisen median ryhmässä</li>
                    </ul>
                </Section>
                <Section>
                    <h2>11. Vuosikokous</h2>
                    <p>Yhdistyksen vuosikokouksessa käsitellään seuraavat asiat:</p>
                    <ol className="num">
                        <li>kokouksen avaus</li>
                        <li>valitaan kokouksen puheenjohtaja, sihteeri, kaksi pöytäkirjantarkastajaa ja tarvittaessa kaksi ääntenlaskijaa</li>
                        <li>todetaan kokouksen laillisuus ja päätösvaltaisuus</li>
                        <li>hyväksytään kokouksen työjärjestys</li>
                        <li>esitetään tilinpäätös, vuosikertomus ja toiminnantarkastajien/tilintarkastajien lausunto</li>
                        <li>päätetään tilinpäätöksen vahvistamisesta ja vastuuvapauden myöntämisestä hallitukselle ja muille vastuuvelvollisille</li>
                        <li>vahvistetaan toimintasuunnitelma, tulo- ja menoarvio sekä liittymis- ja jäsenmaksun suuruus</li>
                        <li>valitaan hallituksen puheenjohtaja ja muut jäsenet</li>
                        <li>valitaan yksi tai kaksi toiminnantarkastajaa ja varatoiminnantarkastajaa taikka yksi tai kaksi tilintarkastajaa ja varatilintarkastajaa</li>
                        <li>käsitellään muut kokouskutsussa mainitut asiat.</li>
                    </ol>
                    <p>Mikäli yhdistyksen jäsen haluaa saada jonkin asian yhdistyksen vuosikokouksen käsiteltäväksi, on hänen ilmoitettava siitä kirjallisesti hallitukselle niin hyvissä ajoin, että asia voidaan sisällyttää kokouskutsuun.</p>
                </Section>
                <Section>
                    <h2>12. Sääntöjen muuttaminen ja yhdistyksen purkaminen</h2>
                    <p>Päätös sääntöjen muuttamisesta ja yhdistyksen purkamisesta on tehtävä yhdistyksen kokouksessa vähintään kolmen neljäsosan (3/4) enemmistöllä annetuista äänistä. Kokouskutsussa on mainittava sääntöjen muuttamisesta tai yhdistyksen purkamisesta. Yhdistyksen purkautuessa käytetään yhdistyksen varat yhdistyksen tarkoituksen edistämiseen purkamisesta päättävän kokouksen määräämällä tavalla. Yhdistyksen tullessa lakkautetuksi käytetään sen varat samaan tarkoitukseen.</p>
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
