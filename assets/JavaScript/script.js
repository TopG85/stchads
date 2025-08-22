// Slideshow logic
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    if (dots[i]) dots[i].classList.toggle('active', i === index);
  });
  currentSlide = index;
}

window.changeSlide = function(n) {
  let newIndex = currentSlide + n;
  if (newIndex < 0) newIndex = slides.length - 1;
  if (newIndex >= slides.length) newIndex = 0;
  showSlide(newIndex);
};

window.currentSlideSet = function(n) {
  showSlide(n - 1);
};

// Initialize
showSlide(0);

// Automatic slideshow with delay (7 seconds = 7000 milliseconds)
const SLIDE_DELAY = 7000; // milliseconds
if (slides.length > 1) {
  setInterval(() => {
    let nextIndex = (currentSlide + 1) % slides.length;
    showSlide(nextIndex);
  }, SLIDE_DELAY);
}