import React, { useEffect, useRef } from "react";
import Flickity from "flickity";
import "flickity/css/flickity.css";
import ServiceCard from "../../components/Services/ServiceCard";
import SectionTag from "../../components/SectionTag";
import { motion } from "framer-motion";

export default function Carousel({ items }) {
  const carouselRef = useRef(null);
  const flickityInstance = useRef(null);

  useEffect(() => {
    flickityInstance.current = new Flickity(carouselRef.current, {
      cellAlign: "center",
      contain: true,
      groupCells: 1,
      wrapAround: true,
      prevNextButtons: false,
      lazyLoad: true,
      draggable: true,
      pageDots: false,
      //   adaptiveHeight: true, // ⭐ allow full card height
      imagesLoaded: true, // ⭐ wait for images before measuring height
    });

    // Fix incorrect height on first load
    setTimeout(() => {
      flickityInstance.current.resize();
      flickityInstance.current.reposition();
    }, 200);

    return () => flickityInstance.current.destroy();
  }, []);

  const goNext = () => flickityInstance.current.next();
  const goPrev = () => flickityInstance.current.previous();

  return (
    <div className="h-fit py-10">
      <SectionTag tagContent="What we provide?" />
      <div className="md:mx-auto text-white max-w-2xl text-start md:text-center">
        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold leading-tight"
        >
          We provide the
          <span className="text-theme"> industry's best </span>
          cloud-based services
        </motion.h1>
        <p className="py-4 text-sm md:text-base">
          Our financial management platform is transforming the way people
          manage their money. Here's what some of our users have to say about
          their experience
        </p>
      </div>
      <div className="relative w-full">
        {/* Fade Edges */}
        <div className="hidden md:block pointer-events-none absolute left-0 top-0 h-full w-[40%] bg-linear-to-r from-[#252525] to-transparent z-20" />
        <div className="hidden md:block pointer-events-none absolute right-0 top-0 h-full w-[40%] bg-linear-to-l from-[#252525] to-transparent z-20" />

        {/* Custom Arrows */}
        <button
          onClick={goPrev}
          className="absolute cursor-pointer left-0 top-1/2 -translate-y-1/2 text-white md:p-3 rounded-full z-30"
        >
          <span className="block md:hidden">
            <svg
              width="22"
              height="40"
              viewBox="0 0 22 67"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.9458 65.0789L1.24917 33.0788L19.9458 1.07886"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
              />
            </svg>
          </span>
          <span className="hidden md:block">
            <svg
              width="22"
              height="67"
              viewBox="0 0 22 67"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.9458 65.0789L1.24917 33.0788L19.9458 1.07886"
                stroke="white"
                stroke-width="2.1573"
                stroke-linecap="round"
              />
            </svg>
          </span>
        </button>

        <button
          onClick={goNext}
          className="absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 text-white  md:p-3 rounded-full z-30"
        >
          <span className="block md:hidden">
            <svg
              width="22"
              height="40"
              viewBox="0 0 22 67"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.07861 1.07886L19.7752 33.0789L1.07861 65.0789"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
              />
            </svg>
          </span>
          <span className="hidden md:block">
            <svg
              width="22"
              height="67"
              viewBox="0 0 22 67"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.07861 1.07886L19.7752 33.0789L1.07861 65.0789"
                stroke="white"
                stroke-width="2.1573"
                stroke-linecap="round"
              />
            </svg>
          </span>
        </button>

        {/* Carousel */}
        <div ref={carouselRef} className="carousel w-full px-10 md:px-12">
          {items.map((item, index) => (
            <div
              key={index}
              className="carousel-cell w-full md:w-1/2 lg:w-1/3 mr-6"
            >
              <ServiceCard
                imgsrc={item.image}
                title={item.title}
                description={item.description}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button className="bg-theme px-4 py-2 text-black font-semibold rounded-full cursor-pointer ">
            Show More
          </button>
        </div>
      </div>
    </div>
  );
}
