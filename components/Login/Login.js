import styles from './Login.module.css'
import React from 'react';

import dynamic from 'next/dynamic'

const DynamicTestausid = dynamic(() => import('@testausserveri/react-testausid').then((mod) => mod.LoginDialog), {
  suspense: false,
  ssr: false
})

import FadeIn from 'react-fade-in';
import { apiServer } from '../../utils/api';

export function LoginDialog({ onClose }) {
    const accept = [
      'members',
      'discord'
    ]
    const client = '181937620043556561658238287560538816854'
    const scopes = ['id', 'account', 'contact']
  
    return <DynamicTestausid
      onClose={onClose}
      accept={accept}
      client={client}
      scopes={scopes}
      onClick={e => {
        e.preventDefault()
        e.stopPropagation()
      }}
      onlyToken={true}
      onLogin={token => {
        fetch(`${apiServer}/v1/members/login`, {
          method: "POST",
          body: JSON.stringify(token),
          redirect: "manual",
          headers: {
            "Content-Type": "application/json"
          }
        }).then(async res => {
          if (res.status === 200) {
            if (document.cookie.includes("code=")) document.cookie = document.cookie.replace(/code=(.{1,}|);( |)domain=\.testausserveri\.fi;( |)path=\/(;|$)/, "")
            document.cookie += `code=${await res.text()};domain=.testausserveri.fi;path=/;`
            window.location.href = `${apiServer}/v1/members`
          }
          else console.error("Failed to login.") // TODO: display to user
        })
      }}
    />  
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
