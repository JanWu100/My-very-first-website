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
