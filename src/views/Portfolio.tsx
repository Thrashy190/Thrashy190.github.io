import React, { FC } from "react";
import { Link } from "react-router-dom";
import { motion, useIsPresent } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavBarMobile from "../components/NavbarMobile";

import { allMedia } from "../url";
import img from "../assets/sett.jpeg";
import AnimatedTitle from "../components/AnimatedTitle";
import NavBar from "../components/Navbar";
import RevealOnScroll from "../components/RevealOnScroll";
import HorizontalScrollCarousel from "../components/HorizontalScrollCarousel";
import InfiniteCarousel from "../components/InfiniteCarousel";
import IconList from "../components/IconsList";

import ArqontactBanner from "../assets/arqontact.png";
import AvgiBanner from "../assets/avgi_cover.png";
import InformationCenterBanner from "../assets/its_cover.jpeg";
import LoadingBanner from "../assets/loading.png";
import DataBanner from "../assets/data.png";

const Portfolio: FC = (): JSX.Element => {
  const isPresent = useIsPresent();

  return (
    <div className="flex flex-col items-center gap-5 m-auto min-h-screen">
      <NavBarMobile></NavBarMobile>
      <NavBar></NavBar>
      <div className="h-screen">
        <div className="flex flex-col items-center justify-center inset-0 relative top-1/4 ">
          <div className="h-28 w-28 md:h-36 md:w-36 lg:h-52 lg:w-52 mt-auto">
            <img className=" rounded-full" src={img} alt="Profile pic" />
          </div>
          <div className="flex flex-col justify-center items-center pt-5">
            <AnimatedTitle text="Diego Antonio" />
            <AnimatedTitle text="Lopez Martinez" />
          </div>
          <div className="flex  justify-between items-center text-xl pt-5 font-light text-white gap-2">
            <InfiniteCarousel styles="max-w-3xl scroll-right scroll-slow hidden lg:block">
              <div>FullStack Developer</div>
              <span>|</span>
              <div>Student</div>
              <span>|</span>
              <div>Gamer</div>
              <span>|</span>
              <div>Streamer</div>
              <span>|</span>
            </InfiniteCarousel>
          </div>
          <div className="flex flex-col justify-between items-center gap-2 text-xl pt-5 font-light text-white lg:hidden">
            <div>FullStack Developer</div>
            <div>Student</div>
            <div>Gamer</div>
            <div>Streamer</div>
          </div>
        </div>
      </div>

      <RevealOnScroll
        id="about-me"
        className=" bg-white text-[#242424] w-full py-24 px-10 "
      >
        <div className="w-3/4 lg:w-1/2">
          <span className="text-3xl font-semibold">About me</span>
          <p className="py-10 text-xl">
            I'm a 21 year old computer systems engineer mexican student who is
            passionated about being part of the future, always learning
            cutting-edge technologies as well as always looking for the
            opportunity to share my knowledge and increase the community of tech
            in the world.
          </p>
          <p className="text-xl">
            I'm in love with the innovation and building things from scratch. My
            motto is "Reinvent the wheel", Why?, because is the best way to
            learn how the world works and be able to drive discovery and
            improvement.
          </p>
        </div>
      </RevealOnScroll>

      <RevealOnScroll id="work" className="w-7/8 lg:w-3/5 py-24 px-10">
        <span className="text-3xl font-semibold">Work Experience</span>
        <HorizontalScrollCarousel></HorizontalScrollCarousel>
      </RevealOnScroll>

      <RevealOnScroll
        id="project"
        className="bg-white text-[#242424] w-full py-24 px-2 lg:px-10'"
      >
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <span className="text-3xl font-semibold pb-5">Projects</span>

          <div className="lg:grid lg:grid-cols-2 flex flex-col-reverse border-solid border-2 border-[#242424] rounded-lg">
            <div className="bg-[#242424] p-4 pt-10">
              <span className="text-white text-xl font-black">Arqontact</span>
              <p className="text-white p-4">
                Web and mobile application under development to help architects
                find reliable suppliers of materials or services easily and
                planning projects
              </p>
              <p className="text-white font-black flex justify-center items-center">
                <a
                  className="hover:underline hover:text-[#881337] transition-colors duration-500"
                  href="https://www.arqontact.com/"
                  target="_blank"
                >
                  Site
                </a>
              </p>
            </div>
            <div>
              <img src={ArqontactBanner} alt="Arqontact Site" />
            </div>
          </div>

          <div className="lg:grid lg:grid-cols-2 flex flex-col border-solid border-2 border-[#242424] rounded-lg">
            <div>
              <img src={AvgiBanner} alt="Avgi Site" />
            </div>
            <div className="bg-[#242424] p-4 pt-10">
              <span className="text-white  text-xl font-black">Avgi</span>
              <p className="text-white p-4">
                Web application under development to provide high school and
                college students with information about their universities,
                careers and subjects to reduce dropout rates and create student
                communities.
              </p>
              <p className="text-white font-black flex justify-center items-center flex-row gap-4">
                <a
                  className="hover:underline hover:text-[#881337] transition-colors duration-500"
                  href="https://hackathon-2022-b997c.web.app/"
                  target="_blank"
                >
                  Site
                </a>
                <a
                  className="hover:underline hover:text-[#881337] transition-colors duration-500"
                  href="https://github.com/Thrashy190/hackathonTroyano2022"
                  target="_blank"
                >
                  Github repository
                </a>
              </p>
            </div>
          </div>

          <div className="lg:grid lg:grid-cols-2 flex flex-col-reverse  border-solid border-2 border-[#242424] rounded-lg">
            <div className="bg-[#242424] p-4 pt-10">
              <span className="text-white  text-xl font-black">
                Information Center
              </span>
              <p className="text-white p-4">
                Web application under development to facilitate finding
                available books in the ITS information center for students and
                employees.
              </p>
              <p className="text-white font-black flex justify-center items-center flex-row gap-4">
                <a
                  className="hover:underline hover:text-[#881337] transition-colors duration-500"
                  href="https://github.com/Thrashy190/info-center-api"
                  target="_blank"
                >
                  Github repository
                </a>
              </p>
            </div>
            <div>
              <img
                src={InformationCenterBanner}
                alt="Information center Site"
              />
            </div>
          </div>

          <div className="lg:grid lg:grid-cols-2 flex flex-col border-solid border-2 border-[#242424] rounded-lg">
            <div>
              <img src={LoadingBanner} alt="Loading Site" />
            </div>
            <div className="bg-[#242424] p-4 pt-10">
              <span className="text-white  text-xl font-black">Loading</span>
              <p className="text-white p-4">
                Courses Web aplication to teach Game design and development
              </p>
              <p className="text-white font-black flex justify-center items-center flex-row gap-4">
                <a
                  className="hover:underline hover:text-[#881337] transition-colors duration-500"
                  href="https://github.com/Thrashy190/software-Engineering"
                  target="_blank"
                >
                  Github repository
                </a>
              </p>
            </div>
          </div>

          <div className="lg:grid lg:grid-cols-2 flex flex-col-reverse border-solid border-2 border-[#242424] rounded-lg">
            <div className="bg-[#242424] p-4 pt-10">
              <span className="text-white  text-xl font-black">
                Data structures
              </span>
              <p className="text-white p-4">
                This project is made with the reason of being able to share and
                show visually how data structures work.
              </p>
              <p className="text-white font-black flex justify-center items-center flex-row gap-4">
                <a
                  className="hover:underline hover:text-[#881337] transition-colors duration-500"
                  href="https://thrashy.tech/DataStructuresExample/"
                  target="_blank"
                >
                  Site
                </a>
                <a
                  className="hover:underline hover:text-[#881337] transition-colors duration-500"
                  href="https://github.com/Thrashy190/DataStructuresExample"
                  target="_blank"
                >
                  Github repository
                </a>
              </p>
            </div>
            <div>
              <img src={DataBanner} alt="Data structures Site" />
            </div>
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll id="tools" className="w-3/5 py-24 px-2">
        <span className="text-3xl font-semibold pb-8">Tools</span>
        <span className="text-2xl font-bold pb-5 hidden lg:block">
          My Main Stack
        </span>
        <InfiniteCarousel styles="max-w-4xl scroll-slow scroll-left pb-10 hidden lg:block">
          {[
            "ts",
            "react",
            "nextjs",
            "nestjs",
            "nodejs",
            "postgres",
            "prisma",
            "graphql",
            "aws",
          ].map((item, index) => {
            return (
              <img
                key={index}
                width={100}
                src={`https://skillicons.dev/icons?i=${item}`}
                alt={item}
              />
            );
          })}
        </InfiniteCarousel>

        <div className="block lg:hidden">
          <IconList
            icons={[
              "ts",
              "react",
              "nextjs",
              "nestjs",
              "nodejs",
              "postgres",
              "prisma",
              "graphql",
              "aws",
            ]}
            title="My Main Stack"
          ></IconList>
        </div>

        <IconList
          icons={[
            "ts",
            "go",
            "py",
            "js",
            "html",
            "css",
            "cpp",
            "java",
            "rust",
            "dart",
            "php",
            "elixir",
          ]}
          title="Programming Languages"
        ></IconList>
        <IconList
          icons={[
            "react",
            "nextjs",
            "flutter",
            "vue",
            "nuxtjs",
            "bootstrap",
            "tailwind",
            "sass",
            "materialui",
            "redux",
          ]}
          title="Front-end"
        ></IconList>

        <IconList
          icons={[
            "nestjs",
            "nodejs",
            "express",
            "prisma",
            "go",
            "graphql",
            "laravel",
          ]}
          title="Back-end"
        ></IconList>

        <IconList
          icons={["mongodb", "postgres", "redis"]}
          title="Data bases"
        ></IconList>

        <IconList
          icons={[
            "docker",
            "aws",
            "heroku",
            "firebase",
            "nginx",
            "jenkins",
            "jest",
            "kafka",
            "kubernetes",
          ]}
          title="DevOps - Cloud"
        ></IconList>

        <IconList
          icons={[
            "rabbitmq",
            "figma",
            "git",
            "githubactions",
            "github",
            "neovim",
            "postman",
            "qt",
            "tauri",
            "tensorflow",
            "threejs",
            "vim",
            "webpack",
            "wordpress",
          ]}
          title="Others"
        ></IconList>
      </RevealOnScroll>

      <RevealOnScroll
        id="contact"
        className="bg-[#881337] text-[#242424] w-full  py-24 px-10"
      >
        <span className="text-3xl font-semibold pb-5">Contact Me</span>
        <div className=" bg-[#881337] w-full py-5">
          <span className="text-white text-xl font-semibold border-b-2 border-white">
            Social
          </span>
          <div className="flex flex-row gap-4 justify-center items-center">
            {allMedia.map((item, index) => {
              return (
                //  className="flex justify-center items-center gap-4 transition-all duration-500 bg-gradient-to-b to-rose-900 via-stone-900 from-stone-900 bg-size-400 rounded-full p-5 hover:bg-right-bottom cursor-pointer"

                <Link
                  key={index}
                  to={item.link}
                  target={item.target}
                  className="p-2 cursor-pointer"
                >
                  <FontAwesomeIcon
                    className="w-10 h-10 text-white hover:text-[#242424] transition-colors duration-500 cursor-pointer"
                    icon={item.logo}
                  />
                </Link>
              );
            })}
          </div>
          <span className="text-white text-xl font-semibold border-b-2 border-white">
            Email
          </span>
          <div className="flex justify-center items-center text-white text-lg pt-5">
            <p className="flex gap-2 text-lg">
              <span className="font-semibold"> Email:</span>

              <a
                href="mailto:diego456.dlm77@gmail.com"
                className=" text-white hover:text-[#242424] transition-colors duration-500 cursor-pointer"
              >
                diego456.dlm77@gmail.com
              </a>
            </p>
          </div>
        </div>
      </RevealOnScroll>

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
