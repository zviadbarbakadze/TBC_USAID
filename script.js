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
let slideIndex = 1;
let automaticSlideInterval;

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

function plusSlides(n) {
  clearInterval(automaticSlideInterval); // Stop automatic slideshow
  showSlides((slideIndex += n));
}

// Automatic slideshow
function startAutomaticSlide() {
  automaticSlideInterval = setInterval(function () {
    plusSlides(1);
  }, 2000); // Change slide every 2 seconds
}

// Initial display
showSlides(slideIndex);
startAutomaticSlide();
