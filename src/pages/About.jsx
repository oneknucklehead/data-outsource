import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeroImage from "../section/About/HeroImage";
import WhyUs from "../section/About/WhyUs";

const About = () => {
  return (
    <div className="px-6 py-10">
      <HeroImage />
      <WhyUs />
    </div>
  );
};

export default About;
