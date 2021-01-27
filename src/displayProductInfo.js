import getData from './getData.js';

const displayProductInfo = async() => {

    const productTitle = document.querySelector('.product-info-title');
    const productCategory = document.querySelector('.product-info-category');
    const productPrice = document.querySelector('.product-info-price');
    const productDescription = document.querySelector('.product-info-description');
    const productImage = document.querySelector('.product-info-image');

    const id = parseInt(localStorage.getItem('product_id'));
    console.log(id);
    const data = await getData();
    const product = data.filter((item)=>{
        if(item.id === id) return item;
    })
    const {id:productId,category,title,description,image,price} = product[0];
    
    productTitle.innerHTML = title;
    productCategory.innerHTML = category[0];
    productPrice.innerHTML = `$${price}`;
    productDescription.innerHTML = description;
    productImage.src = image;
    

}
export default displayProductInfo;