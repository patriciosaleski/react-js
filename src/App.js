import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { ThemeProvider, createTheme } from "@mui/material"

import { OrderProvider } from "./context/OrderContext"
import CartProvider from "./context/CartContext"

import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import CheckOut from "./components/CheckOut/CheckOut"
import NavBar from "./components/NavBar/NavBar.jsx"
import About from "./components/About/About"
import Cart from "./components/Cart/Cart"
import FAQ from "./components/FAQ/FAQ"

import "./App.css"

const theme = createTheme({
  palette: {
    primary: {
      light: "hsl(55, 60%, 96%)",
      main: "hsl(56, 57%, 88%)",
      dark: "hsl(58, 25%, 80%)"
    },
    secondary: {
      main: "hsl(56, 56%, 92%)",
      dark: "hsl(55, 40%, 80%)"
    },
    black: "#000000"
  },
})

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <OrderProvider>
          <ThemeProvider theme={theme}>
            <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/categoria" element={<ItemListContainer />} />
              <Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
              <Route path="/carro" element={<Cart />} />
              <Route path="/checkout" element={<CheckOut />} />
              <Route path="/contacto" element={<FAQ />} />
              <Route path="/nosotros" element={ <About /> } />
            </Routes>
          </ThemeProvider>
        </OrderProvider>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
