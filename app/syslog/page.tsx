
import Head from 'next/head'

import { Content } from '@/components/Content/Content'
import { Footer } from '@/components/Footer/Footer';
import posts from '@/utils/posts';
import { RecentPostsRow } from '@/components/RecentPostsRow/RecentPostsRow';
import { H2 } from '@/components/Title/Title';
import { CapsuleButton } from '@/components/Button/CapsuleButton';

export default async function Page() {
  //const [ loadedPosts, setLoadedPosts ] = useState<PostDetails[]>(basePosts);

  const { posts: basePosts, allCount } = await posts.list(0,9);
  const testausautoRecentPosts = await posts.listRecentTestausauto();

  function loadMore() {
    
  }
  return (
    <div>
        <Head>
            <title>Syslog | Testausserveri</title>
            <meta name="description" content="Testausserveri on kaikille avoin yhteisö koodaamisesta, eettisestä hakkeroinnista ja yleisesti teknologiasta innostuneille nuorille." />
        </Head>
        
        <Content>
          {basePosts.length} {allCount}
          <RecentPostsRow posts={basePosts} columns={2} />
          <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
            <CapsuleButton>Näytä lisää</CapsuleButton>
          </div>
          <H2>Testausauton uusimmat</H2>
          <RecentPostsRow posts={testausautoRecentPosts}/>

        </Content>
      <Footer />
    </div>
  )
}
