import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-white py-4">
      {/* Question */}
      <button
        onClick={onClick}
        className="flex cursor-pointer justify-between items-center w-full text-left"
      >
        <span className="text-sm md:text-lg font-medium">{question}</span>

        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-2xl w-fit h-fit leading-none"
        >
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 7.4L0 1.4L1.4 0L6 4.6L10.6 0L12 1.4L6 7.4Z"
              fill="white"
            />
          </svg>
        </motion.span>
      </button>

      {/* Answer (Animated) */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="text-xs md:text-base pt-3 text-white">{answer}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What services do you provide?",
      answer:
        "We offer full-stack web development, mobile apps, UI/UX design, and cloud-based solutions.",
    },
    {
      question: "How long does a project take?",
      answer:
        "Project timelines vary, but most websites are completed in 2–4 weeks depending on complexity.",
    },
    {
      question: "Do you provide maintenance?",
      answer:
        "Yes, we offer monthly maintenance packages including updates, backups, and performance monitoring.",
    },
    {
      question: "How do we get started?",
      answer:
        "You can contact us through our website or schedule a call. We’ll discuss your requirements and prepare a proposal.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto py-10 text-white">
      <h2 className="text-3xl md:text-5xl font-bold leading-tight text-center mb-8">
        Frequently Asked <span className="text-theme"> Questions</span>
      </h2>

      {faqData.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(index === openIndex ? null : index)}
        />
      ))}
    </div>
  );
}
