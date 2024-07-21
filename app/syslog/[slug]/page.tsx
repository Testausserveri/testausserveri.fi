import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { compileMDX, MDXRemote, type MDXRemoteSerializeResult } from 'next-mdx-remote/rsc';
import { serialize } from 'next-mdx-remote/serialize';
import { promises as fs } from 'fs';
import path from 'path';
import { PostDetails, PostDetailsFrontmatter } from '@/utils/types';
import { FadeBackground } from '@/components/FadeBackground/FadeBackground';
import { Content } from '@/components/Content/Content';
import Image from 'next/image';
import { H1 } from '@/components/Title/Title';
import { mdxComponents } from '@/components/mdx/mdxComponents';
import { Footer } from '@/components/Footer/Footer';
import styles from './style.module.css';
import { JSXElementConstructor, ReactElement } from 'react';

export const dynamicParams = false;
export const dynamic = 'force-static';

export async function generateStaticParams() {
    const postsDirectory = path.join(process.cwd(), 'posts');
    const filenames = await fs.readdir(postsDirectory);
    
    const paths = filenames.map((filename) => ({
        params: { slug: filename.replace(/\.mdx$/, '') },
    }));
   
    return paths
}

type Post = {
    content: ReactElement<any, string | JSXElementConstructor<any>>;
    frontmatter: PostDetails;
};

async function getPost(slug: string): Promise<Post> {
    const filepath = path.join(process.cwd(), 'posts', `${slug}.mdx`);
    const raw = await fs.readFile(filepath, 'utf-8');

    const { content, frontmatter } = await compileMDX<PostDetails>({
        source: raw,
        options: { parseFrontmatter: true },
        components: mdxComponents
      })

    return {
        content,
        frontmatter
    };
}

export default async function Page({ params }: { params: { slug: string } }) {
    const { frontmatter, content } = await getPost(params.slug);
    const feature_image = frontmatter.feature_image.startsWith('http') ? frontmatter.feature_image : `/syslog/assets/${frontmatter.feature_image}`;

    return (
        <FadeBackground url={feature_image}>
            <Content>
                <div className={styles.postImage}>
                    <Image src={feature_image} fill={true} alt="Artikkelin kuva" />
                </div>
                <H1>{frontmatter.title}</H1>
                <div className={styles.postContent}>
                    {content}
                </div>
            </Content>
            <Footer />
        </FadeBackground>
    );
}