import path from 'path';
import { promises as fs } from 'fs';
import { serialize } from 'next-mdx-remote/serialize';
import { Member, PostDetails, PostDetailsFrontmatter } from './types';
import api from './api';

/**
 * List all posts
 */
function list(): Promise<PostDetails[]>;
/**
 * List recent posts limited by count (e.g. for front page, "latest 3 posts")
 */
function list(count: number): Promise<PostDetails[]>;
/**
 * List recent posts between start and end (e.g. for pagination)
 */
function list(start: number, end: number): Promise<PostDetails[]>;

async function list(arg1?: number, arg2?: number): Promise<PostDetails[]> {
    const postDir = path.join(process.cwd(), 'posts');
    const postFiles = (await fs.readdir(postDir)).filter(fileName => fileName.endsWith('.mdx'));

    async function getPostDetails(fileName: string) {
        const slug = fileName.replace(/\.mdx$/, '');
        const filePath = path.join(postDir, fileName);
        const raw = await fs.readFile(filePath, 'utf-8');
        const frontmatterRaw = raw.match(/^(---[\s\S]*?---)/)[1].trim();
        const serialized = await serialize(frontmatterRaw, { parseFrontmatter: true });
        const readingTime = Math.ceil((raw.split(' ').length - frontmatterRaw.split(' ').length ) / 120); // 200 words per minute.
        return {...serialized.frontmatter, slug, readingTime} as PostDetailsFrontmatter;
    }
    
    const settledPostDetails = await Promise.allSettled(
        postFiles.map(fileName => getPostDetails(fileName))
    );
    
    const fulfilledPostDetails = settledPostDetails
        .filter((p): p is PromiseFulfilledResult<PostDetailsFrontmatter> => p.status === 'fulfilled')
        .map(settled => settled.value);
    
    const uniqueTsAuthorIds = Array.from(new Set(fulfilledPostDetails.flatMap(post => post.authors))).filter(item => item.startsWith("ts:"));
    
    const settledTsAuthors = await Promise.allSettled(
        uniqueTsAuthorIds.map(async (id): Promise<Member> => ({
            name: await api.getMemberDisplayName(id.replace('ts:', '')),
            _id: id
        }))
    );
    
    const tsAuthors = settledTsAuthors
        .filter((p): p is PromiseFulfilledResult<Member> => p.status === 'fulfilled')
        .map(settled => settled.value);
   
    const posts = fulfilledPostDetails.map(postDetail => {
        const authorsResolved = postDetail.authors.map(id => tsAuthors.find(author => author._id === id) || {
            _id: id,
            name: id
        });
        return {
            slug: postDetail.slug,
            title: postDetail.title,
            category: postDetail.category,
            feature_image: postDetail.feature_image,
            excerpt: postDetail.excerpt,
            datetime: postDetail.datetime,
            readingTime: postDetail.readingTime,
            authors: authorsResolved
        } as PostDetails;
    });

    posts.sort((a, b) => b.datetime.getTime() - a.datetime.getTime());

    if (arg1 === undefined) { // list()
        return posts;
    } else if (arg2 === undefined) { // list(count)
        return posts.slice(-arg1);
    } else { // list(start, end)
        return posts.slice(arg1, arg2 + 1);
    }
}


const posts = {
    list
}

export default posts