import React, { useContext, useState } from 'react'

// import { getFirestore, addDoc, collection } from 'firebase/firestore' 

import { useCartContext } from './CartContext'

const OrderContext = React.createContext([])
const useOrderContext = () => useContext(OrderContext)

const OrderProvider = ({ children }) => {

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

    const ccTemplate = Object.freeze({
        cardName: '',
        cardNumber: '',
        expDate: ''
    })

    const [orderData, setorderData] = useState(initialOrder)
    const [cardData, setCardData] = useState(ccTemplate)

    const orderHandler = (ev) => {
        setorderData(current => {
            return {
                ...current,
                buyer: {
                    ...current.buyer,
                    [ev.target.name]: ev.target.value
                },
                items: cart.map(product => ({ 
                    id: product.id, 
                    name: product.name, 
                    price: product.price, 
                    quantity: product.quantity 
                })),
                total: totalPrice()
            }
        })
    }

    const paymentData = (ev) => {
        setCardData(current => {
            return {
                ...current,
                [ev.target.id]: ev.target.value,
            }
        })
    }


    const showOrderInfo = () => {
        return console.log(orderData, cardData)
    }

    const generateOrder = () => {
        // DEV
        // const db = getFirestore()
        // const orderCollection = collection(db, 'orders')  
        // addDoc(orderCollection, orderData)
        //     .then(({ id }) => console.log(id, orderData))
        //     .then({/* RENDER ORDER ID */})
        console.log(orderData)
  }
    
    return (
        <OrderContext.Provider value={{ generateOrder, orderHandler, paymentData, showOrderInfo }}>
            {children}
        </OrderContext.Provider>
    )
}

export { useOrderContext, OrderProvider }