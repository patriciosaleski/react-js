import './App.css'
import NavBar from './components/NavBar/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={ <ItemListContainer /> } />
          <Route path='/categoria' element={ <ItemListContainer /> } />
          <Route path='/detalle/:detalleId' element={ <ItemDetailContainer /> } />
          <Route path='/carro' element={ <Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App