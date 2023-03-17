import Link from 'next/link'
import { AvatarRow } from '../AvatarRow/AvatarRow'
import { TagsRow } from '../TagsRow/TagsRow'
import styles from './ProjectRow.module.css'
import { getProjectMediaUrl } from '../../utils/Project'
import { getMemberAvatarUrl } from '../../utils/Member'
import { DetailedProject, ShallowProject } from '../../utils/types'
import Image from 'next/image'

export type ProjectRowProps = {
    project: DetailedProject | ShallowProject,
    compact?: boolean
}

export function ProjectRow({ project, compact }: ProjectRowProps) {
    const projectMedia = Array.isArray(project.media) ? project.media : [{ ...project.media, cover: true }];
    const cover = projectMedia.find(m => m.cover === true);

    const description = typeof project.description === "string" ? project.description : project.description.short;

    return (
        <Link href={`/projects/${project.slug}`}>
            <a>
                <div className={`${styles.row} ${compact ? styles.compact : ""}`}>
                    <div className={styles.inner}>
                        <div style={{ position: "relative", height: (compact ? 96 : 136) }}>
                            {cover && <Image
                                src={getProjectMediaUrl(cover.filename)}
                                layout="fill"
                                objectFit="cover"
                                className={styles.image}
                            />}
                        </div>
                        <div className={styles.content}>
                            <h2>{project.name}</h2>
                            <p>{description}</p>
                            <div className={styles.bottom}>
                                <AvatarRow members={project.members.map(m => ({ ...m, id: m._id, avatar: getMemberAvatarUrl(m._id) }))} />
                                <TagsRow tags={project.tags} />
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    )
}
