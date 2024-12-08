import { FC } from "react";
import SkillGraph from "../reactflow/SkillGraph";

const KnowledgeSection: FC = () => {
  return (
    <section id="tools" className="h-screen w-screen bg-[#111827]">
      <div className="h-full flex flex-col items-center justify-center">
        <div className="h-[85%] w-[90%] bg-gray-900 rounded-xl overflow-hidden">
          <SkillGraph />
        </div>
      </div>
    </section>
  );
};

export default KnowledgeSection;
