import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./Nav.scss";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const variants = {
    visible: { x: [300, 0] },
    hidden: { x: [-300, 0] },
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {["home", "projects", "contact"].map((section) => (
          <li className="app__flex p-text" key={`link-${section}`}>
            <a href={`#${section}`}>{section}</a>
            <div></div>
          </li>
        ))}
      </ul>

      <div
        className="app__navbar-menu"
        style={{ transition: "all 0.3s ease-" }}
      >
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            // whileInView={{ x: [300, 0] }}
            animate={toggle ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 1.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "projects", "contact"].map((section) => (
                <li key={section}>
                  <a href={`#${section}`} onClick={() => setToggle(false)}>
                    {section}
                  </a>
                  {/* <div></div> */}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
