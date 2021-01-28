import getData from './getData.js'

const cartSetup = async () => {
    const data = await getData();
    const cart = localStorage.getItem('cart');
    if(cart===null){
        const setup = data.map((item)=>{
            item.amount=0;
            return item;
        })
        localStorage.setItem('cart', JSON.stringify(setup));
    }
    
    
}
export default  cartSetup;