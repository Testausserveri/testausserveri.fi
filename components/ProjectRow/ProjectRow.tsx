import Link from 'next/link'
import { AvatarRow } from '../AvatarRow/AvatarRow'
import { TagsRow } from '../TagsRow/TagsRow'
import styles from './ProjectRow.module.css'

export type ProjectRowProps = {
    project: {
        slug: string,
        name: string,
        description: {
            short: string
        },
        cover: {
            url: string
        },
        members: {
            id: string;
            name: string;
            avatar: string;
        }[],
        tags: string[]
    },
    compact?: boolean
}

export function ProjectRow({ project, compact }: ProjectRowProps) {
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