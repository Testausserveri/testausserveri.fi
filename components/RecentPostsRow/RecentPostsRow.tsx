import styles from './RecentPostsRow.module.css'
import Image from 'next/image';
import { getMemberAvatarUrl } from '../../utils/Member';
import { AvatarRow } from '../AvatarRow/AvatarRow';
import { AiOutlineRead } from 'react-icons/ai';
import Link from 'next/link';
import { PostDetails } from '../../utils/types';
import { TimeUtil } from '../../utils/TimeUtil';

type PostColumnProps = {
  post: PostDetails;
};

function PostColumn(props: PostColumnProps) {
  const { authors, category, feature_image, title, excerpt, slug, datetime, readingTime } = props.post

  return (
    <a>
      <div className={styles.post}>
        <div className={styles.picture}>
          <div className={styles.authors}>
            <AvatarRow members={authors} expandOnHover />
          </div>
          <img className={styles.featureImage} src={`/posts/assets/${feature_image}`} width="500" height="50" />
        </div>
        <span className={styles.tag}>
          <span>{category || ""}</span>
        </span>
        <span className={styles.title}>
          {title}
        </span>
        <span className={styles.excerpt}>
          {excerpt}
        </span>
        <span className={styles.bottom}>
          <span className={styles.date}>
            {TimeUtil.formatDateInRelationToCurrent(new Date(datetime))}
          </span>
          <span className={styles.readingTime}>
            <AiOutlineRead />
            {readingTime} minuutti{readingTime != 1 ? "a" : ""}
          </span>
        </span>
      </div>
    </a>
  )
}

type PostsProps = {
  posts: PostDetails[];
}

export function RecentPostsRow(props: PostsProps) {
  return (
    <div className={styles.row}>
      {props.posts.map(post => (
        <PostColumn key={post.slug} post={post} />
      ))}
    </div>
  )
}

