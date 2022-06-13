import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./Nav.scss";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  // Add an active function here like the active filter from projects component

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

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
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