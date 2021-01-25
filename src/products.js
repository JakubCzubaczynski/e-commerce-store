import {
    closeIcon,
    toggleNav,
    sidebarWrapper
} from './sidebar.js';
import getData from './getData.js';
import displayMenu from './displayMenu.js';
import displayByCategory from './displayByCategory.js';
displayMenu();
window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
    getData();
    displayByCategory('all');
});



const minWrapperHeight = () => {
    const windowHeight = window.innerHeight;
    const products = document.querySelector('.products').offsetHeight;
    const minHeight = windowHeight - 100 - 137 - 55;
    if ((100 + 137 + 55 + products) < windowHeight) {
        document.querySelector('.products').style.minHeight = minHeight + "px";
    }
}
minWrapperHeight();