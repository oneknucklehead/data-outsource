import React from "react";
import { ServiceBanner } from "../section/Services/ServiceBanner";
import Carousel from "../section/Services/Carousel";
import bannerSrc from "../assets/About/aboutBanner.png";
import InfoSection from "../section/Services/InfoSection";
import FAQAccordion from "../section/Services/FAQAccordion";
import AllServiceTags from "../section/Services/AllServiceTags";
import ImageCard from "../components/ImageCard";
// import ImageCard from "../section/Services/ImageCard";
const data = [
  {
    image: bannerSrc,
    title: "Cloud Platform Summary",
    description:
      "Data Outsource has deployed Acronis Cyber Infrastructure to manage the core infrastructure. Data Outsource has deployed Acronis Cyber Infrastructure to manage the core infrastructure.",
  },
  {
    image: bannerSrc,
    title: "Cloud Platform Summary",
    description:
      "Data Outsource has deployed Acronis Cyber Infrastructure to manage the core infrastructure.",
  },
  {
    image: bannerSrc,
    title: "Cloud Platform Summary",
    description:
      "Data Outsource has deployed Acronis Cyber Infrastructure to manage the core infrastructure.",
  },
  {
    image: bannerSrc,
    title: "Cyber Infrastructure in our Core Network",
    description:
      "We have deployed Acronis CI to handle security and backbone operations.",
  },
  {
    image: bannerSrc,
    title: "On-Premise and Cloud Backup",
    description: "Backup + security with enterprise-grade infrastructure.",
  },
  {
    image: bannerSrc,
    title: "On-Premise and Cloud Backup",
    description: "Backup + security with enterprise-grade infrastructure.",
  },
  {
    image: bannerSrc,
    title: "On-Premise and Cloud Backup",
    description: "Backup + security with enterprise-grade infrastructure.",
  },
];

const Services = () => {
  return (
    <div className="px-6 py-10">
      <ServiceBanner />
      <Carousel items={data} />
      <InfoSection />
      <AllServiceTags />
      {/* <ImageCard /> */}
      <ImageCard />
      <FAQAccordion />
    </div>
  );
};

export default Services;
