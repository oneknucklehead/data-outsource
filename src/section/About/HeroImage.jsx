import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../../components/Button";
import aboutBanner from "../../assets/About/aboutBanner.png";
import aboutBanner2 from "../../assets/About/aboutBanner2.png";
import { BadgeCheck } from "lucide-react";

import vidThumb from "../../assets/About/vidThumb.png";
import vid from "../../assets/About/vid.mp4";

const bullets = [
  "Measurable proven results",
  "Customized business strategies",
  "Multi-industry expertise",
  "Innovative real solutions",
  "Reliable expert guidance",
  "Support for long-term",
];

const HeroImage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
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
                  About
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
                Decades of Managed Service Expertise,
                <span className="text-theme"> Powered by the Cloud.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-white text-sm md:text-base max-w-lg"
              >
                Data Outsource was formed in 2008 from a need for a IT Managed
                Service tailored to large retail franchises. Data Outsource led
                on to provide Managed services to over 500 locations across
                Australia and New Zealand.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="text-white text-sm md:text-base max-w-lg"
              >
                However, we could see the market moving to more internet-based
                applications and delivery. So, we adapted our to-market strategy
                to provide Cloud Based services such as Disaster Recovery and
                Back Up leading to Virtual Servers.
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
          </div>
        </section>
      </motion.div>

      <motion.div className="h-fit">
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
                  src={aboutBanner2}
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
                How our platform makes
                <span className="text-theme"> your workflow easier</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-sm md:text-base"
              >
                Our financial management platform is transforming the way people
                manage their money. Here’s what some of our users have to say
                about their experience
              </motion.p>
              <motion.ul className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8">
                {bullets.map((bullet, index) => (
                  <motion.li
                    key={index}
                    className="text-sm md:text-base flex gap-2 items-center"
                  >
                    <BadgeCheck className="w-5 md:w-6" />
                    <span>{bullet}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </section>
      </motion.div>
      <motion.div className="h-fit">
        <section className="relative flex items-center justify-center">
          <div className="py-10 grid md:grid-cols-2 gap-12 md:gap-18 items-center">
            {/* Left Content */}

            <motion.div
              // initial={{ opacity: 0, x: -40 }}
              // animate={{ opacity: 1, x: 0 }}
              // transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <motion.h1
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-5xl font-bold leading-tight"
              >
                Our
                <span className="text-theme"> Story</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-sm md:text-base"
              >
                Eighteen years ago, we saw a problem that frustrated us as
                business owners: IT providers who spoke in technical jargon,
                charged for every conversation, and disappeared when you needed
                them most. So we built something different.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-sm md:text-base"
              >
                Starting on Tasmania's North West Coast, we've grown sustainably
                by focusing on long-term relationships, not quick wins. Our
                clients don't just buy our services—they rely on us for
                strategic IT advice from fellow business owners who understand
                what keeps you up at night.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-sm md:text-base"
              >
                Today, Neveco is the largest MSP on the North West Coast,
                supporting clients from Hobart to Burnie, Strahan to Cressy, and
                beyond. But we're still evolving. Our clients stay with us
                because we help them stay secure, adapt through change, and
                simplify the complex.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-theme font-semibold text-sm md:text-base"
              >
                We're 18 years young—and just getting started.
              </motion.p>
            </motion.div>
            {/* Right Side Graphic */}

            <motion.div className="relative flex justify-center w-full h-full">
              <div className="z-20 w-full h-full mx-auto rounded-2xl overflow-hidden relative">
                <AnimatePresence>
                  {!isPlaying ? (
                    <motion.div
                      key="thumbnail"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="relative cursor-pointer group w-full h-full"
                      onClick={() => setIsPlaying(true)}
                    >
                      {/* Dark overlay */}
                      <div className="w-full h-full rounded-2xl absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all"></div>
                      {/* Thumbnail */}
                      <img
                        src={vidThumb}
                        alt="video thumbnail"
                        className="w-full h-full object-cover"
                      />

                      {/* Play Button */}
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <div className="w-20 h-20 bg-yellow-500/80 rounded-full flex items-center justify-center backdrop-blur-md shadow-xl">
                          <div className="w-0 h-0 border-t-[14px] border-b-[14px] border-l-[22px] border-t-transparent border-b-transparent border-l-white ml-1" />
                        </div>
                      </motion.div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="video"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="relative w-full h-full"
                    >
                      <video
                        src={vid}
                        controls
                        autoPlay
                        className="w-full h-full absolute inset-0 object-cover"
                      ></video>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
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

export default HeroImage;
