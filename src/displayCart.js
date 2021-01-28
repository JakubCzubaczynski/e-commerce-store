import cartUtils from './cartUtils.js'
import {openCart} from './toggleSidebar.js'
const displayCart = async () => {
    const data = JSON.parse(localStorage.getItem('cart'));
    const element = document.querySelector('.shopping-cart');
    let sum = 0;
 console.log("displayCart");
    if (data != null) {
        const content = data.filter(item => {
            if (item.amount > 0) return item;
        })
        
        element.innerHTML = `
                <div>
                    <p class="cart-label">shopping cart</p>
                </div>`;
        content.map(item=>{

            sum+=( item.amount * item.price );
            element.innerHTML+=`
            <div class="row cart-item my-3" data-id='${item.id}'>
                    <div class="col-3">
                        <img src="${item.image}" class="img-cart" alt="">
                    </div>
                    <div class="col-5">
                        <p class="cart-product-name">${item.title}</p>
                        <p class="cart-product-price">$ ${item.price}</p>
                        
                    </div>
                    <div class="col-4 buttons-wrapper">
                        <div class="quantity-wrapper">
                            <button type="button">
                            <i class="fas fa-minus-square minus"></i>
                         </button>
                         <span class="quantity">${item.amount}</span>
                        <button type="button">
                            <i class="fas fa-plus-square plus"></i>
                         </button>
                        </div>

                        <div class="remove-wrapper">
                            <button type="button"><i class="fas fa-trash-alt delete"></i></button>
                        </div>
                    </div>
                    <div class="col-12"><p class="total-item">$ ${Math.round((item.price*item.amount)*100)/100}</p></div>
                </div>
            `
        })
        element.innerHTML += `
                <div>
                    <p class="cart-label" style="text-align:right;font-weight:600; color:var(--clr-dark-grey);">Total: $ ${Math.round((sum)*100)/100}</p>
                </div>`;
    }
   
    cartUtils();

}
export default displayCart;