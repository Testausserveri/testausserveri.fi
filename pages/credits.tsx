import Head from 'next/head'
import Link from 'next/link'
import { Content } from '../components/Content/Content'
import { Footer } from '../components/Footer/Footer'
import { H1 } from '../components/Title/Title'
import licenses from '../dependency-licenses.json'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

const developers = [
  { name: "Miksu", url: "https://github.com/ahnl" },
  { name: "Eldemarkki", url: "https://github.com/Eldemarkki" },
  { name: "Esinko", url: "https://github.com/Esinko" }
]
export default function Home({ copyrightYear }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <article>
        <Head>
            <title>Kehittäjät ja lisenssit | Testausserveri</title>
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
          <H1>Lisenssit</H1>
          <p>
            Tämän sivuston toteutuksessa käytettyjen avointen lähdekoodin ohjelmistojen tai kirjastojen lisenssit ja tekijänoikeudet ovat esitetty alla.
          </p>
          <table>
            {Object.keys(licenses).map(pkg => {
              let pkgName = pkg.slice(0, pkg.lastIndexOf("@"))
              let publisher = licenses[pkg]?.publisher
              publisher = publisher ? `© ${publisher}` : ""
              let license = licenses[pkg]?.licenses
              let repository = licenses[pkg]?.repository
              let url = licenses[pkg]?.url
              if(url && !url.startsWith("http://") && !url.startsWith("https://")){
                url = `https://${url}`;
              } 
              
              return (
                <tr key={pkgName}>
                  <td>{repository ? <Link href={repository}>{pkgName}</Link> : pkgName}</td>
                  <td>{license}</td>
                  <td>
                    {url ? 
                    <Link href={url}>{publisher}</Link> 
                    : publisher}
                  </td>
                </tr>
              )
            })}
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