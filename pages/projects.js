import Head from 'next/head'
import Link from 'next/link';
import { Content } from '../components/Content/Content'
import { InfoBox } from '../components/InfoBox/InfoBox';

import { Projects3D } from '../components/Projects3D/Projects3D';

export default function Home() {
  return (
    <article>
        <Head>
            <title>Projektit | Testausserveri</title>
        </Head>
        <Content>
          <Projects3D />
          <InfoBox>
            <span>Tämä projektilistaus on vielä keskeneräinen.</span>
            <span>
              <p>Voit auttaa täydentämällä sitä <Link href="https://github.com/Testausserveri/testausserveri.fi/issues/47">tekemällä dokumentointia GitHubiin</Link>.</p>
            </span>
          </InfoBox>
        </Content>
    </article>
  )
}
