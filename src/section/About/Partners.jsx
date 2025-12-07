import React from "react";
import SectionTag from "../../components/SectionTag";
import { motion } from "framer-motion";
import StatCard from "../../components/About/StatCard";

import logosrc from "../../assets/HomeImages/partnerLogos/Logo-1.png";
import MarqueeImageItem from "../../components/About/MarqueeImageItem";
import Marquee from "../../components/About/Marquee";

const images = [logosrc, logosrc, logosrc, logosrc];

const Partners = () => {
  return (
    <div>
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
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Marquee className={"container"}>
            <MarqueeImageItem images={images} from={"0%"} to={"-100%"} />
          </Marquee>
        </div>
      </div>
      <div className="py-10">
        <SectionTag tagContent="Partners" />
        <div className="md:mx-auto text-white max-w-2xl text-start md:text-center py-10">
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold leading-tight"
          >
            Our
            <span className="text-theme"> Mission</span>
          </motion.h1>
          <p className="py-4 text-sm md:text-base italic">
            "To protect and empower businesses with smart, secure, and seamless
            technology, delivered with integrity, professionalism, and care."
          </p>
        </div>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <StatCard stat="18+" description="Years Experience" />
          <StatCard stat="15" description="Industry Awards" />
          <StatCard stat="300+" description="Happy Clients" />
          <StatCard stat="24/7" description="Projects Completed" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
