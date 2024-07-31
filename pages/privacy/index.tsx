import Head from 'next/head'
import { Content } from '../../components/Content/Content'
import { H1, H2 } from '../../components/Title/Title'
import { Footer } from '../../components/Footer/Footer'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { NavigateLink } from '../../components/NavigateLink/NavigateLink'


export default function Privacy({ copyrightYear }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      <Head>
          <title>Tietosuoja | Testausserveri</title>
          <meta name="description" content="Tutustu Testausserverin tietosuojaan" />
          <meta property="og:site_name" content="Testausserveri" />
          <meta property="og:title" content="Tietosuoja" />
          <meta property="og:description" content="Tutustu Testausserverin tietosuojaan" />
          <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Content>
        <H1>Tietosuoja</H1>
        <NavigateLink href="/privacy/members">Jäsenrekisterin tietosuojaseloste</NavigateLink>
        <NavigateLink href="/privacy/events">Tapahtumien osallistujarekisterin tietosuojaseloste</NavigateLink>
        <NavigateLink href="/privacy/ctf">CTF-pelin tietosuojaseloste</NavigateLink>
        <NavigateLink href="/privacy/host">Testaushost tietosuojakäytäntö</NavigateLink>
      </Content>
      <Footer copyrightYear={copyrightYear} />
    </div>
    )
  }

export const getServerSideProps: GetServerSideProps<{
  copyrightYear: number
}> = async ({ req, res }) => {
  res.setHeader(
    'Cache-Control',
    'public, maxage=300, stale-if-error=300'
  )

  return {
    props: {
      copyrightYear: new Date().getFullYear()
    }
  }
}
