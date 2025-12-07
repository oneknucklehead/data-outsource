import React from "react";
import HeroBanner from "../section/Home/HeroBanner";
import Platform from "../section/Home/Platform";
import Testimonials from "../section/Home/Testimonials";
import Partners from "../section/Home/Partners";
import WhyUs from "../section/Home/WhyUs";
import JoinUs from "../section/JoinUs";

const Home = () => {
  return (
    <div className="px-6 py-10">
      <HeroBanner />
      <Platform />
      <Testimonials />
      <Partners />
      <WhyUs />
      <JoinUs />
    </div>
  );
};

export default Home;
