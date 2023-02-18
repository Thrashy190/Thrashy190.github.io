import React, { FC } from "react";
import { Link } from "react-router-dom";
import { motion, useIsPresent } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import img from "../assets/portfolioimg.svg";
import AnimatedTitle from "../components/AnimatedTitle";

const Portfolio: FC = (): JSX.Element => {
  const isPresent = useIsPresent();
  return (
    <div className="flex flex-col items-center gap-5 m-auto h-screen">
      <img
        className=" h-2/5 w-3/5 lg:h-2/5 lg:w-2/5  mb-0 lg:mt-auto"
        src={img}
        alt="portfolio"
      />
      <div className="flex flex-col lg:flex-row ">
        <AnimatedTitle text="Page in progress!! " />
        <AnimatedTitle text="Go back and check my media" />
      </div>

      <Link to="links" className="mb-auto  px-7 py-3 ">
        <motion.button
          className="bg-rose-900 mb-auto flex items-center gap-3 px-7 py-3 rounded-md"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="">
            <FontAwesomeIcon className=" w-6 h-6" icon={faArrowLeft} />
          </div>
          <div className="text-xl">Go Back!</div>
        </motion.button>
      </Link>

      <motion.div
        initial={{ scaleX: 1 }}
        animate={{
          scaleX: 0,
          transition: { duration: 0.5, ease: "circOut" },
        }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen"
      />
    </div>
  );
};

export default Portfolio;
