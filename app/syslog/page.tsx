
import Head from 'next/head'

import { Content } from '@/components/Content/Content'
import { Footer } from '@/components/Footer/Footer';
import { PostsGrid } from '@/components/PostsGrid/PostsGrid';
import { H2 } from '@/components/Title/Title';
import { CapsuleButton } from '@/components/Button/CapsuleButton';
import MorePosts from './MorePosts';
import { PaginationResponse, perPage } from './page/[index]/route';
import posts from '@/utils/posts';
import Separator from '@/components/Separator/Separator';

export default async function Page() {
  const list = await posts.list(0, perPage - 1);
  const { posts: basePosts } = list;
  const morePages = Math.ceil(list.allCount / perPage) > 1;

  const testausautoRecentPosts = await posts.listRecentTestausauto();

  return (
    <div>
        <Head>
            <title>Syslog | Testausserveri</title>
            <meta name="description" content="Testausserveri on kaikille avoin yhteisö koodaamisesta, eettisestä hakkeroinnista ja yleisesti teknologiasta innostuneille nuorille." />
        </Head>
        
        <Content>
          <PostsGrid posts={basePosts} columns={2} />
          { morePages ? <MorePosts /> : <Separator>Loppu</Separator> } 
            
          <H2>Testausauton uusimmat</H2>
          <PostsGrid posts={testausautoRecentPosts}/>

        </Content>
      <Footer />
    </div>
  )
}
