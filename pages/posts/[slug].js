import Head from 'next/head'
import { Content } from '../../components/Content/Content'
import api from '../../utils/api'
import { Footer } from '../../components/Footer/Footer'
import ghost from '../../utils/ghost'

export default function PostPage({ slug, post }) {
  return (
    <div>
        <Head>
            {/* <title>{slug} | Testausserveri</title>
            <meta property="og:site_name" content="Testausserveri"></meta>
            <meta property="og:title" content={project.name} />
            <meta property="og:image" content={project.cover.url} />
            <meta property="og:description" content={project.description.short} />
            <meta name="twitter:card" content="summary_large_image"></meta> */}
        </Head>
        <Content>
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Content>
        <Footer />
    </div>
  )
}

export async function getStaticProps(context) {
  const { slug } = context.query || context.params
  const post = await ghost.getSinglePost(slug)

  if (!post) {
    return {
      notFound: true,
    }
  }

  return { 
    props: 
      { 
        slug,
        post
      },
    revalidate: 60,
  }
}

export async function getStaticPaths() {
  const ghostSlugs = await ghost.getAllSlugs()

  console.log(ghostSlugs)
  const paths = ghostSlugs.map(slug => ({ params: { slug } }))
  console.log("Loaded static paths", paths)
  return {
    paths,
    fallback: "blocking"
  };
}
