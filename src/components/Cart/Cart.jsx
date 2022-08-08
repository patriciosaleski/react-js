import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import ItemCart from "../ItemCart/ItemCart"

const Cart = () => {
  const { cart, totalPrice } = useCartContext()
  console.log(cart)

  return cart.length === 0 ? (
    <>
      <p>No hay elementos en el carrito</p>
      <Link to='/'>Hacer compras</Link>
    </>
  ) : (
    <>
        {cart.map(product => <ItemCart key={product.id} product={ product } />)}
        <p className='cart__total'>Total: ${totalPrice()}</p>
    </>
  )
}

export default Cart
