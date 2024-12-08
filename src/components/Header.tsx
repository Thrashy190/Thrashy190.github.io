import { useEffect, useState } from "react";
import Resume from "../assets/Resume Diego Lopez.pdf";

const Header = () => {
  const [fontSize, setFontSize] = useState("7.64vw");
  const [translateY, setTranslateY] = useState("30vh");
  const [hasScrolledFullScreen, setHasScrolledFullScreen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;

      if (scrollY >= viewportHeight) {
        setHasScrolledFullScreen(true);
      } else {
        setHasScrolledFullScreen(false);
      }

      const start = 0.45 * viewportHeight;
      const progress = Math.min(Math.max((start - scrollY) / start, 0), 1);

      const interpolatedFontSize = 7.64 - (7.64 - 2) * (1 - progress);
      const interpolatedTranslateY = 30 - 30 * (1 - progress);

      setFontSize(`${interpolatedFontSize}vw`);
      setTranslateY(`${interpolatedTranslateY}vh`);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);

    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="flex flex-row justify-between  pt-5 fixed top-0 left-0 right-0 bottom-auto z-20 font-medieval ">
      <div className="z-20 flex flex-row justify-center items-center pl-10">
        <span
          onClick={() => handleScroll("home")}
          className="text-white text-2xl font-bold cursor-pointer"
        >
          Thrashy
        </span>
      </div>
      <div className="absolute z-10 flex justify-center items-center mr-auto ml-auto left-0 right-0">
        <span
          style={{
            fontSize: fontSize,
            transform: `translateY(${translateY})`,
          }}
          onClick={() => handleScroll("home")}
          className={`font-bold cursor-pointer text-white text-${
            hasScrolledFullScreen ? "white" : "white"
          }`}
        >
          Diego Lopez
        </span>
      </div>
      <div className="z-20 flex flex-row justify-center items-center pr-10">
        <ul className="list-none text-white font-semibold  flex flex-row justify-center items-center gap-5 text-2xl">
          <li className="cursor-pointer hover:underline hover:text-[#deccff] pt-2">
            <span onClick={() => handleScroll("about")}>About</span>
          </li>
          <li className="cursor-pointer hover:underline hover:text-[#deccff] pt-2">
            <span onClick={() => handleScroll("work")}>Work Experience</span>
          </li>
          <li className="cursor-pointer hover:underline hover:text-[#deccff] pt-2">
            <span onClick={() => handleScroll("projects")}>Projects</span>
          </li>
          <li className="cursor-pointer hover:underline hover:text-[#deccff] pt-2">
            <span onClick={() => handleScroll("tools")}>Tools</span>
          </li>
          <li className="cursor-pointer hover:underline hover:text-[#deccff] pt-2">
            <span onClick={() => handleScroll("contact")}>Contact</span>
          </li>
          <li className="cursor-pointer border-solid border-2 border-[#deccff] px-4 pt-2 rounded-full hover:bg-[#deccff] hover:text-black">
            <a href={Resume} target="_blank">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
