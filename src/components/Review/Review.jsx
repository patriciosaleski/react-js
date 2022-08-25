import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"
import { Box, List, ListItem } from "@mui/material"

import { useOrderContext } from "../../context/OrderContext"
import { useCartContext } from "../../context/CartContext"

const Review = () => {
  const { addressInfo, paymentInfo, orderData } = useOrderContext()
  const { cart } = useCartContext()

  const payment = paymentInfo()
  const address = Object.values(addressInfo())

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Resumen de compra
      </Typography>
      <List disablePadding>
        {cart.map((product) => (
          <ListItem key={product.id} sx={{ py: 1, px: 0, justifyContent: 'space-around' }}>
            <Typography>x{product.quantity}</Typography>
            <Typography>{product.name}</Typography>
            <Typography variant="subtitle2" sx={{ fontStyle: 'italic' }}>${product.price * product.quantity}</Typography>
          </ListItem>
        ))}
        <ListItem sx={{ justifyContent: 'flex-end' }}>
          <Typography variant='h6'>Total: ${orderData.total}</Typography>
          </ListItem>
      </List>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Detalles del envío
          </Typography>
          <Typography gutterBottom>{address.join(", ")}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Detalles de pago
          </Typography>

          {payment.map((item) => (
            <Box key={item.id} sx={{ display: "flex", gap: 1 }}>
              <Typography gutterBottom>{item.text}</Typography>
              <Typography gutterBottom>{item.value}</Typography>
            </Box>
          ))}
        </Grid>
      </Grid>
    </>
  )
}

export default Review
