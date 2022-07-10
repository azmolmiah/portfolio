import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { images } from "../../constants";

import "./Shapes.scss";

const Shapes = () => {
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [0, 100], [-200, -150]);
  const y1 = useTransform(scrollY, [0, 300], [-270, -320]);
  const y2 = useTransform(scrollY, [0, 300], [-970, -1280]);
  const y3 = useTransform(scrollY, [0, 900], [-2050, -2300]);
  const y4 = useTransform(scrollY, [0, 1200], [-2050, -2700]);

  return (
    <motion.div className="app__shapes-container">
      <motion.div style={{ y: y }}>
        <img
          src={images.cloudDark}
          alt="dark clouds"
          className="app__dark-clouds"
        />
      </motion.div>
      <motion.div style={{ y: y1 }} className="app__mountain">
        <img src={images.mountain} alt="mountain" />
      </motion.div>
      <motion.div
        style={{ y: y2 }}
        animate={{ x: [0, -300] }}
        transition={{
          yoyo: Infinity,
          duration: 9,
          restSpeed: 6,
        }}
      >
        <img src={images.cloud} alt="cloud" />
      </motion.div>
      <motion.div style={{ y: y3 }}>
        <img
          src={images.balloon}
          alt="baloon"
          style={{ width: "auto", height: "500px" }}
        />
      </motion.div>
      <motion.div style={{ y: y4 }}>
        <img
          src={images.balloon}
          alt="baloon"
          style={{ width: "auto", height: "200px" }}
        />
      </motion.div>
      <motion.div style={{ y: y3 }}>
        <img
          src={images.balloon}
          alt="baloon"
          style={{
            width: "auto",
            height: "200px",
            position: "absolute",
            right: 0,
          }}
        />
      </motion.div>
      <motion.div style={{ y: y4 }}>
        <img
          src={images.balloon}
          alt="baloon"
          style={{
            width: "auto",
            height: "500px",
            position: "absolute",
            right: 0,
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Shapes;
