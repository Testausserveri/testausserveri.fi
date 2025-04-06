import styles from './about.module.css'
import { Content } from '@/components/Content/Content'
import { H2 } from '@/components/Title/Title'
import Image from "next/legacy/image"

// pictures
import testausmeetImg from '@/assets/about/testausmeet.jpg'
import assemblyImg from '@/assets/about/grid/assembly.jpg'
import hackdayImg from '@/assets/about/grid/hackday.jpg'
import junctionImg from '@/assets/about/grid/junction.jpg'
import tacobellImg from '@/assets/about/grid/tacobell.jpg'

// board pictures
import hanBoardImg from '@/assets/about/board/han.jpeg'
import ellBoardImg from '@/assets/about/board/ell.jpeg'
import mkrBoardImg from '@/assets/about/board/mkr.jpeg'
import sinBoardImg from '@/assets/about/board/sin.jpeg'
import serBoardImg from '@/assets/about/board/ser.jpeg'
import oikBoardImg from '@/assets/about/board/oik.jpeg'

// icons
import GithubIcon from '@/assets/GithubIcon.svg'
import InstagramIcon from '@/assets/InstagramIcon.svg'
import YoutubeIcon from '@/assets/YoutubeIcon.svg'
import TwitterIcon from '@/assets/TwitterIcon.svg'

import { GridGallery } from '@/components/GridGallery/GridGallery'
import { Footer } from '@/components/Footer/Footer'
import Link from 'next/link'
import { CapsuleButton } from '@/components/Button/CapsuleButton'
import { Collaborations } from '@/components/Collaborations/Collaborations'
import { NavigateLink } from '@/components/NavigateLink/NavigateLink'
import api from '@/utils/api'
import Head from 'next/head'

export const revalidate = 600; // 10 minutes

