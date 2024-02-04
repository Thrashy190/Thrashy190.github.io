import { motion, useScroll, useSpring, useCycle } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import "../index.css";
import Resume from "../documents/Resume.pdf";

const useDimensions = (ref: any) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    dimensions.current.width = ref.current.offsetWidth;
    dimensions.current.height = ref.current.offsetHeight;
  }, []);

  return dimensions.current;
};

const Path = (props: any) => (
  <motion.path
    fill="white"
    strokeWidth="3"
    stroke="hsl(360, 100%, 100%)"
    strokeLinecap="round"
    {...props}
  />
);

export default function NavbarMobile() {
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
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  return (
    <div className="z-10 lg:hidden fixed w-full">
      <div
        className={` pr-6 pt-4 pb-4 text-lg font-bold transition-colors duration-500 flex flex-row justify-between px-4 ${
          scrollTop > 10 ? "bg-[#881337]" : "bg-[#242424]"
        }`}
      >
        <div className="text-white">Thrashy 💀</div>
        <motion.nav
          initial={false}
          animate={isOpen ? "open" : "closed"}
          custom={height}
          ref={containerRef}
        >
          <button onClick={() => toggleOpen()} className="pt-1">
            <svg width="23" height="23" viewBox="0 0 23 23">
              <Path
                variants={{
                  closed: { d: "M 2 2.5 L 20 2.5" },
                  open: { d: "M 3 16.5 L 17 2.5" },
                }}
              />
              <Path
                d="M 2 9.423 L 20 9.423"
                variants={{
                  closed: { opacity: 1 },
                  open: { opacity: 0 },
                }}
                transition={{ duration: 0.1 }}
              />
              <Path
                variants={{
                  closed: { d: "M 2 16.346 L 20 16.346" },
                  open: { d: "M 3 2.5 L 17 16.346" },
                }}
              />
            </svg>
          </button>
        </motion.nav>
      </div>
      <motion.div className="progress-bar" style={{ scaleX }} />
    </div>
  );
}
