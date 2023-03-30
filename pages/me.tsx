import Head from 'next/head'
import { CapsuleButton } from '../components/Button/CapsuleButton';
import { Content } from '../components/Content/Content'
import { Footer } from '../components/Footer/Footer'
import { H1, H2 } from '../components/Title/Title'
import { Me } from '../utils/types';
import styled from 'styled-components'
import { getMemberAvatarUrl } from '../utils/Member';

interface Props {
  authenticated: Me;
}

const UserRow = styled.div`
  display: flex;
  align-items: center;

  >div:nth-child(1) img {
    width: 3em !important;
    height: 3em !important;
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 0.7em;
  }
  >div:nth-child(2) {
    flex: 1;
  }
    
`

export default function MembersAreaHome({authenticated}: Props) {
  return (
    <article>
        <Head>
            <title>Testausserveri</title>
        </Head>
        <Content>
          <H1>Jäsensivut</H1>

          { authenticated.username == null ? 
          <>
            <p>Et ole kirjautunut sisään.</p>
          </>
          : 
          <>
            <p>
            Tervetuloa työmaalle. Tämä toiminto on vasta kehityksessä.
            </p>
            <UserRow>
              <div>
                <img src={getMemberAvatarUrl(authenticated._id)} />
              </div>
              <div>
                { authenticated.associationMembership.firstName ? <>
                  <span>{authenticated.associationMembership.firstName} {authenticated.associationMembership.lastName}</span>
                  <br />
                </> : null}
                { authenticated.username }
              </div>
              <div>
              <a href="/api/v1/logout">
                <CapsuleButton small secondary>Kirjaudu ulos</CapsuleButton>
              </a>
              </div>
            </UserRow>
            
            <H2>Jäsenrekisterin tiedot</H2>
            <p>
              <pre>{JSON.stringify(authenticated.associationMembership, null, 2)}</pre>
            </p>
          </>
          }
          
        </Content>
      <Footer copyrightYear={new Date().getFullYear()} />
    </article>
  )
}
