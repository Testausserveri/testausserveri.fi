import styles from './GhostArticles.module.css'
//import {readingTime} from '@tryghost/helpers'
import Image from 'next/image';
import { Member } from '../../utils/Member';
import { AvatarRow } from '../AvatarRow/AvatarRow';
import { AiOutlineRead } from 'react-icons/ai';
import Link from 'next/link';

const readingTime = () => '5 minuuttia';

function Post(props) {
    const {authors, primary_tag, feature_image, title, excerpt, slug} = props.post
    console.log(props.post)

    const authorMembers = authors.map(author => new Member({_id: author.slug, name: author.name}))

    return (
            <a>
                <div className={styles.post}>
                    <img src={feature_image} width="500" height="50" className={styles.image} />
                    <span className={styles.tag}>
                        {primary_tag?.name || ""}
                    </span>
                    <span className={styles.title}>
                        {title}
                    </span>
                    <span className={styles.excerpt}>
                        {excerpt}
                    </span>
                    <span className={styles.bottom}>
                        <AvatarRow members={authorMembers} />
                        <span className={styles.readingTime}>
                            <AiOutlineRead />
                            {readingTime(props.post, {minute: '1 minuutti', minutes: '% minuuttia'})}
                        </span>
                    </span>
                </div>
            </a>
    )
}
export function GhostArticles(props) {
    return (
        <div className={styles.row}>
            {props.posts.map(post => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    )
}


