import React, { useState, useContext } from 'react'

import { getFirestore, addDoc, collection } from 'firebase/firestore' 

import { useCartContext } from './CartContext'


const OrderContext = React.createContext([])
const useOrderContext = () => useContext(OrderContext)

const OrderProvider = ({children}) => {

    const { totalPrice, cart } = useCartContext()

    const initialOrder = Object.freeze({
        buyer: {
            firstName: '',
            lastName: '',
            address1: '',
            address2: '',
            city: '',
            state: '',
            zip: ''
        },
        items: [],
        total: 0
    })

    const [orderData, setorderData] = useState(initialOrder)

    const orderHandler = (ev) => {
        setorderData(current => {
            return {
                ...current,
                buyer: {
                    ...current.buyer,
                    [ev.target.name]: ev.target.value
                },
                items: cart.map(product => ({ id: product.id, name: product.name, price: product.price, quantity: product.quantity })),
                total: totalPrice()
            }
        })
    }

    const generateOrder = () => {
        const db = getFirestore()
        const orderCollection = collection(db, 'orders')  
        addDoc(orderCollection, orderData)
            .then(({ id }) => console.log(id, orderData))
            .then({/* RENDER ORDER ID */})
  }
    
    return (
        <OrderContext.Provider value={{ orderHandler, generateOrder }}>
            {children}
        </OrderContext.Provider>
    )
}

export { useOrderContext, OrderProvider }