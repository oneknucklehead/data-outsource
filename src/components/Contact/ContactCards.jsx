import { Mail } from "lucide-react";
import React from "react";

const ContactCards = ({
  logo,
  lucideLogo = <Mail />,
  heading,
  description,
}) => {
  return (
    <div className="flex gap-4 items-start p-4 md:p-8 bg-[#1A1717] rounded-2xl border-2 border-theme">
      {" "}
      {/* Use a specific color for 'theme' for clarity */}
      {/* Position the quote icon absolutely */}
      <div className="max-w-16 bg-theme rounded-full flex items-center justify-center w-fit p-2">
        {logo && <img src={logo} alt="card logo" />}
        {lucideLogo && lucideLogo}
      </div>
      {/* Content starts below the quote icon's original position */}
      <div className="">
        {" "}
        {/* Added padding to push content down slightly */}
        <h3 className="text-xl md:text-2xl font-bold text-theme">
          {heading}
        </h3>{" "}
        {/* Consistent color */}
        <p className="text-xs md:text-base text-white">{description}</p>
      </div>
    </div>
  );
};

export default ContactCards;
