import React from "react";
import { motion } from "framer-motion";
import WhatWeDoCard from "../../components/DentalIT/WhatWeDoCard";

const whatWeDo = [
  "Vulnerability Testing and Certification",
  "Cyber Security Protection",
  "Cloud Based Services",
  "Backup & Disaster Recovery Services",
  "IT Equipment Provision and Configuration",
  "Remote IT Management",
  "Onsite Services",
  "New Clinic Setup & Consultation",
  "Private Internet Services",
  "Webpage Creation and Management",
];

const WhatWeDo = () => {
  return (
    <div className="text-white py-10">
      <div className="grid gap-4 xl:grid-rows-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
        <div className="col-span-1 row-span-2">
          <motion.div
            // initial={{ opacity: 0, x: -40 }}
            // animate={{ opacity: 1, x: 0 }}
            // transition={{ duration: 0.6 }}
            className=""
          >
            <div className="flex gap-4 items-center">
              <motion.div
                // whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="w-fit inline-block px-4 py-1.5 text-xs md:text-sm font-semibold md:font-medium border md:border-2 border-white rounded-full text-white"
              >
                What we do
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

            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl py-4 md:text-5xl font-bold leading-tight"
            >
              What we
              <span className="text-theme"> do?</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white text-sm md:text-base max-w-lg"
            >
              Our trusted technology, recognised by industry experts, identifies
              users with an exclusive Cyber Safe® Certification, allowing
              clients to trust their medical information is secure and safe.
            </motion.p>
          </motion.div>
        </div>
        {whatWeDo.map((item, index) => (
          <div
            key={index}
            className="flex justify-start items-center row-span-1 col-span-1"
          >
            <WhatWeDoCard service={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;
