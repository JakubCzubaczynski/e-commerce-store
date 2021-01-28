
import getData from './getData.js'
import cartSetup from './cartSetup.js'
import displayCart from './displayCart.js'
 const increaseItem = async (id) => {
        cartSetup();
        const data = await getData();
        const cart = localStorage.getItem('cart');
        let cartJs = JSON.parse(cart)
        let update = cartJs.map(item => {
            if (item.id == id) item.amount++;
            return item;
        })
        localStorage.setItem('cart', JSON.stringify(update));
        displayCart();
    };
    const decreaseItem = async (id) => {
        cartSetup();
        const data = await getData();
        const cart = localStorage.getItem('cart');
        let cartJs = JSON.parse(cart)
        let update = cartJs.map(item => {
            if (item.id == id) item.amount--;
            return item;
        })
        localStorage.setItem('cart', JSON.stringify(update));
        displayCart();
    };
   const deleteItem = async (id) => {
        cartSetup();
        const data = await getData();
        const cart = localStorage.getItem('cart');
        let cartJs = JSON.parse(cart)
        let update = cartJs.map(item => {
            if (item.id == id) item.amount=0;
            return item;
        })
        localStorage.setItem('cart', JSON.stringify(update));
        displayCart();
    };
    export {increaseItem,decreaseItem,deleteItem};