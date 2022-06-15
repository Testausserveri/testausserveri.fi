import Link from 'next/link'
import { Capsule } from '../Capsule/Capsule'
import styles from './ProjectRow.module.css'

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

function AvatarRow({members}) {
    return (
        <ul className={styles.avatarRow}>
            {members.map(member => (
                <Tippy content={member.name} key={member._id}>
                    <li data-tip={member.name}><img src={member.avatar} width={40} height={40} /></li>
                </Tippy>
            ))}
        </ul>
    )
}

function TagsRow({tags}) {
    return (
        <ul className={styles.tagsRow}>
            {tags.map(tag => (
                <li key={tag}><Capsule>{tag}</Capsule></li>
            ))}
        </ul>
    )
}

export function ProjectRow({project}) {
    return (
        <Link href={`/projects/${project.slug}`}>
            <div className={styles.row}>
                <div className={styles.inner}>
                    <div className={styles.image}>
                        <img src={project.media.url} />
                    </div>
                    <div className={styles.content}>
                        <h2>{project.name}</h2>
                        <p>
                            {project.description.short}
                        </p>
                        <div className={styles.bottom}>
                            <AvatarRow members={project.members} />
                            <TagsRow tags={project.tags} />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}