import styles from './AvatarRow.module.css'
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'

export type AvatarRowProps = {
    members: { id: string, name: string, avatar: string }[]
}

export function AvatarRow({ members }: AvatarRowProps) {
    return (
        <>
            {members.map(member => (
                <Tooltip id={`avatar-row-tooltip-${member.name}`}>{member.name}</Tooltip>
            ))}
            <ul className={styles.avatarRow}>
                {members.map(member => (
                    <li key={member.id} data-tooltip-id={`avatar-row-tooltip-${member.name}`}>
                        <img src={member.avatar} width={40} height={40} />
                    </li>
                ))}
            </ul>
        </>
    )
}
