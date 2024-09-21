import Head from 'next/head'
import { Header } from '../components/Header/Header'
import '../styles/globals.css'
import { AppProps } from 'next/app'
import { ReactElement, ReactNode, useEffect, useState } from 'react'
import api from '../utils/api'
import { Me } from '../utils/types'
import { NextPage, NextPageContext } from 'next/types'

const pages = [
  { label: "Etusivu", path: "/" },
  //{ label: "Jäsenet", path: "/members" },
  { label: "Syslog", path: "/syslog" },
  { label: "Projektit", path: "/projects" },
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
function MyApp({ Component, pageProps, router, props }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => 
    <div className="main">
      <Header 
        pages={pages}
        authenticated={props.authenticated} />
        {page}
    </div>
  )

  return getLayout(
      <Component {...pageProps} authenticated={props.authenticated} />
  )
}

type Ctx = {
  ctx: NextPageContext
}
MyApp.getInitialProps = async ({ctx}: Ctx) => {

  // temporary solution to disable authenticated
  return {
    props: {
      authenticated: {}
    }
  }
  
  let data
  if ((ctx?.req?.headers)) {
    if (ctx.req?.headers.cookie && ctx.req?.headers?.cookie?.includes("connect.sid=")) {
      data = await api.membersArea.me(ctx?.req?.headers.cookie)
    }
  } else {
    // we don't know CS is there connect.sid= cookie or not, only the server knows
    // thus we have to always fetch it from SS

    // ideal would be to figure out how to not invoke getInitialProps 
    // on every shallow page change
    data = await api.membersArea.me()
  }

  console.log(data)

  if (data && data.status == "error") {
    console.log("Error while fetching Me... removing token as it's invalid")
    if (ctx?.req?.headers?.cookie) {
      ctx.res?.setHeader("set-cookie", "connect.sid=;expires=Thu, 01 Jan 1970 00:00:00 GMT")
    } else {
      document.cookie = "connect.sid=;expires=Thu, 01 Jan 1970 00:00:00 GMT"
    }
  }
  


  return {
    props: {
      authenticated: data
    }
  }
}

export default MyApp
