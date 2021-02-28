import './src/toggleSidebar.js';
import displayCart from './src/displayCart.js';
import addToCart from './src/addToCart.js';
import { openCart } from './src/toggleSidebar.js';
import { closeIcon, toggleNav, sidebarWrapper } from './src/sidebar.js';
import getData from './src/getData.js';

window.addEventListener('load', (event) => {
  console.log('page is fully loaded');
  localStorage.setItem('product_id', 0);

  const buttonsInfo = [...document.querySelectorAll('.info')];
  buttonsInfo.map((item) => {
    item.addEventListener('click', () => {
      localStorage.setItem('product_id', item.getAttribute('data-id'));
    });
  });

  const buttonsBasket = [...document.querySelectorAll('.basket')];
  buttonsBasket.map((item) => {
    item.addEventListener('click', () => {
      const id = parseInt(item.getAttribute('data-id'));
      addToCart(id);
    });
  });

  displayCart();
});
