import React from "react";
import SectionTag from "../../components/SectionTag";
import ContactCards from "../../components/Contact/ContactCards";
import { Mail, MapPin, PhoneCall } from "lucide-react";
const GetInTouch = () => {
  return (
    <div className="py-10">
      <SectionTag tagContent="Get in touch" />
      <div className="flex gap-4 flex-wrap">
        <ContactCards
          lucideLogo={<Mail />}
          heading={"Mail Us"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit augue vel dui porta blandit."
          }
        />
        <ContactCards
          lucideLogo={<PhoneCall />}
          heading={"Call Us"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit augue vel dui porta blandit."
          }
        />
        <ContactCards
          lucideLogo={<MapPin />}
          heading={"Visit Us"}
          description={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean hendrerit augue vel dui porta blandit."
          }
        />
      </div>
    </div>
  );
};

export default GetInTouch;
