import { Mail } from "lucide-react";
import React from "react";

const ContactCards = ({
  logo,
  lucideLogo = <Mail />,
  heading,
  description,
  onClick,
}) => {
  return (
    <div
      className={`flex h-full gap-4 transition duration-300 items-start p-4 md:p-8 bg-[#1A1717] rounded-2xl border-2 border-theme
      ${onClick ? "cursor-pointer hover:bg-[#252525] " : ""}
      `}
      onClick={onClick}
    >
      {" "}
      <div className="max-w-16 bg-theme rounded-full flex items-center justify-center w-fit p-2">
        {logo && <img src={logo} alt="card logo" />}
        {lucideLogo && lucideLogo}
      </div>
      <div className="">
        {" "}
        <h3 className="text-xl md:text-2xl font-bold text-theme">
          {heading}
        </h3>{" "}
        <p className="text-xs md:text-base text-white">{description}</p>
      </div>
    </div>
  );
};

export default ContactCards;
