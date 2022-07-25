const productsParentDiv= document.getElementById('products')
const createProductDiv = (product) =>{  
    const colDiv= document.createElement('div')
    const productDiv= document.createElement('div')
    const productImg= document.createElement('img')
    const productBody = document.createElement('div')
    const productHeader= document.createElement('div')
    const productTitle= document.createElement('h6')
    const productPrice= document.createElement('h5')
    const productDescription = document.createElement('p')
    const ratingStar1 = document.createElement('span')
    const ratingStar2 = document.createElement('span')
    const ratingStar3 = document.createElement('span')
    const ratingStar4 = document.createElement('span')
    const ratingStar5 = document.createElement('span')
    const ratingCount = document.createElement('span')
    const cardButtonOuter = document.createElement('div')
    const addToCardButton = document.createElement('a')
    const buyButton = document.createElement('a')

    colDiv.classList= 'col-md-3'
    productDiv.classList= "card product"
    productImg.classList= "card-img-top"
    productBody.classList= "card-body"
    productHeader.classList= "product-header"
    productTitle.classList= "card-title"
    productPrice.classList= "card-title product-price"
    productDescription.classList= "card-text"
    ratingStar1.classList= "fa fa-star checked"
    ratingStar2.classList= "fa fa-star checked"
    ratingStar3.classList = "fa fa-star checked"
    ratingStar4.classList= "fa fa-star checked"
    ratingStar5.classList= "fa fa-star checked"
    ratingCount.classList= "rating-count"
    cardButtonOuter.classList= "btn-outer"
    addToCardButton.classList= "btn btn-primary cart-btn"
    buyButton.classList= "btn btn-primary buy-btn"

    // productImg.src= "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg"
    productImg.src= product.image
    productImg.alt= `product.image`
    colDiv.id = `product-${product.id}`

    // productTitle.innerText= 'Product 1'
    productPrice.innerText= `$${product.price}`
    productDescription.innerText=`${product.description.slice(0,50)}...` 
    ratingCount.innerText= `(${product.rating.count})`
    productTitle.innerText= `${product.title.slice(0,20)}...`
    addToCardButton.innerText= 'Add to Cart'
    buyButton.innerText= 'Buy now'

    colDiv.appendChild(productDiv)
    productDiv.appendChild(productImg)
    productDiv.appendChild(productBody)
    productBody.appendChild(productHeader)
    productHeader.appendChild(productTitle)
    productHeader.appendChild(productPrice)
    productBody.appendChild(productDescription)
    // productBody.appendChild(ratingStar1)
    // productBody.appendChild(ratingStar2)
    // productBody.appendChild(ratingStar3)
    // productBody.appendChild(ratingStar4)
    // productBody.appendChild(ratingStar5)
    // productBody.appendChild(ratingCount)
    const ratingStars = Math.ceil(product.rating.rate)
    ratingStars >= 1 && productBody.appendChild(ratingStar1)
    ratingStars >= 2 && productBody.appendChild(ratingStar2)
    ratingStars >= 3 && productBody.appendChild(ratingStar3)
    ratingStars >= 4 && productBody.appendChild(ratingStar4)
    ratingStars >= 5 && productBody.appendChild(ratingStar5)

    productBody.appendChild(cardButtonOuter)
    cardButtonOuter.appendChild(addToCardButton)
    cardButtonOuter.appendChild(buyButton)
    productsParentDiv.appendChild(colDiv)
    
    let productId= product.id 
    addToCardButton.addEventListener('click',function (){
         addToCard(productId);
         //this.innerText= 'Added to Cart'
         this.innerHTML= '<i class="fa fa-check-circle" aria-hidden="true"></i>'
    })

}
//one of the object product received from fetching:
// {
// "id":1,
// "title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
// "price":109.95,
// "description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches)
// in the padded sleeve, your everyday",
// "category":"men's clothing",
// "image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
// "rating":{"rate":3.9,"count":120}
// }

            // <div class="col-md-3">
            //     <div class="card product" style="width: 18rem;">
            //         <img src="https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg" class="card-img-top" alt="...">
            //         <div class="card-body">
            //             <div class="product-header"> 
            //                 <h5 class="card-title">Card title</h5>
            //                 <h5 class="card-title product-price">$3200</h5>
            //             </div>
            //           <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            //           <span class="fa fa-star checked"></span>
            //         <span class="fa fa-star checked"></span>
            //         <span class="fa fa-star checked"></span>
            //         <span class="fa fa-star"></span>
            //         <span class="fa fa-star"></span>
             //         <span class="rating-count"> (102) </span>
            //           <div class="btn-outer">
            //             <a href="#" class="btn btn-primary">Add to Cart</a>
            //             <a href="#" class="btn btn-primary">Buy Now</a>
            //           </div>
            //         </div>
            //       </div>
            // </div>