import { FC } from "react";
import Diego from "../../assets/me.jpeg";
import Softtek from "../../assets/softtek.jpeg";
import Daimler from "../../assets/daimler.jpeg";

const AboutSection: FC = () => {
  return (
    <section
      id="about"
      className="h-screen w-screen flex justify-center items-center flex-col bg-[#111827] font-medieval p-10 px-18"
    >
      <div className="grid grid-cols-2 gap-10 h-full">
        <div className="p-10 flex justify-center items-center pic-ctn">
          <img src={Diego} alt="Diego image" className="h-2/3 " />
          <img
            src={Softtek}
            alt="ICPC contest Softtek stand"
            className="h-2/3 "
          />
          <img
            src={Daimler}
            alt="First Place Hackathon Daimler Truck"
            className="h-2/3 "
          />
        </div>
        <article className="text-white text-2xl text-center flex justify-center items-center flex-col font-raleway ">
          <span className="flex justify-center items-center text-5xl pb-10 font-medieval">
            About Me
          </span>
          <p>
            Software Engineer with experience in the automotive and software
            development industries. Specialized in critical systems and custom
            applications, combining technical excellence and leadership skills.
            Freelancer in my spare time and currently developing a tech startup.
            Proficient in multiple programming languages, agile methodologies,
            and architectural design. Committed to innovation, integrity, and
            quality in every project.
          </p>
        </article>
      </div>
    </section>
  );
};

export default AboutSection;
