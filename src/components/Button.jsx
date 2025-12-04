import React from "react";
import { motion } from "framer-motion";
const Button = ({ children }) => {
  return (
    <div className="group w-fit  rounded-full">
      <motion.button
        whileTap={{ scale: 0.97 }}
        className="relative overflow-hidden cursor-pointer bg-theme text-black font-semibold px-4 md:px-6 py-2 md:py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
      >
        <span
          className="absolute inset-0 bg-linear-to-r from-transparent via-white/50 to-transparent 
      -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"
        ></span>

        <span className="text-sm md:text-base relative z-10">{children}</span>
      </motion.button>
    </div>
  );
};

export default Button;
