import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"

import "./cartwidget.css"

function CartWidget() {
  const { productsInCart } = useCartContext()

  return (
    <Link to="/carro">
      <ShoppingCartOutlinedIcon className="cart-icon" /> <p>Carro </p>{" "}
      {productsInCart() === 0 ? (
        <p style={{ display: 'none' }}></p>
      ) : (
        <p>{productsInCart()}</p>
      )}
    </Link>
  )
}

export default CartWidget