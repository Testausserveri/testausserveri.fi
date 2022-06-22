import Head from 'next/head'
import { Content } from '../components/Content/Content'
import { LoginDialog as Testausid } from '@testausserveri/react-testausid'
import TestausserverifiLogo from '../assets/TestausserverifiLogo.svg'
import styled from 'styled-components'
import FadeIn from 'react-fade-in';

export function LoginDialog() {
  const accept = [
    'discord',
    'google',
    'twitter',
    'github',
    'testausserveri',
    'wilmaplus'
  ]
  const target = {
    name: 'Testausserveri',
    image: TestausserverifiLogo.src,
    scopes: ['id', 'contact']
  }

  return <Testausid accept={accept} target={target} />  
}

const LoginCover = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255,255,255,0.05);
  z-index: 100;
  backdrop-filter: blur(5px);
`
export function LoginView() {
  return (
    <LoginCover>
      <FadeIn>
        <LoginDialog />
      </FadeIn>
    </LoginCover>
  )
}

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
  