let posts = [];
let index = 0;
const batch = 10;

async function loadPosts() {
  if (posts.length === 0) {
    const res = await fetch('/posts.json');
    posts = await res.json();
  }

  const slice = posts.slice(index, index + batch);
  index += batch;

  const container = document.getElementById('posts');

  slice.forEach(p => {
    container.innerHTML += `
      <article>
        <h2><a href="${p.url}">${p.title}</a></h2>
        <p>${p.excerpt}</p>
      </article>
    `;
  });

  if (index >= posts.length) {
    document.getElementById('loadMore').style.display = 'none';
  }
}

document.getElementById('loadMore').onclick = loadPosts;
