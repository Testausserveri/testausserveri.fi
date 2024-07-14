import path from 'path';
import { promises as fs } from 'fs';
import { serialize } from 'next-mdx-remote/serialize';
import { Member, PostDetails, PostDetailsFrontmatter } from './types';
import api from './api';
import RssParser from 'rss-parser';

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

async function listRecentTestausauto(): Promise<PostDetails[]> {
    const rssParser = new RssParser({
        customFields: {
            item: ['media:content', 'content:encoded']
        }
    });
    
    const feed = await rssParser.parseURL('https://testausauto.fi/feed/');
    const items = feed.items.slice(0,3);
    let posts: PostDetails[] = [];
    items.forEach(item => {   
        const regex = /<p>(.*?)<\/p>/g;
        let matches = [];
        let match;
        while ((match = regex.exec(item['content:encoded'])) !== null) {
            matches.push(match[1]);
        }
        const resultString = matches.join(' ');
        const readingTime = Math.ceil(resultString.split(' ').length / 120);     

        const testausautoAuthors: {[key: string]: string} = {
            'Ruben': 'ts:61d8a2b6955c44fe1def464c',
            'Mikael': 'ts:61d8b737a16588f423624ed5'
        }
        const post: PostDetails = {
            title: item.title,
            category: item.categories[0],
            feature_image: item['media:content']['$']['url'],
            excerpt: item.contentSnippet.split('.')[0] + '.',
            authors: [{
                name: item.creator,
                _id: testausautoAuthors[item.creator]
            }],
            datetime: new Date(item.pubDate),
            slug: item.link,
            readingTime: readingTime,
            url: item.link
        }
        posts.push(post);
    });  
    return posts;
}


const posts = {
    list,
    listRecentTestausauto
}

export default posts