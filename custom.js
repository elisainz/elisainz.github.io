const carousel = document.querySelector(".carousel");
const carouselItems = document.querySelector(".carousel-items");
const carouselItem = document.querySelectorAll(".carousel-item");
const caseStudyInfo = document.querySelectorAll(".case-study-info");
let currentIndex = 1;
let startX = null;
let endX = null;

// Set the second item as the default active item
carouselItems.style.transform = "translateX(-33.33%)";
carouselItem[currentIndex].classList.add("active");
caseStudyInfo[currentIndex].style.display = "block";

// Move to the next slide
const nextSlide = () => {
  if (currentIndex >= carouselItem.length - 1) return;
  carouselItems.style.transform = `translateX(-${(currentIndex + 1) * 33.33}%)`;
  carouselItem[currentIndex].classList.remove("active");
  caseStudyInfo[currentIndex].style.display = "none";
  currentIndex++;
  carouselItem[currentIndex].classList.add("active");
  caseStudyInfo[currentIndex].style.display = "block";
};

// Move to the previous slide
const prevSlide = () => {
  if (currentIndex <= 0) return;
  carouselItems.style.transform = `translateX(-${(currentIndex - 1) * 33.33}%)`;
  carouselItem[currentIndex].classList.remove("active");
  caseStudyInfo[currentIndex].style.display = "none";
  currentIndex--;
  carouselItem[currentIndex].classList.add("active");
  caseStudyInfo[currentIndex].style.display = "block";
};

// Add event listener for touch start event
carouselItems.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

// Add event listener for touch end event
carouselItems.addEventListener("touchend", e => {
  endX = e.changedTouches[0].clientX;
  const diffX = startX - endX;
  if (diffX > 0) {
    nextSlide();
  } else if (diffX < 0) {
    prevSlide();
  }
});

// Add event listener for mouse down event
carouselItems.addEventListener("mousedown", e => {
  startX = e.clientX;
});

// Add event listener for mouse up event
carouselItems.addEventListener("mouseup", e => {
  endX = e.clientX;
  const diffX = startX - endX;
  if (diffX > 0) {
    nextSlide();
  } else if (diffX < 0) {
    prevSlide();
  }
});

// Remove the navigation buttons
document.querySelector(".carousel-nav").remove();
