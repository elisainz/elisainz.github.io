const carousel = document.querySelector(".carousel");
const carouselItems = document.querySelector(".carousel-items");
const carouselItem = document.querySelectorAll(".carousel-item");
const caseStudyInfo = document.querySelectorAll(".case-study-info");
let currentIndex = 1;

// Set the second item as the default active item
carouselItems.style.transform = "translateX(-33.33%)";
carouselItem[currentIndex].classList.add("active");
caseStudyInfo[currentIndex].style.display = "block";

let isDragging = false;
let startPosition = 0;
let currentTranslate = 0;
let prevTranslate = 0;

const dragStart = (event) => {
  isDragging = true;
  startPosition = event.clientX;
  prevTranslate = currentTranslate;
};

const dragEnd = () => {
  isDragging = false;
  const dragDistance = currentTranslate - prevTranslate;
  if (dragDistance < -50 && currentIndex < carouselItem.length - 1) {
    currentIndex++;
  } else if (dragDistance > 50 && currentIndex > 0) {
    currentIndex--;
  }
  setTranslate();
};

const drag = (event) => {
  if (isDragging) {
    const currentPosition = event.clientX;
    currentTranslate = prevTranslate + currentPosition - startPosition;
    setTranslate();
  }
};

const setTranslate = () => {
  carouselItems.style.transform = `translateX(${currentTranslate}px)`;
  carouselItem[currentIndex].classList.add("active");
  caseStudyInfo[currentIndex].style.display = "block";
  carouselItem.forEach((item, index) => {
    if (index !== currentIndex) {
      item.classList.remove("active");
      caseStudyInfo[index].style.display = "none";
    }
  });
};

carouselItems.addEventListener("mousedown", dragStart);
carouselItems.addEventListener("mouseup", dragEnd);
carouselItems.addEventListener("mousemove", drag);
