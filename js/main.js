//// PARALLAX //////

window.addEventListener("scroll", function (e) {
  const heroBottomLayer = document.querySelector("#dots");
  const heroBottomElipse = document.querySelector("#elipse");

  const heroTopLayer = document.querySelector("#top");
  const heroCross = document.querySelector("#cross");
  const scrollIcon = this.document.querySelector(".scroll");
  let scrolled = window.pageYOffset;
  let rateOne = scrolled * 0.15;
  
  let rateThree = scrolled * -0.15;
  let rotationRate = scrolled * 0.2;
  let opacityRate = scrolled * 0.0015;
 
  scrollIcon.style.opacity = `${1 - opacityRate}`;

  heroBottomLayer.style.transform = `translate3d(0px, ${rateOne}px ,0px)`;
  heroBottomLayer.style.opacity = `${1 - opacityRate}`;
  heroBottomElipse.style.transform = `translate3d(0px, ${rateOne}px ,0px)`;


  heroCross.style.transform = `rotate(${rotationRate}deg)`;
  heroTopLayer.style.transform = `translate3d(0px, ${rateThree}px ,0px)`;
});

///////////////////////

//////////////////////

///////////////counter on viewport//////////////////////

// const isInViewport = function (e) {
//   const bounding = e.getBoundingClientRect();
//   return (
//     bounding.top >= 0 &&
//     bounding.left >= 0 &&
//     bounding.bottom <=
//       (window.innerHeight || document.documentElement.clientHeight) &&
//     bounding.right <=
//       (window.innerWidth || document.documentElement.clientWidth)
//   );
// };
// const counterLoader = document.querySelector(".counter__loader");
// const counter = document.querySelector(".counter");
// const counterPlaceholder = document.querySelector(".counter__placeholder");
// window.addEventListener(
//   "scroll",
//   function (event) {
//     if (isInViewport(counterLoader)) {
//       counter.classList.remove("invisible");
//       counterPlaceholder.classList.add("invisible");
//     }
//   },
//   false
// );

///////// Navigation ////////

const burger = document.querySelector(".nav__burger-menu");

burger.addEventListener("click", function (event) {
  document.querySelector(".nav__list").classList.toggle("collapsed");
  burger.classList.toggle("burger-active");
  document.querySelector(".range-tool__wrapper").classList.remove("range-visible")
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

let startInput = [
  {
    image: "/images/man_in_glasses.jpg",
    title: "the man",
    bodyText: `Photo by
      <a
        target="blank"
        href="https://www.pexels.com/@ashish-sharma-266379?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels"
        >ASHISH SHARMA</a
      >
      from
      <a
        target="blank"
        href="https://www.pexels.com/photo/ma-in-black-aviator-sunglasses-with-purple-smoke-917594/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels"
        >Pexels</a
      >`,
  },
  {
    image: "/images/balcony.png",
    title: "the second",
    bodyText: `Photo by
      <a
        target="blank"
        href="https://unsplash.com/@annaskrzynska?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        >Anna Skrzyńska</a
      >
      on
      <a
        target="blank"
        href="https://unsplash.com/t/wallpapers?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        >Unsplash</a
      >`,
  },
  {
    image: "/images/texture.jpg",
    title: "the third",
    bodyText: `Photo by
    <a
      target="blank"
      href="https://www.pexels.com/@anniroenkae?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels"
      >Anni Roenkae</a
    >
    from
    <a
      target="blank"
      href="https://www.pexels.com/photo/photo-of-acrylic-paint-2832432/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels"
      >Pexels</a
    >`,
  },
];

const buttons = document.querySelectorAll("[data-carousel-button");
const addSlide = document.querySelector(".btn-add");
const removeSlide = document.querySelector(".btn-remove");

let timeout;
let dots = [];
let slides = [];
let allDots;
let allSlides;
let currentSlide = 0;
let addedSlideCount = 0;

createCarousel();
startTimer();

function createCarousel() {
  for (let i = 0; i < startInput.length; i++) {
    if (i === currentSlide) {
      dots.push('<div class="carousel__dot" data-active></div>');
    } else {
      dots.push('<div class="carousel__dot"></div>');
    }
  }
  document.querySelector(".dot__wrapper").innerHTML = dots.join("");
  for (let i = 0; i < startInput.length; i++) {
    if (i === currentSlide) {
      slides.push(` <div class="slide" data-active>
                      <div class="slide__image">
                        <img src="${startInput[i].image}" alt="" srcset="" />
                      </div>
                      <div class="slide__body">
                        <h3>${startInput[i].title}</h3>
                        <p>
                        ${startInput[i].bodyText}
                        </p>
                      </div>
                    </div>`);
    } else {
      slides.push(` <div class="slide">
                      <div class="slide__image">
                        <img src="${startInput[i].image}" alt="" srcset="" />
                      </div>
                      <div class="slide__body">
                        <h3>${startInput[i].title}</h3>
                        <p>
                        ${startInput[i].bodyText}
                        </p>
                      </div>
                    </div>`);
    }
  }
  document.querySelector("[data-slides]").innerHTML = slides.join("");
  allDots = document.querySelectorAll(".carousel__dot");
  allSlides = document.querySelectorAll(".slide");
  makeDotsInteractive();
}

function makeDotsInteractive() {
  for (let i = 0; i < allDots.length; i++) {
    allDots[i].addEventListener("click", () => {
      if (i !== currentSlide) {
                                delete allDots[currentSlide].dataset.active;
                                delete allSlides[currentSlide].dataset.active;
                                allDots[i].dataset.active = true;
                                allSlides[i].dataset.active = true;
                                currentSlide = i;
                              }
    });
  }
}

function startTimer() {
  clearTimeout(timeout);
  timeout = setInterval(function () {
    nextSlide();
  }, 3500);
}

function nextSlide() {

  let newIndex = currentSlide + 1;

  if (newIndex < 0) newIndex = allSlides.length - 1;
  if (newIndex >= allSlides.length) newIndex = 0;

  delete allDots[currentSlide].dataset.active;
  delete allSlides[currentSlide].dataset.active;

  allSlides[newIndex].dataset.active = true;
  allDots[newIndex].dataset.active = true;

  currentSlide = newIndex;
}

function inputValidation(thisInput) {
  thisInput.value = thisInput.value.split(/[^a-zA-Z0-9 .!?,]/).join('');
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    startTimer();
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    let newIndex = currentSlide + offset;

    if (newIndex < 0) newIndex = allSlides.length - 1;
    if (newIndex >= allSlides.length) newIndex = 0;

    delete allDots[currentSlide].dataset.active;
    delete allSlides[currentSlide].dataset.active;

    allSlides[newIndex].dataset.active = true;
    allDots[newIndex].dataset.active = true;

    currentSlide = newIndex;
  });
});

