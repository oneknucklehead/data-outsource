import React from "react";
import SectionTag from "../../components/SectionTag";
import { motion } from "framer-motion";
import {
  Laptop,
  Wrench,
  Code2,
  Target,
  Smartphone,
  Megaphone,
} from "lucide-react";

const services = [
  { icon: <Laptop size={34} />, title: "Web Design" },
  {
    icon: <Wrench size={34} />,
    title: "Custom Website Development & Web Designing",
  },
  { icon: <Code2 size={34} />, title: "Software Development" },
  {
    icon: <Target size={34} />,
    title: "Search Engine Optimization (SEO) Services",
  },
  { icon: <Smartphone size={34} />, title: "Social Media Marketing Services" },
  {
    icon: <Megaphone size={34} />,
    title: "Online Advertising and SEM Services",
  },
];

const AllServiceTags = () => {
  return (
    <div className="text-white py-10">
      <SectionTag tagContent="Digital marketing and Web Development" />

      <section className="w-full py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`
  flex flex-col items-center justify-center gap-3
  py-6 md:py-12 px-6
  hover:bg-yellow-500/10 transition-all duration-300
 border-theme

  /* MOBILE (2 columns) */
  ${index % 2 === 0 ? "border-r" : ""}
  ${index < 4 ? "border-b" : ""}

  /* DESKTOP (3 columns) */
  ${index < 3 ? "md:border-b" : "md:border-b-0"}
  ${index % 3 !== 2 ? "md:border-r" : "md:border-r-0"}

  /* FIX overriding from mobile -> remove extra borders */
  ${index === 2 ? "md:border-r-0" : ""}
  ${index === 3 ? "md:border-b-0" : ""}
`}
              >
                <div className="text-theme">{service.icon}</div>

                <h3 className="text-white text-center text-sm md:text-lg font-medium leading-tight">
                  {service.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllServiceTags;
