import React from "react";
import serviceBanner2 from "../../assets/DentalIT/dentalBanner.png";
import Button from "../../components/Button";

const ImageBanner = () => {
  return (
    <div className="text-white pb-10">
      <div className="w-full relative rounded-3xl overflow-hidden border-theme border-2 min-h-[500px] sm:min-h-[400px] lg:h-[450px] flex items-center">
        <img
          src={serviceBanner2}
          alt="background image"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-linear-to-r from-[#1A1717]/90 from-20% to-transparent sm:to-transparent/50 rounded-3xl"></div>

        <div className="absolute inset-0 flex flex-col gap-3 sm:gap-4 justify-center p-6 sm:p-10 lg:p-12 max-w-xl z-10">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
            Data Outsource has redefined IT infrastructure with{" "}
            <span className="text-theme">Dental IT 365</span>
          </h3>

          <p className="text-sm sm:text-base text-white/90">
            Developed exclusively for the Dental Industry using next-generation
            security practices to ensure all data, applications, systems and
            productivity are protected against loss and downtime using
            up-to-the-minute and best-of-breed products and support.
          </p>

          <div className="mt-2">
            <Button className="w-full sm:w-auto">Contact Us</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageBanner;
