import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

import { ExperienceCardProps } from "../../Interfaces/ExperienceCardInterface";

export default function ExperienceCard({
  logo,
  company,
  position,
  description,
  startDate,
  endDate,
  location,
  skills,
}: ExperienceCardProps) {
  return (
    <motion.div
      className="flex-shrink-0 w-[50rem] h-[45rem] bg-gradient-to-br from-[#1a2436] to-[#111827] rounded-lg shadow-lg overflow-hidden"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <img
            src={logo}
            alt={`${company} logo`}
            className="w-32 h-32 p-1 rounded-lg border-2 border-[#deccff] bg-white"
          />
          <div className="ml-4">
            <h3 className="text-2xl font-bold text-white mb-1">{company}</h3>
            <h4 className="text-xl text-[#deccff]">{position}</h4>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex items-center text-gray-300 mb-2">
            <Calendar className="w-4 h-4 mr-2" />
            <span>
              {startDate} - {endDate}
            </span>
          </div>
          <div className="flex items-center text-gray-300">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{location}</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 py-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-[#deccff] text-[#111827] rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
        <p className="text-gray-200 mb-4 pb-2 text-md ">{description}</p>
      </div>
    </motion.div>
  );
}
