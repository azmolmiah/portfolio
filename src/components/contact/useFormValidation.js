import { useState, useEffect } from "react"

const useFormValidation = (initialState, validate) => {
  const [values, setValues] = useState(initialState)
  const [errors, setErrors] = useState({})
  const [error, setError] = useState(null)
  const [isSubmitting, setSubmitting] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [alert, setAlert] = useState("")

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0
      if (noErrors) {
        console.log(
          `Authenticated: ${values.name}, ${values.email}, ${values.phone} ${values.message}`
        )
        //setOpen(true)
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "portofolio", ...values }),
        })
          .then(() => console.log("Success!"))
          .catch(error => console.log(error))
        setSubmitting(false)
        setAlert("alert-success")
        setError("Your message has been submitted")
      } else {
        setSubmitting(false)
        setAlert("alert-danger")
        setError(errors.name || errors.email || errors.phone || errors.message)
      }
    }
  }, [
    values,
    errors,
    isSubmitting,
    values.email,
    values.message,
    values.name,
    values.phone,
  ])

  const handleClose = () => {
    setShowAlert(false)
    setValues(initialState)
  }

  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const onSubmit = e => {
    e.preventDefault()
    setShowAlert(true)
    const validationErrors = validate(values)
    setErrors(validationErrors)
    setSubmitting(true)
  }

  return {
    onSubmit,
    handleChange,
    values,
    error,
    isSubmitting,
    showAlert,
    setShowAlert,
    handleClose,
    alert,
  }
}

export default useFormValidation
