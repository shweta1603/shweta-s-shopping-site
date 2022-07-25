// const fetchProducts= () =>{
//     fetch('https://fakestoreapi.com/products')
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error)=> console.log(error))
// }

const productsSpinner = document.getElementById('products-spinner')

const fetchProducts= async () =>{
    const res= await fetch('https://fakestoreapi.com/products')
    const data= await res.json()
    productsSpinner.style.display='none'
    //console.log(data)
    // createProductDiv()

    data.forEach(product => createProductDiv(product))
}

