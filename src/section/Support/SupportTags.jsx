import React from "react";
import SectionTag from "../../components/SectionTag";
import ContactCards from "../../components/Contact/ContactCards";
import { CloudAlert, MailWarning, MonitorX } from "lucide-react";

// Each card maps to the exact option values used in Connect's <select>
const CARDS = [
  {
    lucideLogo: <MailWarning />,
    heading: "Email Issues",
    description: "This is for hosted exchange or O365 issues",
    subject: "Email Issues",
  },
  {
    lucideLogo: <CloudAlert />,
    heading: "Cloud Server Issues",
    description:
      "This is for issues pertaining to Cloud VPS services or Azure services purchased through us",
    subject: "IT Support",
  },
  {
    lucideLogo: <MonitorX />,
    heading: "Desktop Support",
    description: "Any workstation issues",
    subject: "General Inquiry",
  },
];

const SupportTags = ({ setSelectedSubject }) => {
  const handleCardClick = (subject) => {
    setSelectedSubject(subject);
  };

  return (
    <div className="py-10">
      <SectionTag tagContent="Support" />
      <div className="flex flex-wrap items-stretch md:justify-center gap-6 w-full">
        {CARDS.map((card) => (
          <div key={card.subject} className="flex-1 min-w-[180px]">
            <ContactCards
              lucideLogo={card.lucideLogo}
              heading={card.heading}
              description={card.description}
              onClick={() => handleCardClick(card.subject)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SupportTags;
