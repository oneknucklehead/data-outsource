import React from "react";
import imgSrc from "../../assets/HomeImages/cardDummy.png";
const PlatformCard = ({
  imgsrc = imgSrc,
  heading = "Sign up and",
  yellowHeading = "customer",
  description = "Create your account in minutes and tailor the company's unique financial needs.",
}) => {
  return (
    <div className="border-2 border-theme p-4 rounded-2xl">
      <div className="">
        <img src={imgsrc} className="rounded-2xl object-cover w-full h-full" />
      </div>
      <h1 className="text-white pt-4 pb-2 font-semibold text-xl md:text-3xl">
        {heading}{" "}
        <span className="text-theme">{yellowHeading && yellowHeading}</span>
      </h1>
      <p className="text-white text-sm md:text-base">{description}</p>
    </div>
  );
};

export default PlatformCard;