addSlide.addEventListener("click", () => {
  slides = [];
  dots = [];

  addedSlideCount++;
  if (startInput.length > 15) {
    alert("I think it is enough slides for one Carousel ;)");
  } else {
    currentSlide = startInput.length;
    startInput.push({
      image: `https://source.unsplash.com/random?sig=${Math.floor(
        Math.random() * 500
      )}`,
      title:
        document.querySelector(".title-input").value === ""
          ? `Generic title number ${addedSlideCount}`
          : document.querySelector(".title-input").value,
      bodyText:
        document.querySelector(".text-input").value === ""
          ? "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis unde, animi architecto repellat dolorem doloribus est fuga vero praesentium fugiat."
          : document.querySelector(".text-input").value,
    });
  }
  createCarousel();
  startTimer();
});

removeSlide.addEventListener("click", () => {
  slides = [];
  dots = [];

  if (startInput.length > 2) {
    if (currentSlide === allSlides.length-1) {currentSlide--};
    // currentSlide = 0;
    startInput.pop();
    createCarousel();
    startTimer();
  } else {
    alert("We need at least 2 slides to call it a Carousel ;)");
  }
});

//// footer //////
const footerButtons = document.querySelectorAll(".btn-collapsible");

footerButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const collapsibleContent = button
      .closest(".menu__item")
      .querySelector(".menu__item-list");
    const buttonRotator = button.closest(".menu__item-header");

    collapsibleContent.classList.toggle("collapsible-content");
    buttonRotator.classList.toggle("rotate-btn");
  });
});


////// random section /////////

function randomSection(){

  const sections = ["hero","great3-section","rwd","qualities","learning-now","products-section","cta-section"];
  let randomSection = sections[Math.floor(Math.random() * sections.length)];
  document.getElementById(randomSection).scrollIntoView({behavior: 'smooth'});
}

////////// back to top button ////////////

window.addEventListener("scroll", showBackToTopBtn);

const topButton = document.querySelector("#back-to-top");

function showBackToTopBtn() {
  if (window.scrollY >= document.body.offsetHeight*0.7 ) {
    topButton.classList.add("show");
    topButton.addEventListener("click", ()=>{
      document.getElementById("nav").scrollIntoView({behavior: 'smooth'});
    })
  } else {
    topButton.classList.remove("show");
  }
};

// range tool  // // / 

let btnRange = document.querySelector(".range-tool__wrapper-btn");
let btnRangeClose = document.querySelector("#close");

btnRangeClose.addEventListener("click", ()=>{
document.querySelector(".range-tool__wrapper").classList.remove("range-visible")
} )

btnRange.addEventListener("click", ()=>{
  document.querySelector(".range-tool__wrapper").classList.toggle("range-visible")
  } )


function changeColor(){
  let red = document.getElementById("rangeRed").value;
  let green = document.getElementById("rangeGreen").value;
  let blue = document.getElementById("rangeBlue").value;

  let color = `rgb(${red},${green},${blue})`
  document.documentElement.style.setProperty('--color-primary', color);
  document.querySelector(".valueRed").innerHTML = red;
  document.querySelector(".valueGreen").innerHTML = green;
  document.querySelector(".valueBlue").innerHTML = blue;

}

document.getElementById("rangeRed").addEventListener("input", changeColor);
document.getElementById("rangeGreen").addEventListener("input", changeColor);
document.getElementById("rangeBlue").addEventListener("input", changeColor);

document.getElementById("defaults").addEventListener("click", ()=>{

  let red = 80;
  let green = 220;
  let blue = 255;

  let color = `rgb(${red},${green},${blue})`
  document.documentElement.style.setProperty('--color-primary', color);
  document.querySelector(".valueRed").innerHTML = red;
  document.querySelector(".valueGreen").innerHTML = green;
  document.querySelector(".valueBlue").innerHTML = blue;
  document.querySelector("#rangeRed").value = 80;
  document.querySelector("#rangeGreen").value = green;
  document.querySelector("#rangeBlue").value = blue;
})
