import { Metadata } from 'next'
import Link from 'next/link'
import { Content } from '../components/Content/Content'
import { Footer } from '../components/Footer/Footer'
import { Collaborations } from '../components/Collaborations/Collaborations'
import { PostsGrid } from '../components/PostsGrid/PostsGrid'
import { NavigateLink } from '@/components/NavigateLink/NavigateLink'
import { Capsule } from '@/components/Capsule/Capsule'
import api from '@/utils/api'
import post from '@/utils/posts'
import { HeroWithInteraction } from '@/components/DiscordLive/HeroWithInteraction'
import { GuildInfoProvider } from '@/contexts/GuildInfoContext'
import { LiveStats } from './LiveStats'
import { LiveLeaderboards } from './LiveLeaderboards'
import styles from './page.module.css'
import { GuildInfoModelOption } from '@/utils/types'

export const revalidate = 60;

export const metadata: Metadata = {
  title: 'Testausserveri',
  description: 'Testausserveri on kaikille avoin yhteisö koodaamisesta, eettisestä hakkeroinnista ja yleisesti teknologiasta innostuneille nuorille.',
}

const guildInfoModel: GuildInfoModelOption[] = ["memberCount", "membersOnline", "messagesToday", "codingLeaderboard", "messagesLeaderboard"];

export default async function Page() {
  const { posts: recentPosts } = await post.list(3);
  const guildInfo = await api.getGuildInfo(guildInfoModel);

  return (
    <div>
      <HeroWithInteraction />
      <Content wider>
        <PostsGrid posts={JSON.parse(JSON.stringify(recentPosts))} />
        <GuildInfoProvider guildInfoModel={guildInfoModel} initialGuildInfo={guildInfo}>
          <LiveStats />
          <p className={styles.textColumns}>
            Testausserveri on kaikille avoin yhteisö koodaamisesta, eettisestä hakkeroinnista ja yleisesti teknologiasta innostuneille nuorille. Kehitämme yhdessä erilaisia mielenkiintoisia projekteja, joita voit tsekata täältä.
            <br /><br className={styles.mobileBreak} />
            Keskusteluihimme on helppo liittyä matalalla kynnyksellä, sekä kannustamme jäseniämme kehittymään kanssamme.
            <br /><br className={styles.mobileBreak} />
            Lue lisää yhdistyksestämme <Link href="/about">Tietoa meistä -sivulta.</Link>
          </p>
          <NavigateLink href="/koneet-kiertoon">Koneet kiertoon</NavigateLink>
          <NavigateLink href="/host">Palvelintila <Capsule style={{ fontSize: ".8rem", transform: "translateY(-2px)", marginLeft: "0.3em", display: "inline-block" }}>BETA</Capsule></NavigateLink>
          <br />
          <LiveLeaderboards />
        </GuildInfoProvider>
        <Collaborations />
      </Content>
      <Footer />
    </div>
  )
}


