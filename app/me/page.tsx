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
import { Editable } from '@/components/Editable/Editable';
import { cookies } from 'next/headers';
import api from '@/utils/api';
import Link from 'next/link';
import { IoMdKey } from 'react-icons/io';

export const dynamic = 'force-dynamic';

import { AssociationMembershipCard } from './AssociationMembershipCard';

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