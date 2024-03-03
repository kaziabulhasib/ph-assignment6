const latestPost = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/posts"
  );
  const data = await response.json();
  const posts = data.posts;
  const postContainer = document.getElementById("parent-container-post");
  posts.forEach((post) => {
    const div = document.createElement("div");
    console.log(post);
    div.innerHTML = `
    <div class="post-container">
    <!-- img div  -->
    <div>
      <img src="${post.image}" />
    </div>
    <!-- rest div  -->
    <div>
      <!-- author & category div  -->
      <div class="post-container-top-part">
        <h6>#${post.category}</h6>
        <h6>Author: ${post.author.name}</h6>
      </div>
      <h2>${post.title}</h2>
      <p>
      ${post.description}
      </p>
      <hr />
      <div class="post-stat-container">
        <div class="post-stat">
          <i class="fa-regular fa-message"></i>
          <p>${post.comment_count}</p>
        </div>
        <div class="post-stat">
          <i class="fa-regular fa-eye"></i>
          <p>${post.view_count}</p>
        </div>
        <div class="post-stat">
          <i class="fa-regular fa-clock"></i>
          <p>${post.posted_time} min</p>
        </div>

        <!-- <div class="post-stat">
          b
        </div> -->
        <button class="click-post-btn" onclick="clickPost()">
          <i class="fa-solid fa-envelope-open"></i>
        </button>
      </div>
    </div>
    `;
    postContainer.appendChild(div);
  });
};

latestPost();
