import getData from './getData.js';
import displayProductInfo from './displayProductInfo.js'
// IF LOCAL STORAGE ID NOT NULL THEN DISPLAY PRODUCT

window.addEventListener('DOMContentLoaded', (event) => {
   if(parseInt(localStorage.getItem('product_id'))!=0){
    displayProductInfo();
}
else{
    document.querySelector('body').innerHTML="<h1 style='text-align:center'>ERROR 404</h1>";
}
});
