// Select DOM Elements
const sidebar = document.getElementById('sidebar');
const openSidebarBtn = document.getElementById('openSidebarBtn');
const closeSidebarBtn = document.getElementById('closeSidebarBtn');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const projectsTrigger = document.getElementById('projectsTrigger');
const projectsMenu = document.getElementById('projectsMenu');

// Function to Toggle Sidebar
function toggleSidebar() {
  const isMobile = window.innerWidth <= 900;

  if (isMobile) {
    sidebar.classList.toggle('open');
    sidebarOverlay.classList.toggle('active');
  } else {
    sidebar.classList.toggle('collapsed');
  }
}

// Function to Close Sidebar
function closeSidebar() {
  sidebar.classList.remove('open');
  sidebar.classList.add('collapsed');
  sidebarOverlay.classList.remove('active');
}

// Event Listeners for Open / Close
openSidebarBtn.addEventListener('click', toggleSidebar);
closeSidebarBtn.addEventListener('click', closeSidebar);
sidebarOverlay.addEventListener('click', closeSidebar);

// Close sidebar on ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && sidebar.classList.contains('open')) {
    closeSidebar();
  }
});

// Collapsible Submenu (Projects accordion)
projectsTrigger.addEventListener('click', (e) => {
  e.preventDefault();
  projectsMenu.classList.toggle('open');
});
