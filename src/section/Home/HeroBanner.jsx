import React from "react";
import { motion } from "framer-motion";

import src1 from "../../assets/logo1.png";
import Lottie from "lottie-react";
import serverLottie from "../../assets/homeServerLottie.json";
import Button from "../../components/Button";
import { ArrowRight } from "lucide-react";

const logos = [{ img: src1 }, { img: src1 }, { img: src1 }, { img: src1 }];

const HeroBanner = () => {
  return (
    <div>
      <motion.div
        className="flex flex-col items-center justify-center md:-mt-18 min-h-screen"
        // initial={{ opacity: 0, y: 50 }}
        // animate={{ opacity: 1, y: 0 }}
        // transition={{ duration: 0.6 }}
      >
        <section className="relative overflow-hidden text-white min-h-screen flex items-center justify-center">
          <div className="md:py-10 grid md:grid-cols-2 gap-12 items-center">
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
                  Simplify your workflow
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
                Enhance your business with{" "}
                <span className="text-theme">
                  AI First Tech control from Data Outsource
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-white text-normal md:text-lg max-w-lg"
              >
                Streamline your business’s financial management with our
                intuitive, scalable SaaS platform. Designed for U.S. — our
                solutions simplify complex processes.
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
                transition={{ duration: 0.7 }}
              >
                <Button>Book A Free Demo</Button>
              </motion.div>
              {/* Trusted Logos */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="md:pt-6"
              >
                <p className="text-white md:text-lg font-semibold mb-3">
                  Trusted by over 2k+ company
                </p>
                <div className="flex flex-wrap items-center gap-4 md:gap-6 opacity-70">
                  {logos.map((logo, index) => (
                    <img
                      key={index}
                      src={logo.img}
                      alt="logo"
                      className="h-6 w-auto object-cover"
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side Graphic */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center aspect-square"
            >
              {/* <div className="relative">
              
              <div className="absolute inset-0 bg-blue-500 blur-3xl opacity-20 rounded-full"></div>
              
              <img
                src="/your-illustration.png"
                alt="AI Stack"
                className="relative w-80 md:w-96 drop-shadow-2xl"
              />
            </div> */}
              <Lottie animationData={serverLottie} loop={true} />
            </motion.div>
          </div>
        </section>
        <div className="py-10">
          <svg
            width="321"
            height="9"
            viewBox="0 0 321 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.19209e-05 4.33008L4.33014 8.66021L8.66027 4.33008L4.33014 -4.91142e-05L1.19209e-05 4.33008ZM320.66 4.33008L316.33 -4.91142e-05L312 4.33008L316.33 8.66021L320.66 4.33008ZM4.33014 4.33008V5.08008H316.33V4.33008V3.58008H4.33014V4.33008Z"
              fill="#FFBA1F"
            />
          </svg>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroBanner;
