let posts = [];
let index = 10; // начинаем с 11-го поста
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
        const html = `
        <div class="mb-5 justify-content-between main-loop-card post-fade">
            <a href="${p.url}">
                <div class="w-100 p-5 d-md-block grayscale" 
                     style="background-size:cover;background-position:0% 40%;background-image:url(${p.image});">
                </div>
            </a>

            <div class="pr-3 mt-3">
                <h2 class="mb-1">
                    <a class="text-dark" href="${p.url}">${p.title}</a>
                </h2>
                <p class="excerpt">${p.excerpt}</p>

                <small class="text-muted">
                    <time class="timeago" datetime="${p.date}">${formatDate(p.date)}</time>
                </small>
            </div>
        </div>
        `;

        const temp = document.createElement("div");
        temp.innerHTML = html;
        const element = temp.firstElementChild;

        container.appendChild(element);

        // анимация через микрозадержку
        setTimeout(() => {
            element.classList.add("show");
        }, 20);
    });

    if (index >= posts.length) {
        document.getElementById('loadMore').style.display = 'none';
    }
}

document.getElementById('loadMore').onclick = loadPosts;

// форматирование даты как у Jekyll
function formatDate(iso) {
    const d = new Date(iso);
    return d.toLocaleDateString("ru-RU", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
}
