const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('.case-study');
const sliderNav = document.querySelector('.slider-nav');
const sliderNavItems = sliderNav.querySelectorAll('.slider-nav-item');
const sliderWidth = slider.offsetWidth;

let currentIndex = 1;
let prevIndex = 1;

function moveToSlide(index) {
  if (index === currentIndex) {
    return;
  }
  
  const direction = index > currentIndex ? 'right' : 'left';
  const offset = sliderWidth * (index - 1);

  slides[prevIndex - 1].classList.remove('active');
  slides[index - 1].classList.add('active');
  
  slider.style.transform = `translateX(-${offset}px)`;
  
  sliderNavItems[prevIndex - 1].classList.remove('active');
  sliderNavItems[index - 1].classList.add('active');
  
  prevIndex = currentIndex;
  currentIndex = index;
}

function handleNavItemClick(e) {
  const targetIndex = Number(e.target.dataset.index);
  moveToSlide(targetIndex);
}

sliderNavItems.forEach(item => {
  item.addEventListener('click', handleNavItemClick);
});
