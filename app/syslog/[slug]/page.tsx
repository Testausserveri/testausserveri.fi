import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, Metadata, ResolvingMetadata } from 'next';
import { compileMDX, MDXRemote, type MDXRemoteSerializeResult } from 'next-mdx-remote/rsc';
import { serialize } from 'next-mdx-remote/serialize';
import { promises as fs } from 'fs';
import path from 'path';
import { PostDetails } from '@/utils/types';
import { FadeBackground } from '@/components/FadeBackground/FadeBackground';
import { Content } from '@/components/Content/Content';
import Image from 'next/image';
import { H1 } from '@/components/Title/Title';
import { mdxComponents } from '@/components/mdx/mdxComponents';
import { Footer } from '@/components/Footer/Footer';
import styles from './style.module.scss';
import { JSXElementConstructor, ReactElement } from 'react';
import posts from '@/utils/posts';
import { Breadcrumbs } from '@/components/Breadcrumbs/Breadcrumbs';
import Separator from '@/components/Separator/Separator';
import { AvatarRow } from '@/components/AvatarRow/AvatarRow';
import { TimeUtil } from '@/utils/TimeUtil';
import { CapsuleButton } from '@/components/Button/CapsuleButton';
import Link from 'next/link';
import { getMemberAvatarUrl } from '@/utils/Member';
import testausorveli from '@/assets/testausorveli.png';

// seems like next.js is bugging
// https://github.com/vercel/next.js/issues/52765
/*
export const dynamicParams = false;
export const dynamic = 'force-static';
*/

export async function generateStaticParams() {
    const postsDirectory = path.join(process.cwd(), 'posts');
    const filenames = await fs.readdir(postsDirectory);
    
    const paths = filenames
        .filter(filename => filename.endsWith('.mdx'))
        .map((filename) => ({ slug: filename.replace(/\.mdx$/, '') }));

    console.log("Generated paths for posts: ", paths)
   
    return paths
}

type Post = {
    content: ReactElement<any, string | JSXElementConstructor<any>>;
    postDetails: PostDetails;
};

export async function generateMetadata(
    { params }: { params: { slug: string } },
    parent: ResolvingMetadata
  ): Promise<Metadata> {
    const { postDetails, content } = await getPost(params.slug);
   
    return {
      title: postDetails.title,
      description: postDetails.excerpt,
      creator: (postDetails.authorsResolved || []).map(member => member.name).join("; "),
      keywords: [postDetails.category],
      openGraph: {
        title: postDetails.title,
        description: postDetails.excerpt,
        siteName: 'Testausserveri',
        images: postDetails.imageUrl,
        locale: 'fi_FI',
        type: 'article',
        publishedTime: new Date(postDetails.datetime).toISOString(),
        modifiedTime: new Date(postDetails.datetime).toISOString(),
        authors: postDetails.authorsResolved?.map(author => author.name)
      },
    }
}

async function getPost(slug: string): Promise<Post> {
    const filepath = path.join(process.cwd(), 'posts', `${slug}.mdx`);
    const raw = await fs.readFile(filepath, 'utf-8');
    console.log("Getting post: ", slug)
    const { content } = await compileMDX<PostDetails>({
        source: raw,
        options: { parseFrontmatter: true },
        components: mdxComponents
      })
    const postDetails = await posts.getPostDetails(`${slug}.mdx`);

    return {
        content,
        postDetails
    };
}

export default async function Page({ params }: { params: { slug: string } }) {
    const { postDetails, content } = await getPost(params.slug);

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'NewsArticle',
        headline: postDetails.title,
        image: postDetails.imageUrl,
        description: postDetails.excerpt,
        datePublished: postDetails.datetime,
        dateModified: postDetails.datetime,
        author: postDetails.authorsResolved?.map(author => ({
            "@type": "Person",
            name: author.name,
            url: (String(author._id).startsWith('ts:') ? getMemberAvatarUrl(String(author._id).replace('ts:', '')) : testausorveli)
        }))
    }

    return (
        <FadeBackground url={postDetails.imagePlaceholder}>
            <Content noMargin>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
                <H1 className={styles.title}>{postDetails.title}</H1>
                <div className={styles.details}>
                    <AvatarRow members={postDetails.authorsResolved || []} />
                    <span className={styles.middle}>
                        <span className={styles.authorsName}>
                            {(postDetails.authorsResolved || []).map(member => member.name).join("; ")}
                        </span>
                        <span>
                            {TimeUtil.formatDateInRelationToCurrent(new Date(postDetails.datetime))} — {postDetails.readingTime} min luku
                        </span>
                    </span>
                    <div className={styles.editButton}>
                        <Link href={`https://github.com/Testausserveri/testausserveri.fi/blob/mdx-posts-remote-feat/posts/${postDetails.slug}.mdx`}>
                            <CapsuleButton secondary small>Muokkaa</CapsuleButton>
                        </Link>
                    </div>
                </div>
                <p className={styles.excerpt}>{postDetails.excerpt}</p>
                </Content>
                <Content wider noMargin>
                <div className={styles.postImage}>
                    <Image 
                        fill={true} 
                        placeholder='blur' 
                        blurDataURL={postDetails.imagePlaceholder}
                        src={postDetails.imageUrl}
                        sizes="(max-width: 800px) 100vw, 70vw"
                        alt="Artikkelin kuva" />
                </div>
                </Content>
                <Content>
                <div className={styles.postContent}>
                    {content}
                </div>

                <div style={{margin: "2.5rem 0 2.5rem 0"}}>
                    <Separator>Loppu</Separator>
                </div>

                <Link href="/syslog">
                    <CapsuleButton style={{marginRight: ".75em", marginTop: ".75em"}}>
                        Kaikki postaukset 
                    </CapsuleButton>
                </Link>
                <Link href={`https://github.com/Testausserveri/testausserveri.fi/blob/mdx-posts-remote-feat/posts/${postDetails.slug}.mdx`}>
                    <CapsuleButton style={{marginTop: ".75em"}} secondary>Muokkaa postausta</CapsuleButton>
                </Link>
                {/*
                <div style={{marginTop: "2rem"}}>
                    <Breadcrumbs
                        route={[
                            { path: '/syslog', name: 'Syslog' },
                            { path: `/syslog/category/${postDetails.category}`, name: postDetails.category },
                            { path: `/syslog/category/${postDetails.category}/${postDetails.slug}`, name: postDetails.title }
                        ]} />
                </div>
                */}
            </Content>
            <Footer />
        </FadeBackground>
    );
}