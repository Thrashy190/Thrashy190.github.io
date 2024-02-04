import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import "../index.css";
import Resume from "../documents/Resume.pdf";

const NavBar = (): JSX.Element => {
  const { scrollYProgress } = useScroll();
  const [scrollTop, setScrollTop] = useState(0);
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const names = [
    { name: "About Me", link: "about-me" },
    { name: "Work Experience", link: "work" },
    { name: "Projects", link: "project" },
    { name: "Tools", link: "tools" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = (id: string) => {
    console.log(id);
    const section = document.getElementById(id);
    section?.scrollIntoView({ block: "start", behavior: "smooth" });
  };

  return (
    <div className={`z-10 hidden lg:block fixed w-full`}>
      <div
        className={` pr-6 pt-4 pb-4 text-lg font-bold transition-colors duration-500 flex flex-row justify-around  ${
          scrollTop > 10 ? "bg-[#881337]" : "bg-[#242424]"
        }`}
      >
        <div className="flex flex-row justify-between items-center">
          <div className="text-white">Diego Lopez</div>
          <span className="px-2">|</span>
          <div className="text-white">Thrashy 💀</div>
        </div>

        <ul
          className={`flex flex-row justify-end gap-6 transition-colors duration-500 text-white `}
        >
          {names.map(({ name, link }, index) => {
            return (
              <li
                key={index}
                className={`transition-colors duration-500 cursor-pointer p-2 ${
                  scrollTop > 10
                    ? "hover:text-[#242424]"
                    : "hover:text-[#881337]"
                }`}
                onClick={() => {
                  handleScroll(link);
                }}
              >
                <span>{name}</span>
              </li>
            );
          })}
          <li
            className={`transition-colors duration-500 cursor-pointer p-2 ${
              scrollTop > 10 ? "hover:text-[#242424]" : "hover:text-[#881337]"
            }`}
          >
            <a href="/">Contact</a>
          </li>
          <li
            className={`transition-colors duration-500 cursor-pointer p-2 ${
              scrollTop > 10
                ? "hover:text-[#242424] border-2 hover:border-[#242424] border-white rounded-lg"
                : "hover:text-[#881337] border-2 hover:border-[#881337] border-white rounded-lg"
            }`}
          >
            <a href={Resume} target="_blank">
              Resume
            </a>
          </li>
        </ul>
      </div>
      <motion.div className="progress-bar" style={{ scaleX }} />
    </div>
  );
};
export default NavBar;
