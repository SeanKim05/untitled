// function getUsers() {
//   return fetch("https://jsonplaceholder.typicode.com/users", {
//     method: "GET",
//     headers: { "Content-Type": "application/json" },
//   }).then((res) => res.json());
// }

// function getUserPosts(userId) {
//   return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, {
//     method: "GET",
//     headers: { "Content-Type": "application/json" },
//   }).then((res) => res.json());
// }

function getUsers() {
  return getFetch("https://jsonplaceholder.typicode.com/users");
}

function getUserPosts(userId) {
  return getFetch(`https://jsonplaceholder.typicode.com/posts`, {
    userId: userId,
  });
}

function getFetch(url, params) {
  let queryString = "";

  if (typeof params === "object") {
    queryString = Object.entries(params)
      .map((param) => {
        return `${param[0]}=${param[1]}`;
      })
      .join("&");
  }

  return fetch(`${url}?${queryString}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
}

getUsers().then((users) => {
  users.forEach((user) => {
    getUserPosts(user.id).then((posts) => {
      console.log(`유저이름: ${user.name}, 게시글 수: ${posts.length}`);
    });
  });
});
