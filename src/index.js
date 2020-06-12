import UserRepository from "./users/user-repository.js";
import { POSTS, postRepo } from "./posts/post-repository.js";
import Post from "./posts/post.js";

document.addEventListener("DOMContentLoaded", () => {
  // sections for rendering the posts
  const postSection = document.querySelector(".main_posts") || document.querySelector(".posts");
  // inputs for creating a post
  const titleInput = document.getElementById("post_title");
  const textInput = document.getElementById("post_text");
  const keywordsInput = document.getElementById("post_keywords");
  const submitInput = document.getElementById("post_submit");
  let title,
    text,
    keywords = "";

  if (window.location.href === "http://127.0.0.1:5500/usersProfile.html") {
    titleInput.addEventListener("change", (event) => {
      title = event.target.value;
    });
    textInput.addEventListener("change", (event) => {
      text = event.target.value;
    });
    keywordsInput.addEventListener("change", (event) => {
      keywords = event.target.value;
    });
    submitInput.addEventListener("click", () => {
      // should be sent to the DB?
      postRepo.create(new Post(title, "author", text, keywords, "URL"));
    });
  }

  // rendering the posts
  if (postSection.className === "main_posts") {
    for (const post of POSTS) {
      // creating the div
      const postContainer = document.createElement("div");
      // giving it a class
      postContainer.className = "main_posts-post";
      // dinamically setting the content
      postContainer.innerHTML += `
      <img class="main_posts-post--image" src="./assets/no-image.png" />
      <h3 class="main_posts-post--title">${post.title}</h3>
      <p class="main_posts-post--text">
      ${post.text}
      </p>
      `;
      // appending it to our post's section
      postSection.appendChild(postContainer);
    }
  } else {
    for (const post of POSTS.slice(0, 2)) {
      // creating the divdereintritt1 der
      const postContainer = document.createElement("div");
      // giving it a class
      postContainer.className = "main_posts-post";
      // dinamically setting the content
      postContainer.innerHTML += `
      <i class="fa fa-pencil"></i>
      <img class="main_posts-post--image" src="./assets/no-image.png" />
      <h3 class="main_posts-post--title">${post.title}</h3>
      <p class="main_posts-post--text">
      ${post.text}
      </p>
      `;
      // appending it to our post's section
      postSection.appendChild(postContainer);
    }
  }
});
