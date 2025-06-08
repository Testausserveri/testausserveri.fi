import styles from './me.module.scss';

import { CapsuleButton } from '@/components/Button/CapsuleButton';
import { Content } from '@/components/Content/Content'
import { Footer } from '@/components/Footer/Footer'
import { H1, H2 } from '@/components/Title/Title'
import { Me } from '@/utils/types';
import { getAuthenticatedMemberAvatarUrl, getMemberAvatarUrl } from '@/utils/Member';
import Image from 'next/image';
import { GradientText } from '@/components/GradientText/GradientText';
import { Explanation } from '@/components/Explanation/Explanation';
import { cookies } from 'next/headers';
import api from '@/utils/api';
import Link from 'next/link';
import { IoMdKey } from 'react-icons/io';

export const dynamic = 'force-dynamic';

function AssociationMembershipCard({ authenticated }: { authenticated: Me | null }) {
    const notMember = authenticated?.associationMembership?.status != "MEMBER"

    return (
        <div className={styles.assocationMembershipCard} >
            <div className={`${styles.member} ${notMember ? styles.disabled : ""}`}>
                <div>
                    <H2>
                        <GradientText>
                            {notMember ? "Testaus" : authenticated?.associationMembership?.firstName} {notMember ? "Koiranen" : authenticated?.associationMembership?.lastName}
                        </GradientText>
                    </H2>
                    <p>
                        {notMember ? "Tuotantoserveri" : authenticated?.associationMembership?.city}
                        <Explanation>
                            Yhdistyslaki velvoittaa meitä pitämään luetteloa kunkin jäsenen nimestä ja asuinkunnasta. (Yhdistyslaki 503/1989, 11 §)
                        </Explanation>
                    </p>
                    <p>
                        {notMember ? "hauhau@koira.testausserveri.fi" : authenticated?.associationMembership?.email}
                        <Explanation>
                            Sähköpostiisi tulee mm. tärkeitä tiedotteita kuten tapahtumakutsuja.
                        </Explanation>
                    </p>
                    <p>
                        Alkaen {notMember ? "12/2050" : authenticated?.associationMembership?.acceptedAt || authenticated?.associationMembership?.handledIn}
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
            <div className={styles.notMember} style={!notMember ? { display: "none" } : {}}>
                { authenticated?.associationMembership?.status == "RECEIVED" ?
                <>
                    <p>Jäsenhakemuksesi on vastaanotettu ja siihen palataan pian.</p>
                </>                
                : 
                <>
                    <p>Et ole vielä yhdistyksen jäsen. Skill issue. </p>
                    <Link href="/apply">
                        <CapsuleButton small>Jätä jäsenhakemus</CapsuleButton>
                    </Link>
                </>}
            </div>
        </div>
    )
}

export default async function MembersAreaHome() {
    const authenticated = await api.membersArea.me();
    console.log(authenticated)
    return (
        <article>
            <Content>
                {authenticated?.username == null ?
                    <>
                        <p>Et ole kirjautunut sisään.</p>
                        <a href={process.env.NEXT_PUBLIC_LOGIN_URL}>
                            <CapsuleButton className={styles.button} small secondary>
                                <IoMdKey />
                                Kirjaudu sisään
                            </CapsuleButton>
                        </a> 
                    </>
                    :
                    <>
                        <div className={styles.userRow}>
                            <div>
                                <Image
                                    width="50"
                                    height="50"
                                    alt="Avatar"
                                    src={getAuthenticatedMemberAvatarUrl(authenticated)}
                                />
                            </div>
                            <div>
                                {authenticated.username}
                            </div>
                            <div>
                                <a href="/api/v1/logout">
                                    <CapsuleButton small secondary>Kirjaudu ulos</CapsuleButton>
                                </a>
                            </div>
                        </div>

                        <AssociationMembershipCard authenticated={authenticated} />

                    </>
                }

            </Content>
            <Footer />
        </article>
    )
}