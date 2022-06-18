import React, { useState } from "react";

import { AppWrap } from "../../wrapper";
import { client } from "../../client";
import "./Contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [alert, setAlert] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormValid, setIsFormValid] = useState(true);
  const [loading, setloading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setIsFormValid(true);
  };

  const handleSubmit = (e) => {
    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    if (name === "" || !name.match(/^[a-zA-Z ]+$/)) {
      setAlert({
        ...alert,
        name: "Please enter a valid name (Only letters, -, and ' are acceptable)",
      });
      setIsFormValid(false);
    } else if (
      email === "" ||
      !email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      setAlert({
        ...alert,
        email:
          "Please enter a valid email address and remember to add the domain name (Only letters, numbers, @, ., _, and - are acceptable)",
      });
      setIsFormValid(false);
    } else if (message === "") {
      setAlert({ ...alert, message: "Please enter a message" });
      setIsFormValid(false);
    } else {
      setloading(true);

      client
        .create(contact)
        .then(() => {
          setloading(false);
          setIsFormSubmitted(true);
        })
        .catch((error) => console.error(error));

      setTimeout(() => {
        setIsFormSubmitted(false);
        setFormData({ ...formData, name: "", email: "", message: "" });
      }, 3000);
    }

    e.preventDefault();
  };

  return (
    <div className="app__contact app__flex">
      <h2 className="head-text">Contact</h2>

      {!isFormSubmitted ? (
        <form action="" className="app__contact-form app__flex">
          <label style={{ display: !isFormValid ? "block" : "none" }}>
            <small className="alert">{alert.name}</small>
          </label>
          <div className="app__flex app__contact-input">
            <input
              className="p-text"
              placeholder="Your Name"
              type="text"
              name="name"
              value={name}
              onChange={handleChangeInput}
              required
            />
          </div>
          <label style={{ display: !isFormValid ? "block" : "none" }}>
            <small className="alert">{alert.email}</small>
          </label>
          <div className="app__flex app__contact-input">
            <input
              className="p-text"
              placeholder="Your Email"
              type="email"
              name="email"
              value={email}
              onChange={handleChangeInput}
              required
            />
          </div>
          <label style={{ display: !isFormValid ? "block" : "none" }}>
            <small className="alert">{alert.message}</small>
          </label>
          <div className="app__contact-textarea">
            <textarea
              className="p-text"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
              cols="30"
              rows="10"
              required
            ></textarea>
          </div>
          <button type="submit" className="p-text" onClick={handleSubmit}>
            {loading ? "Sending" : "Send Message"}
          </button>
        </form>
      ) : (
        <div>
          <p className="p-text">Thank you for getting in touch!</p>
        </div>
      )}
    </div>
  );
};

export default AppWrap(Contact, "contact");
