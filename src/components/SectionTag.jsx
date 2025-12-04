import React from "react";
import { motion } from "framer-motion";

const SectionTag = ({ tagContent = "Simplify your workflow" }) => {
  return (
    <div className="flex items-center justify-start md:justify-center gap-4 mb-6">
      <span className="hidden md:flex">
        <svg
          width="147"
          height="9"
          viewBox="0 0 147 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M146.33 4.33008L142 -4.91142e-05L137.67 4.33008L142 8.66021L146.33 4.33008ZM0 4.33008V5.08008H142V4.33008V3.58008H0V4.33008Z"
            fill="#FFBA1F"
          />
        </svg>
      </span>
      <motion.div
        // whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="w-fit inline-block px-4 py-1.5 text-xs md:text-sm font-semibold md:font-medium border md:border-2 border-white rounded-full text-white"
      >
        {tagContent}
      </motion.div>
      <span className="hidden md:flex">
        <svg
          width="147"
          height="9"
          viewBox="0 0 147 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-4.91142e-05 4.33008L4.33008 8.66021L8.66021 4.33008L4.33008 -4.91142e-05L-4.91142e-05 4.33008ZM4.33008 4.33008V5.08008H146.33V4.33008V3.58008H4.33008V4.33008Z"
            fill="#FFBA1F"
          />
        </svg>
      </span>

      <div className="flex md:hidden gap-4 items-center">
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
    </div>
  );
};

export default SectionTag;
