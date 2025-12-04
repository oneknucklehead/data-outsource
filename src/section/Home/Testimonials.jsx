import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ReviewCard from "../../components/Home/ReviewCard";
import reviews from "../../data/Home/ReviewCard";
import SectionTag from "../../components/SectionTag";

const duplicatedReviews = [...reviews, ...reviews, ...reviews, ...reviews];

const Testimonials = () => {
  const CARD_WIDTH = 320;
  const MARGIN = 8;
  const CARD_FULL = CARD_WIDTH + MARGIN * 2;

  const LOOP_WIDTH = reviews.length * CARD_FULL;

  const SPEED = 100; // px per second CONSTANT, NEVER DRIFTS

  const xRef = useRef(0);
  const lastTime = useRef(0);
  const [x, setX] = useState(0);
  const paused = useRef(false);

  // CONSTANT FRAME LOOP
  useEffect(() => {
    const loop = (time) => {
      if (!paused.current) {
        if (lastTime.current) {
          const delta = (time - lastTime.current) / 1000; // seconds
          xRef.current += SPEED * delta;

          if (xRef.current >= LOOP_WIDTH) {
            xRef.current = 0; // perfect reset, no drift
          }

          setX(-xRef.current);
        }
      }
      lastTime.current = time;
      requestAnimationFrame(loop);
    };

    requestAnimationFrame(loop);
  }, []);

  const handleEnter = () => {
    paused.current = true;
  };

  const handleLeave = () => {
    paused.current = false;
  };

  return (
    <div className="py-10">
      <SectionTag tagContent={"Testimonials"} />
      <div className="md:mx-auto text-white max-w-2xl text-start md:text-center">
        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold leading-tight"
        >
          What
          <span className="text-theme"> our clients </span>
          are saying
        </motion.h1>
        <p className="py-4 text-sm md:text-base">
          Our financial management platform is transforming the way people
          manage their money. Here’s what some of our users have to say about
          their experience
        </p>
      </div>
      <div
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
        className="relative w-full py-4 overflow-hidden"
      >
        {/* Fade Edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-28 md:w-60 bg-linear-to-r from-[#252525] to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-28 md:w-60 bg-linear-to-l from-[#252525] to-transparent z-20" />

        <motion.div
          className="flex"
          style={{ x, width: duplicatedReviews.length * CARD_FULL }}
        >
          {duplicatedReviews.map((r, i) => (
            <ReviewCard key={i} {...r} />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
