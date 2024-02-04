import { useEffect, useRef, useState } from "react";

type Props = {
  children: JSX.Element | JSX.Element[];
  id: string;
  className?: string;
};

const RevealOnScroll = ({ children, id, className }: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onWindScroll = () => {
      const element = ref?.current;
      if (element) {
        const { top } = element?.getBoundingClientRect();
        const isVisible = top < window.innerHeight;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener("scroll", onWindScroll);
    return () => {
      window.removeEventListener("scroll", onWindScroll);
    };
  }, []);

  const classes = `${className} flex flex-col items-center  text-center transition-opacity duration-1000
        ${isVisible ? "opacity-100" : "opacity-0"}`;

  return (
    <div id={id} ref={ref} className={classes}>
      {children}
    </div>
  );
};

export default RevealOnScroll;
