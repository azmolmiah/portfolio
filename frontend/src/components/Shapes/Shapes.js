import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { images } from "../../constants";

import "./Shapes.scss";

const Shapes = () => {
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [0, 100], [-200, -150]);
  const y1 = useTransform(scrollY, [0, 300], [-270, -320]);
  const y2 = useTransform(scrollY, [0, 300], [-970, -1280]);

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
    </motion.div>
  );
};

export default Shapes;
