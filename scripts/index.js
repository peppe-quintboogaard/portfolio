console.log("index.js");

const hamburger = document.querySelector(".header-button");
const navigation = document.querySelector(".navigation");

hamburger.addEventListener("click", ({ target }) => {
  target.classList.toggle("open");
  navigation.classList.toggle("navigation--open");
});

const scroll = document.querySelector(".intro-trigger--link");

scroll.addEventListener("click", smoothScroll);

function smoothScroll(e) {
  e.preventDefault();

  const href = this.getAttribute("href");
  const heading = document.querySelector(".work-heading").offsetHeight;
  const offset = document.querySelector(href).offsetTop - heading;

  window.scroll({
    top: offset,
    behavior: "smooth",
  });
}
