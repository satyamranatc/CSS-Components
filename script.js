// Search / Filter Functionality for UI Components
const searchInput = document.getElementById('searchInput');
const cards = document.querySelectorAll('.component-card');
const noResults = document.getElementById('noResults');

searchInput.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase().trim();
  let visibleCount = 0;

  cards.forEach((card) => {
    const title = card.querySelector('.card-title').textContent.toLowerCase();
    const desc = card.querySelector('.card-desc').textContent.toLowerCase();
    const tags = card.getAttribute('data-tags') || '';

    // Match if title, description, or tags contain search query
    const isMatch = title.includes(query) || desc.includes(query) || tags.includes(query);

    if (isMatch) {
      card.style.display = 'flex';
      visibleCount++;
    } else {
      card.style.display = 'none';
    }
  });

  // Display or hide empty state message
  if (visibleCount === 0) {
    noResults.style.display = 'block';
  } else {
    noResults.style.display = 'none';
  }
});
