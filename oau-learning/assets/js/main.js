const carousel = document.querySelector('.intro__carousel-container');
const slides = document.querySelectorAll('.intro__carousel');
const slidesThumbnail = document.querySelectorAll('.carousel__tumbnail');

const nextBtn = document.getElementById('carousel__next');
const prevBtn = document.getElementById('carousel__previous');

let index = 0;
let autoSlideInterval;

// Show a specific slide
function showSlide(newIndex) {
  if (typeof newIndex === 'number') {
    index = newIndex;
  } else {
    index = (index + 1) % slides.length;
  }

  // Move carousel
  carousel.style.transform = `translateX(-${index * 100}%)`;

  // Update thumbnail tooltip
  slidesThumbnail.forEach(thumb => thumb.classList.remove('dropdown__tooltip'));
  slidesThumbnail[index].classList.add('dropdown__tooltip');
}

// Go to the next slide
function nextSlide() {
  showSlide((index + 1) % slides.length);
}

// Go to the previous slide
function prevSlide() {
  showSlide((index - 1 + slides.length) % slides.length);
}

// Click on thumbnails
slidesThumbnail.forEach((thumb, i) => {
  thumb.addEventListener('click', () => {
    showSlide(i);
    resetAutoSlide();
  });
});

// Click on arrows
nextBtn.addEventListener('click', () => {
  nextSlide();
  resetAutoSlide();
});

prevBtn.addEventListener('click', () => {
  prevSlide();
  resetAutoSlide();
});

// Auto slide
function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 7000);
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  startAutoSlide();
}

// Init
showSlide(0);
startAutoSlide();
