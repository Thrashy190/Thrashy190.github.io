import HeroMainBanner from "../components/sections/HeroBanner";
import AboutSection from "../components/sections/About";
import WorkExperienceSection from "../components/sections/WorkExperience";
import ProjectSection from "../components/sections/Projects";
import KnowledgeSection from "../components/sections/Knowledge";
import ContactSection from "../components/sections/Contact";

const Main = () => {
  return (
    <div className="h-screen ">
      <HeroMainBanner />
      <AboutSection />
      <WorkExperienceSection />
      <ProjectSection />
      <KnowledgeSection />
      <ContactSection />
    </div>
  );
};

export default Main;
