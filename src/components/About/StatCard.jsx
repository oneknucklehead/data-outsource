import React from "react";

const StatCard = ({ stat = "18+", description = "Years Experience" }) => {
  return (
    <div className="bg-[#1A1717] border-2 text-white border-theme flex flex-col gap-2 p-4 md:p-6 rounded-2xl text-center">
      <h3 className="text-theme font-bold text-3xl md:text-4xl">{stat}</h3>
      <p className="text-sm md:text-base">{description}</p>
    </div>
  );
};

export default StatCard;
