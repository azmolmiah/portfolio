const validateAuth = values => {
  const errors = {}
  //Email errors
  if (!values.email) {
    errors.email = "Email Required"
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = "Invalid email address"
  }
  //Name errors
  if (!values.name) {
    errors.name = "Name Required"
  } else if (values.name.length < 2) {
    errors.name = "Name must be more than 2 characters"
  }
  // Phone errors
  if (values.phone !== "") {
    if (
      !/^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/.test(
        values.phone
      )
    ) {
      errors.phone = "Please enter a valid phone number or leave blank"
    }
  }
  //   Message errors
  if (!values.message) {
    errors.message = "Message Required"
  }
  return errors
}

export default validateAuth
