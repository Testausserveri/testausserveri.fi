import Head from 'next/head'
import { useRouter } from 'next/router'
import { Content } from '../../components/Content/Content'
import styled from 'styled-components'
import Link from 'next/link'

const Center = styled.p`
  position: absolute;
  left: 50%;
  top: 50%;  
  transform: translate(-50%, -50%);
  text-align: center;
  max-width: 500px;
`

export default function Project() {
  const router = useRouter()
  const { slug } = router.query

  return (
    <article>
        <Head>
            <title>Projekti | Testausserveri</title>
        </Head>
        <Center> 
          Projektisivut ovat vielä keskeneräinen ominaisuus. Hakemasi projekti tunnisteella <b>{slug}</b> näkyisi täällä.
          <br />
          <br />
          <Link href="/projects">Palaa takaisin projektilistaukseen</Link>
        </Center>
    </article>
  )
}
