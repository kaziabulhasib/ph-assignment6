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
      <img src="images/Rectangle 4.png" alt="" />
    </div>
    <!-- rest div  -->
    <div>
      <!-- author & category div  -->
      <div class="post-container-top-part">
        <h6>#Music</h6>
        <h6>Author : Awlad Hossain</h6>
      </div>
      <h2>10 Kids Unaware of Their Halloween Costume</h2>
      <p>
        It’s one thing to subject yourself to ha Halloween costume
        mishap because, hey that’s your prerogative
      </p>
      <hr />
      <div class="post-stat-container">
        <div class="post-stat">
          <i class="fa-regular fa-message"></i>
          <p>560</p>
        </div>
        <div class="post-stat">
          <i class="fa-regular fa-eye"></i>
          <p>1560</p>
        </div>
        <div class="post-stat">
          <i class="fa-regular fa-clock"></i>
          <p>560</p>
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
