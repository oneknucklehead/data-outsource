import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react"; // Optional: for a better UI
import switchDummyImg from "../../assets/DentalIT/switches/switchImg.png";
import Button from "../../components/Button";
import switchesData from "../../data/DentalIT/switches";

const TabSwitch = () => {
  const [activeSwitch, setActiveSwitch] = useState(switchesData[0]);

  const toggleSwitch = (item) => {
    setActiveSwitch(item);
  };

  return (
    <div className="text-white">
      {/* DESKTOP LAYOUT (Visible on lg and up) */}
      <div className="hidden lg:flex gap-10 items-stretch">
        {/* LEFT CONTENT */}
        <div className="w-[60%]">
          <div className="max-w-xl">
            <ActiveContent item={activeSwitch} />
          </div>
        </div>

        {/* CENTER DIVIDER */}
        <div className="flex items-center">
          <div className="w-px bg-linear-to-b from-transparent via-[#CC9519] to-transparent h-full"></div>
        </div>

        {/* RIGHT LIST */}
        <div className="w-[40%] flex flex-col justify-center">
          {switchesData.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActiveSwitch(item)}
              className={`font-semibold py-5 cursor-pointer transition-colors border-b border-white/20 last:border-0
                ${
                  activeSwitch.id === item.id
                    ? "text-theme"
                    : "text-white/80 hover:text-white"
                }`}
            >
              {item.title} {item.titleInYellow}
            </div>
          ))}
        </div>
      </div>

      {/* MOBILE ACCORDION (Visible below lg) */}
      <div className="lg:hidden flex flex-col gap-4">
        {switchesData.map((item, index) => {
          const isOpen = activeSwitch.id === item.id;
          return (
            <div
              key={item.id}
              className={`${
                item.id === switchesData.length ? "" : "border-b"
              } border-white/10 pb-4`}
            >
              {/* Accordion Header */}
              <button
                onClick={() => toggleSwitch(item)}
                className={`w-full flex justify-between items-center text-left font-semibold text-sm
                  ${isOpen ? "text-theme" : "text-white"}`}
              >
                <span>
                  {item.title} {item.titleInYellow}
                </span>
                {/* <ChevronDown
                 
                /> */}

                <svg
                  className={`transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  width="12"
                  height="8"
                  viewBox="0 0 12 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 7.4L0 1.4L1.4 0L6 4.6L10.6 0L12 1.4L6 7.4Z"
                    fill="white"
                  />
                </svg>
              </button>

              {/* Accordion Body */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pt-2 pb-4">
                      <ActiveContent item={item} isMobile={true} />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Reusable Content Component to keep code DRY
const ActiveContent = ({ item, isMobile = false }) => (
  <motion.div
    key={item.id}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="px-4"
  >
    {/* Image Wrapper */}
    <div className="relative w-full">
      <div className="relative z-10 rounded-2xl overflow-hidden mt-4">
        <img
          src={item.imgSrc}
          alt={item.title}
          className={`w-full object-cover ${
            isMobile ? "h-[200px]" : "h-[280px]"
          }`}
        />
      </div>
      <div className="absolute top-3 left-3 w-full h-full rounded-2xl border-2 border-theme pointer-events-none" />
    </div>

    {/* Text content - Only show title if not in mobile accordion header */}
    {!isMobile && (
      <h3 className="text-xl font-semibold leading-tight mt-10">
        {item.title} <span className="text-theme">{item.titleInYellow}</span>
      </h3>
    )}

    <p className="text-xs sm:text-base text-white mt-2 py-4">
      {item.description}
    </p>

    <Button>Contact Us</Button>
  </motion.div>
);

export default TabSwitch;
