// Write your code
async function displayPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    const ul = document.getElementById("post-list");

    for (const post of posts) {
      const li = document.createElement("li");
      const h1 = document.createElement("h1");
      const p = document.createElement("p");

      h1.textContent = post.title;
      p.textContent = post.body;

      li.append(h1, p);
      ul.append(li);
    }
  } catch (error) {
    console.error(error);
  }
}
setTimeout(displayPosts, 0);
