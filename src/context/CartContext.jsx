import React, { useState, useContext } from 'react'

const CartContext = React.createContext([])

export const useCartContext = () => useContext(CartContext)

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([])
    
    const clearCart = () => setCart([])

    const isInCart = (id) => {
        return cart.find(product => product.id === id) ? true : false
    }

    const addToCart = (item, newQuantity) => {
        const newCart = cart.filter(product => product.id !== item.id)
        newCart.push({...item, quantity: newQuantity})
        setCart(newCart)
    }

    const removeFromCart = (id) => {
        setCart(cart.filter(product => product.id !== id))
    }

    return (
        <CartContext.Provider value={{
            clearCart,
            isInCart,
            addToCart,
            removeFromCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider