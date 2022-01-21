import Head from 'next/head'
import DiscordBox from '../components/DiscordBox/DiscordBox'
import Header from '../components/Header/Header'


export default function Home() {
  return (
    <article>
      <Head>
          <title>Testausserveri</title>
      </Head>
      <h2>Testausserveri</h2>
      <p>
      Testausserveri on kaikille avoin yhteisö koodaamisesta, eettisestä hakkeroinnista ja yleisesti teknologiasta innostuneille nuorille (ja nuorten mielisille). Kehitämme yhdessä erilaisia mielenkiintoisia projekteja, joita voit tsekata alta.
      </p>
      <p>
      Keskusteluihimme on helppo liittyä matalalla kynnyksellä, sekä kannustamme jäseniämme kehittymään kanssamme.
      </p>

      <DiscordBox />
    </article>
  )
}
