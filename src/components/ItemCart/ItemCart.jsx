import { useCartContext } from "../../context/CartContext"

import { Box, IconButton, Tooltip, Typography } from "@mui/material"
import DeleteForever from "@mui/icons-material/DeleteForever"

const ItemCart = ({ product }) => {
  const { removeFromCart } = useCartContext()

  return (
    <Box sx={{
          width: 1 / 2,
          m: "2rem auto",
          p: 2,
          display: "flex",
          alignItems: "center",
          bgcolor: "primary.main",
          borderRadius: 6,
          boxShadow: 2
        }}>

      <Box component="img"
        sx={{
          width: 150,
          height: 150,
          mr: 4,
          objectFit: "cover",
          borderRadius: 200,
        }}
        src={product.src}
        alt={product.alt}/>

      <Box sx={{ width: 3 / 4, display: "flex", justifyContent: "space-between" }}>

        <Box>
          <Typography fontSize={20}>
            Producto: {product.name}
          </Typography>

          <Typography fontWeight="light">
            Cantidad: {product.quantity}
          </Typography>

          <Typography fontWeight="light">
            Precio un.: ${product.price}
          </Typography>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: 'center'}}>
          <Typography fontStyle='italic'>Subtotal: ${product.price * product.quantity}</Typography>

          <Tooltip title='Quitar producto'>
            <IconButton sx={{ width: "fit-content" }} onClick={() => removeFromCart(product.id)}>
              <DeleteForever />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  )
}

export default ItemCart
