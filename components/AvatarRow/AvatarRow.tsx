import Image from 'next/image';
import styles from './AvatarRow.module.css'
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'
import { Member } from '../../utils/types';
import { getMemberAvatarUrl } from '../../utils/Member';
import testausorveli from '../../assets/testausorveli.png';

export type AvatarRowProps = {
    members: Member[]
}

export function AvatarRow({ members }: AvatarRowProps) {
    return (
        <>
            {members.map(member => (
                <Tooltip key={member.name} id={`avatar-row-tooltip-${member.name}`}>{member.name}</Tooltip>
            ))}
            <ul className={styles.avatarRow}>
                {members.map(member => (
                    <li key={member._id} data-tooltip-id={`avatar-row-tooltip-${member.name}`}>
                        <Image src={member._id.startsWith('ts:') ? getMemberAvatarUrl(member._id.replace('ts:', '')) : testausorveli} alt={member.name} width={40} height={40} />
                    </li>
                ))}
            </ul>
        </>
    )
}
