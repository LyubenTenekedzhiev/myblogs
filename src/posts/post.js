import Entity from './../common/entity.js';

class Post extends Entity {
  status = "active";
  constructor(title, author, text, keywords, imageURL) {
    super({});
    this.title = title;
    this.author = author;
    this.text = text;
    this.keywords = keywords;
    this.imageURL = imageURL;
  }
}

export default Post;
