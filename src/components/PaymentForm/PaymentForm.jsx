import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"
import Grid from "@mui/material/Grid"

import { useOrderContext } from "../../context/OrderContext"

const PaymentForm = () => {
  const { updateState } = useOrderContext()

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Método de pago
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Nombre en la tarjeta"
            fullWidth
            variant="standard"
            onChange={updateState}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Número de tarjeta"
            placeholder=""
            fullWidth
            variant="standard"
            onChange={updateState}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Fecha de vencimiento"
            fullWidth
            variant="standard"
            onChange={updateState}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="CSC / CVV"
            fullWidth
            variant="standard"
          />
        </Grid>
      </Grid>
    </>
  )
}

export default PaymentForm
