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
      question: "Does DataOutsource only sell to resellers?",
      answer:
        "Yes, DataOutsource makes a concentrated effort to only sell to resellers or MSP providers. You will find our services very user-friendly and easy on the wallet. No matter if you are just starting out on the cloud journey or are a veteran in the space, DataOutsource can help you develop and maintain world-class cloud services for your end users. We do not compete with you for customers and help you onboard new customers right from providing marketing material to helping you create your first environment.",
    },
    {
      question:
        "What if we do not have the in-house expertise or technicians to manage the customer business?",
      answer:
        "Normally we prefer you have a direct relationship with the customer but we also offer a managed service where we manage and maintain the customer's environment for an additional cost. This frees you from the worry of additional support overhead and enables you to win additional clients for your business. Apart from this, a lot of resellers use us an escalation point for their support issues or use our resources to deliver and maintain a complex project like migrating to Microsoft Azure or setting up a complex Microsoft RDS Farm.",
    },
    {
      question:
        "During your several years of dealing with the cloud, what is the biggest challenge voiced by your customers when it comes to upselling cloud?",
      answer:
        "One of the biggest challenges faced by cloud providers when upselling their services is the concern over data security and privacy. Clients often worry about the safety and accessibility of their data on the cloud and may have concerns about compliance with regulatory frameworks. Another challenge is the difficulty in choosing the right cloud service or provider that can best suit their needs, as there are a plethora of options available in the market. In addition, there can be concerns about the hidden costs associated with cloud services, as well as the need for specialised skills and expertise to manage and maintain the cloud environment. Addressing these challenges and ensuring clarity and transparency around the services offered can help in successfully upselling cloud services to customers.",
    },
    {
      question: "Can we get a trial of your services?",
      answer:
        "Yes, we offer a one month trial of our services. We also offer a free no-commitment demo of our services wherein we show the different services, their use cases and answer any questions regarding those services that might be a good fit for your business. Simply write to us at cloud@dataoutsource.com.au for more info.",
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
