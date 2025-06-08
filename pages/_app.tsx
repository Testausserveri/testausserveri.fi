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

function MyApp({ Component, pageProps }: AppProps): ReactElement {
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
            pages={pages} />
          <Component {...pageProps} />
        </div>
      </AuthProvider>
    </PlausibleProvider>
  )
}

export default MyApp
