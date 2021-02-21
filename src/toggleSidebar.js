const cartBtn = document.querySelector('.toggle-cart');
const cartCloseBtn = document.querySelector('.close-icon-cart');
const cartOverlay = document.querySelector('.cart-overlay');
const cartWrapper = document.querySelector('.cart');

cartBtn.addEventListener('click', () => {
  openCart();
});
cartCloseBtn.addEventListener('click', () => {
  closeCart();
});
const openCart = () => {
  cartOverlay.classList.add('show');
  cartWrapper.classList.add('show-cart');
};

const closeCart = () => {
  cartOverlay.classList.remove('show');
  cartWrapper.classList.remove('show-cart');
};

export { openCart, closeCart };
