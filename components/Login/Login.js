import styles from './Login.module.css'
import React from 'react';

import dynamic from 'next/dynamic'

const DynamicTestausid = dynamic(() => import('@testausserveri/react-testausid').then((mod) => mod.LoginDialog), {
  suspense: false,
  ssr: false
})

import TestausserverifiLogo from '../../assets/TestausserverifiLogo.svg'
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
  
    return <DynamicTestausid accept={accept} target={target} />  
}
  
export function LoginView({visible}) {
    return (
        <div className={`${styles.loginCover} ${visible ? styles.visible : ""}`}>
            <FadeIn>
                <LoginDialog />
            </FadeIn>
        </div>
    )
}
