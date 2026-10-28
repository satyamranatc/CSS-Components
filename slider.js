// DOM Elements
const slideTrack = document.getElementById('slideTrack');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const dotsContainer = document.getElementById('dotsContainer');
const slideCounter = document.getElementById('slideCounter');
const autoplayBtn = document.getElementById('autoplayBtn');
const carousel = document.getElementById('carousel');

let currentIndex = 0;
const totalSlides = slides.length;
let autoplayTimer = null;
let isAutoplayActive = true;
const AUTOPLAY_DELAY = 4000; // 4 seconds

// Generate Dot Indicators dynamically based on total slides
function createDots() {
  dotsContainer.innerHTML = '';
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('button');
    dot.classList.add('dot');
    dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
    if (i === 0) dot.classList.add('active');

    // Click dot to jump directly to slide
    dot.addEventListener('click', () => {
      goToSlide(i);
    });

    dotsContainer.appendChild(dot);
  }
}

// Update the Slider UI
function updateSlider() {
  // Move track by -currentIndex * 100%
  slideTrack.style.transform = `translateX(-${currentIndex * 100}%)`;

  // Update dots active class
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === currentIndex);
  });

  // Update slide counter text
  slideCounter.textContent = `${currentIndex + 1} / ${totalSlides}`;
}

// Go to specific slide index
function goToSlide(index) {
  currentIndex = index;
  updateSlider();
}

// Next Slide function
function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlider();
}

// Previous Slide function
function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlider();
}

// Next & Prev button clicks
nextBtn.addEventListener('click', () => {
  nextSlide();
  resetAutoplay();
});

prevBtn.addEventListener('click', () => {
  prevSlide();
  resetAutoplay();
});

// Keyboard Navigation (ArrowLeft / ArrowRight)
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') {
    nextSlide();
    resetAutoplay();
  } else if (e.key === 'ArrowLeft') {
    prevSlide();
    resetAutoplay();
  }
});

// Autoplay Functions
function startAutoplay() {
  if (!autoplayTimer) {
    autoplayTimer = setInterval(nextSlide, AUTOPLAY_DELAY);
  }
}

function stopAutoplay() {
  if (autoplayTimer) {
    clearInterval(autoplayTimer);
    autoplayTimer = null;
  }
}

function resetAutoplay() {
  if (isAutoplayActive) {
    stopAutoplay();
    startAutoplay();
  }
}

// Autoplay Toggle Button
autoplayBtn.addEventListener('click', () => {
  if (isAutoplayActive) {
    stopAutoplay();
    isAutoplayActive = false;
    autoplayBtn.innerHTML = '&#9654; Resume Autoplay';
  } else {
    isAutoplayActive = true;
    startAutoplay();
    autoplayBtn.innerHTML = '&#9646;&#9646; Pause Autoplay';
  }
});

// Pause autoplay on hover, resume on mouse leave
carousel.addEventListener('mouseenter', () => {
  if (isAutoplayActive) stopAutoplay();
});

carousel.addEventListener('mouseleave', () => {
  if (isAutoplayActive) startAutoplay();
});

// Initialize Dots & Slider on page load
createDots();
updateSlider();
startAutoplay();
