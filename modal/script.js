// Elements for Demo Modal
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const cancelModalBtn = document.getElementById('cancelModalBtn');
const acceptModalBtn = document.getElementById('acceptModalBtn');
const demoModalOverlay = document.getElementById('demoModalOverlay');

// Elements for Confirm Modal
const openConfirmBtn = document.getElementById('openConfirmBtn');
const closeConfirmBtn = document.getElementById('closeConfirmBtn');
const cancelConfirmBtn = document.getElementById('cancelConfirmBtn');
const actionConfirmBtn = document.getElementById('actionConfirmBtn');
const confirmModalOverlay = document.getElementById('confirmModalOverlay');

// Status Box
const statusBox = document.getElementById('statusBox');

// Helper to Open a Modal
function openModal(modalElement) {
  modalElement.classList.add('active');
  document.body.style.overflow = 'hidden'; // Prevent background page scroll
}

// Helper to Close a Modal
function closeModal(modalElement) {
  modalElement.classList.remove('active');
  document.body.style.overflow = ''; // Restore background scroll
}

// Set Status Message Helper
function setStatus(message, color = '#2563eb') {
  statusBox.textContent = message;
  statusBox.style.color = color;
  statusBox.style.backgroundColor = '#e0f2fe';
}

// 1. Demo Modal Listeners
openModalBtn.addEventListener('click', () => {
  openModal(demoModalOverlay);
  setStatus('Demo modal opened');
});

closeModalBtn.addEventListener('click', () => {
  closeModal(demoModalOverlay);
  setStatus('Demo modal closed via (X)');
});

cancelModalBtn.addEventListener('click', () => {
  closeModal(demoModalOverlay);
  setStatus('Demo modal cancelled');
});

acceptModalBtn.addEventListener('click', () => {
  closeModal(demoModalOverlay);
  setStatus('Demo modal confirmed! Action completed successfully.', '#16a34a');
});

// 2. Confirm Modal Listeners
openConfirmBtn.addEventListener('click', () => {
  openModal(confirmModalOverlay);
  setStatus('Confirmation modal opened');
});

closeConfirmBtn.addEventListener('click', () => {
  closeModal(confirmModalOverlay);
  setStatus('Confirmation modal closed');
});

cancelConfirmBtn.addEventListener('click', () => {
  closeModal(confirmModalOverlay);
  setStatus('Confirmation cancelled');
});

actionConfirmBtn.addEventListener('click', () => {
  closeModal(confirmModalOverlay);
  setStatus('Confirmed! Item was deleted.', '#dc2626');
});

// 3. Close when clicking on the dark backdrop outside the modal
[demoModalOverlay, confirmModalOverlay].forEach((overlay) => {
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      closeModal(overlay);
      setStatus('Modal closed by clicking outside backdrop');
    }
  });
});

// 4. Close active modal with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (demoModalOverlay.classList.contains('active')) {
      closeModal(demoModalOverlay);
      setStatus('Modal closed with Escape key');
    }
    if (confirmModalOverlay.classList.contains('active')) {
      closeModal(confirmModalOverlay);
      setStatus('Modal closed with Escape key');
    }
  }
});
