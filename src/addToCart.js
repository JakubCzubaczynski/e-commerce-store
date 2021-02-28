import getData from './getData.js';
import cartSetup from './cartSetup.js';
import { openCart } from './toggleSidebar.js';
import displayCart from './displayCart.js';
const addToCart = async (id) => {
  cartSetup();
  const cart = localStorage.getItem('cart');
  let cartJs = JSON.parse(cart);

  let update = cartJs.map((item) => {
    if (item.id == id) item.amount++;
    return item;
  });

  localStorage.setItem('cart', JSON.stringify(update));
  displayCart();
  openCart();
};

export default addToCart;
