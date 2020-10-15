console.log('index.js');

const hamburger = document.querySelector('.header-button');

hamburger.addEventListener('click', ({ target }) => {
  target.classList.toggle('open');
});

const scroll = document.querySelector('.intro-trigger--link');

scroll.addEventListener('click', smoothScroll);

function smoothScroll(e) {
  e.preventDefault();

  const href = this.getAttribute('href');
  const heading = document.querySelector('.work-heading').offsetHeight;
  const offset = document.querySelector(href).offsetTop - heading;

  window.scroll({
    top: offset,
    behavior: 'smooth',
  });
}
