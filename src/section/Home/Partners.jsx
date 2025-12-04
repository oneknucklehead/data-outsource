import React from "react";
import SectionTag from "../../components/SectionTag";
import { motion } from "framer-motion";
import logos from "../../data/Home/PartnerLogos";

const Partners = () => {
  return (
    <div className="py-10">
      <SectionTag tagContent="Partners" />
      <div className="md:mx-auto text-white max-w-2xl text-start md:text-center py-10">
        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold leading-tight"
        >
          Our industry
          <span className="text-theme"> leading partners</span>
        </motion.h1>
        <p className="py-4 text-sm md:text-base">
          We work with industry leaders to deliver the best solutions for our
          clients
        </p>
      </div>
      <div className="flex items-center md:justify-center gap-4 md:gap-8 mt-4 flex-wrap">
        {logos.map((logo, index) => (
          <div className="" key={index}>
            <img
              src={logo}
              className="w-full h-full max-w-36 md:max-w-3xs"
              alt={"logo " + index}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
