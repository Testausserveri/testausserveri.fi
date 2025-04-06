import { Metadata } from "next"
import PlausibleProvider from 'next-plausible';
import { Header } from "../components/Header/Header"
import '../styles/globals.css'
import { AuthProvider } from "@/contexts/AuthContext";

export const metadata: Metadata = {
  title: {
    template: '%s | Testausserveri',
    default: 'Testausserveri',
  },
}

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Tämän häröyden tarjoaa: https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#supported-pattern-passing-server-components-to-client-components-as-props
  return (
    <html lang="fi">
      <head>
        <PlausibleProvider 
          trackOutboundLinks={true}
          taggedEvents={true}
          trackLocalhost={false}
          domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ?? ""} 
          customDomain={process.env.NEXT_PUBLIC_PLAUSIBLE_INSTANCE} />
      </head>
      <body>
        <div className="main">
          <AuthProvider>
            <Header 
              pages={pages}
              authenticated={{}} />
            {children}
          </AuthProvider>
        </div>
      </body>
    </html>
  )
}
