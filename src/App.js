import './styles/App.css';
import { ThemeSwitch } from './components/theme';
import { GuildCountersWithJoinCTA } from './components/GuildCountersWithJoinCTA';
import { useEffect, useState } from 'react';
import { ProjectsGrid } from './components/ProjectsGrid';

function Center(props) {
  return (
    <div className={props.wider ? 'widerCenter' : 'center'}>
      {props.children}
    </div>
  )
}
function App() {
  const [guildInfo, setGuildInfo] = useState({});

  useEffect(() => {
    fetch('https://koira.testausserveri.fi/api/guildInfo')
      .then(res => res.json())
      .then((data) => setGuildInfo(data));
  }, []);

  return (
    <div className="App">
      <ThemeSwitch />

      <Center>
        <h1 class="background">
          Testaus<wbr />serveri
        </h1>
        <p>
          Testausserveri on yhteisö koodaamisesta ja teknologiasta innostuneille nuorille. Kehitämme yhdessä erilaisia mielenkiintoisia projekteja, joita voit tsekata alta. 
        </p>
        <p>
          Keskusteluihimme on helppo liittyä matalalla kynnyksellä, sekä kannustamme jäseniämme kehittymään kanssamme.
        </p>
        <GuildCountersWithJoinCTA guildInfo={guildInfo} />

        <h2>Projektit</h2>
        <p>
          Alla on esiteltynä yhteisömme kehittämiä projekteja. Lisää voi tulla kysymään palvelimeltamme!
        </p>
      </Center>

      <Center wider>
        <ProjectsGrid />
      </Center>

      <Center>
        <h2>Jäsenet</h2>
            <p>Meillä on tällä hetkellä <span id="memberCountInline">...</span> jäsentä Discord-palvelimellamme. Osa jäsenistä löytyy myös vaikkappa GitHub-organisaatiostamme tai CTF-tiimeistä. Tässä on muutamia jäseniämme esitetynä. </p>
      </Center> 

      <Center wider>
        <fieldset>
            <legend>Masterminds</legend>
            Mastermindsit ylläpitävät Testausserveriä kokonaisuudessaan. Ylläpito-, hallinto-, ja moderointiasiat voi osoittaa heille. 
        </fieldset>
        <fieldset>
            <legend>CTF-Tiimi</legend>
            CTF-tiimiläiset ovat meidän ahkerimpia hakkereita, jotka grindaavat hiki otsassa CTF-kilpailujen parissa.
        </fieldset>
      </Center>
    </div>
  );
}

export default App;
