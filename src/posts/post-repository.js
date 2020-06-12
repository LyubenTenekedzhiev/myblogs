import Post from "./post.js";

class PostRepository {
  posts = new Map();
  constructor(post) {
    this.post = post;
  }

  create(post) {
    this.posts.set(post.id, post);
  }
  findById(id) {
    return this.posts.get(id);
  }
  findAll() {
    return this.posts.values();
  }
  update(post) {
    this.posts.set(post.id, post);
    return post;
  }
  deleteById(id) {
    return this.posts.delete(id);
  }
  getCount() {
    return this.posts.size;
  }
}

const postRepo = new PostRepository();

postRepo.create(
  new Post(
    "????????",
    "no author",
    "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem ",
    "lorem",
    "www.lorem.lorem"
  )
);
postRepo.create(
  new Post(
    "????????",
    "no author",
    "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem ",
    "lorem",
    "www.lorem.lorem"
  )
);
postRepo.create(
  new Post(
    "????????",
    "no author",
    "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem ",
    "lorem",
    "www.lorem.lorem"
  )
);
postRepo.create(
  new Post(
    "????????",
    "no author",
    "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem ",
    "lorem",
    "www.lorem.lorem"
  )
);

const POSTS = Array.from(postRepo.findAll());

console.log(POSTS);

export { POSTS, PostRepository, postRepo };
