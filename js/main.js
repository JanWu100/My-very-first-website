//// PARALLAX //////

window.addEventListener("scroll", function (e) {
  const targetOne = document.querySelector(".z0");
  const targetTwo = document.querySelector(".z1");

  const targetThree = document.querySelector(".z2");
  const targetFour = document.querySelector(".z4");
  const scrollIcon = this.document.querySelector(".scroll");
  let scrolled = window.pageYOffset;
  let rateOne = scrolled * 0.15;
  // let rateTwo = scrolled * -0.02;
  let rateThree = scrolled * -0.2;
  let rotationRate = scrolled * 0.2;
  let opacityRate = scrolled * 0.0015;
  // let scaleRate = scrolled * 0.0002;

  targetOne.style.transform = `translate3d(0px, ${rateOne}px ,0px)`;
  scrollIcon.style.opacity = `${1 - opacityRate}`;
  targetOne.style.opacity = `${1 - opacityRate}`;

  //targetOne.style.transform = `scale(${1 - scaleRate})`;
  //targetTwo.style.transform = `rotate(${rateTwo}deg)`;
  targetFour.style.transform = `rotate(${rotationRate}deg)`;
  targetThree.style.transform = `translate3d(0px, ${rateThree}px ,0px)`;
});

///////////////////////
AOS.init();
//////////////////////

///////////////counter on viewport//////////////////////

const isInViewport = function (e) {
  const bounding = e.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.left >= 0 &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    bounding.right <=
      (window.innerWidth || document.documentElement.clientWidth)
  );
};
const counterLoader = document.querySelector(".counter__loader");
const counter = document.querySelector(".counter");
const counterPlaceholder = document.querySelector(".counter__placeholder");
window.addEventListener(
  "scroll",
  function (event) {
    if (isInViewport(counterLoader)) {
      counter.classList.remove("invisible");
      counterPlaceholder.classList.add("invisible");
    }
  },
  false
);

///////// Navigation ////////

const burger = document.querySelector(".nav__burger-menu");

burger.addEventListener("click", function (event) {
  document.querySelector(".nav__list").classList.toggle("collapsed");
  burger.classList.toggle("burger-active");
});
let minWidth = window.matchMedia("(min-width: 768px)");

function myFunction(e) {
  if (e.matches) {
    document.querySelector(".nav__list").classList.add("collapsed");
    burger.classList.remove("burger-active");
  }
}

window.addEventListener("resize", function (event) {
  myFunction(minWidth);
});

///////// carousel ////////

const buttons = document.querySelectorAll("[data-carousel-button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;

    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");

    const activeSlide = slides.querySelector("[data-active]");

    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});
