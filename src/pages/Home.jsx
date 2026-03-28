import React from "react";
import HeroBanner from "../section/Home/HeroBanner";
import Platform from "../section/Home/Platform";
import Testimonials from "../section/Home/Testimonials";
import Partners from "../section/Home/Partners";
import WhyUs from "../section/Home/WhyUs";
import JoinUs from "../section/JoinUs";
import gradBG from "../assets/gradBG.png";

const Home = () => {
  return (
    <div className="relative w-full">
      {/* <img
        src={gradBG}
        alt="background gradient"
        className="absolute inset-0"
      /> */}
      <div className=" px-6 py-10">
        <HeroBanner />
        {/* <Platform /> */}
        <Testimonials />
        <Partners />
        {/* <WhyUs /> */}
        <JoinUs />
      </div>
    </div>
  );
};

export default Home;
