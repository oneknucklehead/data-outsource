import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import ServiceCard from "../../components/Services/ServiceCard";
import SectionTag from "../../components/SectionTag";

function useCardsPerView() {
  const [count, setCount] = useState(3);
  useEffect(() => {
    const fn = () => {
      const w = window.innerWidth;
      setCount(w < 640 ? 1 : w < 1024 ? 2 : 3);
    };
    fn();
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);
  return count;
}

export default function CarouselNew({ items = [] }) {
  const perView = useCardsPerView();
  const total = items.length;
  const maxIndex = total - perView;
  const [index, setIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef(null);

  const clamp = (n) => Math.max(0, Math.min(n, maxIndex));
  const prev = useCallback(() => setIndex((i) => clamp(i - 1)), [maxIndex]);
  const next = useCallback(() => setIndex((i) => clamp(i + 1)), [maxIndex]);

  useEffect(() => {
    setIndex((i) => clamp(i));
  }, [perView]);

  const offset = -(index * (100 / perView));

  // Drag handlers
  const onDragStart = (e) => {
    setIsDragging(true);
    dragStart.current = e.touches ? e.touches[0].clientX : e.clientX;
  };
  const onDragEnd = (e) => {
    if (dragStart.current === null) return;
    const end = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
    const diff = dragStart.current - end;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    dragStart.current = null;
    setIsDragging(false);
  };

  return (
    <div className="py-10">
      <SectionTag tagContent="What we provide?" />
      <div className="md:mx-auto text-white max-w-2xl text-start md:text-center">
        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-5xl font-bold leading-tight"
        >
          We provide the
          <span className="text-theme"> industry's best </span>
          cloud-based services
        </motion.h1>
        <p className="py-4 text-sm md:text-base">
          Our financial management platform is transforming the way people
          manage their money. Here's what some of our users have to say about
          their experience
        </p>
      </div>
      <div className="relative w-full overflow-hidden py-10 px-4 md:px-12 bg-transparent select-none ">
        {/* Navigation Buttons */}
        <NavBtn onClick={prev} next={false} disabled={index === 0}>
          <span className="block md:hidden">
            <svg
              width="22"
              height="40"
              viewBox="0 0 22 67"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.9458 65.0789L1.24917 33.0788L19.9458 1.07886"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
              />
            </svg>
          </span>
          <span className="hidden md:block">
            <svg
              width="22"
              height="67"
              viewBox="0 0 22 67"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.9458 65.0789L1.24917 33.0788L19.9458 1.07886"
                stroke="white"
                stroke-width="2.1573"
                stroke-linecap="round"
              />
            </svg>
          </span>
        </NavBtn>
        <NavBtn onClick={next} next={true} disabled={index === maxIndex}>
          <span className="block md:hidden">
            <svg
              width="22"
              height="40"
              viewBox="0 0 22 67"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.07861 1.07886L19.7752 33.0789L1.07861 65.0789"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
              />
            </svg>
          </span>
          <span className="hidden md:block">
            <svg
              width="22"
              height="67"
              viewBox="0 0 22 67"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.07861 1.07886L19.7752 33.0789L1.07861 65.0789"
                stroke="white"
                stroke-width="2.1573"
                stroke-linecap="round"
              />
            </svg>
          </span>
        </NavBtn>

        {/* Track Wrapper */}
        <div
          className={`mx-auto ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
          style={{ maxWidth: 1200, overflow: "hidden" }}
          onMouseDown={onDragStart}
          onMouseUp={onDragEnd}
          onTouchStart={onDragStart}
          onTouchEnd={onDragEnd}
        >
          <motion.div
            style={{ display: "flex", alignItems: "stretch" }}
            animate={{ x: `${offset}%` }}
            transition={{ type: "spring", stiffness: 200, damping: 25 }}
          >
            {items.map((card, idx) => (
              <div
                key={card.id ?? idx}
                style={{
                  flex: `0 0 ${100 / perView}%`,
                  padding: "0 12px",
                  display: "flex",
                }}
              >
                <ServiceCard
                  imgsrc={card.image}
                  title={card.title}
                  description={card.description}
                  fullDescription={card.fullDescription}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// --- Sub-components for cleaner code ---

function NavBtn({ onClick, next, disabled, children }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`absolute top-1/2 -translate-y-1/2 z-40 p-2 transition-all cursor-pointer
        ${next ? "-right-2 md:right-4" : "-left-2 md:left-4"} 
        ${disabled ? "opacity-20 cursor-not-allowed" : "opacity-70 hover:opacity-100"}`}
      style={{ color: "white" }}
    >
      {children}
    </button>
  );
}
