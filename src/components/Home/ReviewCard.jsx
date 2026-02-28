// src/components/ReviewCard.jsx
import React, { useState, useEffect, useCallback, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ name, location, reviewText, onClose }) => {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        onClose();
      }
    };
    document.addEventListener("keydown", handleKey, true);

    // Lock body scroll without layout shift
    const scrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    return () => {
      document.removeEventListener("keydown", handleKey, true);
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollY);
    };
  }, [onClose]);

  const handleBackdropClick = useCallback(
    (e) => {
      e.stopPropagation();
      e.preventDefault();
      onClose();
    },
    [onClose],
  );

  const handleModalClick = useCallback((e) => {
    e.stopPropagation();
  }, []);

  const QuoteIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 33 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M-2.74181e-05 24.7842V17.4205C-2.74181e-05 15.3296 0.409063 13.1933 1.22724 11.0114C2.04543 8.82963 3.12497 6.77282 4.46588 4.841C5.80679 2.90918 7.26134 1.29554 8.82952 8.7738e-05L15.2386 3.78418C13.9659 5.78418 12.9204 7.87509 12.1022 10.0569C11.3068 12.2387 10.9091 14.6705 10.9091 17.3524V24.7842H-2.74181e-05ZM17.2159 24.7842V17.4205C17.2159 15.3296 17.625 13.1933 18.4432 11.0114C19.2613 8.82963 20.3409 6.77282 21.6818 4.841C23.0227 2.90918 24.4772 1.29554 26.0454 8.7738e-05L32.4545 3.78418C31.1818 5.78418 30.1363 7.87509 29.3182 10.0569C28.5227 12.2387 28.125 14.6705 28.125 17.3524V24.7842H17.2159Z"
        fill="white"
      />
    </svg>
  );

  return createPortal(
    <>
      <div
        className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
        onClick={handleBackdropClick}
        onTouchEnd={handleBackdropClick}
      />
      <div
        className="fixed z-50 bg-[#1A1717] border-2 border-theme shadow-2xl
          bottom-0 left-0 right-0 rounded-t-2xl p-5 max-h-[85vh] overflow-y-auto
          md:bottom-auto md:left-1/2 md:right-auto md:top-1/2
          md:-translate-x-1/2 md:-translate-y-1/2
          md:w-full md:max-w-lg md:rounded-xl md:p-8 md:max-h-[80vh]"
        onClick={handleModalClick}
        onTouchEnd={handleModalClick}
      >
        {/* Mobile drag handle */}
        <div className="flex justify-center mb-5 md:hidden">
          <div className="w-10 h-1 rounded-full bg-white/30" />
        </div>

        {/* Quote icon + close button */}
        <div className="flex items-start justify-between mb-4">
          <div className="bg-theme rounded-full flex items-center justify-center p-2.5 md:p-3">
            <QuoteIcon />
          </div>
          <button
            onClick={handleBackdropClick}
            className="text-white/60 hover:text-white cursor-pointer transition-colors p-1"
            aria-label="Close modal"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div>
          <h3 className="text-lg md:text-2xl font-bold text-theme">{name}</h3>
          <p className="text-base md:text-xl font-bold text-white mb-3 md:mb-4">
            {location}
          </p>
          <p className="text-sm md:text-base text-white leading-relaxed">
            {reviewText}
          </p>
        </div>
      </div>
    </>,
    document.body,
  );
};

const TRUNCATE_LENGTH = 100;

const ReviewCard = ({
  name,
  location,
  reviewText,
  onModalOpen,
  onModalClose,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const isLong = reviewText.length > TRUNCATE_LENGTH;
  const truncated = isLong
    ? reviewText.slice(0, TRUNCATE_LENGTH).trimEnd()
    : reviewText;

  const openModal = useCallback(
    (e) => {
      e.stopPropagation();
      onModalOpen?.(); // pause the carousel
      setIsModalOpen(true);
    },
    [onModalOpen],
  );

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    onModalClose?.(); // resume the carousel
  }, [onModalClose]);

  return (
    <>
      <div className="relative shrink-0 w-72 sm:w-80 md:max-w-96 p-4 md:p-6 bg-[#1A1717] rounded-lg shadow-xl m-3 md:m-4 border-2 border-theme">
        {/* Quote icon */}
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

        <div className="pt-8">
          <h3 className="text-xl md:text-2xl font-bold text-theme">{name}</h3>
          <p className="text-lg md:text-xl font-bold text-white mb-2 md:mb-4">
            {location}
          </p>
          <p className="text-sm md:text-base text-white">
            {isLong ? (
              <>
                {truncated}...{" "}
                <button
                  onClick={openModal}
                  className="text-theme font-semibold hover:underline focus:outline-none whitespace-nowrap"
                >
                  Read more
                </button>
              </>
            ) : (
              reviewText
            )}
          </p>
        </div>
      </div>

      {isModalOpen && (
        <Modal
          name={name}
          location={location}
          reviewText={reviewText}
          onClose={closeModal}
        />
      )}
    </>
  );
};

export default ReviewCard;
