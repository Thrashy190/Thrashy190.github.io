import { FC, useState, useEffect } from "react";
import { motion } from "framer-motion";
import AtomDB from "../../assets/projects/AtomDB.webp";
import Cosmos from "../../assets/projects/Cosmos.webp";
import Loading from "../../assets/projects/software-Engineering.webp";
import Avgi from "../../assets/projects/AVGI.webp";
import Arqontact from "../../assets/projects/arqontact-web.webp";
import DataStructures from "../../assets/projects/DataStructuresExample.webp";
import DiscordBot from "../../assets/projects/PTR-Discord-Bot.webp";
import ArtificialVision from "../../assets/projects/artificial-vision-python.webp";
import ApiGolang from "../../assets/projects/api-golang.webp";
import Lexical from "../../assets/projects/lexical-syntactic-analyzer.webp";

interface Project {
  id: number;
  title: string;
  description: JSX.Element | string;
  image: string;
  githubLink: string;
  liveLink?: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "AtomDB",
    description:
      "A minimalist, high-performance database management system implemented in C, inspired by SQLite's architecture. AtomDB features a sophisticated B-tree data structure for efficient data insertion and retrieval operations. The project demonstrates advanced low-level programming skills, focusing on creating a lightweight and fast database solution with core database functionality.",
    image: AtomDB,
    githubLink: "https://github.com/Thrashy190/AtomDB",
    technologies: ["C", "Makefile", "Bash", "Linux"],
  },
  {
    id: 2,
    title: "Cosmos CMS",
    description:
      "A high-performance, headless Content Management System (CMS) developed in Rust, designed with a strong emphasis on efficiency and speed. Cosmos CMS offers robust integration with PostgreSQL databases and provides comprehensive features including file management, authentication, and scalable content handling. The project leverages Rust's performance capabilities to create a modern, secure, and flexible content management solution.",
    image: Cosmos,
    githubLink: "https://github.com/Thrashy190/Cosmos",
    technologies: ["Rust", "PostgreSQL", "Rocket"],
  },
  {
    id: 5,
    title: "Arqontact",
    description: (
      <div>
        <p className="mb-4">
          A comprehensive web application tailored for architects, designed to
          streamline material sourcing and project management processes.
          Arqontact serves two primary functions:
        </p>
        <ul className="list-disc px-5">
          <li>
            A marketplace connecting architects with material providers and
            service professionals
          </li>
          <li>
            An integrated project management tool that enables seamless internal
            vendor tracking and collaboration
          </li>
        </ul>
      </div>
    ),
    image: Arqontact,
    githubLink: "https://github.com/Thrashy190/arqontact-web",
    liveLink: "https://arqontact-web.vercel.app/",
    technologies: [
      "Next.js",
      "TailwindCSS",
      "PostgreSQL",
      "Prisma",
      "GraphQL",
      "Django",
    ],
  },
  {
    id: 6,
    title: "Information Center API",
    description: (
      <div>
        <p className="mb-4">
          A sophisticated API developed in Go, engineered to enhance library
          information accessibility for both library staff and students.
          Prioritizing performance, robustness, and security, this API
          revolutionizes educational resource management by:
        </p>
        <ul className="list-disc px-5">
          <li>Facilitating easy information retrieval</li>
          <li>Supporting student project development</li>
          <li>
            Improving overall operational efficiency of the educational
            information center
          </li>
        </ul>
      </div>
    ),
    image: ApiGolang,
    githubLink: "https://github.com/Thrashy190/info-center-api",
    technologies: ["Go", "PostgreSQL", "Gin"],
  },
  {
    id: 8,
    title: "Discord Bot",
    description: (
      <div>
        <p className="mb-4">
          A versatile Discord server assistant developed in Go, offering a wide
          range of functionalities:
        </p>
        <ul className="list-disc px-5">
          <li>User management and moderation tools</li>
          <li>Interactive gaming features</li>
          <li>Integration with multiple external APIs</li>
          <li>Real-time server interaction and engagement</li>
        </ul>
      </div>
    ),
    image: DiscordBot,
    githubLink: "https://github.com/Thrashy190/PTR-Discord-Bot",
    technologies: ["Go", "Discord API"],
  },
  {
    id: 9,
    title: "Artificil Vision Face Detection",
    description:
      "A Python-based computer vision project focusing on facial recognition and emotion detection. The application demonstrates advanced image processing techniques, utilizing libraries for detecting facial features including eyes and smile, with a core emphasis on emotion recognition through visual analysis.",
    image: ArtificialVision,
    githubLink: "https://github.com/Thrashy190/artificial-vision-python",
    technologies: ["Python", "OpenCV"],
  },
  {
    id: 3,
    title: "Loading",
    description: (
      <div>
        <p className="mb-4">
          A comprehensive web platform inspired by Udemy, specifically designed
          for game development professionals and enthusiasts. The platform
          enables users to create, sell, and purchase game development courses.
          Key features include:
        </p>
        <ul className="list-disc px-5">
          <li>Seamless Stripe payment integration</li>
          <li>Firebase backend infrastructure</li>
          <li>Specialized marketplace for game creation education</li>
        </ul>
      </div>
    ),
    image: Loading,
    githubLink: "https://github.com/Thrashy190/software-Engineering",
    technologies: ["React", "Firebase", "Stripe", "TailwindCSS"],
  },
  {
    id: 4,
    title: "Avgi",
    description: (
      <div>
        <p className="mb-4">
          An intelligent career guidance platform designed to support students
          in:
        </p>
        <ul className="list-disc px-5">
          <li>Discovering and exploring potential academic paths</li>
          <li>Reducing academic dropout rates</li>
          <li>Providing personalized learning resources</li>
        </ul>
      </div>
    ),
    image: Avgi,
    githubLink: "https://github.com/Thrashy190/AVGI",
    liveLink: "https://hackathon-2022-b997c.web.app/",
    technologies: ["React", "ReactNode", "Firebase"],
  },

  {
    id: 7,
    title: "Data Structures and Algorithms",
    description:
      "An innovative educational platform focused on simplifying the learning of data structures and algorithms through interactive, graphical visualization. The platform transforms complex computational concepts into intuitive, visually engaging learning experiences, making advanced computer science topics more accessible and comprehensible.",
    image: DataStructures,
    githubLink: "https://github.com/Thrashy190/DataStructuresExample",
    liveLink: "https://thrashy190.github.io/DataStructuresExample/",
    technologies: ["React"],
  },
  {
    id: 10,
    title: "Lexical and Syntactic Analyzer",
    description:
      "A sophisticated programming language analysis tool developed using Bison, Flex, and Python. The project aims to provide an in-depth understanding of lexical and syntactic parsing mechanisms, featuring a user-friendly interface for exploring language structure and compilation processes.",
    image: Lexical,
    githubLink: "https://github.com/Thrashy190/lexical-syntactic-analyzer",
    technologies: ["Python", "Bison", "Flex"],
  },
];

