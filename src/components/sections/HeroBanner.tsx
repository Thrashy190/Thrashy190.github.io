import { FC, useEffect, useState } from "react";
import videoWebm from "../../assets/170591-843561794_tiny.webm";

const HeroMainBanner: FC = () => {
  const words = [
    "Software Engineer",
    "Entrepreneur",
    "Streamer",
    "Content Creator",
  ];
  const [currentWord, setCurrentWord] = useState("");
  const [index, setIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const [forwards, setForwards] = useState(true);
  const [skipCount, setSkipCount] = useState(0);

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

      setCurrentWord(words[index].substr(0, offset));
    }, speed);

    return () => clearInterval(interval); // Limpiar intervalo al desmontar
  }, [words, index, offset, forwards, skipCount, skipDelay, speed]);

  return (
    <section id="home" className="h-screen bg-black">
      <video
        className="h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={videoWebm} type="video/webm" />
        {/* Fallback para navegadores que no soporten videos */}
        Tu navegador no soporta la reproducción de videos de fondo.
      </video>
      <div className="absolute top-10 left-0 w-full h-screen flex justify-center items-center">
        <div className="text-white text-5xl font-medieval">
          <span>{currentWord}</span>
        </div>
      </div>
    </section>
  );
};

export default HeroMainBanner;
