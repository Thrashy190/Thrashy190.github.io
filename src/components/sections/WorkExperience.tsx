import { FC, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Justia from "../../assets/cards/justia-logo.svg";
import PositiveLogo from "../../assets/cards/positive.svg";
import Arqontact from "../../assets/cards/arqontact.svg";
import Ilum from "../../assets/cards/ilum.svg";
import Cinvestav from "../../assets/cards/cinvestav.svg";
import ZF from "../../assets/cards/zf.svg";
import Computer from "../../assets/cards/computer.svg";

import ExperienceCard from "../cards/ExperienceCard";

import { ExperienceCardProps } from "../../Interfaces/ExperienceCardInterface";

const cards: ExperienceCardProps[] = [
  {
    logo: ZF,
    company: "ZF",
    position: "Software Engineer",
    description:
      "Lideré el desarrollo de una aplicación web de gran escala utilizando React y Next.js. Implementé prácticas de optimización de rendimiento y mejoré la accesibilidad del sitio. Lideré el desarrollo de una aplicación web de gran escala utilizando React y Next.js. Implementé prácticas de optimización de rendimiento y mejoré la accesibilidad del sitio.",
    startDate: "May 2024",
    endDate: "Presente",
    location: "Saltillo, Coahuila, México",
    skills: ["Python", "Power Apps", "Power BI", "SQL Server", "C#", ".NET"],
  },
  {
    logo: Cinvestav,
    company:
      "Centro de Investigación y de Estudios Avanzados del IPN (Cinvestav)",
    position: "Software Engineer",
    description:
      "Lideré el desarrollo de una aplicación web de gran escala utilizando React y Next.js. Implementé prácticas de optimización de rendimiento y mejoré la accesibilidad del sitio.",
    startDate: "Jun 2023",
    endDate: "Nov 2024",
    location: "Saltillo, Coahuila, México",
    skills: [
      "Tauri",
      "Rust",
      "ReactJS",
      "NodeJS",
      "MongoDB",
      "NestJS",
      "Big Data",
      "Data Science",
      "PlotlyJS",
      "AWS",
      "Nginx",
    ],
  },
  {
    logo: Computer,
    company: "FreeLance",
    position: "Software Engineer - Full Stack Developer",
    description:
      "Lideré el desarrollo de una aplicación web de gran escala utilizando React y Next.js. Implementé prácticas de optimización de rendimiento y mejoré la accesibilidad del sitio.",
    startDate: "Jan 2023",
    endDate: "Jul 2024",
    location: "Saltillo, Coahuila, México",
    skills: [
      "Python",
      "ReactJS",
      "NodeJS",
      "MongoDB",
      "GraphQL",
      "AWS",
      "Docker",
      "PostgreSQL",
      "Django",
      "NestJS",
      "Prisma",
      "Flask",
    ],
  },
  {
    logo: Arqontact,
    company: "Arqontact",
    position: "Backend Developer - Co-Founder",
    description:
      "Lideré el desarrollo de una aplicación web de gran escala utilizando React y Next.js. Implementé prácticas de optimización de rendimiento y mejoré la accesibilidad del sitio.",
    startDate: "Jan 2023",
    endDate: "Jul 2024",
    location: "Saltillo, Coahuila, México",
    skills: [
      "ReactJS",
      "AWS",
      "postgreSQL",
      "GraphQL",
      "Docker",
      "Redis",
      "NestJS",
      "Prisma",
      "Elixir",
      "Phoenix",
    ],
  },
  {
    logo: Justia,
    company: "Justia",
    position: "Web Service Intern",
    description:
      "Lideré el desarrollo de una aplicación web de gran escala utilizando React y Next.js. Implementé prácticas de optimización de rendimiento y mejoré la accesibilidad del sitio.",
    startDate: "Oct 2023",
    endDate: "Apr 2024",
    location:
      "Mountain View, California, Estados Unidos (Remoto) - Saltillo, Coahuila, México",
    skills: ["Python", "Wordpress", "HelpDesk", "Support", "AWS"],
  },
  {
    logo: PositiveLogo,
    company: "Positive Zero",
    position: "Software Engineer",
    description:
      "Lideré el desarrollo de una aplicación web de gran escala utilizando React y Next.js. Implementé prácticas de optimización de rendimiento y mejoré la accesibilidad del sitio. ",
    startDate: "Agu 2023",
    endDate: "Feb 2024",
    location: "Saltillo, Coahuila, México",
    skills: [
      "Typescript",
      "ReactJS",
      "NextJS",
      "AWS",
      "NodeJS",
      "GraphQL",
      "PostgreSQL",
      "Docker",
      "Django",
    ],
  },

  {
    logo: Ilum,
    company: "Ilum Prosperity Sherpas",
    position: "Full Stack Developer",
    description:
      "Lideré el desarrollo de una aplicación web de gran escala utilizando React y Next.js. Implementé prácticas de optimización de rendimiento y mejoré la accesibilidad del sitio.",
    startDate: "Jan 2021",
    endDate: "Jan 2023",
    location: "Chihuahua, Chihuahua, México (Rermoto)",
    skills: [
      "Python",
      "ReactJS",
      "Firebase",
      "ELixir",
      "Phoenix",
      "PostgreSQL",
      "Amplify",
      "GraphQL",
      "VueJS",
    ],
  },
  {
    logo: Cinvestav,
    company:
      "Centro de Investigación y de Estudios Avanzados del IPN (Cinvestav)",
    position: "Research Intern",
    description:
      "Lideré el desarrollo de una aplicación web de gran escala utilizando React y Next.js. Implementé prácticas de optimización de rendimiento y mejoré la accesibilidad del sitio.",
    startDate: "Jun 2022",
    endDate: "Sept 2022",
    location: "Saltillo, Coahuila, México",
    skills: [
      "Python",
      "C/C++",
      "OpenCV",
      "AI",
      "Artificial vision",
      "Machine Learning",
      "Neural Networks",
    ],
  },
];

const WorkExperienceSection: FC = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const translateX = useTransform(scrollYProgress, [0, 1], ["120%", "-115%"]);

  return (
    <section
      id="work"
      ref={targetRef}
      className="relative min-h-[200vh] bg-[#111827]" // Altura mínima para habilitar el scroll
    >
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ x: translateX }} className="flex gap-10">
          {cards.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WorkExperienceSection;
