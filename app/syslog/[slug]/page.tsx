import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
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
import styles from './style.module.css';
import { JSXElementConstructor, ReactElement } from 'react';
import posts from '@/utils/posts';

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

    return (
        <FadeBackground url={postDetails.imagePlaceholder}>
            <Content>
                <div className={styles.postImage}>
                    <Image 
                        fill={true} 
                        placeholder='blur' 
                        blurDataURL={postDetails.imagePlaceholder}
                        src={postDetails.imageUrl}
                        sizes="(max-width: 800px) 100vw, 50vw"
                        alt="Artikkelin kuva" />
                </div>
                <H1>{postDetails.title}</H1>
                <div className={styles.postContent}>
                    {content}
                </div>
            </Content>
            <Footer />
        </FadeBackground>
    );
}