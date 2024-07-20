# testausserveri.fi

Tässä repositoriossa on Testausserveri ry:n verkkosivujen lähdekoodi. Käytetyt teknologiat ovat pääosassa [Next.js](https://nextjs.org) ja TypeScript.

Rajapinnat ja taustajärjestelmät ovat [Testausapis](https://github.com/Testausserveri/testausapis)-repositoriossa.

## manuaali

### verkkosivut

Paikallisen kehitysympäristön saa pystytettyä seuraavilla ohjeilla. Oletuksena on oltava asennettuna: Node.js v16, Npm, Git.

1. `git clone https://github.com/testausserveri/testausserveri.fi`
1. `npm install --save-dev`
1. Kopioi tiedosto `.example.env` tiedostoon `.env`
1. `npm run dev` 

### postaukset

Testausserverin verkkoblogia kutsutaan Syslogiksi (https://testausserveri.fi/syslog). Uuden postauksen Syslogiin saa julkaistua seuraavilla ohjeilla. 

Mikäli haluat julkaista autoihin liittyvää, voit ottaa yhteyttä [Testausauton toimitukseen](https://testausauto.fi/tietoja-meista/).

1. Noudata ensiksi ylempiä verkkosivut-osion ohjeita kehitysympäristön pystyttämiseksi.
1. Postaukset ovat kansiossa [/posts/](https://github.com/Testausserveri/testausserveri.fi/tree/coal/posts). Luo sinne uusi tiedosto, jonka nimeksi tulee haluamasi postauksen lyhytnimi (esim. hei-maailma, tanaan-on-hyva-paiva) ja perään .mdx. Lyhytnimi tulee näkymään postauksen URL-osoitteessa, joten:
      - sen ei kannata olla hirveän pitkä;
      - ei ääkkösiä; ja
      - välilyönnit on korvattava väliviivoilla.
    1. Lisää postauksen lähdekoodin alkuun seuraava otsake:
        ```
        ---
        title: Postauksen otsikko
        category: Oppaat
        feature_image: postauksen-kuva.png
        excerpt: Tässä postauksessa on pelkkää asiaa!
        authors: 
        - ts:61d8b737a16588f423624ed5
        - Mörökölli
        datetime: 2024-07-07T18:00:00+03:00
        ---
        ```
        Kenttien selitteet:
        |kenttä|selite|
        |---|---|
        |title|Otsikko|
        |category|Vapaamuotoinen teksti. Kannattaa katsoa muista olemassaolevista postauksista, liittyykö postaus johonkin jo käytettyyn kategoriaan, mutta jos ei, niin voi keksiä uuden. Esim. Oppaat, Ajankohtaista, Tapahtumat, Kilpailut, Haastattelut, Arvostelut.
        |feature_image|Postauksen kuva. Siirrä kuvatiedosto kansioon [/public/syslog/assets/](https://github.com/Testausserveri/testausserveri.fi/tree/coal/public/syslog/assets/) ja anna tämän kentän arvoksi sen tiedostonimi (esim. hei-maailma.jpg).|
        |excerpt|Lyhyt kuvaus|
        |authors|Kirjoittajat. Luetteloidaan ranskalaisin viivoin. Arvo voi olla joko vapaamuotoinen teksti tai viite Testausserverin jäseneen, jolloin arvo alkaa `ts:`. Kun käytetään viitettä Testausserverin jäseneen, niin postauksessa näkyy profiilikuva ja ajantasainen nimi. Viitteen saa haluamastaan jäsenestä käyttämällä Discord-palvelimella komentoa `/whois [jäsen]` ja lisäämällä `ts:` saadun tunnisteen eteen.|
        |datetime|Aikaleima ISO 8601 -muodossa. Esim. `2024-07-07T18:00:00+03:00`.|
    1. Otsakkeen jälkeen voit kirjoittaa postauksesi sisällön helpossa Markdown-muodossa. Lue lisää syntaksista osoitteessa https://www.markdownguide.org/basic-syntax/.
1. Työnnä muutoksesi Githubiin ja tee Pull Request.

Vinkki: Voit ottaa mallia jo olemassaolevien postausten lähdekoodeista.

### react-komponenttien kehitys

Voit käynnistää paikallisen [Storybook](https://storybook.js.org)-palvelimen seuraavalla komennolla. Storybookin avulla on kätevä esikatsella projektin React-komponentteja, jotka ovat projektin kansiossa [/components/](https://github.com/Testausserveri/testausserveri.fi/tree/coal/components).
```bash
npm run storybook
```



