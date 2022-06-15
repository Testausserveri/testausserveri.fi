import styles from './TagsRow.module.css'
import { Capsule } from '../Capsule/Capsule'

export function TagsRow({tags}) {
    return (
        <ul className={styles.tagsRow}>
            {tags.map(tag => (
                <li key={tag}><Capsule>{tag}</Capsule></li>
            ))}
        </ul>
    )
}