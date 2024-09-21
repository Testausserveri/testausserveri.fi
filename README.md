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

### react-komponenttien kehitys

Voit käynnistää paikallisen [Storybook](https://storybook.js.org)-palvelimen seuraavalla komennolla. Storybookin avulla on kätevä esikatsella projektin React-komponentteja, jotka ovat projektin kansiossa [/components/](https://github.com/Testausserveri/testausserveri.fi/tree/coal/components).
```bash
npm run storybook
```



