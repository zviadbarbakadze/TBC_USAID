//create hamburger menu logic
const navMenu = document.querySelector(".nav-menu");
const hamburger = document.querySelector(".hamburger-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  hamburger.classList.toggle("openmenu");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("openmenu");
    navMenu.classList.remove("active");
  })
);
