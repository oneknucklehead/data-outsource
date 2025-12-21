import React from "react";
import SectionTag from "../../components/SectionTag";
import ContactCards from "../../components/Contact/ContactCards";
import { CloudAlert, Mail, MonitorX } from "lucide-react";
const SupportTags = () => {
  return (
    <div className="py-10">
      <SectionTag tagContent="Support" />
      <div className="flex flex-wrap md:justify-center gap-6 w-full">
        {/* Card 1: Mail */}
        <div className="flex-1 min-w-[180px]">
          <ContactCards
            lucideLogo={<Mail />}
            heading={"Email Issues"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit augue vel dui porta blandit."
            }
          />
        </div>

        {/* Card 2: Call */}
        <div className="flex-1">
          <ContactCards
            lucideLogo={<CloudAlert />}
            heading={"Cloud Server Issues"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit augue vel dui porta blandit."
            }
          />
        </div>

        {/* Card 3: Visit */}
        <div className="flex-1">
          <ContactCards
            lucideLogo={<MonitorX />}
            heading={"Desktop Support"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit augue vel dui porta blandit."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default SupportTags;