export default async function AboutPage() {
    const {memberCount} = await api.getGuildInfo(["memberCount"])

    return (
        <div>
            <Head>
                <title>Tietoa meistä | Testausserveri</title>
                <meta name="description" content="Testausserveri on kaikille avoin yhteisö koodaamisesta, eettisestä hakkeroinnista ja yleisesti teknologiasta innostuneille nuorille." />
            </Head>
            <Content wider>
                <Image
                    className={styles.displayImage}
                    placeholder="blur"
                    src={testausmeetImg}
                    alt="Kuva Testausmeetistä. Noin 20 Testausserverin jäsentä istuu pöydän ääressä ja katsoo suurta näyttöä, jossa esitellään hallitusehdokkaita."
                />
            </Content>
            <Content>
                <p style={{ marginTop: "1.5rem" }}>
                    Testausserveri ry on vuonna 2021 perustettu voittoa tavoittelematon yhdistys, jonka tavoitteena on edistää ja mahdollistaa nuorten tietotekiikka- ja kyberharrastuneisuutta.
                    Yhdistyksen keskeisin toiminto on sen {memberCount} jäsenen Discord-yhteisö, jossa nuoret pääsevät verkostoitumaan vertaistensa kanssa.
                </p>
                <p>
                    Yhteisömme tavoitteena on innostaa nuoria oppimaan uutta ja hiomaan jo olemassaolevia taitojaan tietotekiikka- ja kyberalalla.
                    Yhdistyksemme jäsenistön laaja asiantuntemus mahdollistaa tukevaa toimintaamme: yhteisössämme voi saada apua kaikesta koodaamisen perusteista eettisen hakkeroinnin periaatteisiin.
                </p>
                <p>
                    Tuemme avoimen lähdekoodin projekteja ja työstämämme projektit julkaistaan kaikille nähtäväksi yhdistyksemme Github-sivuilla.
                    Kaikki yhdistyksemme ja yhteisömme tuottamat palvelut ovat ilmaisia!
                </p>
            </Content>
            <Content wider>
                <GridGallery
                    imageProps={{ placeholder: "blur" }}
                    media={[
                        {
                            image: assemblyImg,
                            alt: "Valokuva Assembly-tapahtumasta. Tumma tapahtumahalli jossa on ihmisiä.",
                        },
                        {
                            image: junctionImg,
                            alt: "Valokuva Junction-tapahtumasta. Sali, jossa on ihmisiä työskentelemässä tietokoneilla pitkien pöytien ääressä.",
                        },
                        {
                            image: hackdayImg,
                            alt: "Valokuva LähiTapiola Hack Day -tapahtumasta. Seinälle heijastettu kuva, jossa teksti: \"Bountyt. // - 1. sija: wtf 3000€ // - 2. sija: testausserveri 2000€ // - 3. sija: t0ni 1500€ // - Muut sijoitukset: kaaos 500€, ks-atk 500€, accenture 500€ // Mi</p>elenkiintoisin havainto: testausserveri +1000€ // - Eniten havaintoja: wtf +1000€",
                        },
                        {
                            image: tacobellImg,
                            alt: "Valokuva Taco Bell -ravintolasta, jossa näkyy Testausserverin jäseniä syömässä tacoja."
                        }]} 
                />
            </Content>
            <Content>
                <H2 style={{ marginTop: "1.5rem" }}>Tavoitteemme</H2>
                <p>
                    Tavoitteenamme on ylläpitää yhdistyksessämme ja Discord-yhteisössämme hyvää ilmapiiriä, joka antaa tasavertaiset mahdollisuudet kaikille oppia uutta tietotekniikasta tai hioa olemassa olevia taitojaan.
                </p>
                <p>
                    Pyrimme myös toimimaan tietotekniikka- ja kyberaloilla nuorten eduksi erilaisten yhteistyökumppaniemme kanssa, kuin mediassakin.
                    Tavoitteenamme on tuoda ohjelmointia ja eettistä hakkerointia harrastuksina entistä enemmän suurten yleisöjen eteen.
                </p>
                <H2>Yhdistyksen järjestäytyminen</H2>
                <p>
                    Järjestämme muutaman kerran vuodessa <a href="https://wiki.testausserveri.fi/wiki/Testausmeet">Testausmeetin</a>.
                    Tapahtumassa pääsee tapaamaan kasvoja nimimerkkien takaa, verkostoitumaan, puhumaan kaikesta &quot;tech&quot; ja ennen kaikkea nauttimaan rennosta ajanvietosta.
                    Kutsu tulee Discordiin tiedotteena, sekä yhdistyksemme jäsenten henkilökohtaisiin sähköpostiosoitteisiin.
                    Testausmeetin ohella järjestetään yleensä yhdistyksen kokous, jossa päätetään virallisesti yhdistyksen asioista.
                </p>
                <p>
                    Yhdistyksemme osallistuu lukuisiin tietotekniikka- ja kyberalan tapahtumiin ja kilpailuihin, kuten hackathoneihin, CTF-kilpailuihin ja hack-day tapahtumiin.
                    Kenellä tahansa yhdistyksen jäsenellä on mahdollisuus päästä osallistumaan näihin tapahtumiin ja kilpailuihin ilmaiseksi.
                </p>

                <H2>Tutustu toimintaamme</H2>
                <p>
                    Testausserveri tuottaa sisältöä seuraaviin sosiaalisiin medioihin ja palveluihin. Etenkin Instagramissa pääsee tutustumaan yhteisömme kohohetkiin.
                </p>
                <NavigateLink href='/vuosikertomus-2023.pdf'>Vuosikertomus 2023</NavigateLink>
                <NavigateLink href='/vuosikertomus-2022.pdf'>Vuosikertomus 2022</NavigateLink>
                <div className={`${styles.grid} ${styles.soc}`}>
                    {[
                        ["Instagram", "https://instagram.com/testausserveri", InstagramIcon],
                        ["Youtube", "https://youtube.com/@testausserveri", YoutubeIcon],
                        ["Github", "https://github.com/testausserveri", GithubIcon],
                        ["Twitter", "https://twitter.com/testausserveri", TwitterIcon],
                    ].map((social) => (
                        <Link href={social[1]} key={social[0]} className={styles.socialLink}>
                            <Image src={social[2]} alt={`${social[0]} logo`} height={24} width={24} unoptimized />
                            {social[0]}
                        </Link>
                    ))}
                </div>
                <H2>Yhdistysjärjestys</H2>
                <p>
                    Yhdistyksen hallitukseen kuuluvat toimikaudella 2024 seuraavat henkilöt (henkilökohtaiset sähköpostiosoitteet etunimi@testausserveri.fi, jollei toisin mainittu):
                </p>
                <div className={`${styles.grid} ${styles.board}`}>
                    {([
                        [sinBoardImg, "Eemil Sinkko", "puheenjohtaja, talous"],
                        [ellBoardImg, "Antti Ellilä", "varapuheenjohtaja, tietojärjestelmät"],
                        [hanBoardImg, "Mikael Hannolainen", "sihteeri"],
                        [mkrBoardImg, "Ruben Mkrtumyan", "hallituksen jäsen"],
                        [serBoardImg, "Sergey Ichtchenko", "hallituksen jäsen, yhteistyöt"],
                        [oikBoardImg, "Niilas Oikarainen", "hallituksen jäsen"]
                    ] as const).map(person => (
                        <div className={styles.personIntroduction} key={person[1]}>
                            <span>
                                <Image width="64" height="64" src={person[0]} placeholder="blur" alt={person[1]} />
                            </span>
                            <span>{person[1]}</span><br />
                            <span>{person[2]}</span>
                        </div>
                    ))}
                </div>
                <H2>Jäsenyys yhdistyksessämme</H2>
                <p>
                    Yhteisön toimintaan osallistuminen ei vaadi yhdistyksemme jäsenyyttä. Kaikki ovat tervetulleita! Jäsenyys mahdollistaa kuitenkin osallistumisesi toimintaamme aktiivisemmin, sekä pääsyn lukuisiin eri jäsenyysetuihin.
                </p>
                <a href="https://testausserveri.fi/apply"><CapsuleButton>Täytä jäsenhakemus</CapsuleButton></a>
                <p>
                    Jäsenhakemukset käsitellään aina seuraavassa yhdistyksen kokouksessa. Jäsenenä saa äänioikeuden, sekä pääsyn Testausserverin @testausserveri.fi sähköposti-, Mastodon- ja Bitwarden-palveluihin.
                </p>

                <H2>Ketkä tukevat meitä?</H2>
                <p>Teemme yhteistyötä tällä hetkellä seuraavien organisaatioiden kanssa:</p>
                <Collaborations style={{ margin: "2.5rem 0" }} noTitle />
                <p>
                    Lisäksi, jotkut yhteisömme jäsenet ovat tukeneet meitä taloudellisesti, joten suuri kiitos myös heille. Yhdistyksen rahankäyttö on läpinäkyvää ja kaikille nähtävillä <a href="http://opencollective.com/testausserveri-ry">OpenCollective-palvelussa</a>.
                </p>
            </Content>
            <Footer />
        </div>
    )
}