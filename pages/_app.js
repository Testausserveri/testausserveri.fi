import { Header } from '../components/Header/Header'
import '../styles/globals.css'

const pages = [
  { label: "Etusivu", path: "/" },
  { label: "Jäsenet", path: "/members" },
  { label: "Projektit", path: "/projects" },
  { label: "Mediassa", path: "/in-media" }
]

function MyApp({ Component, pageProps, router }) {
  return (
    <div className="main">
      <Header 
        pages={pages}
        activePath={router.route} />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
