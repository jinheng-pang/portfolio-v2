import React from "react";
import "./experience-item.css";

interface ExperienceItemProps {
  date: string;
  children: React.ReactNode;
}

const ExperienceItem = ({ date, children }: ExperienceItemProps) => {
  return (
    <li className="experience-item-container">
      <div className="experience-item-date">{date}</div>
      <div className="timeline-tail">
        <div className="timeline-head"></div>
      </div>
      {children}
    </li>
  );
};

export default ExperienceItem;
