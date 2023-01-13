import styles from './TagsRow.module.css'
import { Capsule } from '../Capsule/Capsule'

export type TagsRowProps = {
    tags: string[]
}

export function TagsRow({tags}: TagsRowProps) {
    return (
        <ul className={styles.tagsRow}>
            {tags.map(tag => (
                <li key={tag}><Capsule>{tag}</Capsule></li>
            ))}
        </ul>
    )
}