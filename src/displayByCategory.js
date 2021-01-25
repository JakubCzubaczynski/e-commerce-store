const displayByCategory = async (x) => {
    const wrapper = document.querySelector('.products-wrapper');
    wrapper.innerHTML='';
    console.log(x);
    const data =await fetch('./furniture.json').then((data) => data.json()).then((data => data));
    const text = data.filter((item)=>{
        const {id,title,category,description,image,price} = item;
        if (x === item.category[0] || x === 'all') {
            wrapper.innerHTML+=`
                <div class="pad-5 col-md-12 col-lg-6 col-xl-4 product">
                    <img src="${image}" data-id='${id}' class="product-img" alt="">
                    <p class="product-name">${title}</p>
                    <p class="product-price">$${price}</p>
                </div>
            `;
        }
    });
    console.log(text);
    





}
export default displayByCategory;