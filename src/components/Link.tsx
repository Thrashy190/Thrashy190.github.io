import urlInterface from "../interfaces/urlInterface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const LinkMedia = ({ text, link, logo, target }: urlInterface): JSX.Element => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {text === "Resume" ? (
        <a
          href={link}
          target="_blank"
          className="flex justify-center items-center gap-4 lg:w-full  transition-all duration-100 bg-gradient-to-b to-rose-900 via-stone-900 from-stone-900 bg-size-400 rounded-xl py-3 hover:bg-right-bottom cursor-pointer "
        >
          <FontAwesomeIcon className="w-6 h-6" icon={logo} />
          <div className="text-xl font-semibold ">{text}</div>
        </a>
      ) : (
        <Link
          to={link}
          target={target}
          className="flex justify-center items-center gap-4 lg:w-full  transition-all duration-100 bg-gradient-to-b to-rose-900 via-stone-900 from-stone-900 bg-size-400 rounded-xl py-3 hover:bg-right-bottom cursor-pointer "
        >
          <FontAwesomeIcon className="w-6 h-6" icon={logo} />
          <div className="text-xl font-semibold ">{text}</div>
        </Link>
      )}
    </motion.button>
  );
};

export default LinkMedia;
