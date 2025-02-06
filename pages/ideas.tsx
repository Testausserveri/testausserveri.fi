import Head from 'next/head'
import { Content } from '../components/Content/Content'
import { H1 } from '../components/Title/Title'
import { Footer } from '../components/Footer/Footer'
import Link from 'next/link'
import { ButtonIcon, CapsuleButton } from '@/components/Button/CapsuleButton'
import DiscordIcon from '../assets/DiscordIcon.svg'

export default function IdeaList() {
    return (
        <div>
            <Head>
                <title>Idealista | Testausserveri</title>
                <meta name="description" content="Testausserveri on kaikille avoin yhteisö koodaamisesta, eettisestä hakkeroinnista ja yleisesti teknologiasta innostuneille nuorille." />
                <meta property="og:site_name" content="Testausserveri" />
                <meta property="og:title" content="Idealista" />
                <meta property="og:description" content="Testausserveri on kaikille avoin yhteisö koodaamisesta, eettisestä hakkeroinnista ja yleisesti teknologiasta innostuneille nuorille." />
            </Head>
            <Content>
                <H1>Idealista</H1>
                <p>Kutiavatko sormesi päästä koodaamaan, mutta et keksi kiinnostavaa projekti-ideaa? Täällä on lista Testausserverin tarvitsemista projekteista, jotka ovat yksi tapa päästä hyvin mukaan yhdistyksen toimintaan!</p>
                <h2>Projekti-ideat</h2>
                <ul>
                    <li>
                        <b>Testauscord</b>: Discordin kaltainen chatpalvelu, jota voisimme ylläpitää itse. Lisätietoja hakusanalla &quot;testauscord&quot; Discord-palvelimellamme.
                    </li>
                    <li>
                        Kotitekoinen <b>hallintapaneeli Headscale/Tailscale-palvelulle</b>, <a href="https://discord.com/channels/697710787636101202/896078854253346817/1329368070103240738">lisätietoja</a>.
                    </li>
                    <li>
                        <b>Testaustime-lisäosa</b> sinun suosikkieditoriisi, <a href="https://testaustime.fi/extensions">lisätietoja</a>.
                    </li>
                    <li>
                        <i>Voit lisätä omia ideoitasi tänne luomalla pull requestin GitHubissa</i>
                    </li>
                </ul>
                <h2>Kiinnostuitko jostain ideasta? Näin pääset alkuun</h2>
                <ol>
                    <li>Liity Testausserveri ry:n Discord-palvelimelle:
                        <Link href="https://discord.testausserveri.fi">
                            <CapsuleButton
                                small
                                style={{ marginLeft: "1em" }}
                            >
                                <ButtonIcon src={DiscordIcon} alt="Discord logo" />
                                Liity palvelimelle!
                            </CapsuleButton>
                        </Link>
                    </li>
                    <li className='noLinkStyles'>
                        <p>Liity Testausserverin ry:n GitHub-organisaatioon: <a href='https://testausserveri.fi/github'>https://testausserveri.fi/github</a></p>
                    </li>
                    <li>
                        Ilmoita kiinnostuksesi jostain projekti-ideasta Discordissa, ja ylläpito luo projektillesi oman repostitorion
                    </li>
                    <li>
                        Aloita koodaaminen ja dokumentointi!
                    </li>
                    <li>
                        Ongelmia tai kysymyksiä? Kysy rohkeasti Discordissa esimerkiksi #koodaus-kanavalla!
                    </li>
                </ol>
                <p>Voit myös tutustua <Link href="/projects">olemassa oleviin projekteihimme</Link> ja kehittää niitä.</p>
            </Content>
            <Footer />
        </div>
    )
}