const ProjectSection: FC = () => {
  const words = [
    "Fullstack Web Apps",
    "Aplicaciones de alto rendimiento",
    "Desktop App",
    "Sistemas Distribuidos",
    "Desarrollo de sistemas",
    "Herramientas de programación",
  ];
  const [currentWord, setCurrentWord] = useState("");
  const [index, setIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [forwards, setForwards] = useState(true);
  const [skipCount, setSkipCount] = useState(0);
  const [color, setColor] = useState("text-white");

  const colores = [
    "text-white",
    "text-red-500",
    "text-blue-500",
    "text-green-500",
    "text-yellow-500",
    "text-purple-500",
    "text-pink-500",
    "text-indigo-500",
    "text-gray-500",
    "text-black",
  ];

  const skipDelay = 15;
  const speed = 70;

  useEffect(() => {
    const interval = setInterval(() => {
      if (forwards) {
        if (offset >= words[index].length) {
          setSkipCount((prev) => prev + 1);
          if (skipCount === skipDelay) {
            setForwards(false);
            setSkipCount(0);
          }
        } else {
          setOffset((prev) => prev + 1);
        }
      } else {
        if (offset === 0) {
          setForwards(true);
          setIndex((prev) => (prev + 1) % words.length);
        } else {
          setOffset((prev) => prev - 1);
        }
      }
      setColor(colores[index]);
      setCurrentWord(words[index].substr(0, offset));
    }, speed);

    return () => clearInterval(interval);
  }, [words, index, offset, forwards, skipCount, skipDelay, speed]);
  return (
    <section id="projects" className="min-h-[200vh] bg-[#111827]">
      <div className="grid grid-cols-3 h-auto text-white font-raleway">
        {/* Columna Sticky */}
        <div className="sticky top-0 p-10 pt-20 flex flex-col justify-center items-center text-4xl h-[70vh]">
          <span>Creando Proyectos de</span>
          <span className={color}>{currentWord}</span>
        </div>

        {/* Columna Scrollable */}
        <div className="flex flex-row flex-wrap col-span-2 ">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white bg-opacity-10 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 m-10 w-2/5"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-3xl font-medium mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 text-xl">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-[#deccff] text-[#111827] rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
