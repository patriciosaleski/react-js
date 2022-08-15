// import { Button } from "@mui/material"
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { Link } from "react-router-dom"

import { useCartContext } from "../../context/CartContext"

import ItemCart from "../ItemCart/ItemCart"


const Cart = () => {
  const { cart, totalPrice } = useCartContext()

  const order = {
    buyer: {
      name: 'Patricio',
      email: 'patriciosaleski@gmail.com',
      phone: '15786',
      address: 'Av Siempre viva'
    },
    items: cart.map(product => ({ id: product.id, name: product.name, price: product.price, quantity: product.quantity })),
    total: totalPrice(),
  }

  console.log(cart)

  const handleClick = () => {
    const db = getFirestore()
    const orderCollection = collection(db, 'orders')  
    addDoc(orderCollection, order)
    .then(({ id }) => console.log(id))
  }

  return cart.length === 0 ? (
    <>
      <p>No hay elementos en el carrito</p>
      <Link to='/'>Hacer compras</Link>
    </>
  ) : (
    <>
        {cart.map(product => <ItemCart key={product.id} product={ product } />)}
        <div className="cart__total">
          {/* <Link to='/checkout'>
            <Button variant="outlined">Ir a pagar</Button>
          </Link> */}
          <button onClick={handleClick}>Finalizar Compra</button>
          <p>Total: ${ totalPrice() }</p>
        </div>
    </>
  )
}

export default Cart