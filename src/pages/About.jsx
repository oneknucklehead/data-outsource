import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-screen bg-green-100"
      // initial={{ opacity: 0, y: 50 }}
      // animate={{ opacity: 1, y: 0 }}
      // exit={{ opacity: 0, y: -50 }}
      // transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl font-bold mb-4">About Page</h1>
      <Link to="/" className="text-green-600 underline hover:text-green-800">
        Back to Home
      </Link>
    </motion.div>
  );
};

export default About;
