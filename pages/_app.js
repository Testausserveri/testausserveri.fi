import Header from '../components/Header/Header'
import '../styles/globals.css'

function MyApp({ Component, pageProps, router }) {
  return (
    <div className="main">
      <Header currentPage={router.route} />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
