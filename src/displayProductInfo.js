import addToCart from './addToCart.js';
import getData from './getData.js';

const displayProductInfo = async () => {
  const productTitle = document.querySelector('.product-info-title');
  const productCategory = document.querySelector('.product-info-category');
  const productPrice = document.querySelector('.product-info-price');
  const productDescription = document.querySelector(
    '.product-info-description'
  );
  const productImage = document.querySelector('.product-info-image');
  const productButton = document.querySelector('.product-add');

  const id = parseInt(localStorage.getItem('product_id'));

  const data = await getData();
  const product = data.filter((item) => {
    if (item.id === id) return item;
  });
  const {
    id: productId,
    category,
    title,
    description,
    image,
    price,
  } = product[0];
  productButton.setAttribute('data-id', productId);
  productTitle.innerHTML = title;
  productCategory.innerHTML = category[0];
  productPrice.innerHTML = `$${price}`;
  productDescription.innerHTML = description;
  productImage.src = image;

  productButton.addEventListener('click', () => {
    addToCart(productId);
  });
};
export default displayProductInfo;
