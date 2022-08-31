import React, { useContext, useState } from "react"

import { getFirestore, addDoc, collection } from "firebase/firestore"

import { useCartContext } from "./CartContext"

const OrderContext = React.createContext([])
const useOrderContext = () => useContext(OrderContext)

const OrderProvider = ({ children }) => {
  const { totalPrice, cart } = useCartContext()

  const initialOrder = Object.freeze({
    buyer: {
      firstName: "",
      lastName: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
    },
    items: [],
    total: 0,
  })

  const ccTemplate = [
    { id: "cardName", text: "Nombre: ", value: "" },
    { id: "cardNumber", text: "Tarjeta: xx-", value: "" },
    { id: "expDate", text: "Vto.: ", value: "" },
  ]

  const [orderData, setorderData] = useState(initialOrder)
  const [cardData, setCardData] = useState(ccTemplate)

  const orderHandler = (ev) => {
    setorderData((current) => {
      return {
        ...current,
        buyer: {
          ...current.buyer,
          [ev.target.name]: ev.target.value,
        },
        items: cart.map((product) => ({
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: product.quantity,
        })),
        total: totalPrice(),
      }
    })
  }

  const generateOrder = async (order) => {
    const db = getFirestore()
    const orderCollection = collection(db, "orders")
    const docRef = await addDoc(orderCollection, order)
    console.log(docRef.id, orderData)
    return docRef.id
  }

  const updateState = (ev) => {
    setCardData((current) =>
      current.map((obj) => {
        if (obj.id === ev.target.id) {
          return { ...obj, value: ev.target.value }
        }
        return obj
      })
    )
  }

  const addressInfo = () => {
    return orderData.buyer
  }

  const paymentInfo = () => {
    cardData[1].value = cardData[1].value.slice(-4)
    return cardData
  }

  return (
    <OrderContext.Provider
      value={{
        orderHandler,
        generateOrder,
        updateState,
        addressInfo,
        paymentInfo,
        orderData
      }}>
      {children}
    </OrderContext.Provider>
  )
}

export { useOrderContext, OrderProvider }
