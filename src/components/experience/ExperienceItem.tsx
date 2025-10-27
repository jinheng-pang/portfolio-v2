import { experiences } from "./experience";

import React from "react";

interface ExperienceItemProps {
  date: string;
  children: React.ReactNode;
}

const ExperienceItem = ({ date, children }: ExperienceItemProps) => {
  return (
    <div className="experience-item-container">
      <div>{date}</div>
      <div className="timeline-head">
        <div className="timeline-tail"></div>
      </div>
      {children}
    </div>
  );
};

export default ExperienceItem;
