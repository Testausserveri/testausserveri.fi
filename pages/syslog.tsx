import Head from 'next/head'
import Link from 'next/link';
import Image from "next/legacy/image";

import { Content } from '../components/Content/Content'
import { Footer } from '../components/Footer/Footer';
import { InfoBox } from '../components/InfoBox/InfoBox';
import { ProjectRow } from '../components/ProjectRow/ProjectRow';

import { Projects3D } from '../components/Projects3D/Projects3D';
import Projects3DMobile from '../assets/projects3d/mobile.png'
import api from '../utils/api';
import { GetServerSideProps, GetStaticProps, InferGetServerSidePropsType, InferGetStaticPropsType } from 'next';
import { PostDetails, ShallowProject } from '../utils/types';
import posts from '../utils/posts';
import { RecentPostsRow } from '../components/RecentPostsRow/RecentPostsRow';
import { H2 } from '../components/Title/Title';

export default function Syslog({ copyrightYear, pagePosts, testausautoRecentPosts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
        <Head>
            <title>Syslog | Testausserveri</title>
            <meta name="description" content="Testausserveri on kaikille avoin yhteisö koodaamisesta, eettisestä hakkeroinnista ja yleisesti teknologiasta innostuneille nuorille." />
        </Head>
        
        <Content>
          <RecentPostsRow posts={pagePosts} columns={2} />

          <H2>Testausauton uusimmat</H2>
          <RecentPostsRow posts={testausautoRecentPosts}/>

        </Content>
      <Footer copyrightYear={copyrightYear} />
    </div>
  )
}

export const getStaticProps: GetStaticProps<{
  copyrightYear: number, 
  pagePosts: PostDetails[],
  testausautoRecentPosts: PostDetails[]
}> = async () => {
  const pagePosts = await posts.list(0,10);
  const testausautoRecentPosts = await posts.listRecentTestausauto();

  return {
    props: {
      copyrightYear: new Date().getFullYear(),
      pagePosts: JSON.parse(JSON.stringify(pagePosts)),
      testausautoRecentPosts: JSON.parse(JSON.stringify(testausautoRecentPosts))
    }
  }
}
