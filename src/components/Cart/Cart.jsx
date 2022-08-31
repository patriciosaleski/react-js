import { Box, Button, Typography } from "@mui/material"

import { useNavigate } from "react-router-dom"

import { useCartContext } from "../../context/CartContext"

import ItemCart from "../ItemCart/ItemCart"

const Cart = () => {
  const { cart, totalPrice } = useCartContext()
  const navigate = useNavigate()

  return cart.length === 0 ? (
    <Box sx={{ width: 1 / 4, mt: 6, mx: "auto" }}>
      <Typography variant="h4"
        sx={{ fontWeight: "light", textAlign: "center" }}>
        No hay elementos en el carrito
      </Typography>

      <Button
        onClick={() => navigate("/")}
        variant="contained"
        size="large"
        sx={{ width: 1, mt: 2 }}>
        Hacer compras
      </Button>
    </Box>
  ) : (
    <Box>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}

      <Box
        sx={{
          width: 1 / 2,
          py: 2,
          px: 4,
          mx: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          bgcolor: "primary.main",
          borderRadius: 4,
          boxShadow: 1
        }}>
          
        <Button
          variant="contained"
          color="secondary"
          onClick={ () => navigate("/checkout") }>
          Ir a pagar
        </Button>
        
        <Typography fontSize={ 18 }> Subtotal: ${totalPrice()}</Typography>
      </Box>
    </Box>
  )
}

export default Cart
