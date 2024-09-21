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
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { ShallowProject } from '../utils/types';

export default function Projects({ projectsData: projects, isMobile, copyrightYear }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      <Head>
        <title>Projektit | Testausserveri</title>
        <meta name="description" content="Testausserveri on kaikille avoin yhteisö koodaamisesta, eettisestä hakkeroinnista ja yleisesti teknologiasta innostuneille nuorille." />
      </Head>
      <div style={{marginBottom: "-25px"}}>
          {!isMobile ? <Projects3D /> :
            <div style={{ marginBottom: "4rem" }}>
              <Image
                src={Projects3DMobile}
                layout="responsive"
                alt="Kuva, jossa näkyy 3D-mallit pöydästä, USB-tikusta, herätyskellosta, tietokoneesta sekä polkupyörästä jonka kyljessä on QR-koodi"
              />
            </div>
          }
      </div>
      <Content noMargin>
        <InfoBox>
          <span>Tämä projektilistaus on vielä keskeneräinen.</span>
          <span>
            <p>Voit auttaa täydentämällä sitä <Link href="https://github.com/Testausserveri/testausserveri.fi/issues/47">tekemällä dokumentointia GitHubiin</Link>.</p>
          </span>
        </InfoBox>
        {projects.map((project) => (
          <ProjectRow key={project._id} project={project} />
        ))}
      </Content>
      <Footer />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<{
  projectsData: ShallowProject[],
  isMobile: boolean,
  copyrightYear: number
}> = async ({ req, res }) => {
  const data = await api.projects.all()
  const UA = req.headers['user-agent'];
  const isMobile = Boolean(UA?.match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
  ))

  res.setHeader(
    'Cache-Control',
    'public, maxage=86400, stale-if-error=600'
  )

  return {
    props: {
      projectsData: data,
      isMobile,
      copyrightYear: new Date().getFullYear()
    }
  }
}

