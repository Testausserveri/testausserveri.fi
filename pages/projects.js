import dynamic from 'next/dynamic';
import Head from 'next/head'
import Link from 'next/link';
import styled from 'styled-components';
import { Content } from '../components/Content/Content'
import Header from '../components/Header/Header'
import { InfoBox } from '../components/InfoBox/InfoBox';
import { Title } from '../components/Title/Title'

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
});

const SplineWrapper = styled.div`
  position: relative;
  height: 450px;
  margin-top: -40px;
  ::after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    -webkit-box-shadow: inset 0px 0px 26px 20px #0D0D0D; 
    box-shadow: inset 0px 0px 26px 20px #0D0D0D;
    pointer-events: none;
  }
`

export default function Home() {
  return (
    <article>
        <Head>
            <title>Projektit | Testausserveri</title>
        </Head>
        <Content>
          <SplineWrapper>
            <Spline 
              scene="https://prod.spline.design/9xyPHvl-sfGpOW9a/scene.splinecode"
              />
          </SplineWrapper>
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
