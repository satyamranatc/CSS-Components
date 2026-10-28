// Select DOM Elements
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link:not(.dropdown-toggle)');
const servicesToggle = document.getElementById('servicesToggle');
const dropdownMenu = document.getElementById('dropdownMenu');

// Toggle Mobile Menu
hamburgerBtn.addEventListener('click', () => {
  hamburgerBtn.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Close Mobile Menu when clicking normal nav links
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    hamburgerBtn.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// Handle Dropdown click on Mobile
servicesToggle.addEventListener('click', (e) => {
  // Only intercept on mobile screens
  if (window.innerWidth <= 768) {
    e.preventDefault();
    dropdownMenu.classList.toggle('show');
    const arrow = servicesToggle.querySelector('.arrow');
    if (arrow) {
      arrow.style.transform = dropdownMenu.classList.contains('show')
        ? 'rotate(180deg)'
        : 'rotate(0deg)';
    }
  }
});

// Close menu when clicking outside
document.addEventListener('click', (event) => {
  const isClickInsideNav = navMenu.contains(event.target);
  const isClickOnHamburger = hamburgerBtn.contains(event.target);

  if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
    hamburgerBtn.classList.remove('active');
    navMenu.classList.remove('active');
  }
});
