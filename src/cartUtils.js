
import {increaseItem,decreaseItem,deleteItem} from './buttonsUtils.js'
const cartUtils = async () => {
    const increaseBtns = [...document.querySelectorAll('.plus')];
    const decreaseBtns = [...document.querySelectorAll('.minus')];
    const deleteBtns = [...document.querySelectorAll('.delete')];
    increaseBtns.map(item => {
        item.addEventListener('click', () => {
            const id = parseInt(item.parentElement.parentElement.parentElement.parentElement.getAttribute('data-id'));
            console.log('klik1');
            increaseItem(id);

        });
    })
    decreaseBtns.map(item => {
        item.addEventListener('click', () => {
            const id = parseInt(item.parentElement.parentElement.parentElement.parentElement.getAttribute('data-id'));
            console.log('klik2');
            decreaseItem(id);

        });
    })
    deleteBtns.map(item => {
        item.addEventListener('click', () => {
            const id = parseInt(item.parentElement.parentElement.parentElement.parentElement.getAttribute('data-id'));
            console.log('klik3');
            deleteItem(id);

        });
    })


   
    
    













}
export default cartUtils;