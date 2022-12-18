import styles from './Login.module.css'
import React from 'react';

import dynamic from 'next/dynamic'

const DynamicTestausid = dynamic(() => import('@testausserveri/react-testausid').then((mod) => mod.LoginDialog), {
  suspense: false,
  ssr: false
})

import FadeIn from 'react-fade-in';

export function LoginDialog({ onClose }) {
    const accept = [
      'members',
      'discord'
    ]
    const client = '181937620043556561658238287560538816854'
    const scopes = ['id', 'account']
  
    return <DynamicTestausid onClose={onClose} accept={accept} client={client} scopes={scopes} onClick={e => {
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
