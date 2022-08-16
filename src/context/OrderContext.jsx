import React, { useEffect, useState, useContext } from 'react'

const OrderContext = React.createContext([])

const useOrderContext = () => useContext(OrderContext)

const OrderProvider = ({children}) => {

    const [value, setValue] = useState('')

    const [order, setOrder] = useState({})

    const orderHandler = (ev) => {
        setValue(ev.target.value)
        console.log(value)
    }

    useEffect(() => {
      const timeOut = setTimeout(() => console.log(`Escribiste: ${value}`), 1500)
    
      return () => clearTimeout(timeOut)
    }, [value])
    

    return (
        <OrderContext.Provider value={{
            orderHandler,
            order
        }}>
            {children}
        </OrderContext.Provider>
    )

}

export { useOrderContext, OrderProvider }