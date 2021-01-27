import getData from './getData.js'

const addToCart = async (id) => {
    const data = await getData();

    const product = data.filter((item) => {
        if (item.id === id) {
            const {
                id,
                title,
                description,
                image,
                price
            } = item;
            let newItem = {
                id,
                title,
                description,
                image,
                price
            };
            let newItem2 = {
                id: 5,
                name: "kuba"
            }
            let newItem3 = {
                id: 6,
                name: "kurwa"
            }
            // let newItem2json=JSON.stringify(newItem2);

            // localStorage.setItem('cart',newItem2json);
            // // console.log([newItem2,newItem3]);
            let cart = localStorage.getItem('cart');
            // let jsoncart = JSON.parse(cart);
            // console.log(jsoncart);
            // let newArr=[jsoncart,newItem3];
            // console.log(newArr);
            // let newArrJson = JSON.stringify(newArr);

            // console.log(newArrJson);
            // localStorage.setItem('cart',newArrJson);

            if (cart === null) {
                let newItemJson = JSON.stringify([newItem]);
                // console.log(newItemJson);
                localStorage.setItem('cart', newItemJson);
            }
            if (cart != null) {
                let cartJs = JSON.parse(cart);
                cartJs.push(newItem);
                let update = JSON.stringify(cartJs)
                console.log(update);
                localStorage.setItem('cart', update)
            }

            // if (cart) {

            //     console.log(parse);
            //     parse.push(newItem);
            //     console.log(parse);
            //     localStorage.setItem('cart', JSON.stringify(parse));
            // } if(cart===null){
            // localStorage.setItem('cart', JSON.stringify(parse));
            // }
            // else {
            //     cart = [];
            // }


        }

    })

}

export default addToCart;