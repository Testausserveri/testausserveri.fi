import Head from 'next/head'
import styled from 'styled-components'

const Meme = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;  
  transform: translate(-50%, -50%);
`

export default function Home() {
  return (
    <article>
      <Head>
        <title>404 | Testausserveri</title>
      </Head>
      <Meme src="https://c.tenor.com/aQ9O2r9eBxgAAAAC/apm-apmtv3.gif" />
    </article>
    )
  }
  