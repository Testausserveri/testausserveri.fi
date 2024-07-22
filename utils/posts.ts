import path from 'path';
import { promises as fs } from 'fs';
import { serialize } from 'next-mdx-remote/serialize';
import { Member, PostDetails } from './types';
import api from './api';
import RssParser from 'rss-parser';
import { getImageDetails } from './image';

export type PostsListResult = {
    posts: PostDetails[],
    allCount: number
};

const postDir = path.join(process.cwd(), 'posts');

async function getPostDetails(fileName: string) {
    const filePath = path.join(postDir, fileName);
    const raw = await fs.readFile(filePath, 'utf-8');
    
    const slug = fileName.split('/')[0];
    const frontmatterRaw = (raw.match(/^(---[\s\S]*?---)/)?.[1]?.trim()) ?? '';
    const serialized = await serialize(frontmatterRaw, { parseFrontmatter: true });
    const readingTime = Math.ceil((raw.split(' ').length - frontmatterRaw.split(' ').length ) / 120); 

    const featureImage  = serialized.frontmatter.feature_image as string;
    const image = require('../posts/' + slug + '/' + featureImage).default; 
    
    //getImageUrl('../posts/' + slug.split('/')[0] + '/' + featureImage);
    const imageUrl = image.src;
    const imagePlaceholder = image.blurDataURL;

    const authorsResolved = await Promise.all((serialized.frontmatter.authors as string[]).map(async (id) => ({
        name: id.startsWith('ts:') ? await api.getMemberDisplayName((id || "").replace('ts:', '')) : id,
        _id: id || ""
    })));

    return {...serialized.frontmatter, slug, readingTime, imagePlaceholder, imageUrl, authorsResolved } as PostDetails;
}

/**
 * List all posts
 */
function list(): Promise<PostsListResult>;
/**
 * List recent posts limited by count (e.g. for front page, "latest 3 posts")
 */
function list(count: number): Promise<PostsListResult>;
/**
 * List recent posts between start and end (e.g. for pagination)
 */
function list(start: number, end: number): Promise<PostsListResult>;

async function list(arg1?: number, arg2?: number): Promise<PostsListResult> {
    const postFiles = (await fs.readdir(postDir)).map(fileName => fileName + '/post.mdx');
    const allCount = postFiles.length;
    
    const settledPostDetails = await Promise.allSettled(
        postFiles.map(fileName => getPostDetails(fileName))
    );
    console.log(settledPostDetails)
    const fulfilledPostDetails = settledPostDetails
        .filter((p): p is PromiseFulfilledResult<PostDetails> => p.status === 'fulfilled')
        .map(settled => settled.value);
    
    /*
    const uniqueTsAuthorIds = Array.from(new Set(fulfilledPostDetails.flatMap(post => post.authors))).filter(item => item?.startsWith("ts:"));
    const settledTsAuthors = await Promise.allSettled(
        uniqueTsAuthorIds.map(async (id): Promise<Member> => ({
            name: await api.getMemberDisplayName((id || "").replace('ts:', '')),
            _id: id || ""
        }))
    );

    const tsAuthors = settledTsAuthors
        .filter((p): p is PromiseFulfilledResult<Member> => p.status === 'fulfilled')
        .map(settled => settled.value);
    */
    let posts = fulfilledPostDetails.map(postDetail => {
        /*const authorsResolved = postDetail.authors?.map(id => tsAuthors.find(author => author._id === id) || {
            _id: id,
            name: id
        });*/
        return {
            slug: postDetail.slug,
            title: postDetail.title,
            category: postDetail.category,
            feature_image: postDetail.feature_image,
            excerpt: postDetail.excerpt,
            datetime: postDetail.datetime,
            readingTime: postDetail.readingTime,
            authorsResolved: postDetail.authorsResolved,
            imagePlaceholder: postDetail.imagePlaceholder,
            imageUrl: postDetail.imageUrl
        } as PostDetails;
    });

    posts.sort((a, b) => new Date(b.datetime).getTime() - new Date(a.datetime).getTime());
    if (arg2 === undefined && arg1 !== undefined) { // list(count)
        posts = posts.slice(-arg1);
    } else if (arg1 && arg2) { // list(start, end)
        posts = posts.slice(arg1, arg2 + 1);
    }
    
    return {
        posts, allCount
    };
}

/**
 * List all posts; uses prebuilt index to fetch data
 */
function listFromIndex(): Promise<PostsListResult>;
/**
 * List recent posts limited by count (e.g. for front page, "latest 3 posts"); uses prebuilt index to fetch data
 */
function listFromIndex(count: number): Promise<PostsListResult>;
/**
 * List recent posts between start and end (e.g. for pagination); uses prebuilt index to fetch data
 */
function listFromIndex(start: number, end: number): Promise<PostsListResult>;

async function listFromIndex(arg1?: number, arg2?: number): Promise<PostsListResult> {
    let { posts, allCount }: PostsListResult = JSON.parse(await fs.readFile('../posts.json', 'utf-8'));

    if (arg2 === undefined && arg1 !== undefined) { // list(count)
        posts = posts.slice(-arg1);
    } else if (arg1 && arg2) { // list(start, end)
        posts = posts.slice(arg1, arg2 + 1);
    }
    return {
        posts, allCount
    };
}

async function listRecentTestausauto(): Promise<PostDetails[]> {
    const rssParser = new RssParser({
        customFields: {
            item: ['media:content', 'content:encoded']
        }
    });
    
    // to-do: revalidate once in a while
    const feed = await rssParser.parseURL('https://testausauto.fi/feed/');
    const items = feed.items.slice(0,3);
    const testausautoAuthors: {[key: string]: string} = {
        'Ruben': 'ts:61d8a2b6955c44fe1def464c',
        'Mikael': 'ts:61d8b737a16588f423624ed5'
    };

    const posts = await Promise.all(items.map(async (item) => {
        const regex = /<p>(.*?)<\/p>/g;
        let matches = [];
        let match;
        while ((match = regex.exec(item['content:encoded'])) !== null) {
            matches.push(match[1]);
        }
        const resultString = matches.join(' ');
        const readingTime = Math.ceil(resultString.split(' ').length / 120);

        const { base64: imagePlaceholder } = await getImageDetails(item['media:content']['$']['url']);

        const post = {
            title: item.title || "",
            category: item.categories?.[0] || "",
            feature_image: item['media:content']['$']['url'],
            excerpt: item?.contentSnippet?.split('.')[0] + '.',
            authorsResolved: [{
                name: item.creator || "",
                _id: testausautoAuthors[item.creator || ""]
            }],
            datetime: new Date(item.pubDate || ""),
            slug: item.link || "",
            readingTime: readingTime,
            url: item.link,
            imagePlaceholder,
            imageUrl: item['media:content']['$']['url']
        };

        return post;
    }));
    return posts;
}


const posts = {
    list,
    listFromIndex,
    listRecentTestausauto,
    getPostDetails
}

export default posts