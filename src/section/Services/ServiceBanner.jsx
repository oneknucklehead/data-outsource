import React from "react";
import Button from "../../components/Button";
import { motion } from "framer-motion";
import serviceBanner from "../../assets/Services/serviceBanner.png";
export const ServiceBanner = () => {
  return (
    <div className="text-white">
      <motion.div className="h-fit flex flex-col items-center justify-center md:-mt-18 min-h-screen">
        <section className="relative min-h-screen flex items-center justify-center">
          <div className="md:py-10 grid md:grid-cols-2 gap-18 items-center">
            {/* Left Content */}
            <motion.div
              // initial={{ opacity: 0, x: -40 }}
              // animate={{ opacity: 1, x: 0 }}
              // transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="flex gap-4 items-center">
                <motion.div
                  // whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-fit inline-block px-4 py-1.5 text-xs md:text-sm font-semibold md:font-medium border md:border-2 border-white rounded-full text-white"
                >
                  Services
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
                className="text-3xl md:text-5xl font-bold leading-tight"
              >
                <span className="text-theme">Data Outsource </span>
                partners with success and perfection to deliver the best every
                time.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-white text-sm md:text-base max-w-lg"
              >
                At Data Outsource, we protect every organization’s data,
                systems, and productivity from loss, theft, and downtime —
                whether caused by cyberattacks, hardware failure, natural
                disasters, or human error.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="text-white text-sm md:text-base max-w-lg"
              >
                Our cyber solutions are fully white-labeled for Reseller MSPs,
                offering end-user support so our partners can focus on growth
                while we manage their cyber footprint.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="text-white text-sm md:text-base max-w-lg"
              >
                Partnered with top IT vendors and holding the highest
                accreditations, Data Outsource ensures best-in-class products,
                services, and unwavering support.
              </motion.p>

              {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-500 text-black font-semibold px-6 py-3 rounded-full flex items-center gap-2 shadow-lg"
            >
              Book A Free Demo <ArrowRight size={18} />
            </motion.button> */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Button>Book A Free Demo</Button>
              </motion.div>
              {/* Trusted Logos */}
            </motion.div>

            {/* Right Side Graphic */}
            <motion.div className="relative flex justify-center w-full h-full">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="z-10 rounded-2xl overflow-hidden"
              >
                <img
                  src={serviceBanner}
                  alt={"About banner"}
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute top-2 md:top-5 left-2 md:left-5 w-full h-full mx-auto rounded-2xl p-0.5 border-theme border-2"
              >
                {/* Inner container */}
              </motion.div>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};
