const latestPost = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/posts"
  );
  const data = await response.json();
  const posts = data.posts;
  const postContainer = document.getElementById("post-container");
  posts.forEach((post) => {
    const div = document.createElement("div");
    console.log(post);
    // div.innerHTML = `

    // <div class="post-container-top-part">
    //   <!-- img div  -->
    //   <div>
    //     <img src="${post.image}" alt="" />
    //   </div>
    //   <!-- category , author , title ----  -->
    //   <div>
    //     <!-- category & author  -->
    //     <div class="category-author-cont">
    //       <h6>#${post.category}</h6>
    //       <h6>Author : Awlad Hossain</h6>
    //     </div>
    //     <h1 class="post-title">
    //       ${post.title}
    //     </h1>
    //   </div>
    // </div>
    // <p>
    //   It’s one thing to subject yourself to ha Halloween costume
    //   mishap because, hey that’s your prerogative
    // </p>

    // `;
    // postContainer.appendChild(div);
  });
};

latestPost();
