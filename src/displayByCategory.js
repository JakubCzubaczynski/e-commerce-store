import getData from "./getData.js";
import addToCart from './addToCart.js';
//display products and add events listeners
const displayByCategory = async (x) => {
    const wrapper = document.querySelector('.products-wrapper');
    wrapper.innerHTML = '';
    console.log(x);
    const data = await getData();

    const text = data.filter((item) => {
        const {
            id,
            title,
            category,
            description,
            image,
            price
        } = item;
        if (x === item.category[0] || x === 'all') {

            wrapper.innerHTML += `
                <div class="pad-5 col-md-12 col-lg-6 col-xl-4 product">
                    <div class="img-wrapper">
                        <img src="${image}" data-id='${id}' class="product-img" alt="">
                        <div class='product-icons'>
                            <button data-id="${id}" class="basket"><i class="fas fa-shopping-cart"></i></button>
                            <a href="product.html"><button data-id="${id}" class="info"><i class="fas fa-info"></i></button></a>
                        </div>
                    </div>
                    <p class="product-name">${title}</p>
                    <p class="product-price">$${price}</p>
                </div>
            `;

        }
    });
    const buttonsInfo = [...document.querySelectorAll('.info')];
    buttonsInfo.map((item) => {

        item.addEventListener('click', () => {

            localStorage.setItem('product_id', item.getAttribute('data-id'));
        })
    })

    const buttonsBasket = [...document.querySelectorAll('.basket')];
    buttonsBasket.map((item)=>{
        item.addEventListener('click',()=>{
            const id = parseInt(item.getAttribute('data-id'));
            
            addToCart(id);
            
            
        })
    })
    






}
export default displayByCategory;