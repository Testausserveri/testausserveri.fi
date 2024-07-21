/*
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { PostDetails } from "../../../utils/types";
import posts from "../../../utils/posts";


export async function getStaticPaths() {
    return {
      paths: [{ params: { page: '1' } }],
      fallback: false,
    }
  }
  
export default function PostsPage({ pagePosts }: InferGetStaticPropsType<typeof getStaticProps>) {  
    return <>
        {JSON.stringify(pagePosts, null, 2)}
    </>
}


export const getServerSideProps = async ({ req, res, resolvedUrl }) => {
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify());
    res.end();
    return {
        props: {},
    };
}

PostsPage.getLayout = function getLayout(page: any) {
    return (
      <>{page}</>
    )
}

export const getStaticProps: GetStaticProps<{
    pagePosts: PostDetails[]
  }> = async ({ params }) => {
    const { page } = params;
    const { posts: pagePosts } = await posts.list(Number(page) * 9, Number(page) * 9 + 9);
  
    return {
      props: {
        pagePosts: JSON.parse(JSON.stringify(pagePosts)),
      }
    }
  }
    */