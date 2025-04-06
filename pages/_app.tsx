import Head from 'next/head'
import { Header } from '../components/Header/Header'
import '../styles/globals.css'
import { AppProps } from 'next/app'
import { ReactElement, ReactNode, useEffect, useState } from 'react'
import api from '../utils/api'
import { Me } from '../utils/types'
import { NextPage, NextPageContext } from 'next/types'
import PlausibleProvider from 'next-plausible'
import { AuthProvider } from 'contexts/AuthContext'

const pages = [
  { label: "Etusivu", path: "/" },
  //{ label: "Jäsenet", path: "/members" },
  { label: "Syslog", path: "/syslog" },
  { label: "Projektit", path: "/projects" },
  { label: "Ideat", path: "/ideas" },
  /*{ label: "Palvelintila", path: "/host" },
  { label: "Koneet kiertoon", path: "/koneet-kiertoon" },*/
  { label: "Tietoa meistä", path: "/about" },
  //{ label: "Tietoa", path: "/about-us" }
]

interface MyAppProps extends AppProps {
  props: {
    authenticated: Me
  }
}
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}
 
type AppPropsWithLayout = MyAppProps & {
  Component: NextPageWithLayout
}
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => 
    <div className="main">
      <Header 
        pages={pages}
        authenticated={{}} />
        {page}
    </div>
  )

  return (
    <PlausibleProvider 
      trackOutboundLinks={true}
      taggedEvents={true}
      trackLocalhost={false}
      domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ?? ""} 
      customDomain={process.env.NEXT_PUBLIC_PLAUSIBLE_INSTANCE}>
      <AuthProvider>
        <div className="main">
          <Header 
            pages={pages}
            authenticated={{}} />
          <Component {...pageProps} authenticated={{}} />
        </div>
      </AuthProvider>
    </PlausibleProvider>
  )
}

export default MyApp
