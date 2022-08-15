import { Tooltip, Typography } from "@mui/material"
import { useState } from "react"
import { Link } from "react-router-dom"

import { useCartContext } from "../../context/CartContext"
import GoToCart from "../GoToCart/GoToCar"
import ItemCount from "../ItemCount/ItemCount"

import "./Item.css"


const Item = (props) => {
  const [goToCart, setGoToCart] = useState(false)

  const { addToCart } = useCartContext()

  const onAdd = (quantity) => {
    setGoToCart(true)
    addToCart(props, quantity)
  }

  return (
    <div className="item">
      <Tooltip title={<Typography fontSize={16}>Ver detalles</Typography>} placement="top" arrow>
        <Link to={`/detalle/${props.id}`}>
          <div className="item__info">
            <img src={props.src} alt={props.alt} className="item__picture" />
            <h3 className="item__name">{props.name}</h3>
            <div className="item__price">${props.price}</div>
          </div>
        </Link>
      </Tooltip>
      {goToCart ? 
        ( <Link to="/carro"> <GoToCart /> </Link>
        ) : (
        <ItemCount initial={0} stock={10} onAdd={onAdd} />
      )}
    </div>
  )
}

export default Item