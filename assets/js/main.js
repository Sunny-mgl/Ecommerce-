

//------------dark---------------



  const btnTheme = document.getElementById("btn") 
  const body = document.body


const darkChange = () => {
if ( btnTheme.classList.contains("bx-sun")){
   btnTheme.classList.replace("bx-sun", "bx-moon")
} else {
  btnTheme.classList.replace("bx-moon", "bx-sun")
}
body.classList.toggle("dark")
}

  btnTheme.addEventListener( "click" , () => darkChange() )


//----------carrito-----------


const cartOpen = document.getElementById("cart-btn")
const cartClose = document.getElementById("close")
const cartC= document.getElementById("cart-")

  cartOpen.addEventListener("click", () => cartC.classList.remove("hide"))
   cartClose.addEventListener("click", () => cartC.classList.add("hide"))

//----------menu--------


const menuOpen = document.getElementById("btn-menu")
const menuClose = document.getElementById("closed")
const menU = document.getElementById("menu--")

menuOpen.addEventListener("click", () => menU.classList.remove("hide"))
menuClose.addEventListener("click", () => menU.classList.add("hide"))










/*const items = [
    {
      id: 1,
      name: 'Hoodies',
      price: 14.00,
      image: 'assets/images/featured1.png',
      category: 'hoodies',
      quantity: 10
    },
    {
      id: 2,
      name: 'Shirts',
      price: 24.00,
      image: 'assets/images/featured2.png',
      category: 'shirts',
      quantity: 15
    },
    {
      id: 3,
      name: 'Sweatshirts',
      price: 24.00,
      image: 'assets/images/featured3.png',
      category: 'shirts',
      quantity: 20
    }
  ]

const cartProducts = []
function addProducts( itemId){
   
  let productSelect = cartProducts.find(product => product.id === itemId)

  
  if (productSelect){

    let index = cartProducts.indexOf(productSelect)

    cartProducts[index].quantitySelected++

     } else{

      const item = items.find(item => item.id === itemId)

      item.quantitySelected = 1
      cartProducts.push(item)
     }
}
*/



 