import React from "react";
import SectionTag from "../../components/SectionTag";
import { motion } from "framer-motion";
import WhyUsCard from "../../components/About/WhyUsCard";

const WhyUs = () => {
  return (
    <div>
      <div className="py-10">
        <SectionTag tagContent="Why Us>" />
        <div className="md:mx-auto text-white max-w-2xl text-start md:text-center py-10">
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold leading-tight"
          >
            Why Choose
            <span className="text-theme"> Data Outsource?</span>
          </motion.h1>
          <p className="py-4 text-sm md:text-base">
            Our financial management platform is transforming the way people
            manage their money. Here's what some of our users have to say about
            their experience
          </p>
        </div>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <WhyUsCard />
          <WhyUsCard />
          <WhyUsCard />
          <WhyUsCard />
          <WhyUsCard />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
