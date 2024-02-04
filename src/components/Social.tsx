import urlInterface from "../interfaces/urlInterface";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Social = ({ link, logo, target }: urlInterface): JSX.Element => {
  return (
    <motion.button
      className=""
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Link
        to={link}
        target={target}
        className="flex justify-center items-center gap-4transition-all duration-500 bg-gradient-to-b to-rose-900 via-stone-900 from-stone-900 bg-size-400 rounded-full p-5 hover:bg-right-bottom cursor-pointer"
      >
        <FontAwesomeIcon className="w-6 h-6" icon={logo} />
      </Link>
    </motion.button>
  );
};

export default Social;
