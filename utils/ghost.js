//import GhostContentAPI from "@tryghost/content-api";

/*
const api = new GhostContentAPI({
    url: 'https://blog.testausserveri.fi',
    key: 'ad5656be2b8b9b9bf636077279',
    version: "v5.0"
});
*/

async function getAllSlugs() {
  /*
    return await api.posts
    .browse()
    .then(data => data.map(item => item.slug))
    .catch(err => {
      console.error(err);
    });
    */
   return ['aa', 'bb']
}

async function getPosts() {
  /*
    return await api.posts
      .browse({limit: 3, include: 'tags,authors'})
      .catch(err => {
        console.error(err);
      });
      */
     return [{
      authors: [{
        slug: "61ea7506d66ff6e90380220f",
        name: 'Antti'
      }], primary_tag: "Opas", feature_image: "https://kaatis.party/self_reference.jpg", title: "Testi testi", excerpt: "Rakastan testaamista. onpa se kivaa! jes", slug: "teest"
     },{
      authors: [{
        slug: "61ea7506d66ff6e90380220f",
        name: 'Antti'
      }], primary_tag: "Opas", feature_image: "https://kaatis.party/self_reference.jpg", title: "Testi testi", excerpt: "Rakastan testaamista. onpa se kivaa! jes", slug: "teest"
     },{
      authors: [{
        slug: "61ea7506d66ff6e90380220f",
        name: 'Antti'
      }], primary_tag: "Opas", feature_image: "https://kaatis.party/self_reference.jpg", title: "Testi testi", excerpt: "Rakastan testaamista. onpa se kivaa! jes", slug: "teest"
     }]
}

async function getSinglePost(postSlug) {
    return {}
}

const ghost = { getPosts, getAllSlugs, getSinglePost }
export default ghost
