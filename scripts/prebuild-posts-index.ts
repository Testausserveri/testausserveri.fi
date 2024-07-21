import 'dotenv/config'
import posts, { PostsListResult } from '../utils/posts';
import { promises as fs } from 'fs';

posts.list().then((allPosts: PostsListResult) => {
    fs.writeFile('posts.json', JSON.stringify(allPosts, null, 2));
    console.log(`Built posts index successfully. (count: ${allPosts.allCount})`);
})