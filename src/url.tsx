import {
  faGithub,
  faTwitch,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faBriefcase, faGlobe } from "@fortawesome/free-solid-svg-icons";
import urlInterface from "./interfaces/urlInterface";

export const urls: urlInterface[] = [
  {
    text: "Github",
    logo: faGithub,
    link: "https://github.com/Thrashy190",
  },
  {
    text: "Portfolio",
    logo: faGlobe,
    link: "Home",
  },
  {
    text: "Resume",
    logo: faBriefcase,
    link: "https://github.com/Thrashy190",
  },
  {
    text: "Linkedin",
    logo: faLinkedin,
    link: "https://www.linkedin.com/in/thrashy190/",
  },
];

export const media: urlInterface[] = [
  {
    logo: faTwitter,
    link: "https://twitter.com/Thrashybb345",
  },

  {
    logo: faInstagram,
    link: "https://www.instagram.com/_thrashy_/",
  },
  {
    logo: faTwitch,
    link: "https://www.twitch.tv/thrashy19",
  },
];
