import { FC } from "react";
import { motion, useIsPresent } from "framer-motion";
import { Link, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//components
import LinkMedia from "../components/Link";
import Social from "../components/Social";

//intefaces
import urlInterface from "../interfaces/urlInterface";

//assets & info
import img from "../assets/sett.jpeg";
import { urls, media } from "../url";

const Links: FC = (): JSX.Element => {
  const isPresent = useIsPresent();
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 m-auto h-screen">
      <div className="gap-2 flex flex-col items-center mb-2 mt-20 lg:m-auto sm:mb-6 sm:mt-2">
        <img
          className=" h-28 w-28 lg:h-52 lg:w-52 rounded-full"
          src={img}
          alt="Profile pic"
        />
        <div className="text-3xl font-semibold">@Thrashy190</div>
        <div className="text-xl font-semibold">
          Diego Antonio Lopez Martinez
        </div>
        <div className="flex flex-col items-center  lg:flex-row  gap-2">
          <div className="text-xl font-light">Fullstack developer</div>
          <div className="text-xl font-light display hidden lg:block">|</div>
          <div className="text-xl font-light">Computer science student</div>
        </div>
        <div className="text-xs font-light display hidden lg:block">
          © 2024 Thrashy
        </div>
      </div>
      <div className="flex flex-col gap-4 lg:my-auto lg:mr-10">
        {urls.map(({ text, link, logo, target }: urlInterface, index) => {
          return (
            <LinkMedia
              key={index}
              text={text}
              link={link}
              logo={logo}
              target={target}
            />
          );
        })}
        <div className="flex flex-row  justify-center gap-4  mt-6">
          {media.map(({ link, logo, target }: urlInterface, index) => {
            return (
              <Social key={index} link={link} logo={logo} target={target} />
            );
          })}
        </div>
        <div className="flex flex-col items-center">
          <div className=" text-xs font-light display block lg:hidden">
            © 2024 Thrashy
          </div>
        </div>
      </div>
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen"
      />
    </div>
  );
};

export default Links;
