const allPost = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/posts"
  );
  const data = await response.json();
  const posts = data.posts;
  const postContainer = document.getElementById("parent-container-post");

  posts.forEach((post) => {
    const div = document.createElement("div");
    // console.log(post);
    div.innerHTML = `
    <div class="post-container">
    <!-- img div  -->
    <div class="all-post-profile-pic-div">
      <img src="${post.image}" />
      <div id="dot-div"> </div>
    </div>
    <!-- rest div  -->
    <div>
      <!-- author & category div  -->
      <div class="post-container-top-part">
        <h6>#${post.category}</h6>
        <h6>Author: ${post.author.name}</h6>
      </div>
      <h2 id="post-title">${post.title}</h2>
      <p>
      ${post.description}
      </p>
      <hr />
      <div class="post-stat-container">
        <div class="post-stat">
          <i class="fa-regular fa-message"></i>
          <p>${post.comment_count}</p>
        </div>
        <div class="post-stat" id="post-view">
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
        <button class="click-post-btn" onclick="clickPost(event)">
          <i class="fa-solid fa-envelope-open"></i>
        </button>
      </div>
    </div>
    `;
    postContainer.appendChild(div);
    const aSIndicator = document.getElementById("dot-div");
  });
};

allPost();

// click post functionality tough part -------------

let clickCount = 0;
const sidebarParent = document.getElementById("sidebar-parent");

function clickPost(event) {
  const postTitle = document.getElementById("post-title").innerText;
  // console.log(postTitle);
  clickCount++;
  document.getElementById("read-mark-count").innerText = clickCount;
  // cathing the title --------------

  const titleText =
    event.target.parentNode.parentNode.parentNode.querySelector("h2").innerText;
  const viewContainer =
    event.target.parentNode.querySelector("#post-view").innerHTML;

  // console.log(event.target.parentNode.parentNode.childNodes[5]);

  const div = document.createElement("div");
  const p1 = document.createElement("p");
  const div1 = document.createElement("div");
  p1.innerText = titleText;
  div1.innerHTML = viewContainer;
  div1.classList.add("post-stat");

  div.appendChild(p1);
  div.appendChild(div1);

  div.style.display = "flex";
  sidebarParent.appendChild(div);

  // tickshow

  document.getElementById("read-tick").style.display = "inline";
}

// latst post function -------------------------------------------

const latestPost = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/latest-posts"
  );

  const data = await response.json();
  // console.log(data[0].title);
  const singlePostDiv = document.getElementById("single-post-div");

  data.forEach((post) => {
    // console.log(post.title);
    const div = document.createElement("div");
    div.innerHTML = `
    <!-- single container   -->
          <div class="single-post-container">
            <div class="single-post-img-div">
              <img
                src=" ${post.cover_image} "
                alt=""
                class="latest-post-thumb" />
            </div>
            <!-- date container  -->
            <div class="date-container">
              <i class="fa-regular fa-calendar-plus"></i>
              <p>${post.author.posted_date}</p>
            </div>
            <h4>
             ${post.title}
            </h4>
            <p id="single-post-description">
            ${post.description}
            </p>
            <!-- author descriptin div  -->
            <div class="autthor-des-div">
              <img src="${post.profile_image}" alt="" />
              <div>
                <h5 class="auth-name">${post.author.name}</h5>
                <p class="auth-desig">${post.author.designation}</p>
              </div>
            </div>
          </div>
          <!-- single container  end  -->

    `;
    // console.log(data[0].title);
    singlePostDiv.appendChild(div);
  });
};

latestPost();
