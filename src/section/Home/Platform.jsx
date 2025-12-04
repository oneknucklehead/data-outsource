import React from "react";
import PlatformCard from "../../components/Home/PlatformCard";
import imgsrc from "../../assets/HomeImages/cardDummy.png";
import { motion } from "framer-motion";
import platform from "../../data/Home/PlatformCard";
const Platform = () => {
  return (
    <div className="py-10 ">
      <div className="md:mx-auto text-white max-w-2xl text-start md:text-center">
        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold leading-tight"
        >
          How our platform makes{" "}
          <span className="text-theme">your workflow easier</span>
        </motion.h1>
        <p className="py-4 text-sm md:text-base">
          Our financial management platform is transforming the way people
          manage their money. Here’s what some of our users have to say about
          their experience
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        {platform.map((item, index) => (
          <PlatformCard
            key={index}
            heading={item.heading}
            yellowHeading={item.yellowHeading}
            imgsrc={imgsrc}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Platform;
