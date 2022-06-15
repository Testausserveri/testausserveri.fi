import styles from './AvatarRow.module.css'

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

export function AvatarRow({members}) {
    return (
        <ul className={styles.avatarRow}>
            {members.map(member => (
                <Tippy content={member.name} key={member.id}>
                    <li data-tip={member.name}><img src={member.avatar} width={40} height={40} /></li>
                </Tippy>
            ))}
        </ul>
    )
}