const carousel = document.querySelector(".carousel");
const carouselItems = document.querySelector(".carousel-items");
const carouselItem = document.querySelectorAll(".carousel-item");
const caseStudyInfo = document.querySelectorAll(".case-study-info");
let currentIndex = 1;

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

// Add event listeners to the navigation buttons
document.querySelector(".next-btn").addEventListener("click", nextSlide);
document.querySelector(".prev-btn").addEventListener("click", prevSlide);
