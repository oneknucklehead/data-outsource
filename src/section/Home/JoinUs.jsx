import React from "react";
import SectionTag from "../../components/SectionTag";
import { motion } from "framer-motion";
import Button from "../../components/Button";

const JoinUs = () => {
  return (
    <div className="py-10">
      <SectionTag tagContent="Join Us" />
      <div className="md:mx-auto text-white max-w-2xl text-start md:text-center py-10">
        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold leading-tight"
        >
          Ready to transform your
          <span className="text-theme"> IT Office Technology? </span>
        </motion.h1>
        <p className="py-4 text-sm md:text-base">
          Streamline your business's financial management with our intuitive,
          scalable SaaS platform. Designed for U.S. enterprises, our solutions
          simplify complex processes.
        </p>
      </div>
      <div className="flex items-center justify-start md:justify-center">
        <Button>
          <p>Book A Free Demo</p>
        </Button>
      </div>
    </div>
  );
};

export default JoinUs;
