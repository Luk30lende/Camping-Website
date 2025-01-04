/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav_link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu"); //remove menu when each nav link is clicked
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", bgHeader);

/*=============== GSAP ANIMATION ===============*/
gsap.from(".home_img-2", 1.2, { opacity: 0, y: 200, delay: 0.1 });
gsap.from(".home_img-3", 1.2, { opacity: 0, y: 200, delay: 0.5 });
gsap.from(".home_data", 1.2, { opacity: 0, y: -60, delay: 1 });
gsap.from(".home_bird-1", 1.2, { opacity: 0, y: -80, delay: 1.1 });
gsap.from(".home_bird-2", 1.2, { opacity: 0, y: 80, delay: 1.2 });
gsap.from(".home_img-1", 1.2, { opacity: 0, y: 200, delay: 1.2 });
gsap.from(".home_img-4", 1.2, { opacity: 0, y: 200, delay: 1.3 });
