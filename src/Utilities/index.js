// getToCart
const getToCart = () => {
    const cartList = localStorage.getItem('cartList')
    if(cartList){
        const cartListString = JSON.parse(cartList)
        return cartListString
    }
    return []
}

// addToCart
const addToCart = coffee => {
    const cartList = getToCart()
    const isExist = cartList.find(cart => cart.id == coffee.id)
    if(isExist) return alert('item already exist')
    cartList.push(coffee)
    const cartListString = JSON.stringify(cartList)
    localStorage.setItem('cartList',cartListString)
}

// removeFromCart

export {addToCart}