import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"

import "./cartwidget.css"
import { Box, Typography } from "@mui/material"

function CartWidget() {
  const { productsInCart } = useCartContext()

  return (
    <Link to="/carro">
      <Box sx={{ display: 'flex', gap: 1 }}>
        <ShoppingCartOutlinedIcon className="cart-icon" />
        <Typography>Carro </Typography>
        
        {productsInCart() === 0 ? (
          <Box sx={{ display: "none" }}></Box>
        ) : (
          <Typography
            sx={{
              width: "fit-content",
              bgcolor: "secondary.light",
              px: 1,
              borderRadius: 10,
            }}>
            {productsInCart()}
          </Typography>
        )}
      </Box>
    </Link>
  )
}

export default CartWidget
