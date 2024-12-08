import { FC } from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  Twitch,
} from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  { name: "GitHub", icon: Github, url: "https://github.com/tuusuario" },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/tuusuario",
  },
  { name: "Twitter", icon: Twitter, url: "https://twitter.com/tuusuario" },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/tuusuario",
  },
  {
    name: "Twitch",
    icon: Twitch,
    url: "https://instagram.com/tuusuario",
  },
];

const ContactSection: FC = () => {
  return (
    <section id="contact" className="h-50vh w-screen bg-[#111827]">
      <div className="h-screen  grid grid-cols-2  text-white font-raleway">
        <div className="flex justify-center items-center flex-col gap-4">
          <span className="text-4xl font-semibold">Contact Me</span>

          <motion.a
            key={"mail"}
            href={"mailto:diego456.dlm77@gmail.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#deccff] hover:text-white transition-colors flex flex-row justify-center items-center gap-4"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={30} />
            <span className="text-2xl">diego456.dlm77@gmail.com</span>
          </motion.a>
        </div>
        <div className="h-full">
          <div className="flex justify-center items-start flex-col h-full mb-8 gap-10">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#deccff] hover:text-white transition-colors flex flex-row justify-center items-center gap-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <link.icon size={90} />
                <span className="text-3xl">{link.name}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
