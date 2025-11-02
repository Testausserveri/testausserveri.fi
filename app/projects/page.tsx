import Head from 'next/head';
import Link from 'next/link';

import { Content } from '@/components/Content/Content';
import { Footer } from '@/components/Footer/Footer';
import { InfoBox } from '@/components/InfoBox/InfoBox';
import { ProjectRow } from '@/components/ProjectRow/ProjectRow';

import { Projects3D } from '@/components/Projects3D/Projects3D';
import api from '@/utils/api';
import { ShallowProject } from '@/utils/types';
import { NavigateLink } from '@/components/NavigateLink/NavigateLink';

export default async function Projects() {
  const data = await api.projects.all();

  return (
    <div>
      <Head>
        <title>Projektit | Testausserveri</title>
        <meta
          name="description"
          content="Testausserveri on kaikille avoin yhteisö koodaamisesta, eettisestä hakkeroinnista ja yleisesti teknologiasta innostuneille nuorille."
        />
      </Head>
      <div style={{ marginBottom: '-25px' }}>
        <Projects3D />
      </div>
      <Content noMargin>
        <InfoBox>
          <span>Tämä projektilistaus on vielä keskeneräinen.</span>
          <span>
            <p>
              Voit auttaa täydentämällä sitä{' '}
              <Link href="https://github.com/Testausserveri/testausserveri.fi/issues/47">
                tekemällä dokumentointia GitHubiin
              </Link>
              .
            </p>
          </span>
        </InfoBox>
        {data.map((project: ShallowProject) => (
          <ProjectRow key={project._id} project={project} />
        ))}
        <br />
        <br />
        <NavigateLink href="/ideas">Idealista</NavigateLink>
      </Content>
      <Footer />
    </div>
  );
}
