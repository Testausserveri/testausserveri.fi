import Image from 'next/image';
import styles from './AvatarRow.module.css'
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'
import { Member } from '../../utils/types';
import { getMemberAvatarUrl } from '../../utils/Member';
import testausorveli from '../../assets/testausorveli.png';
import Head from 'next/head';

export type AvatarRowProps = {
    members: Member[]
}

export function AvatarRow({ members }: AvatarRowProps) {
    return (
        <>
            {members.map(member => (
                <Tooltip key={member.name} className={styles.tooltip} id={`avatar-row-tooltip-${member.name}`}>{member.name}</Tooltip>
            ))}
            <ul className={styles.avatarRow}>
                {members.map(member => {
                    return (
                        <li key={member._id} data-tooltip-id={`avatar-row-tooltip-${member.name}`}>
                            <Image src={
                                member.avatar ? member.avatar : (String(member._id).startsWith('ts:') ? getMemberAvatarUrl(String(member._id).replace('ts:', '')) : testausorveli)} alt={member.name} width={35} height={35} />
                        </li>
                    )
                })}
            </ul>
        </>
    )
}
