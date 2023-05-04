const carousel = document.querySelectorAll(".carousel");

carousel.forEach((carousel) => {
  const figure = carousel.querySelector("figure");
  const navPrev = carousel.querySelector(".nav.prev");
  const navNext = carousel.querySelector(".nav.next");

  let currentIndex = 0;
  let targetIndex = 0;

  const slideTo = (index) => {
    figure.style.transform = `translateX(-${index * 100}%)`;
    currentIndex = index;
  };

  const nextSlide = () => {
    targetIndex = currentIndex + 1;

    if (targetIndex > figure.children.length - 1) {
      targetIndex = 0;
    }

    slideTo(targetIndex);
  };

  const prevSlide = () => {
    targetIndex = currentIndex - 1;

    if (targetIndex < 0) {
      targetIndex = figure.children.length - 1;
    }

    slideTo(targetIndex);
  };

  navPrev.addEventListener("click", prevSlide);
  navNext.addEventListener("click", nextSlide);
});
