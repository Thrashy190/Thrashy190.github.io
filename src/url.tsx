import {
  faGithub,
  faTwitch,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faBriefcase, faGlobe } from "@fortawesome/free-solid-svg-icons";
import urlInterface from "./interfaces/urlInterface";

import Resume from "./documents/Resume.pdf";

export const urls: urlInterface[] = [
  {
    text: "Github",
    logo: faGithub,
    link: "https://github.com/Thrashy190",
    target: "_blank",
  },
  {
    text: "Portfolio",
    logo: faGlobe,
    link: "/Home",
    target: "",
  },
  {
    text: "Resume",
    logo: faBriefcase,
    link: Resume,
    target: "",
  },
  {
    text: "Linkedin",
    logo: faLinkedin,
    link: "https://www.linkedin.com/in/thrashy190/",
    target: "_blank",
  },
];

export const media: urlInterface[] = [
  {
    logo: faTwitter,
    link: "https://twitter.com/Thrashybb345",
    target: "_blank",
  },

  {
    logo: faInstagram,
    link: "https://www.instagram.com/_thrashy_/",
    target: "_blank",
  },
  {
    logo: faTwitch,
    link: "https://www.twitch.tv/thrashy19",
    target: "_blank",
  },
];

export const allMedia: urlInterface[] = [
  {
    text: "Github",
    logo: faGithub,
    link: "https://github.com/Thrashy190",
    target: "_blank",
  },
  {
    text: "Linkedin",
    logo: faLinkedin,
    link: "https://www.linkedin.com/in/thrashy190/",
    target: "_blank",
  },
  {
    logo: faTwitter,
    link: "https://twitter.com/Thrashybb345",
    target: "_blank",
  },

  {
    logo: faInstagram,
    link: "https://www.instagram.com/_thrashy_/",
    target: "_blank",
  },
  {
    logo: faTwitch,
    link: "https://www.twitch.tv/thrashy19",
    target: "_blank",
  },
];
