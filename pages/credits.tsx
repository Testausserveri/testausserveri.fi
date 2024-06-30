import Head from 'next/head'
import Link from 'next/link'
import { Content } from '../components/Content/Content'
import { Footer } from '../components/Footer/Footer'
import { H1 } from '../components/Title/Title'
import licenses from '../dependency-licenses.json'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { CapsuleButton } from '../components/Button/CapsuleButton'
import { useMesiExperiment } from '../hooks/useMesiExperiment'

const developers = [
  { name: "Miksu", url: "https://github.com/ahnl" },
  { name: "Eldemarkki", url: "https://github.com/Eldemarkki" },
  { name: "Esinko", url: "https://github.com/Esinko" }
]

export default function Home({ copyrightYear }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const experimentEnabled = useMesiExperiment()
  
  return (
    <article>
      <Head>
        <title>Kehittäjät ja lisenssit | Testausserveri</title>
        <meta name="description" content="Testausserveri on kaikille avoin yhteisö koodaamisesta, eettisestä hakkeroinnista ja yleisesti teknologiasta innostuneille nuorille." />
      </Head>
      <Content>
        <H1>Kehittäjät</H1>
        <p>
          Seuraavat henkilöt ovat olleet mukana kehittämässä tätä sivustoa.
        </p>
        <ul>
          {developers.map(developer => (
            <li key={developer.name}>
              <Link href={developer.url}>
                {developer.name}
              </Link>
            </li>
          ))}
        </ul>
        <H1>Area 51</H1>
        {!experimentEnabled ? 
          <CapsuleButton small onClick={() => {document.cookie = "mesiexperiment=true;"; location.reload();}}>Kytke jäsensivukokeilu käyttöön</CapsuleButton>
        : <b>Jäsensivukokeilu on käytössä</b>}
        
        <H1>Lisenssit</H1>
        <p>
          Tämän sivuston toteutuksessa käytettyjen avointen lähdekoodin ohjelmistojen tai kirjastojen lisenssit ja tekijänoikeudet ovat esitetty alla.
        </p>
        <table>
          <tbody>
            {Object.entries(licenses).map(([pkg, pkgObj]) => {
              const version = pkg.slice(pkg.lastIndexOf("@") + 1);
              const publisher = "publisher" in pkgObj ? `© ${pkgObj.publisher}` : "";
              const license = pkgObj.licenses
              const repository = "repository" in pkgObj ? pkgObj.repository : null

              let url = "url" in pkgObj ? pkgObj.url : null;
              if (url && !url.startsWith("http://") && !url.startsWith("https://")) {
                url = `https://${url}`;
              }

              return (
                <tr key={pkg + "@" + version}>
                  <td>{repository ? <Link href={repository}>{pkg}</Link> : pkg}</td>
                  <td>{license}</td>
                  <td>
                    {url ?
                      <Link href={url}>{publisher}</Link>
                      : publisher}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </Content>
      <Footer copyrightYear={copyrightYear} />
    </article>
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
