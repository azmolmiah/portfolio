import React from "react"
import contactStyles from "./contact.module.scss"

const Contact = () => {
  return (
    <section id="contact" className={contactStyles.contact}>
      <div className="container ">
        <h3 className={`text-center mb-5 ${contactStyles.title}`}>
          Contact me with this form
        </h3>

        <form
          className={`shadow transition-up ${contactStyles.form}`}
          id="myForm"
          action="POST"
          name="Portfolio"
          data-netlify="true"
        >
          <div className="form-group">
            <div className="row">
              <div className="col-md-6">
                <div id="nameAlert"></div>
                <label>Name:</label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Enter full name here..."
                />
                <div id="emailAlert"></div>
                <label>Email:</label>
                <input
                  id="email"
                  type="email"
                  name="email"
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
                  style={{ height: "84.5%" }}
                ></textarea>
              </div>

              <button
                type="submit"
                className={`btn my-button mx-3 mt-4 btn-block ${contactStyles.button}`}
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
