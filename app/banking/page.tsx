import styles from './banking.module.scss';

import { CapsuleButton } from '@/components/Button/CapsuleButton';
import { Content } from '@/components/Content/Content'
import { Footer } from '@/components/Footer/Footer'
import { H1 } from '@/components/Title/Title'
import api from '@/utils/api';
import { IoMdKey } from 'react-icons/io';
import MembersSubnav from '@/components/MembersSubnav/MembersSubnav';
import { Explanation } from '@/components/Explanation/Explanation';
export const dynamic = 'force-dynamic';

function formatDate(date: string | Date | null | undefined) {
    if (!date) return ''
    const d = new Date(date)
    const day = d.getDate().toString().padStart(2, '0')
    const month = (d.getMonth() + 1).toString().padStart(2, '0')
    const year = d.getFullYear()
    return `${day}.${month}.${year}`
}

const censoredNameSamples = [
    'ELIAS PAHVILAATIKOSSA',
    'ROY CLUB, ROVANIEMI :--D ',
    'ELOCAPINA RY ei oikeesti',
    'ANNIINAN VARVASKUVAT ltd ( ͡° ͜ʖ ͡°)'
]

const censoredRemitSamples = [
    'ʕʘ̅͜ʘ̅ʔ ʕ •ᴥ•ʔゝ☆',
    'ʕ •ᴥ•ʔゝ☆ ',
    '(。・_・。)',
    '¯_(ツ)_/¯ ʕʘ̅͜ʘ̅ʔ'
]

function pickRandom(arr: string[]) {
    return arr[Math.floor(Math.random() * arr.length)]
}

function formatMoney(amount: number | null | undefined) {
    if (amount == null) return '-'
    const fixed = amount.toFixed(2)
    const [ints, decs] = fixed.split('.')
    const withSpaces = ints.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    return `${withSpaces},${decs}`
}

export default async function BankingPage() {
    const authenticated = await api.membersArea.me();

    if (!authenticated?.username) {
        return (
            <article>
                <Content>
                    <MembersSubnav current="banking" />
                    <p>Et ole kirjautunut sisään.</p>
                    <a href={process.env.NEXT_PUBLIC_LOGIN_URL}>
                        <CapsuleButton className={styles.button} small secondary>
                            <IoMdKey />
                            Kirjaudu sisään
                        </CapsuleButton>
                    </a>
                </Content>
                <Footer />
            </article>
        )
    }

    if (authenticated?.associationMembership?.status !== 'MEMBER') {
        return (
            <article>
                <Content>
                    <MembersSubnav current="banking" />
                    <p>Vain yhdistyksen jäsenille. Sinulla ei ole oikeutta tarkastella tätä sisältöä.</p>
                    <div className={styles.videoWrapper}>
                        <video
                            className={styles.inlineVideo}
                            controls
                            playsInline
                            preload="metadata"
                            src="https://kaatis.party/Ei%20sulla%20oikeutta%20oo.mp4"
                        />
                    </div>
                </Content>
                <Footer />
            </article>
        )
    }

    const banking = await api.membersArea.banking();

    return (
        <article>
            <Content>
                <MembersSubnav current="banking" />
                <p>
                    Testausserveri ry pitää toimintansa läpinäkyvyyttä tärkeänä ja pitää myös yhdistyksen ajantasaiset taloustiedot helposti jäsenien saatavilla. Osa tässä julkaistuista tiedoista on peitetty tietosuojasyistä. Viimeksi päivitetty: {formatDate(banking?.balance?.date || null)}.
                </p>

                <div className={styles.balanceCard}>
                    <div className={styles.balanceTitle}>Saldo</div>
                    <div className={styles.balanceAmount}>{banking?.balance?.amount != null ? `${formatMoney(banking.balance.amount)} €` : '-'}</div>
                    <div className={styles.balanceDate}>FI31 4108 0012 1028 05</div>
                </div>

                <div className={styles.transactions}>
                    {banking?.transactions?.map((tx) => {
                        const isCredit = tx.credit_debit_indicator === 'CRDT'
                        const sign = isCredit ? '+' : '-'
                        const className = isCredit ? styles.credit : styles.debit

                        const nameVisible = tx.name != null
                        const remittanceVisible = tx.remittance_information != null
                        const nameText = nameVisible ? tx.name! : pickRandom(censoredNameSamples)
                        const remitText = remittanceVisible ? tx.remittance_information! : pickRandom(censoredRemitSamples)

                        return (
                            <div key={String(tx.id)} className={`${styles.transaction} ${className}`}>
                                <div className={styles.line} />
                                <div className={styles.left}>
                                    <div className={styles.text}>
                                        {nameVisible ? nameText : <span className={styles.censored}>{nameText}</span>}
                                    </div>
                                    <div className={styles.subtext}>
                                        {remittanceVisible ? remitText : <span className={styles.censored}>{remitText}</span>}
                                    </div>
                                </div>
                                <div className={styles.right}>
                                    <div className={styles.date}>{formatDate(tx.date)}</div>
                                    <div className={styles.amount}>{tx.amount != null ? `${sign}${formatMoney(tx.amount)}` : '—'} €</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <p>
                    Ei vanhempia tilitapahtumia.
                    <Explanation>
                        Pankkiyhteysrajapinta ei sisällä tätä vanhempia tilitapahtumia, mutta asia on selvitteillä.
                    </Explanation>
                </p>
            </Content>
            <Footer />
        </article>
    )
}


