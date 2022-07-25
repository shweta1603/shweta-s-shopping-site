const cartItems = []
const cartItemsLength = document.getElementById('cart-items-length')
const addToCard = (id) => {
   // console.log(id)
    cartItems.push(id)
   // console.log(cartItems)
   cartItemsLength.innerText = cartItems.length  
}
console.log(cartItems)
const addedToCart = () =>{
    console.log(cartItems)
    cartItems.map((element,index) => {
        console.log(element)
       
        //  <div> {element.id}</div>

    })
} 