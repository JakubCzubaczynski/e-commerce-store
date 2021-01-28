import getData from './getData.js';
import displayCart from './displayCart.js';
import addToCart from './addToCart.js';
import './toggleSidebar.js';
import displayProductInfo from './displayProductInfo.js'

// IF LOCAL STORAGE ID NOT NULL THEN DISPLAY PRODUCT

const minWrapperHeight = () => {
    const windowHeight = window.innerHeight;
    const products = document.querySelector('.product-container').offsetHeight;
    const minHeight = windowHeight - 100 - 137 - 55;
    if ((100 + 137 + 55 + products) < windowHeight) {
        document.querySelector('.product-container').style.minHeight = minHeight + "px";
    }
}

window.addEventListener('DOMContentLoaded', (event) => {
   if(parseInt(localStorage.getItem('product_id'))!=0){
       minWrapperHeight();
       displayCart();
    displayProductInfo();
}
else{
    document.querySelector('body').innerHTML="<h1 style='text-align:center'>ERROR 404</h1>";
}
});
