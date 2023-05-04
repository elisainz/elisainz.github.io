const sliderFrame = document.querySelector(".slider__frame");
const sliderControls = document.querySelectorAll(".slider__control");
const caseStudies = document.querySelectorAll(".case-study");

let currentSlide = 1;

// Helper function to update the slider position based on the current slide
function updateSliderPosition() {
  sliderFrame.style.transform = `translateX(-${(currentSlide - 1) * 100}%)`;
}

// Helper function to update the active case study
function updateActiveCaseStudy() {
  caseStudies.forEach((study, index) => {
    if (index === currentSlide - 1) {
      study.classList.add("active");
    } else {
      study.classList.remove("active");
    }
  });
}

// Add event listeners to slider controls
sliderControls.forEach((control) => {
  control.addEventListener("click", () => {
    if (control.classList.contains("slider__control--left")) {
      // Move to the previous slide
      currentSlide = Math.max(currentSlide - 1, 1);
    } else {
      // Move to the next slide
      currentSlide = Math.min(currentSlide + 1, 3);
    }
    updateSliderPosition();
    updateActiveCaseStudy();
  });
});

// Initialize the slider
updateSliderPosition();
updateActiveCaseStudy();
