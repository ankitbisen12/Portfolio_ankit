"use strict";

// Selecting elements
const menuToggle = document.querySelector(".menu__toggle");
const nav = document.querySelector(".nav");
const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
const dotContainer = document.querySelector(".dots");
const home = document.querySelector(".home");
const about = document.querySelector(".about");
const aboutMe = document.querySelector(".about__me");
const team = document.querySelector(".team");
const teamSection = document.querySelector(".team__section");
const skills = document.querySelector(".skills");
const skillSection = document.querySelector(".skill__section");
const education = document.querySelector(".education");
const course = document.querySelector(".course");

about.addEventListener("click", function (e) {
  e.preventDefault();
  // Scrolling
  aboutMe.scrollIntoView({ behavior: "smooth" });
  nav.classList.toggle("active");
});

team.addEventListener("click", function (e) {
  e.preventDefault();
  // Scrolling
  teamSection.scrollIntoView({ behavior: "smooth" });
  nav.classList.toggle("active");
});

skills.addEventListener("click", function (e) {
  e.preventDefault();
  // Scrolling
  skillSection.scrollIntoView({ behavior: "smooth" });
  nav.classList.toggle("active");
});

education.addEventListener("click", function (e) {
  e.preventDefault();
  // Scrolling
  course.scrollIntoView({ behavior: "smooth" });
  nav.classList.toggle("active");
});

// Menu toggle functionality
menuToggle.addEventListener("click", function () {
  nav.classList.toggle("active");
});

let curSlide = 0;
const maxSlide = slides.length;

// -------Functions---------\\
const createDots = function () {
  slides.forEach(function (_, i) {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slide="${i}"></button>`
    );
  });
};

const activateDot = function (slide) {
  document
    .querySelectorAll(".dots__dot")
    .forEach((dot) => dot.classList.remove("dots__dot--active"));
  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add("dots__dot--active");
};

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translate(${100 * (i - slide)}%)`)
  );
};

const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
  activateDot(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
  activateDot(curSlide);
};

const init = function () {
  createDots();
  activateDot(0);
  // For displaying first slide after refreshing.
  goToSlide(0);
};

init();

// Next Slide event listener
btnRight.addEventListener("click", nextSlide);

// Previous Slide event listener
btnLeft.addEventListener("click", prevSlide);

document.addEventListener("keydown", function (e) {
  // console.log(e);
  e.key === "ArrowLeft" && prevSlide();
  e.key === "ArrowRight" && nextSlide();
});

// Dots Functionality
dotContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("dots__dot")) {
    const { slide } = e.target.dataset;
    goToSlide(slide);
    activateDot(curSlide);
  }
});
