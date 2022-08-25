import { useState } from "react"

import { useOrderContext } from "../../context/OrderContext"

import { Typography, StepLabel, Container, Stepper, Button, Paper, Step, Box } from "@mui/material"

import AddressForm from "../AddressForm/AddressForm"
import PaymentForm from "../PaymentForm/PaymentForm"
import Review from "../Review/Review"

const steps = ["Dirección de envío", "Detalles de pago", "Revisá tu orden"]

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />
    case 1:
      return <PaymentForm />
    case 2:
      return <Review />
    default:
      throw new Error("Paso desconocido")
  }
}

const CheckOut = () => {
  const { orderData, generateOrder } = useOrderContext()

  const [activeStep, setActiveStep] = useState(0)
  const [orderID, setOrderID] = useState("")
  
  const handleConfirmOrder = () => {
    generateOrder(orderData).then((id) => {
      setOrderID(id)
      console.count(`Compra realizaca con éxito: ID: ${id} Items: ${orderData}`)
    })
  }

  const handleNext = () => {
    setActiveStep(activeStep + 1)
  }

  const handleBack = () => {
    setActiveStep(activeStep - 1)
  }

  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <Paper
        variant="outlined"
        sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
        <Typography component="h1" variant="h4" align="center">
          Pago
        </Typography>
        <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <>
          {activeStep === steps.length ? (
            <Box>
              {orderID !== "" ? (
                <>
                  <Typography variant="h5" gutterBottom>
                    ¡Gracias por tu compra!
                  </Typography>
                  <Typography variant="subtitle1">
                    Tu orden #{orderID} ha sido procesada con éxito. En
                    instantes recibiras una confirmación en tu correo.
                  </Typography>
                </>
              ) : (
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <Typography>Cargando...</Typography>
                </Box>
              )}
            </Box>
          ) : (
            <>
              {getStepContent(activeStep)}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {activeStep !== 0 && (
                  <Button
                    onClick={handleBack}
                    sx={{ mt: 3, ml: 1, color: "black" }}>
                    Atras
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={
                    activeStep === steps.length - 1
                      ? (handleConfirmOrder(), handleNext)
                      : handleNext
                  }
                  sx={{ mt: 3, ml: 1 }}
                  color="primary">
                  {activeStep === steps.length - 1 ? "Confirmar" : "Siguiente"}
                </Button>
              </Box>
            </>
          )}
        </>
      </Paper>
    </Container>
  )
}

export default CheckOut
