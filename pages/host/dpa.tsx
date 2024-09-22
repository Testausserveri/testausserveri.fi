import Head from 'next/head'
import styled from 'styled-components'
import { Content } from '../../components/Content/Content'
import { H1, H2 } from '../../components/Title/Title'
import { Footer } from '../../components/Footer/Footer'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import TestaushostBannerImg from '../../assets/testaushost-banner.png'
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs'
import { Section } from '../privacy/members';
import { IoIosCall, IoIosMail, IoLogoGithub } from 'react-icons/io'
import { TwoColumn } from '../privacy/host'

export default function HostDPA({ copyrightYear }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      <Head>
        <title>Testaushost DPA | Testausserveri</title>
        <meta name="description" content="Testausserveri ry yhdessä Osphostin kanssa tarjoavat nuorille maksutonta palvelintilaa. Liity yhdistyksen jäseneksi ja ota sivutilasi käyttöön!" />
        <meta property="og:site_name" content="Testausserveri" />
        <meta property="og:title" content="Testaushost DPA" />
        <meta property="og:image" content={"https://testausserveri.fi" + TestaushostBannerImg.src} />
        <meta property="og:description" content="Testausserveri ry yhdessä Osphostin kanssa tarjoavat nuorille maksutonta palvelintilaa. Liity yhdistyksen jäseneksi ja ota sivutilasi käyttöön!" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Content>
        <Breadcrumbs
          route={[
            { path: "/host/", name: "Palvelintila" },
            { path: `/host/privacy`, name: "DPA" }
          ]} />
        <H1>Henkilötietojen käsittelyn vakiolausekkeet ja lisäliitteet (käyttäjät)</H1>
        <Section>
          <h2>1. Tarkoitus ja soveltamisala</h2>
          <ol>
            <li>Näiden vakiosopimuslausekkeiden (jäljempänä ’lausekkeet’) tarkoituksena on varmistaa luonnollisten henkilöiden suojelusta henkilötietojen käsittelyssä sekä näiden tietojen vapaasta liikkuvuudesta ja direktiivin 95/46/EY kumoamisesta (yleinen tietosuoja-asetus) 27 päivänä huhtikuuta 2016 annetun Euroopan parlamentin ja neuvoston asetuksen (EU) 2016/679 28 artiklan 3 ja 4 kohdan noudattaminen.</li>
            <li>Liitteessä I luetellut rekisterinpitäjät ja henkilötietojen käsittelijät ovat hyväksyneet nämä lausekkeet varmistaakseen, että asetuksen (EU) 2016/679 28 artiklan 3 ja 4 kohtaa ja/tai asetuksen (EU) 2018/1725 29 artiklan 3 ja 4 kohtaa noudatetaan.</li>
            <li>Näitä lausekkeita sovelletaan liitteessä II täsmennettyyn henkilötietojen käsittelyyn.</li>
            <li>Liitteet I–IV ovat erottamaton osa lausekkeita.</li>
            <li>Nämä lausekkeet eivät vaikuta velvoitteisiin, joita rekisterinpitäjään sovelletaan asetuksen (EU) 2016/679 ja/tai asetuksen (EU) 2018/1725 nojalla.</li>
            <li>Näillä lausekkeilla ei yksinään varmisteta asetuksen (EU) 2016/679 V luvun ja/tai asetuksen (EU) 2018/1725 V luvun mukaisten kansainvälisiin siirtoihin liittyvien velvoitteiden noudattamista.</li>
          </ol>
        </Section>
        <Section>
          <h2>2. Lausekkeiden muuttumattomuus</h2>
          <ol>
            <li>Osapuolet sitoutuvat olemaan muuttamatta lausekkeita, lukuun ottamatta tietojen lisäämistä liitteisiin tai niissä olevien tietojen päivittämistä.</li>
            <li>Tämä ei estä osapuolia sisällyttämässä tässä päätöksessä säädettyjä vakiosopimuslausekkeita laajempaan sopimukseen ja lisäämästä muita lausekkeita tai täydentäviä suojatoimia edellyttäen, että ne eivät ole suoraan tai välillisesti ristiriidassa vakiosopimuslausekkeiden kanssa eivätkä rajoita rekisteröityjen perusoikeuksia tai -vapauksia.</li>
          </ol>
        </Section>
        <Section>
          <h2>3. Tulkinta</h2>
          <ol>
            <li>Jos näissä lausekkeissa käytetään asetuksessa (EU) 2016/679 tai asetuksessa (EU) 2018/1725 määriteltyjä termejä, näillä termeillä on sama merkitys kuin kyseisessä asetuksessa.</li>
            <li>Näitä lausekkeita on luettava ja tulkittava asetuksen (EU) 2016/679 tai asetuksen (EU) 2018/1725 säännösten valossa.</li>
            <li>Näitä lausekkeita ei saa tulkita tavalla, joka on ristiriidassa asetuksessa (EU) 2016/679 tai asetuksessa (EU) 2018/1725 säädettyjen oikeuksien ja velvoitteiden kanssa tai tavalla, joka loukkaa rekisteröityjen perusoikeuksia tai -vapauksia.</li>
          </ol>
        </Section>
        <Section>
          <h2>4. Hierarkia</h2>
          <p>Jos nämä lausekkeet ovat ristiriidassa osapuolten välisten asiaa koskevien sopimusten määräysten kanssa, jotka ovat olemassa silloin kun näistä lausekkeista sovitaan tai tulevat voimaan sen jälkeen, nämä lausekkeet ovat ensisijaisia.</p>
        </Section>
        <Section>
          <h2>5. Käsittelyn kuvaus</h2>
          <p>Yksityiskohtaiset tiedot henkilötietojen käsittelytoimista ja erityisesti henkilötietojen ryhmistä ja tarkoituksista, joita varten henkilötietoja käsitellään rekisterinpitäjän puolesta, esitetään liitteessä II.</p>
        </Section>
        <Section>
          <h2>6. Osapuolten velvoitteet</h2>
          <h3>6.1. Ohjeet</h3>
          <ol>
            <li>Henkilötietojen käsittelijän on käsiteltävä henkilötietoja ainoastaan rekisterinpitäjän antamien dokumentoitujen ohjeiden mukaisesti, paitsi jos henkilötietojen käsittelijään sovellettavassa unionin oikeudessa tai jäsenvaltion lainsäädännössä toisin vaaditaan. Tässä tapauksessa henkilötietojen käsittelijä tiedottaa rekisterinpitäjälle kyseisestä oikeudellisesta vaatimuksesta ennen käsittelyä, paitsi jos se kielletään lainsäädännössä yleistä etua koskevien tärkeiden syiden vuoksi. Rekisterinpitäjä voi myös antaa myöhemmin ohjeita koko henkilötietojen käsittelyn ajan. Nämä ohjeet on aina dokumentoitava.</li>
            <li>Henkilötietojen käsittelijän on välittömästi ilmoitettava rekisterinpitäjälle, jos henkilötietojen käsittelijä katsoo, että rekisterinpitäjän antamat ohjeet ovat asetuksen (EU) 2016/679 tai asetuksen (EU) 2018/1725 taikka sovellettavien unionin tai jäsenvaltioiden tietosuojasäännösten vastaisia.</li>
          </ol>
          <h3>6.2. Käyttötarkoitusten rajaaminen</h3>
          <p>Henkilötietojen käsittelijä saa käsitellä henkilötietoja ainoastaan liitteessä II esitettyjä käsittelyn erityistarkoituksia varten, ellei rekisterinpitäjä anna lisäohjeita.</p>
          <h3>6.3. Henkilötietojen käsittelyn kesto</h3>
          <p>Henkilötietojen käsittelijän suorittama käsittely saa kestää ainoastaan liitteessä II täsmennetyn ajan.</p>
          <h3>6.4. Käsittelyn turvallisuus</h3>
          <ol>
            <li>Henkilötietojen käsittelijän on toteutettava ainakin liitteessä III eritellyt tekniset ja organisatoriset toimenpiteet henkilötietojen turvallisuuden varmistamiseksi. Tähän sisältyy tietojen suojaaminen tietoturvaloukkauksilta, jotka johtavat vahingossa tapahtuvaan tai laittomaan tietojen tuhoamiseen, häviämiseen, muuttamiseen, luvattomaan luovuttamiseen tai käyttöön (henkilötietojen tietoturvaloukkaus). Asianmukaista turvallisuustasoa arvioidessaan osapuolten on otettava asianmukaisesti huomioon uusin tekniikka, täytäntöönpanokustannukset, käsittelyn luonne, laajuus, asiayhteys ja tarkoitukset sekä rekisteröidyille aiheutuvat riskit.</li>
            <li>Henkilötietojen käsittelijä antaa käsiteltävät henkilötiedot henkilöstönsä jäsenille vain siinä määrin kuin se on ehdottoman välttämätöntä sopimuksen täytäntöönpanoa, hallinnointia ja seurantaa varten. Henkilötietojen käsittelijä varmistaa, että henkilöt, joilla on oikeus käsitellä henkilötietoja, ovat sitoutuneet noudattamaan salassapitovelvollisuutta tai heitä koskee asianmukainen lakisääteinen salassapitovelvollisuus.</li>
          </ol>
          <h3>6.5. Arkaluonteiset tiedot</h3>
          <p>Jos käsittelyyn liittyy henkilötietoja, joista käy ilmi rotu tai etninen alkuperä, poliittiset mielipiteet, uskonnollinen tai filosofinen vakaumus, ammattiliiton jäsenyys, geneettisiä tietoja tai biometrisiä tietoja luonnollisen henkilön yksiselitteistä tunnistamista varten, terveyttä tai henkilön seksuaalista käyttäytymistä tai seksuaalista suuntautumista koskevia tietoja taikka rikostuomioihin ja rikoksiin liittyviä tietoja, jäljempänä ’arkaluonteiset tiedot’, henkilötietojen käsittelijän on sovellettava erityisiä rajoituksia ja/tai täydentäviä suojatoimia.</p>
          <h3>6.6. Dokumentointi ja vaatimustenmukaisuus</h3>
          <ol>
            <li>Osapuolten on voitava osoittaa noudattavansa näitä lausekkeita.</li>
            <li>Henkilötietojen käsittelijän on käsiteltävä nopeasti ja asianmukaisesti rekisterinpitäjän kyselyt, jotka koskevat tietojen käsittelyä näiden lausekkeiden mukaisesti.</li>
            <li>Henkilötietojen käsittelijän on asetettava rekisterinpitäjän saataville kaikki tiedot, jotka ovat tarpeen sen osoittamiseksi, että näissä lausekkeissa vahvistettuja velvoitteita on noudatettu ja jotka johtuvat suoraan asetuksesta (EU) 2016/679 ja/tai asetuksesta (EU) 2018/1725. Henkilötietojen käsittelijän on rekisterinpitäjän pyynnöstä myös sallittava näiden lausekkeiden kattamien käsittelytoimien tarkastukset ja osallistuttava niihin kohtuullisin väliajoin tai kun on viitteitä vaatimusten noudattamatta jättämisestä. Päättäessään uudelleentarkastelusta tai tarkastuksesta rekisterinpitäjä voi ottaa huomioon henkilötietojen käsittelijällä olevat asiaankuuluvat sertifioinnit.</li>
            <li>Rekisterinpitäjä voi päättää suorittaa tarkastuksen itse tai valtuuttaa riippumattoman tarkastajan. Tarkastuksiin voi sisältyä myös käyntejä henkilötietojen käsittelijän toimitiloissa tai muissa fyysisissä tiloissa, ja niistä on tarvittaessa ilmoitettava riittävän ajoissa.</li>
            <li>Osapuolten on asetettava tässä lausekkeessa tarkoitetut tiedot, mukaan lukien tarkastusten tulokset, pyynnöstä toimivaltais(t)en valvontaviranomais(t)en saataville.</li>
          </ol>
          <h3>6.7   Henkilötietojen alikäsittelijöiden käyttö</h3>
          <ol>
            <li>Henkilötietojen käsittelijä ei saa antaa mitään rekisterinpitäjän puolesta näiden lausekkeiden nojalla suorittamistaan käsittelytoimista alihankintana henkilötietojen alikäsittelijälle ilman rekisterinpitäjän erillistä kirjallista ennakkolupaa. Henkilötietojen käsittelijän on toimitettava erillistä lupaa koskeva pyyntö vähintään 30 vuorokautta ennen asianomaisen henkilötietojen alikäsittelijän palkkaamista sekä tarvittavat tiedot, jotta rekisterinpitäjä voi päättää luvasta. Luettelo rekisterinpitäjän valtuuttamista henkilötietojen alikäsittelijöistä on liitteessä IV. Osapuolten on pidettävä liite IV ajan tasalla.</li>
            <li>Jos henkilötietojen käsittelijä käyttää henkilötietojen alikäsittelijää suorittamaan tiettyjä käsittelytoimia (rekisterinpitäjän puolesta), sen on tehtävä sopimus, jossa henkilötietojen alikäsittelijälle asetetaan näiden lausekkeiden nojalla olennaisilta osin samat tietosuojavelvoitteet kuin henkilötietojen käsittelijälle. Henkilötietojen käsittelijän on varmistettava, että henkilötietojen alikäsittelijä noudattaa velvoitteita, joita henkilötietojen käsittelijään sovelletaan näiden lausekkeiden ja asetuksen (EU) 2016/679 ja/tai asetuksen (EU) 2018/1725 nojalla.</li>
            <li>Henkilötietojen käsittelijän on rekisterinpitäjän pyynnöstä toimitettava jäljennös tällaisesta henkilötietojen alikäsittelijän sopimuksesta ja mahdollisista myöhemmistä muutoksista rekisterinpitäjälle. Jos se on tarpeen liikesalaisuuksien tai muiden luottamuksellisten tietojen (mukaan lukien henkilötiedot) suojaamiseksi, henkilötietojen käsittelijä voi poistaa sopimuksesta tekstiä ennen jäljennöksen toimittamista.</li>
            <li>Henkilötietojen käsittelijä on edelleen täysin vastuussa rekisterinpitäjälle henkilötietojen alikäsittelijän velvoitteiden täyttämisestä alikäsittelijän kanssa tekemänsä sopimuksen mukaisesti. Henkilötietojen käsittelijän on ilmoitettava rekisterinpitäjälle, jos henkilötietojen alikäsittelijä ei täytä sopimusvelvoitteitaan.</li>
            <li>Henkilötietojen käsittelijän on sovittava henkilötietojen alikäsittelijän kanssa kolmatta osapuolta suojaavasta edunsaajalausekkeesta, jonka mukaan jos henkilötietojen käsittelijä on tosiasiallisesti kadonnut, lakannut olemasta oikeudellisesti tai tullut maksukyvyttömäksi, rekisterinpitäjällä on oikeus purkaa henkilötietojen alikäsittelijän sopimus ja ohjeistaa alikäsittelijää poistamaan tai palauttamaan henkilötiedot.</li>
          </ol>
          <h3>6.8   Kansainväliset tiedonsiirrot</h3>
          <ol>
            <li>Henkilötietojen käsittelijä voi siirtää tietoja kolmanteen maahan tai kansainväliselle järjestölle ainoastaan rekisterinpitäjän antamien dokumentoitujen ohjeiden perusteella tai henkilötietojen käsittelijään sovellettavan unionin tai jäsenvaltion lainsäädännön mukaisen erityisen vaatimuksen täyttämiseksi, ja siirron on tapahduttava asetuksen (EU) 2016/679 V luvun tai asetuksen (EU) 2018/1725 V luvun mukaisesti.</li>
            <li>Rekisterinpitäjä hyväksyy sen, että jos henkilötietojen käsittelijä käyttää lausekkeen 7.7 mukaisesti henkilötietojen alikäsittelijää suorittamaan tiettyjä käsittelytoimia (rekisterinpitäjän puolesta) ja kyseisiin käsittelytoimiin liittyy asetuksen (EU) 2016/679 V luvussa tarkoitettu henkilötietojen siirto, henkilötietojen käsittelijä ja henkilötietojen alikäsittelijä voivat varmistaa asetuksen (EU) 2016/679 V luvun säännösten noudattamisen käyttämällä komission asetuksen (EU) 2016/679 46 artiklan 2 kohdan nojalla hyväksymiä vakiosopimuslausekkeita edellyttäen, että kyseisten vakiosopimuslausekkeiden käytön edellytykset täyttyvät.</li>
          </ol>
        </Section>
        <Section>
          <h2>7. Rekisterinpitäjän avustaminen</h2>
          <ol>
            <li>Henkilötietojen käsittelijän on viipymättä ilmoitettava rekisterinpitäjälle kaikista rekisteröidyltä saamistaan pyynnöistä. Henkilötietojen käsittelijä ei saa itse vastata pyyntöön, paitsi jos rekisterinpitäjä on antanut siihen luvan.</li>
            <li>Henkilötietojen käsittelijän on avustettava rekisterinpitäjää sen velvollisuuksien täyttämisessä, jotka koskevat rekisteröityjen oikeuksien käyttämistä koskeviin pyyntöihin vastaamista, ottaen huomioon käsittelyn luonne. Henkilötietojen käsittelijän on a ja b kohdan mukaisia velvollisuuksia täyttäessään noudatettava rekisterinpitäjän ohjeita.</li>
            <li>Sen lisäksi, että henkilötietojen käsittelijä on lausekkeen 8 b kohdan nojalla velvoitettu avustamaan rekisterinpitäjää, henkilötietojen käsittelijän on lisäksi avustettava rekisterinpitäjää seuraavien velvoitteiden noudattamisessa ottaen huomioon käsittelyn luonne ja henkilötietojen käsittelijän käytettävissä olevat tiedot:
              <ol>
                <li>velvoite arvioida suunniteltujen käsittelytoimien vaikutusta henkilötietojen suojaan, jäljempänä ’tietosuojaa koskeva vaikutustenarviointi’, jos tietyntyyppinen käsittely todennäköisesti aiheuttaa suuren riskin luonnollisten henkilöiden oikeuksille ja vapauksille;</li>
                <li>velvoite kuulla ennen käsittelyä toimivaltaista valvontaviranomaista / toimivaltaisia valvontaviranomaisia, jos tietosuojaa koskeva vaikutustenarviointi osoittaa, että käsittely aiheuttaisi korkean riskin, jos rekisterinpitäjä ei ole toteuttanut toimenpiteitä riskin pienentämiseksi;</li>
                <li>velvollisuus varmistaa henkilötietojen oikeellisuus ja ajantasaisuus ilmoittamalla rekisterinpitäjälle viipymättä, jos henkilötietojen käsittelijä havaitsee, että sen käsittelemät henkilötiedot ovat virheellisiä tai vanhentuneita;</li>
                <li>asetuksen (EU) 2016/679 32 artiklassa säädetyt velvoitteet.</li>
              </ol>
            </li>
            <li>Osapuolet vahvistavat liitteessä III asianmukaiset tekniset ja organisatoriset toimenpiteet, joita henkilötietojen käsittelijän on noudatettava avustaessaan rekisterinpitäjää tämän lausekkeen soveltamisessa, sekä tarvittavan avun soveltamisalan ja laajuuden.</li>
          </ol>
        </Section>
        <Section>
          <h2>8. Henkilötietojen tietoturvaloukkauksesta ilmoittaminen</h2>
          <p>Henkilötietojen tietoturvaloukkauksen tapauksessa henkilötietojen käsittelijän on tehtävä yhteistyötä rekisterinpitäjän kanssa ja avustettava rekisterinpitäjää, jotta tämä voi täyttää tapauksen mukaan asetuksen (EU) 2016/679 33 ja 34 artiklan tai asetuksen (EU) 2018/1725 34 ja 35 artiklan mukaiset velvoitteensa, ottaen huomioon käsittelyn luonne ja henkilötietojen käsittelijän käytettävissä olevat tiedot.</p>
          <h3>8.1. Tietojen tietoturvaloukkaus rekisterinpitäjän käsittelemien tietojen osalta</h3>
          <p>Jos henkilötietojen tietoturvaloukkaus koskee rekisterinpitäjän käsittelemiä tietoja, henkilötietojen käsittelijän on avustettava rekisterinpitäjää</p>
          <ol>
            <li>ilmoitettaessa tapauksen mukaan henkilötietojen tietoturvaloukkauksesta toimivaltaiselle valvontaviranomaiselle / toimivaltaisille valvontaviranomaisille ilman aiheetonta viivytystä sen jälkeen, kun rekisterinpitäjä on saanut sen tietoonsa /, (paitsi jos henkilötietojen tietoturvaloukkauksesta ei todennäköisesti aiheudu luonnollisten henkilöiden oikeuksiin ja vapauksiin kohdistuvaa riskiä);</li>
            <li>hankittaessa seuraavat tiedot, jotka on asetuksen (EU) 2016/679 33 artiklan 3 kohdan mukaisesti mainittava rekisterinpitäjän ilmoituksessa, ja joihin on sisällytettävä vähintään seuraavat:
              <ol>
                <li>henkilötietojen luonne, mukaan lukien mahdollisuuksien mukaan asianomaisten rekisteröityjen ryhmät ja arvioidut lukumäärät sekä henkilötietotietueiden ryhmät ja arvioidut lukumäärät;</li>
                <li>henkilötietojen tietoturvaloukkauksen todennäköiset seuraukset;</li>
                <li>toimenpiteet, joita rekisterinpitäjä on ehdottanut tai jotka se on toteuttanut henkilötietojen tietoturvaloukkauksen johdosta, tarvittaessa myös toimenpiteet mahdollisten haittavaikutusten lieventämiseksi.</li>
              </ol>
            </li>
          </ol>
          <p>Jos ja siltä osin kuin kaikkia tietoja ei ole mahdollista toimittaa samaan aikaan, alkuperäisen ilmoituksen on sisällettävä saatavilla olevat tiedot, ja lisätiedot on sen jälkeen toimitettava ilman aiheetonta viivytystä, kun ne tulevat saataville;</p>
          <ol style={{counterReset: "list-counter 2"}}>
            <li>noudatettaessa asetuksen (EU) 2016/679 34 artiklan mukaisesti velvoitetta ilmoittaa henkilötietojen tietoturvaloukkauksesta ilman aiheetonta viivytystä rekisteröidylle, kun henkilötietojen tietoturvaloukkaus todennäköisesti aiheuttaa suuren riskin luonnollisten henkilöiden oikeuksille ja vapauksille.</li>
          </ol>
          <h3>8.2. Tietojen tietoturvaloukkaus henkilötietojen käsittelemien tietojen osalta</h3>
          <p>Kun kyseessä on henkilötietojen käsittelijän käsittelemiin tietoihin liittyvä henkilötietojen tietoturvaloukkaus, henkilötietojen käsittelijän on ilmoitettava siitä rekisterinpitäjälle ilman aiheetonta viivytystä saatuaan tietoturvaloukkauksen tietoonsa. Kyseisen ilmoituksen on sisällettävä vähintään seuraavat:</p>
          <ol>
            <li>kuvaus tietoturvaloukkauksen luonteesta (mukaan lukien mahdollisuuksien mukaan asianomaisten rekisteröityjen ja henkilötietotietueiden ryhmät ja arvioitu lukumäärä);</li>
            <li>tiedot yhteyspisteestä, josta saa lisätietoja henkilötietojen tietoturvaloukkauksesta;</li>
            <li>tietoturvaloukkauksen todennäköiset seuraukset ja toimenpiteet, jotka on toteutettu tai joita ehdotetaan toteutettavaksi tietoturvaloukkauksen korjaamiseksi, mukaan lukien sen mahdollisten haitallisten vaikutusten lieventämiseksi.</li>
          </ol>
          <p>Jos ja siltä osin kuin kaikkia tietoja ei ole mahdollista toimittaa samaan aikaan, alkuperäisen ilmoituksen on sisällettävä saatavilla olevat tiedot, ja lisätiedot on sen jälkeen toimitettava ilman aiheetonta viivytystä, kun ne tulevat saataville.</p>
          <p>Osapuolet esittävät liitteessä III kaikki muut tiedot, jotka henkilötietojen käsittelijän on toimitettava avustaessaan rekisterinpitäjää asetuksen (EU) 2016/679 33 ja 34 artiklan mukaisten rekisterinpitäjän velvoitteiden noudattamisessa.</p>
        </Section>
        <Section>
          <h2>9. Lausekkeiden noudattamatta jättäminen ja sopimuksen purkaminen</h2>
          <ol>
            <li>Jos henkilötietojen käsittelijä rikkoo näiden lausekkeiden mukaisia velvoitteitaan, rekisterinpitäjä voi määrätä henkilötietojen käsittelijän keskeyttämään henkilötietojen käsittelyn, kunnes henkilötietojen käsittelijä noudattaa näitä lausekkeita tai sopimus puretaan, sanotun kuitenkaan rajoittamatta asetuksen (EU) 2016/679 ja/tai asetuksen (EU) 2018/1725 säännösten soveltamista. Henkilötietojen käsittelijän on viipymättä ilmoitettava rekisterinpitäjälle, jos se ei mistä tahansa syystä pysty noudattamaan näitä lausekkeita.</li>
            <li>Rekisterinpitäjällä on oikeus purkaa sopimus siltä osin kuin on kyse henkilötietojen käsittelystä näiden lausekkeiden mukaisesti, jos
              <ol>
                <li>rekisterinpitäjä on keskeyttänyt henkilötietojen käsittelijän suorittaman henkilötietojen käsittelyn a kohdan mukaisesti eikä näiden lausekkeiden noudattamista palauteta kohtuullisessa ajassa ja joka tapauksessa kuukauden kuluessa keskeyttämisestä;</li>
                <li>henkilötietojen käsittelijä rikkoo olennaisesti tai jatkuvasti näitä lausekkeita tai asetuksen (EU) 2016/679 ja/tai asetuksen (EU) 2018/1725 mukaisia velvoitteitaan;</li>
                <li>henkilötietojen käsittelijä ei noudata toimivaltaisen tuomioistuimen tai toimivaltais(t)en valvontaviranomais(t)en sitovaa päätöstä näiden lausekkeiden tai asetuksen (EU) 2016/679 ja/tai asetuksen (EU) 2018/1725 mukaisista velvoitteistaan.</li>
              </ol>
            </li>
            <li>Henkilötietojen käsittelijällä on oikeus purkaa sopimus siltä osin kuin se koskee henkilötietojen käsittelyä näiden lausekkeiden nojalla, jos rekisterinpitäjä vaatii ohjeiden noudattamista sen jälkeen, kun käsittelijä on lausekkeen 7.1 b kohdan mukaisesti ilmoittanut rekisterinpitäjälle, että sen ohjeet ovat sovellettavien oikeudellisten vaatimusten vastaisia.</li>
            <li>Kun sopimus on purettu, henkilötietojen käsittelijän on rekisterinpitäjän valinnan mukaan poistettava kaikki rekisterinpitäjän puolesta käsitellyt henkilötiedot ja todistettava rekisterinpitäjälle, että se on tehnyt niin, tai palautettava kaikki henkilötiedot rekisterinpitäjälle ja poistettava olemassa olevat jäljennökset, jollei unionin tai jäsenvaltion lainsäädännössä edellytetä henkilötietojen säilyttämistä. Henkilötietojen käsittelijän on varmistettava, että näitä lausekkeita noudatetaan, kunnes tiedot poistetaan tai palautetaan.</li>
          </ol>
        </Section>
        <Section>
          <h2>LIITE I Luettelo osapuolista</h2>
          <p>
            <b>Rekisterinpitäjä:</b>
          </p>
          <p>
            Sopimuksessa määritelty Palvelun Käyttäjä
          </p>
          <p><b>Henkilötietojen käsittelijät:</b></p>
          <TwoColumn>
            <div>
              <p>
                1) Nimi: Testausserveri ry<br /> 
              </p>
              <p>
                Yhteyshenkilön nimi, asema ja yhteystiedot: <br />
                Mikael Hannolainen <br />
                Hallituksen jäsen <br />
                <IoIosMail /> <a href="mailto:mikael@testausserveri.fi">mikael@testausserveri.fi</a>
              </p>
              <p>Allekirjoitus ja liittymispäivä: 14.04.2024 <br />
                Mikael Hannolainen HJ, Eemil Sinkko HPJ</p>
            </div>
            <div>
              <p>
                2) Nimi: Osphost ry<br /> 
              </p>
              <p>
                Yhteyshenkilön nimi, asema ja yhteystiedot: <br />
                Jani Hiltunen <br />
                Hallituksen jäsen <br />
                <IoIosMail /> <a href="mailto:jmh@osphost.fi">jmh@osphost.fi</a>
              </p>
              <p>
                Allekirjoitus ja liittymispäivä: 14.04.2024 <br />
                Jani Hiltunen HJ
              </p>
            </div>
          </TwoColumn>
        </Section>
        <Section>
          <h2>LIITE II Henkilötietojen käsittelyn kuvaus</h2>
          <ol>
            <li>Niiden rekisteröityjen ryhmät, joiden henkilötietoja käsitellään:<br />
              Käyttäjä voi harkintansa mukaan toimittaa henkilötietoja Palvelun käytön yhteydessä, ja hän itse määrittelee ja hallitsee näiden tietojen laajuutta. Käyttäjän keräämät rekisteröityjen ryhmät voi sisältää, mutta ei rajoitu, Käyttäjän verkkosivuvierailijoihin.
            </li>
            <li>Käsiteltävät henkilötietoryhmät:<br />
              Käyttäjä voi harkintansa mukaan toimittaa henkilötietoja Palvelun käytön yhteydessä, ja hän itse määrittelee ja hallitsee näiden tietojen laajuutta. Tämä voi sisältää, mutta ei rajoitu, seuraaviin henkilötietoryhmiin:
              <ol>
                <li>Nimi</li>
                <li>Osoite</li>
                <li>Puhelinnumero</li>
                <li>Syntymäaika</li>
                <li>Sähköpostiosoite</li>
                <li>Muu kerätty tieto, joka voi suorasti tai epäsuorasti olla yhdistettävissä rekisteröityyn</li>
              </ol>
            </li>
            <li>Henkilötietojen käsittelyn luonne:<br />
              Tallentaminen ja muu käsittely, joka on tarpeen Käyttäjälle tarjottujen palvelujen, kuten webhotellien, sähköpostipalveluiden ja verkkotunnusten tarjoamiseksi, ylläpitämiseksi ja huoltamiseksi.</li>
            <li>Tarkoitus, jota varten henkilötietoja käsitellään rekisterinpitäjän puolesta:<br />
              Henkilötietoja käsitellään rekisterinpitäjän puolesta sopimuksen edellyttämällä tavalla Käyttäjälle rekisteröityjen palvelujen toteuttamiseksi.</li>
            <li>Henkilötietojen käsittelyn kesto:<br />
              Henkilötietojen käsittelyn kesto määräytyy täysin Palveluntarjoajien ja Käyttäjän sopimussuhteen keston mukaan.</li>
          </ol>
        </Section>
        <Section>
          <h2>LIITE III Tekniset ja organisatoriset toimenpiteet, mukaan lukien tekniset ja organisatoriset toimenpiteet tietoturvan varmistamiseksi</h2>
          <ol>
            <li>Henkilötietojen suojaaminen:
              <ol>
                <li>Käyttäjä vastaa tarvittaessa pseudonymisoinnista.</li>
              </ol>
            </li>
            <li>Fyysinen turvallisuus:
              <ol>
                <li>Laitteet säilytetään lukitussa tilassa.</li>
                <li>Laitteiden kanssa samassa tilassa sekä lähitilat ovat suojattu hälytysjärjestelmällä.</li>
                <li>Käytöstä poistetut kovalevyt hajotetaan ja kierrätetään asiaan kuuluvalla tavalla.</li>
                <li>Laitteet ovat suojattu vikavirtasuojalla, joka suojaa laitteita virtapiikeiltä.</li>
                <li>Kukaan ei pääse tilaan ilman meidän valtuuttamaa valvojaa.</li>
                <li>Tilassa on tallentava kameravalvonta.</li>
              </ol>
            </li>
            <li>Luottamuksellisuus, eheys ja saatavuus:
              <ol>
                <li>Pääsyt järjestelmiin on porrastettu. Järjestelmiin on pääsy vain henkilöstöllä, joiden tehtävän hoitaminen edellyttää pääsyä tietoihin.</li>
                <li>Tärkeät järjestelmät ovat suojattu UPS-varavirralla.</li>
                <li>Järjestelmien virtalähteet ovat kahdennettu sekä kaikki järjestelmät ovat suojattu RAID-peilausjärjestelmällä.</li>
              </ol>
            </li>
            <li>Tietojen käsittelyn turvallisuus:
              <ol>
                <li>Pääsyt järjestelmiin on porrastettu. Järjestelmiin on pääsy vain henkilöstöllä, joiden tehtävän hoitaminen edellyttää pääsyä tietoihin.</li>
                <li>Salasanat ovat kryptattu.</li>
                <li>Välilaitteiden hallinta on turvattu VPN-tunneloinnilla.</li>
                <li>Jokainen järjestelmän salasana tai 2FA-koodi säilytetään turvallisesti salasanahallintapalvelussa.</li>
                <li>SSH-yhteydet ovat turvattu RSA- avaimilla, joissa on omat salasanat sekä palvelimen sudo-käyttäjälle pääsy edellyttää myös palvelinkohtaista salasanaa.</li>
              </ol>
            </li>
          </ol>
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
