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
    title: "Cyber Infrastructure in our Core Network",
    description:
      "Cyber Infrastructure is delivered to suit all our clients needs, whether you are a SMB and need a cloud based server with an experienced IT Team to manage or whether you are a MSP that requires a white labelled product to resell and manage on behalf of your client, Data Outsource can deliver. By subscribing to our Cyber Infrastructure cloud based services you are able to meet modern IT demands with a scale out, cost-efficient, and multi-purpose infrastructure solution for cyber protection and Data Management. Cover all use cases and scenarios with Cyber Infrastructure – a multi-tenant, hyper-converged infrastructure solution for cyber protection. Reduce total cost of ownership (TCO), and maximize productivity with a trusted IT infrastructure solution that runs disaster recovery workloads and stores backup data in an easy, efficient and secure way. All Data and workloads are fully protected with the state of the art Cyber Protect Security that will provide turnkey security on your data asset.",
  },
  {
    image: bannerSrc,
    title: "IT Cloud Platform Summary",
    description:
      "Data Outsource utilises industry-best security when it comes to our cloud-based services. You will have a fully managed and highly secure data centre environment. Our datacloud365 enterprise-class Infrastructure as a Service (IaaS) platform gives you access to state-of-the-art server, hosting, cloud storage and network technologies without the hassle of buying or installing the equipment. Built on the reliable Microsoft stack that your business can count on, our VPS units enable you to deploy servers/our-services for end-users and resellers in a matter of minutes. Data Outsource's extended partnership with Microsoft allows us to provide and manage Office 365, Azure and Microsoft Licence month to month rental options. Our Professional Services Team can plan, migrate, and deploy Microsoft services and products, reducing downtime and improving productivity.",
  },
  {
    image: bannerSrc,
    title: "ON-PREMISE AND CLOUD BASED BACKUP",
    description:
      "Regarding your data we all have one thing in common, no matter their industry: data loss and downtime are catastrophic to their operations. The quality of the server backup and recovery services you offer matters. Data Outsource enables you to deliver an integrated solution that combines the most secure server backup available with flip-of-a-switch disaster recovery — all through a single pane of glass. Dataoutsource provides backup services to multiple platforms, applications and subscriptions such Google workspace and Office 365 at very competitive prices. Data Outsource provides a range of backup targets, whether you want to store your backup data locally or chose one of our data centres located in Brisbane or Sydney, you can even backup locally and to one of our data centres for full redundancy. Protect more than 20 workload types from a single console, including Microsoft Exchange, Microsoft SQL Server, MariaDB, MySQL, Oracle DBMS Real Application clusters, and SAP HANA. Data Outsource delivers a unique approach by combining cloud backup with cyber protection features, such as anti-malware and antivirus – helping you keep clients' data secure.",
  },
  {
    image: bannerSrc,
    title: "ADVANCED DISASTER RECOVERY",
    description:
      "Having a Plan B in the event of a Disaster is critical for all businesses , here's how. Get back to business and restore data in minutes by instantly spinning up systems on our Secondary Cloud and restoring them anywhere, ensuring immediate data availability. Make disaster recovery painless and increase efficiency with orchestration, runbooks, and automatic failover. Activate your Disaster Recovery plan from the same portal that you manage all your other Cyber Security Services with one click, or even test your failovers once a month which is included in the cost. Guarantee uptime with an easy to setup, initiate, cost effective Disaster Recovery Service. All managed in one console, one agent and one license.",
  },
  {
    image: bannerSrc,
    title: "CYBER SECURITY & PROTECTION",
    description:
      " Prevent downtime and data loss with essential cyber protection that's delivered as a monthly easy to use subscription. Cyber Protect Cloud unites backup and next-generation, AI-based anti-malware, antivirus, and endpoint protection management in one solution. Integration and automation provide unmatched ease for its subscribers reducing complexity while increasing productivity and decreasing operating costs. All Cyber securies are wrapped up in one subscription, one console , one agent and one license. The world's best backup and recovery: Full-image and file-level backup and recovery to safeguard workloads on more than 20 platforms – with near-zero RPOs and RTOs. Enhanced with essential cyber protection at no cost: Аdvanced AI-based behavioural detection engine stops malware, ransomware, and zero-day attacks on client workloads. With protection management built for MSPs and SMB's: Integrates data protection, cybersecurity, and endpoint management into a single solution with centralised management. Seamless integration with RMM and PSA systems or fully managed by Data Outsource. Security Auditing & Consultation: Data Outsource by ensuring you are 100% secure and protected offer auditing and consultation services, fitting the right product / service with the requirement.",
  },
  {
    image: bannerSrc,
    title: "Consultancy",
    description:
      "Trusted advice can be hard to find these days, but that's what we're here to offer. At Data Outsource, we like to think of ourselves as the glue that holds together vendors, service providers, and clients. When designing a solution, we take into account all parties and focus on what outcomes your business wants to reach. Data Outsource's consultancy services go beyond the glossy brochures. Whether you need assistance with disaster planning, cloud services, or simply want to improve your business continuity plan, our team will collaborate with you to personalise a solution that works for your unique environment. With much of cross-platform integration and automation being overlooked or misunderstood, Data Outsource engages with all service providers, digging into the granular details to deliver premium solutions and take the hassle out of your next IT project. Some of the Services you can engage with our team with are: DR design, deployment, testing and management; Network, Endpoint, Cloud-based and mobile security Strategies; Office 365, Deployment, Migration and Management; Firewall consultation, deployment and management whether it's cloud-based or physical; Endpoint refreshment strategies, purchasing, configuration and migration.",
  },
  {
    image: bannerSrc,
    title: "MANAGED SERVICES & HELP DESK",
    description:
      "National local based Helpdesk with 24 X 7 monitoring. Data Outsource considers itself at the forefront of technology which demands support and advice to ensure our Resellers and clients get the best from the technology we have recommended. Our helpdesk and engineering pool consists of highly trained individual that come from a Microsoft background or multiple years of working in the industry and so have the skill to assist with complex issues and provide support. Our state-of-the-art monitoring tools provide a pro-active management layer across our Cyber Infrastructure Network, Client on-premises networks and also end points and devices. We at Data Outsource have created a mature Reseller channel which utilises a white labelled helpdesk and support team, allowing the Reseller to build their business knowing data Outsource has got their back. We have all the tools you need to interact, ticketing system, 1300 number, out of hours escalation and reporting.",
  },
  {
    image: bannerSrc,
    title: "HARDWARE & LICENSE PROCUREMENT",
    description:
      "The right hardware and devices can make or break your business. At Data Outsource, we take the hassle out of purchasing hardware and software so that you can successfully run and access your data. Our IT procurement service streamlines the product purchasing process, helping your organisation save time and money. Evaluating and procuring hardware and software can be an incredibly time-consuming process, and without in-depth knowledge of all your options available in the marketplace, it can turn into a high-risk exercise for your business. With strong supplier relationships with major hardware and software vendors, including Microsoft, HP, and Adobe, Data Outsource has the knowledge and skills necessary to complete this work for you, with efficiency and minimal disruption.",
  },
  {
    image: bannerSrc,
    title: "CONTRACTS MANAGEMENT",
    description:
      "As with any business process, making the move from an analogue, pen-and-paper approach to digital technology is nothing short of transformative – or complicated. Data Outsource can help your business with complex digital licencing agreements across multiple platforms, and more. Effective contract management is vital to any business, and more companies are now starting to understand the value of process automation. Data Outsource's contract management software oversees the creation, signature, storage, execution, and review of all contracts within a business. Our process virtually eliminates time bottlenecks and human errors from the process, making your contract management system more agile and in a better position to make informed business decisions. Our software service can not only automate the process of contract management, it also integrates with other office software to facilitate the rapid transmission and sharing of contract data.",
  },
  {
    image: bannerSrc,
    title: "VOIP, CLOUD-BASED PBX & VOICE FOR MICROSOFT TEAMS",
    description:
      "Data Outsource partners with an Australian based VoIP provider and offers services such as, hosted PBX' which can provide telephony services from the client to an on-premise network via handsets or softphones. Alongside PBX services, Data Outsource also offers Voice Integration with Microsoft Teams, transforming your Teams application into your everyday office telephone. Data Outsource will provide the consultancy, deployment, licenses and post-implementation support for your telephony service.",
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
