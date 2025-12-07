import React from "react";
import { motion } from "framer-motion";
import aboutBanner from "../../assets/About/aboutBanner.png";
const InfoSection = () => {
  return (
    <div>
      <motion.div className="h-fit text-white">
        <section className="relative flex items-center justify-center">
          <div className="py-10 grid  md:grid-cols-2 gap-12 md:gap-18 items-center">
            {/* Left Side Graphic */}
            <motion.div className="order-2 md:order-1 relative flex justify-center w-full h-full">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="z-10 rounded-2xl overflow-hidden"
              >
                <img
                  src={aboutBanner}
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
            {/* Right Content */}
            <motion.div
              // initial={{ opacity: 0, x: -40 }}
              // animate={{ opacity: 1, x: 0 }}
              // transition={{ duration: 0.6 }}
              className="space-y-6 order-1 md:order-2"
            >
              <motion.h1
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-5xl font-bold leading-tight"
              >
                <span className="text-theme"> Digital Marketing </span>
                and Web Development
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-sm md:text-base"
              >
                Data Outsource provides digital marketing and web development
                services that help businesses achieve their online goals. Their
                team of experts have years of experience in online marketing,
                search engine optimization (SEO), web design, and web
                development. Their services are affordable and customizable to
                meet the specific needs of each customer. Data Outsource is
                dedicated to providing excellent customer service and helping
                their customers succeed online.
              </motion.p>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default InfoSection;
