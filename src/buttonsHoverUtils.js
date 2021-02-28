import addToCart from './addToCart.js';
const buttonsHoverUtils = () => {
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
};
export default buttonsHoverUtils;
