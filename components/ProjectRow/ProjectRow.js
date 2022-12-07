import Link from 'next/link'
import { AvatarRow } from '../AvatarRow/AvatarRow'
import { Capsule } from '../Capsule/Capsule'
import { TagsRow } from '../TagsRow/TagsRow'
import styles from './ProjectRow.module.css'

export function ProjectRow({project, compact}) {
    return (
        <Link href={`/projects/${project.slug}`}>
            <a>
                <div className={`${styles.row} ${compact ? styles.compact : ""}`}>
                    <div className={styles.inner}>
                        <div className={styles.image}>
                            <img src={project.cover.url} />
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
            </a>
        </Link>
    )
}
