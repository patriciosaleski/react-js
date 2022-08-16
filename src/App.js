import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { OrderProvider } from "./context/OrderContext"
import CartProvider from "./context/CartContext"

import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import CheckOut from "./components/CheckOut/CheckOut"
import NavBar from "./components/NavBar/NavBar.jsx"
import Cart from "./components/Cart/Cart"

import "./App.css"


function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <OrderProvider>
            <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/categoria" element={<ItemListContainer />} />
              <Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
              <Route path="/carro" element={<Cart />} />
              <Route path="/checkout" element={<CheckOut />} />
            </Routes>
          </OrderProvider>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App