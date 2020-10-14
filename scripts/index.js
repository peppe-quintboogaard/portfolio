console.log('index.js');

const hamburger = document.querySelector('.header-button');

hamburger.addEventListener('click', ({ target }) => {
  target.classList.toggle('open');
});
