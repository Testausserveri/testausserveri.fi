import styles from './Login.module.css'
import React from 'react';

import dynamic from 'next/dynamic'

const DynamicTestausid = dynamic(() => import('@testausserveri/react-testausid').then((mod) => mod.LoginDialog), {
  suspense: false,
  ssr: false
})

import TestausserverifiLogo from '../../assets/TestausserverifiLogo.svg'
import FadeIn from 'react-fade-in';

export function LoginDialog({ onClose }) {
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
  
    return <DynamicTestausid onClose={onClose} accept={accept} target={target} onClick={e => {
      e.preventDefault()
      e.stopPropagation()
    }} />  
}
  
export function LoginView({visible, setLoginVisible}) {
  const close = () => setLoginVisible(false)
    return (
        <div className={`${styles.loginCover} ${visible ? styles.visible : ""}`} onClick={close}>
            <FadeIn>
                <LoginDialog onClose={close}/>
            </FadeIn>
        </div>
    )
}
