import OpenWilmaImage from '../assets/projects/openwilma.png';
import MatikkaeditoriImage from '../assets/projects/matikkaeditori.fi.png';
import KarhuImage from '../assets/projects/karhu.png';
import TorimiesImage from '../assets/projects/torimies.png';
import AntibittiImage from '../assets/projects/antibitti.png';
import AntibittiVideo from '../assets/projects/antibitti.mp4';
import MailImage from '../assets/projects/mail.png';
import AbitikkuImage from '../assets/projects/abitikku.png';
import TestausTimeImage from '../assets/projects/testaustime.png';

export const projects = [
    {
        "name": "OpenWilma", 
        "desc": "OpenWilman kirjastot mahdollistavat Wilman APIa hyödyntävien sovellusten luomisen helppokäyttöisiä ja turvallisia kirjastoja hyödyntäen.",
        "image": OpenWilmaImage,
        "url": "https://openwilma.testausserveri.fi",
        "abitikkuFeaturedWeight": 20
    },
    {
        "name": "Matikkaeditori.fi",
        "desc": "Matikkaeditori.fi on kehittämämme verkkopohjainen kaavaeditorijärjestelmä, joka pohjautuu tuttuun ja turvalliseen Abitin matikkaeditoriin.",
        "image": MatikkaeditoriImage,
        "url": "https://matikkaeditori.fi",
        "abitikkuFeaturedWeight": 5
    },
    {
        "name": "Karhu",
        "desc": "Tekoälyrobotti, jonka kanssa voi jutella kaikista elämän askareista.",
        "image": KarhuImage,
        "url": "https://karhu.testausserveri.fi",
        "abitikkuFeaturedWeight": 10
    },
    {
        "name": "Torimies",
        "desc": "Automaattiset ilmoitukset uusista Tori.fi myynti-ilmoituksista valittuihin suodattimiin.",
        "image": TorimiesImage,
        "abitikkuFeaturedWeight": 25
    },
    {
        "name": "Antibitti",
        "desc": "Olemme ilmoittaneet YTL:lle lukuisia Abitista löydettyjä haavoittuvuuksia.",
        "image": AntibittiImage,
        "video": AntibittiVideo,
        "url": "https://abitti.testausserveri.fi",
        "abitikkuFeaturedWeight": 15
    },
    {
        "name": "Sähköpostiosoite",
        "desc": "Tarjoamme kaikille jäsenillemme ilmaisen @testausserveri.fi-sähköpostiosoitteen jäsenetuna! Liity palvelimelle saadaksesi sen.",
        "image": MailImage
    },
    {
        "name": "Abitikku",
        "desc": "Helpoin tapa luoda Abitti-tikku",
        "image": AbitikkuImage,
        "url": "https://abitikku.testausserveri.fi"
    },
    {
        "name": "TestausTime",
        "desc": "Yhteisön kehittämä ajanseurantajärjestelmä. WIP.",
        "url": "https://github.com/Testausserveri/TestausTime",
        "image": TestausTimeImage
    }
];

/*export const abitikkuExtras = [
    {
        "name": "Testausserveri",
        "desc": "Meidän Discord-palvelimelta saat tukea Abitikun käyttöön, mutta myös koodaus- ja hakkerointihommiin!",
        "url": "https://testauserveri.fi",
        "image": "assets/projects/discord.png",
        "abitikkuFeaturedWeight": 7
    }
];*/