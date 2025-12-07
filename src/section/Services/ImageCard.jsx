import React from "react";
import serviceBanner2 from "../../assets/Services/serviceBanner2.png";
import Button from "../../components/Button";

const ImageCard = () => {
  return (
    <div className="text-white">
      <div className="w-full relative rounded-3xl overflow-hidden border-theme border-2">
        {/* Background Image */}
        <img
          src={serviceBanner2}
          alt="background image"
          className="w-full h-60 sm:h-80 lg:h-full object-cover"
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-linear-to-r from-[#1A1717]/90 from-20% to-transparent rounded-3xl"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col gap-3 sm:gap-4 justify-center p-4 sm:p-6 lg:p-12 max-w-md">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
            Take the <span className="text-theme">next step</span>
          </h3>

          <p className="text-sm sm:text-base">
            Let us show you how to transform your current IT environment into a
            modern workplace.
          </p>

          <div className="mt-2">
            <Button>Request a consultation</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
