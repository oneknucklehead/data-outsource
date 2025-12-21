import React from "react";
import SectionTag from "../../components/SectionTag";
import ContactCards from "../../components/Contact/ContactCards";
import { Mail, MapPin, PhoneCall } from "lucide-react";
const GetInTouch = () => {
  return (
    <div className="py-10">
      <SectionTag tagContent="Get in touch" />
      <div className="flex flex-wrap md:justify-center gap-6 w-full">
        {/* Card 1: Mail */}
        <div className="flex-1 min-w-[180px]">
          <ContactCards
            lucideLogo={<Mail />}
            heading={"Mail Us"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit augue vel dui porta blandit."
            }
          />
        </div>

        {/* Card 2: Call */}
        <div className="flex-1">
          <ContactCards
            lucideLogo={<PhoneCall />}
            heading={"Call Us"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit augue vel dui porta blandit."
            }
          />
        </div>

        {/* Card 3: Visit */}
        <div className="flex-1">
          <ContactCards
            lucideLogo={<MapPin />}
            heading={"Visit Us"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit augue vel dui porta blandit."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
