import Head from 'next/head'
import { Header } from '../components/Header/Header'
import '../styles/globals.css'

const pages = [
  { label: "Etusivu", path: "/" },
  //{ label: "Jäsenet", path: "/members" },
  { label: "Projektit", path: "/projects" },
  { label: "Tietoa meistä", path: "/about" },
  //{ label: "Tietoa", path: "/about-us" }
]

function MyApp({ Component, pageProps, router }) {
  return (
    <div className="main">
      <Head>
      </Head>
      <Header 
        pages={pages}
        activePath={router.route} />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
