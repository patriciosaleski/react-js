import { TextField, Button, Typography } from "@mui/material"
import { Box } from "@mui/system"

import { useFormControls } from "./useFormControls"

const ContactForm = () => {
  const inputFieldValues = [
    {
      name: "fullName",
      label: "Nombre completo",
      id: "my-name"
    },
    {
      name: "email",
      label: "Email",
      id: "my-email",
    },
    {
      name: "message",
      label: "Mensaje",
      id: "my-message",
      rows: 10
    }
  ]

  const { handleInputValue, handleFormSubmit, formIsValid, errors } =
    useFormControls()
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleFormSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 5,
        bgcolor: "primary.light",
        borderRadius: 4,
        boxShadow: 3,
        p: 2,
        my: 6
      }}>
      <Typography variant="h3" textAlign="center" fontWeight={100}>Contactate con nosotros</Typography>
      {inputFieldValues.map((inputFieldValue, index) => {
        return (
          <TextField
            required
            key={index}
            onChange={handleInputValue}
            name={inputFieldValue.name}
            label={inputFieldValue.label}
            rows={inputFieldValue.rows ?? 1}
            {...(errors[inputFieldValue.name] && {
              error: true,
              helperText: errors[inputFieldValue.name],
            })}
            color='black'
          />
        )
      })}
      <Button disabled={formIsValid()} type="submit" color="primary" variant="contained" sx={{ width: 1/8, mx: 'auto' }}>
        Enviar
      </Button>
    </Box>
  )
}

export default ContactForm
