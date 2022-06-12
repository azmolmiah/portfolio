import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { client } from "../../client";
import "./Header.scss";

const Header = () => {
  const [headerInfo, setHeaderInfo] = useState([]);
  useEffect(() => {
    const query = '*[_type == "header"]';
    client.fetch(query).then((data) => setHeaderInfo(data));
  }, []);

  return (
    <div className="app__header app__flex">
      <div className="app__header-text">
        <h1 className="head-text">
          <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 3 }}
          >
            {headerInfo.map((header) => {
              return header.titleOne;
            })}
          </motion.div>
          <motion.div
            whileInView={{ x: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 3 }}
          >
            {headerInfo.map((header) => {
              return header.titleTwo;
            })}
          </motion.div>
        </h1>
        <p className="p-text" style={{ textAlign: "center" }}>
          {headerInfo.map((header) => {
            return header.description;
          })}
        </p>
      </div>
      <div className="app__header-scroll-content">
        <div className="app__header-scroll">
          <span></span>
        </div>
        <a href="#projects" className="p-text">
          Projects
        </a>
        <div></div>
      </div>
    </div>
  );
};

export default AppWrap(Header, "home");
