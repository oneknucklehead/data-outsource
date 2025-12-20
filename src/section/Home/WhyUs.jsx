import React from "react";
import { motion } from "framer-motion";
import { whyUsDataRowOne, whyUsDataRowTwo } from "../../data/Home/WhyUsContent";
import WhyUsCard from "../../components/Home/whyUsCard";
import SectionTag from "../../components/SectionTag";

const WhyUs = () => {
  return (
    <div className="space-y-8 py-10">
      <SectionTag tagContent={"Why Us?"} />
      <div className="md:mx-auto text-white max-w-2xl text-start md:text-center">
        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold leading-tight"
        >
          Empower your
          <span className="text-theme"> financial operations</span>
        </motion.h1>
        <p className="py-4 text-sm md:text-base">
          Our financial management platform is transforming the way people
          manage their money.
        </p>
      </div>
      {/* {whyUsDataRowOne.map((item, index) => (
          <div key={index} className="col-span-12 md:col-span-3 flex">
            <WhyUsCard
              logo={item.logo}
              heading={item.heading}
              description={item.description}
            />
          </div>
        ))} */}
      <div className="grid grid-cols-3 gap-8">
        {whyUsDataRowTwo.map((item, index) => (
          <div className="col-span-3 md:col-span-1">
            <WhyUsCard
              logo={item.logo}
              heading={item.heading}
              description={item.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
