import { closeIcon, toggleNav, sidebarWrapper } from './sidebar.js';
import './toggleSidebar.js';
import getData from './getData.js';
import displayCart from './displayCart.js';
import displayMenu from './displayMenu.js';
import displayByCategory from './displayByCategory.js';

const minWrapperHeight = () => {
  const windowHeight = window.innerHeight;
  const products = document.querySelector('.products').offsetHeight;
  const minHeight = windowHeight - 100 - 137 - 55;
  if (100 + 137 + 55 + products < windowHeight) {
    document.querySelector('.products').style.minHeight = minHeight + 'px';
  }
};

window.addEventListener('load', (event) => {
  console.log('page is fully loaded');
  localStorage.setItem('product_id', 0);

  getData();
  displayMenu();

  displayByCategory('all');
  minWrapperHeight();
  displayCart();
});

export { minWrapperHeight };
