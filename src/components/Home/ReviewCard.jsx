// src/components/ReviewCard.jsx
import React from "react";

const ReviewCard = ({ name, location, reviewText }) => {
  return (
    <div className="relative shrink-0 w-fit max-w-60 md:max-w-96 p-4 md:p-6 bg-[#1A1717] rounded-lg shadow-xl m-4 border-2 border-theme">
      {" "}
      {/* Use a specific color for 'theme' for clarity */}
      {/* Position the quote icon absolutely */}
      <div className="absolute top-1 left-12 -translate-x-1/2 -translate-y-1/2 bg-theme rounded-full flex items-center justify-center w-fit p-3">
        <svg
          width="25"
          height="25"
          viewBox="0 0 33 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-2.74181e-05 24.7842V17.4205C-2.74181e-05 15.3296 0.409063 13.1933 1.22724 11.0114C2.04543 8.82963 3.12497 6.77282 4.46588 4.841C5.80679 2.90918 7.26134 1.29554 8.82952 8.7738e-05L15.2386 3.78418C13.9659 5.78418 12.9204 7.87509 12.1022 10.0569C11.3068 12.2387 10.9091 14.6705 10.9091 17.3524V24.7842H-2.74181e-05ZM17.2159 24.7842V17.4205C17.2159 15.3296 17.625 13.1933 18.4432 11.0114C19.2613 8.82963 20.3409 6.77282 21.6818 4.841C23.0227 2.90918 24.4772 1.29554 26.0454 8.7738e-05L32.4545 3.78418C31.1818 5.78418 30.1363 7.87509 29.3182 10.0569C28.5227 12.2387 28.125 14.6705 28.125 17.3524V24.7842H17.2159Z"
            fill="white"
          />
        </svg>
      </div>
      {/* Content starts below the quote icon's original position */}
      <div className="pt-8">
        {" "}
        {/* Added padding to push content down slightly */}
        <h3 className="text-xl md:text-2xl font-bold text-theme">
          {name}
        </h3>{" "}
        {/* Consistent color */}
        <p className="text-lg md:text-xl font-bold text-white mb-2 md:mb-4">
          {location}
        </p>
        <p className="text-sm md:text-base text-white">{reviewText}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
