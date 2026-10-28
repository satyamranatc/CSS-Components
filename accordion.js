// DOM Elements
const accordion = document.getElementById('accordion');
const accordionItems = document.querySelectorAll('.accordion-item');
const singleModeCheckbox = document.getElementById('singleModeCheckbox');

// Function to open an accordion item
function openItem(item) {
  item.classList.add('active');
  const header = item.querySelector('.accordion-header');
  const content = item.querySelector('.accordion-content');
  header.setAttribute('aria-expanded', 'true');
  content.style.maxHeight = content.scrollHeight + 'px';
}

// Function to close an accordion item
function closeItem(item) {
  item.classList.remove('active');
  const header = item.querySelector('.accordion-header');
  const content = item.querySelector('.accordion-content');
  header.setAttribute('aria-expanded', 'false');
  content.style.maxHeight = null;
}

// Attach click listeners to accordion headers
accordionItems.forEach((item) => {
  const header = item.querySelector('.accordion-header');

  header.addEventListener('click', () => {
    const isActive = item.classList.contains('active');
    const isSingleMode = singleModeCheckbox.checked;

    // If single mode is on, close all other open items first
    if (isSingleMode) {
      accordionItems.forEach((otherItem) => {
        if (otherItem !== item) {
          closeItem(otherItem);
        }
      });
    }

    // Toggle current item
    if (isActive) {
      closeItem(item);
    } else {
      openItem(item);
    }
  });
});

// Initialize currently active items on page load
window.addEventListener('DOMContentLoaded', () => {
  accordionItems.forEach((item) => {
    if (item.classList.contains('active')) {
      openItem(item);
    }
  });
});
