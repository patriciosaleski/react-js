import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Cart from "./components/Cart/Cart"
import CartProvider from "./context/CartContext"
import NavBar from "./components/NavBar/NavBar.jsx"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"

import "./App.css"
import CheckOut from "./components/CheckOut/CheckOut"


function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categoria" element={<ItemListContainer />} />
            <Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
            <Route path="/carro" element={<Cart />} />
            <Route path="/checkout" element={<CheckOut />}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App