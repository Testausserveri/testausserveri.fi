import posts, { PostsListResult } from '@/utils/posts';
import { type NextRequest } from 'next/server';

export const perPage = 10;
export async function generateStaticParams() {
    const { allCount } = await posts.list(0);
    const pagesCount = Math.ceil(allCount / perPage);
    return [...Array(pagesCount).keys()].map(i => ({index: String(i + 1)}));
};

export const dynamicParams = false;
export const dynamic = 'force-static';

export type PaginationResponse = PostsListResult & {
    count: number,
    pagesCount: number
}

export async function GET(request: NextRequest, { params }: { params: { index: string } }) {
    const index = Number(params.index) - 1;
    const list = await posts.list(index * perPage, index * perPage + (perPage - 1));
    const res: PaginationResponse = {
        ...list, 
        count: list.posts.length,
        pagesCount: Math.ceil(list.allCount / perPage)
    };
    return Response.json(res);
}