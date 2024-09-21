import styles from './PostsGrid.module.css'
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
  const { url, authorsResolved, category, title, excerpt, slug, datetime, readingTime, imagePlaceholder, imageUrl } = props.post
  return (
    <Link href={url ? url : `/syslog/${slug}`}>
      <div className={styles.post}>
        <div className={styles.picture}>
          <div className={styles.authors}>
            <AvatarRow members={authorsResolved || []} expandOnHover />
          </div>
          <Image 
            alt={'Artikkelin kuva'} 
            className={styles.featureImage} 
            placeholder='blur' 
            sizes="(max-width: 800px) 50vw, (max-width: 600px) 100vw, 20vw"
            fill
            src={imageUrl}
            blurDataURL={imagePlaceholder} />
        </div>
        <span className={styles.tag}>
          <span>{category || ""}</span>
        </span>
        <span className={styles.title}>
          {title}
        </span>
        {/* <span className={styles.excerpt}>
          {excerpt}
        </span> */}
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
    </Link>
  )
}

type PostsProps = {
  posts: PostDetails[];
  columns?: number;
}

export function PostsGrid(props: PostsProps) {
  return (
    <div className={styles.grid} style={props.columns ? { gridTemplateColumns: "1fr ".repeat(props.columns) } : {}}>
      {props.posts.map(post => (
        <PostColumn key={post.slug} post={post} />
      ))}
    </div>
  )
}

