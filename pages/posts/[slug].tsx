import { GetStaticPaths, GetStaticProps } from 'next';
import { type MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { promises as fs } from 'fs';
import path from 'path';
import { Content } from '../../components/Content/Content';
import { H1 } from '../../components/Title/Title';
import { AvatarRow, AvatarRowProps } from '../../components/AvatarRow/AvatarRow';
import { getMemberAvatarUrl } from '../../utils/Member';

type Frontmatter = {
  title: string;
  authors: string[];
  datetime: string;
};

type Post<TFrontmatter> = {
  serialized: MDXRemoteSerializeResult;
  frontmatter: TFrontmatter;
};

async function getPost(filepath: string): Promise<Post<Frontmatter>> {
  const raw = await fs.readFile(filepath, 'utf-8');
  const serialized = await serialize(raw, { parseFrontmatter: true });
  const frontmatter = serialized.frontmatter as Frontmatter;

  return {
    frontmatter,
    serialized,
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const filepath = path.join(process.cwd(), 'posts', `${slug}.mdx`);
  const post = await getPost(filepath);

  return {
    props: {
      serialized: post.serialized,
      frontmatter: post.frontmatter,
    },
  };
};

type PostPageProps = {
  serialized: MDXRemoteSerializeResult;
  frontmatter: Frontmatter;
};

export default function PostPage({ serialized, frontmatter }: PostPageProps) {
  const members = frontmatter.authors.map(author => {
    const [id, name] = author.split(":");
    return {
      avatar: getMemberAvatarUrl(id),
      id,
      name
    }
  })
  return (
    <Content>
    <H1>{frontmatter.title}</H1>
      <AvatarRow members={members} />
      <p>Julkaistu {frontmatter.datetime}</p>
      <hr />
      <MdxContent source={serialized} />
    </Content>
  );
}

type MdxContentProps = {
  source: MDXRemoteSerializeResult;
};

const MdxContent = ({ source }: MdxContentProps) => {
  return <MDXRemote {...source} />;
};
