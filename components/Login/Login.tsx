import styles from './Login.module.css'

import dynamic from 'next/dynamic'

const DynamicTestausid = dynamic(() => import('@testausserveri/react-testausid').then((mod) => mod.LoginDialog), {
  suspense: false,
  ssr: false
})

import FadeIn from 'react-fade-in';
import { apiServer } from '../../utils/api';

// Which domain and path can access the session cookie
const allowedDomain = ".testausserveri.fi"
const allowedPath = "/"

const cookieRegex = new RegExp(`(^|;)code=(.{1,}|);( |)domain=${allowedDomain.replace(/\./g, "\\.")};( |)secure;( |)httpOnly( |);path=${allowedPath.replace(/\//g, "\\/")}(;|$)`, "i")

export type LoginDialogProps = {
  onClose: () => void
}

export function LoginDialog({ onClose }: LoginDialogProps) {
    const accept = [
      'members',
      'discord'
    ]
    const client = '181937620043556561658238287560538816854'
    const scopes = ['id', 'account', 'contact']
  
    return <DynamicTestausid
      // @ts-ignore
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
          headers: {
            "Content-Type": "application/json"
          }
        }).then(async res => {
          if (res.status === 200) {
            if (document.cookie.includes("code=")) document.cookie = document.cookie.replace(cookieRegex, "")
            document.cookie += `${!document.cookie.endsWith(";") && document.cookie.length > 0 ? ";" : ""}code=${await res.text()};Domain=${allowedDomain};Path=${allowedPath};`
            window.location.href = `${apiServer}/v1/members`
          }
          else console.error("Failed to login.") // TODO: display to user
        })
      }}
    />  
}

export type LoginViewProps = {
  visible: boolean
  setLoginVisible: (visible: boolean) => void
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
