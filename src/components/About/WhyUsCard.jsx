import React from "react";
import imgsrc from "../../assets/HomeImages/WhyUsLogos/Service.png";
const WhyUsCard = ({
  heading = "Fast-Track Results",
  description = "Accelerate your growth journey with Datagrid's cutting-edge analytics. Accelerate your growth journey.",
  logo = imgsrc,
}) => {
  return (
    <div className="flex gap-4 items-start max-w-full md:max-w-[30%] p-4 md:p-6 bg-[#1A1717] rounded-2xl shadow-xl border-2 border-theme">
      {" "}
      {/* Use a specific color for 'theme' for clarity */}
      {/* Position the quote icon absolutely */}
      <div className="max-w-16 bg-theme rounded-full flex items-center justify-center w-fit p-2">
        <img src={logo} alt="card logo" />
      </div>
      {/* Content starts below the quote icon's original position */}
      <div className="">
        {" "}
        {/* Added padding to push content down slightly */}
        <h3 className="text-xl md:text-2xl font-bold text-theme">
          {heading}
        </h3>{" "}
        {/* Consistent color */}
        <p className="text-sm md:text-base text-white">{description}</p>
      </div>
    </div>
  );
};

export default WhyUsCard;
