import React from "react";
import { motion } from "framer-motion";
import CircularText from "./CircularText";
import  LetterGlitch  from "./LetterGlitch.jsx";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-wrapper">
      {/* Glitch background */}
      <div className="glitch-bg">
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
        />
      </div>

      {/* Foreground loader */}
      <div className="loader-content">
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="loader-title"
        >
          Naitik Verma's Portfolio
        </motion.h1>

        <CircularText text="Loading your awesome portfolio..." />
      </div>
    </div>
  );
};

export default Loader;
