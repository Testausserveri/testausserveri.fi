import Head from 'next/head'
import { CapsuleButton } from '../components/Button/CapsuleButton';
import { Content } from '../components/Content/Content'
import { Footer } from '../components/Footer/Footer'
import { H1, H2 } from '../components/Title/Title'
import { Me } from '../utils/types';
import styled from 'styled-components'
import { getMemberAvatarUrl } from '../utils/Member';
import Image from 'next/image';
import { GradientText } from '../components/GradientText/GradientText';
import { Explanation } from '../components/Explanation/Explanation';
import { GetServerSideProps } from 'next';

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

const AssociationMembershipCardRoot = styled.div`
  border-radius: 0.5rem;
  width: 100%;
  position: relative;
  margin-top: 1.5rem;
  padding: 1.5rem;
  background-color: rgba(108, 108, 108, 0.09);

  .member { 
    display: flex;

    p {
      margin: 0 0 0.5em 0;
    }
    p:last-child {
      margin-bottom: 0;
    }
  
    >div {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    @media only screen and (max-width: 850px) {
      flex-direction: column;
      >div {
        width: 100%;
      }
      >div:last-child {
        margin-top: 0.5rem;
      }
    }
  
    &.disabled {
      user-select: none; 
      filter: blur(10px);
    }
  }
  .notMember {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;

    p {
      margin-top: 0;
    }
  }
`

function AssociationMembershipCard({ authenticated }: Props) {
  const notMember = authenticated.associationMembership.status != "MEMBER"

  return (
    <AssociationMembershipCardRoot >
      <div className={(notMember ? "disabled member" : "member")}>
        <div>
          <H2>
            <GradientText>
              {notMember ? "Testaus" : authenticated.associationMembership.firstName} {notMember ? "Koiranen" : authenticated.associationMembership.lastName}
            </GradientText>
          </H2>
          <p>
            {notMember ? "Tuotantoserveri" : authenticated.associationMembership.city}
            <Explanation>
              Yhdistyslaki velvoittaa meitä pitämään luetteloa kunkin jäsenen nimestä ja asuinkunnasta. (Yhdistyslaki 503/1989, 11 §)
            </Explanation>
          </p>
          <p>
            {notMember ? "hauhau@koira.testausserveri.fi" : authenticated.associationMembership.email}
            <Explanation>
              Sähköpostiisi tulee mm. tärkeitä tiedotteita kuten tapahtumakutsuja.
            </Explanation>
          </p>
        </div>
        <div>
          <p>
            Olet Testausserveri ry:n jäsen.
          </p>
          <p>
            Mikäli haluat muuttaa jäsentietojasi tai erota yhdistyksestä, niin ota yhteyttä yhdistyksen hallitukseen. Yhdistys ei toistaiseksi kerää jäsenmaksua.
          </p>
        </div>
      </div>
      <div className="notMember" style={!notMember ? { display: "none" } : {}}>
        <p>Et ole vielä yhdistyksen jäsen. Skill issue. </p>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfCjpgkvsdgPN-X5R10n74qA7hO0hE_gK3VAEjzMh03uHKDlg/viewform">
          <CapsuleButton small>Jätä jäsenhakemus</CapsuleButton>
        </a>
      </div>
    </AssociationMembershipCardRoot>
  )
}

export default function MembersAreaHome({ authenticated }: Props) {
  return (
    <article>
      <Head>
        <title>Testausserveri</title>
      </Head>
      <Content>
        <H1>Jäsensivut</H1>

        {authenticated?.username == null ?
          <>
            <p>Et ole kirjautunut sisään.</p>
          </>
          :
          <>
            <p>
              Tämä toiminto on vielä kehityksessä.
            </p>
            <UserRow>
              <div>
                <Image width="50" height="50" alt="Avatar" src={getMemberAvatarUrl(authenticated._id)} />
              </div>
              <div>
                {authenticated.username}
              </div>
              <div>
                <a href="/api/v1/logout">
                  <CapsuleButton small secondary>Kirjaudu ulos</CapsuleButton>
                </a>
              </div>
            </UserRow>

            <AssociationMembershipCard authenticated={authenticated} />

          </>
        }

      </Content>
      <Footer copyrightYear={new Date().getFullYear()} />
    </article>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  res.setHeader('Cache-Control', 'private, no-store, max-age=0, must-revalidate');
  return {}
}
