import { data } from "./data.js";

const tweetsList = document.querySelector(".tweets-list");

const getPostDate = (postDate) => {
  return new Date(postDate);
};

const generateList = (data) => {
  data.forEach((item) => {
    let newElement = document.createElement("li");

    newElement.classList.add("tweets-list-item");

    newElement.innerHTML = `<button class="list-btn" data-itemid="${item.id}">${item.author}</button>`;

    tweetsList.appendChild(newElement);
  });
};

const generateTweet = (post) => {
  const postTemplate = `<div class="post-container">
  <div class="post-author">
    <div class="post-author-about">
      <img
        class="avatar"
        src="${post.authorAvatar}"
        alt="avatar"
      />
      <div class="post-author-about-initials">
        <span class="author-name hover-underline">${post.author}</span>
        <span class="author-username hover-underline"
          >@${post.username}</span
        >
      </div>
    </div>

    <span class="icon-cnt">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="icon"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
        />
      </svg>
    </span>
  </div>
  <span class="post-content"
    >${post.content}</span
  >

  <div class="post-details bottom-line">
    <span class="post-time hover-underline"
      >${getPostDate(post.date)}</span
    >
    <span>&nbsp;·&nbsp;</span>
    <span class="hover-underline">Twitter Web App</span>
  </div>

  <div class="post-reposts bottom-line">
    <span class="post-retweets hover-underline"
      ><strong>${post.comments}</strong>&nbsp;ретвіти</span
    >
    <span class="post-comments hover-underline"
      ><strong>${post.retweets}</strong>&nbsp;цитованих твітів</span
    >
    <span class="post-likes hover-underline"
      ><strong>${post.likes}</strong>&nbsp;уподобання</span
    >
  </div>
</div>`;

  const postContent = document.querySelector(".post-container");
  postContent.innerHTML = postTemplate;
};

const getPostItem = (event) => {
  if (event.target.className != "list-btn") return;

  const button = event.target;
  const tweetData = data.find(({ id }) => id === Number(button.dataset.itemid));

  generateTweet(tweetData);
};

generateList(data);

tweetsList.addEventListener("click", getPostItem);
