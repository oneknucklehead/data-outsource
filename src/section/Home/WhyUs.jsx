import React from "react";
import { motion } from "framer-motion";
import { whyUsDataRowOne, whyUsDataRowTwo } from "../../data/Home/WhyUsContent";
import WhyUsCard from "../../components/Home/whyUsCard";

const WhyUs = () => {
  return (
    <div className="space-y-8 py-10">
      <div className="flex flex-col md:grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-6 flex flex-col items-start justify-center gap-4">
          <div className="flex gap-4 items-center">
            <motion.div
              // whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="w-fit inline-block px-4 py-1.5 text-xs md:text-sm font-semibold md:font-medium border md:border-2 border-white rounded-full text-white"
            >
              Why Us?
            </motion.div>
            <span className="max-w-[120px] md:max-w-fit">
              <svg
                width="100%"
                height="9"
                viewBox="0 0 229 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.19209e-05 4.33014L4.33014 8.66027L8.66027 4.33014L4.33014 1.19209e-05L1.19209e-05 4.33014ZM4.33014 4.33014V5.08014H228.281V4.33014V3.58014H4.33014V4.33014Z"
                  fill="#FFBA1F"
                />
              </svg>
            </span>
          </div>
          <div>
            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-5xl font-bold leading-tight text-white"
            >
              Empower your <br />
              <span className="text-theme"> financial operations</span>
            </motion.h1>
          </div>
          <p className="text-white">
            Our financial management platform is transforming <br /> the way
            people manage their money.
          </p>
        </div>
        {whyUsDataRowOne.map((item, index) => (
          <div key={index} className="col-span-12 md:col-span-3 flex">
            <WhyUsCard
              logo={item.logo}
              heading={item.heading}
              description={item.description}
            />
          </div>
        ))}
      </div>
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
