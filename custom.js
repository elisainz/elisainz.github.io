const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelectorAll('.carousel-item');
const circleContainer = document.querySelector('.carousel-circle');
const circles = document.querySelectorAll('.carousel-circle div');

let currentSlide = 1;

function moveToSlide(slide) {
  carousel.style.transform = `translateX(-${slide - 1}00%)`;
  currentSlide = slide;
  updateCircles();
}

function updateCircles() {
  circles.forEach((circle, index) => {
    if (index + 1 === currentSlide) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });
}

circles.forEach((circle, index) => {
  circle.addEventListener('click', () => {
    moveToSlide(index + 1);
  });
});

moveToSlide(currentSlide);

document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    moveToSlide(currentSlide - 1);
  } else if (event.key === 'ArrowRight') {
    moveToSlide(currentSlide + 1);
  }
});
