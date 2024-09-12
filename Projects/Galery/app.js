const miniatures = document.querySelectorAll('#miniatures img');
const img = document.querySelector('#image img');
const clearBtn = document.getElementById('clear-btn');

miniatures.forEach(image => {
  image.addEventListener('click', (event) => {
    const src = event.target.getAttribute('src');
    img.setAttribute('src', src);
  });
});

clearBtn.addEventListener('click', () => {
  img.setAttribute('src', '');
});
