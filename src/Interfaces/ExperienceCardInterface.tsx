import React from "react";

export interface ExperienceCardProps {
  logo: string;
  company: string;
  position: string;
  description: React.JSX.Element | string;
  startDate: string;
  endDate: string;
  location: string;
  skills: string[];
}
