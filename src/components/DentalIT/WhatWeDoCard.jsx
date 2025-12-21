import { Check } from "lucide-react";
import React from "react";

const WhatWeDoCard = ({
  service = "Vulnerability Testing and Certification",
}) => {
  return (
    <div className="flex w-full h-full max-h-[141px] gap-2 items-center border-theme p-3 md:p-4 border-2 rounded-xl">
      <div className="bg-theme rounded-full p-0.5 md:p-1">
        <Check className="text-[#252525] w-4 h-4 md:w-full md:h-full" />
      </div>
      <div className="text-xs md:text-base">{service}</div>
    </div>
  );
};

export default WhatWeDoCard;
