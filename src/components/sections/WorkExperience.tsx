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
    description: (
      <ul className="list-disc px-5">
        <li>
          Spearheaded the development of high-impact tools that dramatically
          transformed internal processes and operational efficiency
        </li>
        <li>
          Engineered custom Power Apps solutions that reduced workflow timelines
          from weeks to days, significantly enhancing team productivity
        </li>
        <li>
          Developed a Python script for headcount and payment information
          management, optimizing data processing from days to mere seconds
        </li>
        <li>
          Designed a route optimization application that eliminated one
          transportation route, generating monthly savings of approximately
          100,000 MXN
        </li>
        <li>
          Standardized development and deployment workflows, establishing more
          consistent and efficient technological practices
        </li>
      </ul>
    ),
    startDate: "May 2024",
    endDate: "Presente",
    location: "Saltillo, Coahuila, México",
    skills: ["Python", "Power Apps", "Power BI", "SQL Server", "C#", ".NET"],
  },
  {
    logo: Cinvestav,
    company:
      "Centro de Investigación y de Estudios Avanzados del IPN (Cinvestav)",
    position: "Software Engineer & Project Lead",
    description: (
      <ul className="list-disc px-5">
        <li>
          Led the development of a secure, comprehensive data management
          platform for advanced cadet performance evaluation
        </li>

        <li>
          Architected a robust application with multi-layered security features,
          including:
        </li>
        <ul className="list-disc px-5">
          <li>Advanced user role management</li>
          <li>Hierarchical access control</li>
          <li>Sensitive data handling protocols</li>
        </ul>
        <li>
          Created a centralized system integrating four critical evaluation
          modules:
        </li>
        <ol className="list-decimal px-5">
          <li>Visual Attention Module</li>
          <li>Auditory Response Module</li>
          <li>Vehicle Performance Module</li>
          <li>Cadet Physiological Analysis Module</li>
        </ol>
        <li>
          Implemented a sophisticated data visualization interface enabling:
        </li>
        <ul className="list-disc px-5">
          <li>Multimedia test documentation</li>
          <li>Graphical time-based data representation</li>
          <li>AI-generated performance scoring</li>
        </ul>
      </ul>
    ),
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
    description: (
      <ul className="list-disc px-5">
        <li>
          Designed high-conversion landing pages for diverse client portfolios
        </li>
        <li>
          Implemented advanced SEO strategies to improve website search engine
          rankings
        </li>
        <li>
          Developed a rapid digital platform for a hotel chain, creating an
          innovative room service solution:
        </li>
        <ul className="list-disc px-5">
          <li>QR code-based service request system</li>
          <li>Inspired by Rappi/Uber Eats user experience</li>
          <li>Simplified and digitized in-room service processes</li>
        </ul>
      </ul>
    ),
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
    description: (
      <ul className="list-disc px-5">
        <li>
          Established foundational development and deployment infrastructure
        </li>
        <li>
          Implemented a clean, stable code architecture supporting microservices
        </li>
        <li>
          Integrated MQRabbit for seamless communication between Golang, Python,
          and Elixir backend services
        </li>
      </ul>
    ),
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
    description: (
      <ul className="list-disc px-5">
        <li>
          Streamlined helpdesk operations using Python automation, reducing
          resolution times from weeks to days
        </li>
        <li>
          Conducted comprehensive SEO audits and optimizations for client
          websites and blogs
        </li>
        <li>
          Processed and resolved customer support tickets with a focus on
          content optimization and performance improvement
        </li>
      </ul>
    ),
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
    description: (
      <ul className="list-disc px-5">
        <li>
          Digitized and centralized destination wedding management processes
        </li>
        <li>
          Created an automated payment collection system for event logistics
        </li>
        <li>Simplified guest payment and information tracking mechanisms</li>
      </ul>
    ),
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
    description: (
      <ol className="list-decimal px-5">
        <li>Vesvir (Mobile Augmented Reality Application):</li>
        <ul className="list-disc px-5">
          <li>Developed a clothing try-on mobile app using Swift and Kotlin</li>
          <li>
            Integrated AR Foundation and TensorFlow for advanced virtual fitting
            experiences
          </li>
          <li>
            Migrated website from Angular to React, improving code optimization
            and control
          </li>
        </ul>
        <li>Zaturna (B2C Event Platform):</li>
        <ul className="list-disc px-5">
          <li>Focused on frontend development</li>
          <li>Enhanced administrative interfaces</li>
          <li>
            Implemented service request workflows between users and providers
          </li>
        </ul>
        <li>Nexum (Electronic Signature Platform):</li>
        <ul className="list-disc px-5">
          <li>Conducted code review and bug fixing</li>
          <li>Improved overall platform stability and performance</li>
        </ul>
      </ol>
    ),
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
    description: (
      <ul className="list-disc px-5">
        <li>Participated in a quadrotor drone mobility improvement project</li>
        <li>Developed vision-based tools in C/C++ using OpenCV</li>
        <li>
          Implemented optical flow algorithms to detect and correct drone drift
        </li>
        <li>
          Created innovative solutions for addressing imperceptible drone
          movements caused by air currents
        </li>
      </ul>
    ),
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
      className="relative min-h-[230vh] bg-[#111827]" // Altura mínima para habilitar el scroll
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
