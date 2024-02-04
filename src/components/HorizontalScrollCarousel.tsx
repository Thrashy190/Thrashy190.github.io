import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Card from "./WorkCard";
import CardMobile from "./WorkCardMobile";
import CardType from "../interfaces/cardInterfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import Ilum from "../assets/ilum.svg";
import Justia from "../assets/justia-logo.svg";
import PositiveLogo from "../assets/PositiveLogo";
import Cinvestav from "../assets/cinvestav.png";
import Arqontact from "../assets/arqontact_cover.jpeg";

const cards: CardType[] = [
  {
    company_name: "Justia",
    rol: "Web service Intern",
    start_date: "Oct 2023",
    description: (
      <div className="p-8 text-xl text-[#242424] flex gap-4 flex-col">
        <p>Support to client sites/blogs whit Wordpress and Justia tools</p>
        <p>
          Developing Tools to automate formatting and extracting content to be
          upload rapidly to sites
        </p>
        <p>Creating Alt img generator with AI model lenguages</p>
      </div>
    ),
    logo: <img className="w-64" src={Justia} alt="Justia Logo" />,
  },
  {
    company_name: "Positive Zero",
    rol: "Fullstack developer Jr",
    start_date: "Agu 2023",
    description: (
      <div className="p-8 text-xl text-[#242424] ">
        Building Full-stack apps for clients (Hotels, Schools, Stores) using
        diverse technologies
      </div>
    ),
    logo: <PositiveLogo />,
  },
  {
    company_name: "Arqontact",
    rol: "Co Founder - Backend Developer",
    start_date: "Jan 2023",
    description: (
      <div className="p-8 text-xl text-[#242424] ">
        Web and mobile application under development to help architects find
        reliable suppliers of materials or services easily and planning projects
      </div>
    ),
    logo: <img className="w-96" src={Arqontact} alt="Arqontact Logo" />,
  },
  {
    company_name: "Freelance developer",
    rol: "Software developer",
    start_date: "Oct 2023",
    description: (
      <div className="p-8 text-xl text-[#242424] ">
        Development of Software application for clients (E-Commerse, Security
        Tools, Landing pages) and IT services for small business
      </div>
    ),
    logo: (
      <FontAwesomeIcon className="w-32 h-32  text-[#242424]" icon={faCode} />
    ),
  },
  {
    company_name: "Ilum prosperity Sherpas",
    rol: "Software Developer",
    start_date: "Jan 2021",
    end_date: "Jan 2023",
    description: (
      <div className="p-8 text-xl text-[#242424] ">
        Software engineer with different responsibilities especially in Frontend
        with VueJS and ReactJS, Basic Exilir (Phoenix) backend development
      </div>
    ),
    logo: <img className="w-52" src={Ilum} alt="Ilum Logo" />,
  },
  {
    company_name: "Cinvestav",
    rol: "Research Intern - Software Research Engineer",
    start_date: "Jun 2022",
    end_date: "Dec 2022",
    description: (
      <div className="p-8 text-xl text-[#242424] flex gap-4 flex-col">
        <p>
          Search a solution for drift in Quadrotors(Drones) with optical flow
          and neural networks
        </p>
        <p>Desktop/Web app for data analysis and media visualization</p>
      </div>
    ),
    logo: <img className="w-64" src={Cinvestav} alt="Cinvestav Logo" />,
  },
];

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["30%", "-70%"]);

  return (
    <div>
      <section
        ref={targetRef}
        className="hidden lg:block relative h-[300vh] bg-[#242424]"
      >
        <div className="sticky top-0 flex h-screen w-screen items-center overflow-x-hidden">
          <motion.div style={{ x }} className="flex gap-4">
            {cards.map((card, index) => {
              return <Card card={card} key={index} />;
            })}
          </motion.div>
        </div>
      </section>
      <div className="lg:hidden flex flex-col gap-6 pt-10">
        {cards.map((card, index) => {
          return <CardMobile card={card} key={index} />;
        })}
      </div>
    </div>
  );
};

export default HorizontalScrollCarousel;
