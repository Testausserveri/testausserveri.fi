import Head from 'next/head'
import { ButtonIcon, CapsuleButton } from '../components/Button/CapsuleButton';
import { Content } from '../components/Content/Content'
import { Footer } from '../components/Footer/Footer'
import { H1 } from '../components/Title/Title'
import styled from 'styled-components'
import Image from "next/legacy/image"

import { InputText } from '../components/InputText/InputText';
import { AuthorizationData, InputDiscord } from '../components/InputDiscord/InputDiscord';
import { useEffect, useState } from 'react';
import api from '../utils/api';
import { Breadcrumbs } from '../components/Breadcrumbs/Breadcrumbs';
import testausmeetImg from '../assets/about/testausmeet2.jpeg'
import { NavigateLink } from '../components/NavigateLink/NavigateLink';
import { usePlausible } from 'next-plausible';
import Link from 'next/link';
import DiscordIcon from '../assets/DiscordIcon.svg'

const DisplayImage = styled(Image)`
  border-radius: 0.5rem;
`

const InputFlow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1em;
  width: 100%;

  @media only screen and (max-width: 450px) {
    grid-template-columns: 1fr;
  }
`

export default function MembersAreaHome() {
  const plausible = usePlausible()

  const [discordData, setDiscordData] = useState<AuthorizationData>({});

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");

  const [formStatus, setFormStatus] = useState("");
  
  // When visitor starts filling the form, send membershipApplicationBeginFill event
  const [analyticsStartedFilling, setAnalyticsStartedFilling] = useState(false)
  useEffect(() => {
    if (analyticsStartedFilling) return
    if (firstName.length > 0 || lastName.length > 0 || city.length > 0 || email.length > 0) {
      plausible("membershipApplicationBeginFill")
      setAnalyticsStartedFilling(true)
    }
  }, [firstName, lastName, city, email, analyticsStartedFilling, plausible])

  const fieldsMissing = firstName.trim().length == 0 || 
    lastName.trim().length == 0 || 
    city.trim().length == 0 || 
    email.trim().length == 0 ||
    !/^\S+@\S+$/.test(email) ||
    discordData.id == null;
  const submitDisabled = discordData.status == "already-member" || fieldsMissing;
  
  async function submit() {
    if (submitDisabled || !discordData.token) return
    plausible("membershipApplicationSubmit")
    const { status } = await api.apply.submit({
      firstName, lastName, city, email,
      discordToken: discordData.token
    })
    setFormStatus(status)
    if (status == "ok") {
      window.scrollTo(0, 0)
    }
  }

  return (
    <div>
      <Head>
        <title>Liity jäseneksi | Testausserveri</title>
      </Head>
      { formStatus != "ok" ? 
        <>
          <Content>
            <H1>Liity jäseneksi</H1>
            
            <p>
              Yhdistyksen jäsenmaksu on 0 euroa. Ilmoitamme sinulle hyväksyttyämme jäsenyytesi. 
            </p>
            <p>
              Yhdistyslaki määrää, että jäsenistä on pidettävä luetteloa, johon on merkittävä kunkin jäsenen täydellinen nimi ja kotipaikka (Yhdistyslaki 503/1989 11 §). Lisäksi Testausserveri ry kerää jäsenrekisteriinsä kunkin jäsenen sähköpostiosoitteen ja Discord-käyttäjänimen yhteydenottoja sekä tunnistautumista varten.
            </p>
            <NavigateLink href="/association-rules">Yhdistyksen säännöt</NavigateLink>
            <NavigateLink href="/privacy/members">Tietosuojaseloste</NavigateLink>
            <br />
              <InputFlow>
                <InputText label="Etunimi" autoComplete="given-name" autoFocus={true} update={setFirstName} />
                <InputText label="Sukunimi" autoComplete="last-name" update={setLastName} />
                <InputText label="Asuinkunta" autoComplete="address-level2" autoCompleteLabel="Kaupunki" update={setCity} municipalityList />
                <InputText label="Sähköpostiosoite" autoComplete="email" update={setEmail} />
              </InputFlow>
              <InputDiscord discordData={discordData} setDiscordData={setDiscordData} />
              
              <div style={{display: "flex", alignItems: "center", gap: "1em"}}>
                <a onClick={() => submit()}>
                  <CapsuleButton disabled={submitDisabled}>Lähetä</CapsuleButton>
                </a>
                {discordData.status == "already-member" ?
                  <div>
                    <p>
                      Discord-käyttäjä on jo yhdistyksen jäsen {discordData.since ? ` (alkaen ${discordData.since})`: ""}. Mikäli tämä on virhe, ota yhteyttä hallituksen.
                    </p>
                  </div>
                : null }
                {fieldsMissing ? 
                  <div>
                    <p>
                      Kaikki kentät ovat pakollisia.
                    </p>
                    </div> : null}
                {formStatus == "error" ?
                  <div>
                    <p>
                      Tapahtui virhe. Yritä myöhemmin uudelleen.
                    </p>
                  </div> : null}
              </div>
          </Content>
          <Content wider>
            <DisplayImage
              placeholder="blur"
              src={testausmeetImg}
              alt="Kuva Testausmeetistä. Noin 11 Testausserverin jäsentä istuu viihtyisässä konttorissa ja seuraa yritysesittelyä."
            />
          </Content>
        </>
      :
        <>
          <Content>
            <Breadcrumbs
              route={[
                { path: "/apply", name: "Jäsenhakemus" },
                { path: "/apply", name: "Vastaanotettu" }
              ]} />
            <H1>Liity jäseneksi</H1>
            <p>Kiitos, {firstName}! Jäsenhakemuksesi on vastaanotettu ja hallitus käsittelee sen pian. Hyväksymisestä ilmoitetaan sinulle sähköpostitse.</p>
            <p>Sillä välin voit tulla hengaamaan Discordiimme!</p>
            <div style={{margin: "2rem 0 1rem 0"}}>
              <Link href="https://discord.testausserveri.fi" onClick={() => plausible("joinDiscord", {props: {source: "postMembershipApplication"}})} >
                <CapsuleButton>
                  <ButtonIcon src={DiscordIcon} alt="Discord logo" />
                  Tule juttelemaan!
                </CapsuleButton>
              </Link>
            </div>
          </Content>
          <Content wider>
            <DisplayImage
              placeholder="blur"
              src={testausmeetImg}
              alt="Kuva Testausmeetistä. Noin 11 Testausserverin jäsentä istuu viihtyisässä konttorissa ja seuraa yritysesittelyä."
            />
          </Content>
        </>
      }
      <Footer />
    </div>
  )
}

