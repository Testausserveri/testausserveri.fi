import styles from './Posts.module.css'
import Image from 'next/image';
import { Member } from '../../utils/Member';
import { AvatarRow } from '../AvatarRow/AvatarRow';
import { AiOutlineRead } from 'react-icons/ai';
import Link from 'next/link';

type PostDetails = {
  authors: {
    id: string;
    name: string;
  }[];
  primary_tag: string;
  feature_image: string;
  title: string;
  excerpt: string;
  slug: string;
};

type PostColumnProps = {
  post: PostDetails;
};

function PostColumn(props: PostColumnProps) {
  const { authors, primary_tag, feature_image, title, excerpt, slug } = props.post
  console.log(props.post)

  const authorMembers = authors.map(author => new Member({ id: author.id, name: author.name, avatar: "" }))

  return (
    <a>
      <div className={styles.post}>
        <img src={feature_image} width="500" height="50" className={styles.image} />
        <span className={styles.tag}>
          {primary_tag || ""}
        </span>
        <span className={styles.title}>
          {title}
        </span>
        <span className={styles.excerpt}>
          {excerpt}
        </span>
        <span className={styles.bottom}>
          <AvatarRow members={authorMembers} />
          {/*
                    <span className={styles.readingTime}>
                        <AiOutlineRead />
                        {readingTime(props.post, { minute: '1 minuutti', minutes: '% minuuttia' })}
                    </span>
                    */}
        </span>
      </div>
    </a>
  )
}

type PostsProps = {
  posts: PostDetails[];
}

export function Posts(props: PostsProps) {
  return (
    <div className={styles.row}>
      {props.posts.map(post => (
        <PostColumn key={post.slug} post={post} />
      ))}
    </div>
  )
}

