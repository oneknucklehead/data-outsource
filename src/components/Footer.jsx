import React from "react";
import logoYellow from "../assets/logoYellow.png";
import Container from "./Container";
import { Mail, Phone } from "lucide-react";
import fb from "../assets/fb.png";
import x from "../assets/x.png";
import linkedin from "../assets/linkedin.png";
import gps from "../assets/gps.png";
import logoBg from "../assets/logoBg.png";

const footerData = [
  {
    heading: "Our Services",
    links: [
      { title: "Managed IT & Support", url: "/api/managed-it-support" },
      {
        title: "Backup & Disaster Recovery",
        url: "/api/backup-disaster-recovery",
      },
      {
        title: "Cybersecurity & Threat Protection",
        url: "/api/cybersecurity-threat-protection",
      },
      {
        title: "IT Projects & Equipment Supply",
        url: "/api/it-projects-equipment-supply",
      },
      {
        title: "Cloud Services & Modern Workplace",
        url: "/api/cloud-services-modern-workplace",
      },
      {
        title: "Unified Business Communications",
        url: "/api/unified-business-communications",
      },
    ],
  },
  {
    heading: "Quick Links",
    links: [
      { title: "About Us", url: "/api/about-us" },
      {
        title: "Blog",
        url: "/api/blog",
      },
      {
        title: "Support",
        url: "/api/support",
      },
      {
        title: "Contact",
        url: "/api/contact",
      },
      {
        title: "Documents",
        url: "/api/documents",
      },
      {
        title: "Privacy Policy",
        url: "/api/privacy-policy",
      },
    ],
  },
];

const Footer = () => {
  return (
    <div className="relative bg-[#353535] text-white px-6 py-10 overflow-hidden">
      <img src={logoBg} className="hidden md:block absolute inset-0 w-full" />
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
          <div className="">
            <img src={logoYellow} alt="yellow logo " />
            <p className="mb-5 md:mb-0 mt-5 text-sm md:text-base">
              Our financial management platform is transforming the way people
              manage their money. Here’s what some of our users have to say
              about their experience.
            </p>
          </div>
          {footerData.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-lg md:text-2xl">
                {section.heading}
              </h3>
              <div className="w-[50px] bg-theme h-px mt-4"></div>
              <ul className="mt-4 md:mt-10">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="mb-2">
                    <a
                      href={link.url}
                      className="hover:underline  text-sm md:text-base"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="font-semibold text-lg md:text-2xl">Contact Us</h3>
            <div className="w-[50px] bg-theme h-px mt-4"></div>
            <ul className="flex flex-col gap-4 mt-4 md:mt-10">
              <li className="flex items-center gap-2">
                <span className="w-7 md:w-10 ">
                  <img src={gps} className="w-full h-full" />
                </span>
                <p className=" text-sm md:text-base">
                  394 Lane Cove Road, Macquarie Park, NSW 2113
                </p>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-theme p-1 rounded-lg h-7">
                  <Phone className="text-[#353535] w-full h-full" />
                </span>
                <p className=" text-sm md:text-base">1300 600 774</p>
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-theme p-1 rounded-lg h-7">
                  <Mail className="text-[#353535] w-full h-full" />
                </span>
                <p className=" text-sm md:text-base">
                  cloud@dataoutsource.com.au
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 md:mt-20">
          <div className="flex items-center flex-wrap text-xs md:text-sm">
            © {new Date().getFullYear()} Neveco. All rights reserved.
          </div>
          <div className="hidden md:block"></div>
          <div className="hidden md:block"></div>
          <div>
            <span className="flex items-center justify-start gap-4 h-7 md:h-8">
              <a href="" className="w-fit h-full">
                <img src={fb} className="w-full h-full" />
              </a>
              <a href="" className="w-fit h-full">
                <img src={x} className="w-full h-full" />
              </a>
              <a href="" className="w-fit h-full">
                <img src={linkedin} className="w-full h-full" />
              </a>
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
