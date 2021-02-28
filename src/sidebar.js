const closeIcon = document.querySelector('.close-icon');
const toggleNav = document.querySelector('.toggle-nav');
const sidebarWrapper = document.querySelector('.sidebar-wrapper');
const sidebar = document.querySelector('.sidebar');

toggleNav.addEventListener('click', () => {
  sidebarWrapper.classList.add('show');
  sidebar.classList.add('show');
});
closeIcon.addEventListener('click', () => {
  sidebarWrapper.classList.remove('show');
  sidebar.classList.remove('show');
});
export { closeIcon, toggleNav, sidebarWrapper };
