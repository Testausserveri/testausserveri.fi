import Head from 'next/head'
import { Content } from '../components/Content/Content'
import { LoginView } from '../components/Login/Login'

export default function LoginPage() {
  return (
    <div>
      <Head>
        <title>Kirjaudu sisään | Testausserveri</title>
      </Head>
      <Content>
        <LoginView />
      </Content>
    </div>
  )
}
  