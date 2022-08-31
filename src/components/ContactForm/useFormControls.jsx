import { useState } from "react"

const initialValues = {
  fullName: "",
  email: "",
  message: "",
  formSubmitted: false,
  success: false,
}

export const useFormControls = () => {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})

  const validate = (fieldValues = values) => {
    let aux = { ...errors }

    if ("fullName" in fieldValues)
      aux.fullName = fieldValues.fullName ? "" : "Campo requerido."

    if ("message" in fieldValues)
      aux.message = fieldValues.message ? "" : "Campo requerido."

    if ("email" in fieldValues) {
      aux.email = fieldValues.email ? "" : "Campo requerido."
      if (fieldValues.email)
        aux.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
          ? ""
          : "Email inválido."
    }

    setErrors({
      ...aux,
    })
  }

  const handleInputValue = (ev) => {
    const { name, value } = ev.target
    setValues({
      ...values,
      [name]: value,
    })
    validate({ [name]: value })
  }

  const handleFormSubmit = async (ev) => {
    ev.preventDefault()
    return formIsValid() ? true : false
  }

  const formIsValid = (fieldValues = values) => {
    const isValid =
      fieldValues.fullName &&
      fieldValues.email &&
      fieldValues.message &&
      Object.values(errors).every((value) => value === "")

    return isValid
  }

  return {
    handleInputValue,
    handleFormSubmit,
    formIsValid,
    errors
  }
}
