import React from "react"
import contactStyles from "./contact.module.scss"
// Custom hooks
import useFormValidation from "./useFormValidation"
import validateAuth from "./validateAuth"

const initialState = {
  name: "",
  email: "",
  message: "",
}

const Contact = () => {
  const {
    onSubmit,
    handleChange,
    values,
    onBlur,
    isSubmitting,
    showAlert,
    error,
    handleClose,
    alert,
  } = useFormValidation(initialState, validateAuth)
  return (
    <section id="contact" className={contactStyles.contact}>
      <div className="container ">
        <h3 className={`text-center mb-5 ${contactStyles.title}`}>
          Contact me with this form
        </h3>

        <form
          className={`shadow transition-up ${contactStyles.form}`}
          onSubmit={onSubmit}
          action="POST"
          name="Portfolio"
          data-netlify="true"
        >
          {showAlert && (
            <div
              className={`alert ${alert} alert-dismissible fade show`}
              role="alert"
            >
              <strong>{`${error}!`}</strong>
              <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close"
                onClick={handleClose}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          )}
          <div className="form-group">
            <div className="row">
              <div className="col-md-6">
                <div id="nameAlert"></div>
                <label>Name:</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={values.name}
                  onBlur={onBlur}
                  className="form-control"
                  placeholder="Enter full name here..."
                />
                <div id="emailAlert"></div>
                <label>Email:</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                  onBlur={onBlur}
                  className="form-control"
                  placeholder="Enter email address here..."
                />
                <div id="phoneAlert"></div>
                <label>Phone:</label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  className="form-control"
                  placeholder="Enter phone number here..."
                />
              </div>
              <div className="col-md-6">
                <div id="messageAlert"></div>
                <label>Message:</label>
                <textarea
                  id="message"
                  name="message"
                  cols="30"
                  className="form-control"
                  onChange={handleChange}
                  value={values.message}
                  onBlur={onBlur}
                  style={{ height: "84.5%" }}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn my-button mx-3 mt-4 btn-block shadow ${contactStyles.button}`}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
