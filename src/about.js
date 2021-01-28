
import displayCart from './displayCart.js';

import './toggleSidebar.js';
import displayProductInfo from './displayProductInfo.js'

// IF LOCAL STORAGE ID NOT NULL THEN DISPLAY PRODUCT

const minWrapperHeight = () => {
    const windowHeight = window.innerHeight;
    const products = document.querySelector('.about').offsetHeight;
    const minHeight = windowHeight - 100 - 137 - 55;
    if ((100 + 137 + 55 + products) < windowHeight) {
        document.querySelector('.about').style.minHeight = minHeight + "px";
    }
}

window.addEventListener('DOMContentLoaded', (event) => {
    minWrapperHeight();
    displayCart();
  


});