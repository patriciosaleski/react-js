import { useState } from 'react'

import { useOrderContext } from '../../context/OrderContext'

import { createTheme, ThemeProvider } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import StepLabel from '@mui/material/StepLabel'
import Container from '@mui/material/Container'
import Stepper from '@mui/material/Stepper'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import Step from '@mui/material/Step'
import Box from '@mui/material/Box'

import AddressForm from '../AddressForm/AddressForm'
import PaymentForm from '../PaymentForm/PaymentForm'
import Review from '../Review/Review'


const steps = ['Dirección de envío', 'Detalles de pago', 'Revisá tu orden']

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />
    case 1:
      return <PaymentForm />
    case 2:
      return <Review />
    default:
      throw new Error('Paso desconocido')
  }
}

const theme = createTheme()

const CheckOut = () => {
  const { generateOrder } = useOrderContext()

  const [activeStep, setActiveStep] = useState(0)

  const handleNext = () => {
    setActiveStep(activeStep + 1)
  }

  const handleBack = () => {
    setActiveStep(activeStep - 1)
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
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
              <>
                <Typography variant="h5" gutterBottom>
                  ¡Gracias por tu compra!
                </Typography>
                <Typography variant="subtitle1">
                    Tu orden #{Math.random()} ha sido procesada con éxito. En instantes recibiras una confirmación en tu correo.
                </Typography>
              </>
            ) : (
              <>
                { getStepContent(activeStep) }
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Atras
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={activeStep === steps.length - 1 ? generateOrder : handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? 'Confirmar' : 'Siguiente'}
                  </Button>
                </Box>
              </>
            )}
          </>
        </Paper>
      </Container>
    </ThemeProvider>
  )
}

export default CheckOut