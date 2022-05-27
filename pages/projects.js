import Head from 'next/head'
import Link from 'next/link';
import { Content } from '../components/Content/Content'
import { InfoBox } from '../components/InfoBox/InfoBox';
import { ProjectRow } from '../components/ProjectRow/ProjectRow';

import { Projects3D } from '../components/Projects3D/Projects3D';

export default function Projects({projectsList}) {
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
          {projectsList.map((project) => (
            <ProjectRow key={project._id} project={project} />
          ))}
        </Content>
    </article>
  )
}

export async function getServerSideProps() {
  const response = await fetch("https://api.testausserveri.fi/v1/projects")
  const data = await response.json()

  return { props: { projectsList: data } }
}

