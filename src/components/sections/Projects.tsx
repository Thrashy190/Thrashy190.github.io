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
  description: string;
  image: string;
  githubLink: string;
  liveLink?: string;
  technologies: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "AtomDB",
    description: "Base datos hecha en C/C++ inpirtada en SQLite",
    image: AtomDB,
    githubLink: "https://github.com/Thrashy190/AtomDB",
    technologies: ["C", "Makefile", "Bash", "Linux"],
  },
  {
    id: 2,
    title: "Cosmos CMS",
    description:
      "Headless CMS hecho en Rust con Rocket y PostgreSQL como base de datos.",
    image: Cosmos,
    githubLink: "https://github.com/Thrashy190/Cosmos",
    technologies: ["Rust", "PostgreSQL", "Rocket"],
  },
  {
    id: 5,
    title: "Arqontact",
    description:
      "Una aplicación web para gestionar tareas diarias con características de arrastrar y soltar, etiquetas y recordatorios.",
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
    description:
      "Una aplicación web para gestionar tareas diarias con características de arrastrar y soltar, etiquetas y recordatorios.",
    image: ApiGolang,
    githubLink: "https://github.com/Thrashy190/info-center-api",
    technologies: ["Go", "PostgreSQL", "Gin"],
  },
  {
    id: 8,
    title: "Discord Bot",
    description:
      "Una aplicación web para gestionar tareas diarias con características de arrastrar y soltar, etiquetas y recordatorios.",
    image: DiscordBot,
    githubLink: "https://github.com/Thrashy190/PTR-Discord-Bot",
    technologies: ["Go", "Discord API"],
  },
  {
    id: 9,
    title: "Artificil Vision Face Detection",
    description:
      "Una aplicación web para gestionar tareas diarias con características de arrastrar y soltar, etiquetas y recordatorios.",
    image: ArtificialVision,
    githubLink: "https://github.com/Thrashy190/artificial-vision-python",
    technologies: ["Python", "OpenCV"],
  },
  {
    id: 3,
    title: "Loading",
    description:
      "Una aplicación web para gestionar tareas diarias con características de arrastrar y soltar, etiquetas y recordatorios.",
    image: Loading,
    githubLink: "https://github.com/Thrashy190/software-Engineering",
    technologies: ["React", "Firebase", "Stripe", "TailwindCSS"],
  },
  {
    id: 4,
    title: "Avgi",
    description:
      "Una aplicación web para gestionar tareas diarias con características de arrastrar y soltar, etiquetas y recordatorios.",
    image: Avgi,
    githubLink: "https://github.com/Thrashy190/AVGI",
    liveLink: "https://hackathon-2022-b997c.web.app/",
    technologies: ["React", "ReactNode", "Firebase"],
  },

  {
    id: 7,
    title: "Data Structures and Algorithms",
    description:
      "Una aplicación web para gestionar tareas diarias con características de arrastrar y soltar, etiquetas y recordatorios.",
    image: DataStructures,
    githubLink: "https://github.com/Thrashy190/DataStructuresExample",
    liveLink: "https://thrashy190.github.io/DataStructuresExample/",
    technologies: ["React"],
  },
  {
    id: 10,
    title: "Lexical and Syntactic Analyzer",
    description:
      "Una aplicación web para gestionar tareas diarias con características de arrastrar y soltar, etiquetas y recordatorios.",
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
                <p className="text-gray-300 mb-4 text-2xl">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-[#deccff] text-[#111827] rounded-full text-xs font-semibold"
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
