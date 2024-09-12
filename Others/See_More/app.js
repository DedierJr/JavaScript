const posts = [
    { title: 'Post 1', content: 'Content of Post 1' },
    { title: 'Post 2', content: 'Content of Post 2' },
    { title: 'Post 3', content: 'Content of Post 3' }
];

const container = document.getElementById('posts-container');

function renderPosts() {
    container.innerHTML = '';
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        const content = document.createElement('p');
        content.textContent = post.content;
        postElement.appendChild(content);
        const btn = document.createElement('button');
        btn.textContent = 'Ver Mais';
        btn.addEventListener('click', () => {
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                btn.textContent = 'Ver Mais';
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
                btn.textContent = 'Ver Menos';
            }
        });
        postElement.appendChild(btn);
        container.appendChild(postElement);
    });
}

renderPosts();
