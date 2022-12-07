import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
    url: 'https://blog.testausserveri.fi',
    key: 'ad5656be2b8b9b9bf636077279',
    version: "v5.0"
});

async function getAllSlugs() {
    return await api.posts
    .browse()
    .then(data => data.map(item => item.slug))
    .catch(err => {
      console.error(err);
    });
}

async function getPosts() {
    return await api.posts
      .browse({limit: 3, include: 'tags,authors'})
      .catch(err => {
        console.error(err);
      });
}

async function getSinglePost(postSlug) {
    return await api.posts
      .read({
        slug: postSlug
      })
      .catch(err => {
        console.error(err);
      });
}

const ghost = { getPosts, getAllSlugs, getSinglePost }
export default ghost
