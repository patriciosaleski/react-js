import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Box, Button, Tooltip, Typography } from "@mui/material"

import { useCartContext } from "../../context/CartContext"
import ItemCount from "../ItemCount/ItemCount"

const Item = (props) => {
  const [goToCart, setGoToCart] = useState(false)

  const { addToCart } = useCartContext()

  const onAdd = (quantity) => {
    setGoToCart(true)
    addToCart(props, quantity)
  }

  const navigate = useNavigate()
  const navigateToCart = () => navigate("/carro")

  return (
    <Box
      sx={{
        width: 250,
        overflow: "hidden",
        borderRadius: 5,
        boxShadow: 3,
        bgcolor: "secondary.main",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>

      <Tooltip title="Ver detalles" placement="top" arrow>
        <Link to={`/detalle/${props.id}`}>
          <Box>
            <Box component="img"
              src={props.src}
              alt={props.alt}
              sx={{ width: "250px", height: "300px", mb: 1 }}/>

            <Typography sx={{ fontSize: 20, ml: 2 }}> {props.name} </Typography>

            <Typography sx={{ fontSize: 18, fontWeight: 300, ml: 2 }}> ${props.price} </Typography>

          </Box>
        </Link>
      </Tooltip>

      {goToCart ? (
        <Button
          onClick={navigateToCart}
          variant='outlined'
          sx={{
            width: "90%",
            color: "black",
            my: "auto",
            borderRadius: 3,
            transition: "all .2s ease-in",
            "&:hover": {
              bgcolor: "primary.light"
            }
          }}>
          Finalizar Compra
        </Button>
      ) : (
        <ItemCount initial={0} stock={10} onAdd={onAdd} />
      )}
    </Box>
  )
}

export default Item
