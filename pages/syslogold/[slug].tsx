import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { type MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { promises as fs } from 'fs';
import path from 'path';
import { Content } from '../../components/Content/Content';
import { H1 } from '../../components/Title/Title';
import { AvatarRow, AvatarRowProps } from '../../components/AvatarRow/AvatarRow';
import { getMemberAvatarUrl } from '../../utils/Member';
import { PostDetails, PostDetailsFrontmatter } from '../../utils/types';
import styled from 'styled-components';
import { mdxComponents } from '../../components/mdx/mdxComponents';
import { Footer } from '../../components/Footer/Footer';
import { FadeBackground } from '../../components/FadeBackground/FadeBackground';
import Image from 'next/image';

type Post<TFrontmatter> = {
  serialized: MDXRemoteSerializeResult;
  frontmatter: TFrontmatter;
};

async function getPost(filepath: string): Promise<Post<PostDetails>> {
  const raw = await fs.readFile(filepath, 'utf-8');
  const serialized = await serialize(raw, { parseFrontmatter: true });
  let frontmatter = serialized.frontmatter as PostDetails;
  frontmatter.datetime = new Date();
  const { frontmatter: _, ...serializedWithoutFrontmatter } = serialized;

  return {
    frontmatter: JSON.parse(JSON.stringify(frontmatter)),
    serialized: serializedWithoutFrontmatter as MDXRemoteSerializeResult,
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = await fs.readdir(postsDirectory);
  
  const paths = filenames.map((filename) => ({
    params: { slug: filename.replace(/\.mdx$/, '') },
  }));

  return {
    paths,
    fallback: false,
  };
};

type PostsStaticProps = {
  serialized: MDXRemoteSerializeResult,
  frontmatter: PostDetails,
  copyrightYear: number
};

export const getStaticProps: GetStaticProps<PostsStaticProps> = async ({ params }) => {
  const slug = params?.slug as string;
  const filepath = path.join(process.cwd(), 'posts', `${slug}.mdx`);
  const post = await getPost(filepath);

  return {
    props: {
      serialized: post.serialized,
      frontmatter: post.frontmatter,
      copyrightYear: new Date().getFullYear()
    },
  };
};

const PostContent = styled.div`
  img {
    max-width: 100%;
    border-radius: 6px;
  }
`;

const PostImage = styled.div`
  position: relative;
  height: 250px;
  img {
    object-fit:cover;
  }
`;

export default function PostPage({ serialized, frontmatter, copyrightYear }: InferGetStaticPropsType<typeof getStaticProps>) {
  const feature_image = frontmatter.feature_image.startsWith('http') ? frontmatter.feature_image : `/posts/assets/${frontmatter.feature_image}`;

  return (
    <FadeBackground url={feature_image}>
      <Content>
      <PostImage>
        <Image src={feature_image} fill={true} alt="Artikkelin kuva" />
      </PostImage>
      <H1>{frontmatter.title}</H1>
      <PostContent>
        <MdxContent source={serialized} />
      </PostContent>
      </Content>
      <Footer copyrightYear={copyrightYear} />
    </FadeBackground>
  );
}

type MdxContentProps = {
  source: MDXRemoteSerializeResult;
};

const MdxContent = ({ source }: MdxContentProps) => {
  return <MDXRemote {...source} components={mdxComponents} />;
};
