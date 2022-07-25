import './App.css'
import NavBar from './components/NavBar/NavBar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
  return (
    <>
      <NavBar />
      <ItemDetailContainer />
      
      {/* <ItemListContainer /> */}
    </>
  )
}

export default App