import dynamic from 'next/dynamic';
import Head from 'next/head'
import Link from 'next/link';
import styled from 'styled-components';
import { Content } from '../components/Content/Content'
import Header from '../components/Header/Header'
import { InfoBox } from '../components/InfoBox/InfoBox';
import { Title } from '../components/Title/Title'

import projects3DPlaceholderImage from '../assets/projects-3d-placeholder.png'
import { useState } from 'react';
import { Loading } from '../components/Loading/Loading';
import { Projects3D } from '../components/Projects3D/Projects3D';

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
});

const SplineWrapper = styled.div`
  position: relative;
  height: 450px;
  margin-top: -40px;
  filter: blur(0px);

  transition-property: filter;
  transition-duration: 0.5s;
  transition-delay: 1s;

  .spinner {
    display: none;
  }

  .loading .spinner {
    display: inline-block;
  }

  &::before {
    content: '';
    background-image: url('${projects3DPlaceholderImage.src}');
    opacity: 0;
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    transition: opacity 1s;
    background-size: auto 100%;
    transform: scale(2);
    background-position: center;
    pointer-events: none;
  }
  &.loading {
    transition: filter 0.5s;
    filter: blur(30px);
    pointer-events: none;

  }
  &.loading::before {
    opacity: 1;
  }
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
  const [splineLoading, setSplineLoading] = useState(true)
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
