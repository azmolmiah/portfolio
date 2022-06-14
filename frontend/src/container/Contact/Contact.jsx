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
  const [isFormSubmitted, setisFormSubmitted] = useState(false);
  const [loading, setloading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    setloading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    client.create(contact).then(() => {
      setloading(false);
      setisFormSubmitted(true);
    });

    e.preventDefault();
  };

  return (
    <>
      <div className="app__contact app__flex">
        <h2 className="head-text">Contact</h2>

        {!isFormSubmitted ? (
          <form action="" className="app__contact-form app__flex">
            <div className="app__flex app__contact-input">
              <input
                className="p-text"
                placeholder="Your Name"
                type="text"
                name="name"
                value={name}
                onChange={handleChangeInput}
              />
            </div>
            <div className="app__flex app__contact-input">
              <input
                className="p-text"
                placeholder="Your Email"
                type="email"
                name="email"
                value={email}
                onChange={handleChangeInput}
              />
            </div>
            <div className="app__contact-textarea">
              <textarea
                className="p-text"
                placeholder="Your Message"
                value={message}
                name="message"
                onChange={handleChangeInput}
                id=""
                cols="30"
                rows="10"
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
    </>
  );
};

export default AppWrap(Contact, "contact");
