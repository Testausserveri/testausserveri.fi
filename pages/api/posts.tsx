import { NextApiRequest, NextApiResponse } from "next/types";
import posts from "../../utils/posts";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { page } = req.query
    const { posts: pagePosts, allCount } = await posts.listFromIndex(Number(page) * 9, Number(page) * 9 + 9);
    res.end(JSON.stringify({pagePosts, allCount}, null, 2))
}
