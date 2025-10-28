"use client";
import { useState } from "react";
import { ExperienceProps } from "../experience";
import './experience-card.css'

const ExperienceCard = (experience: ExperienceProps) => {
  const { roleTitle, company, description, fact } = experience;
  const [isFlip, setIsFlip] = useState(false);

  // if (isFlip)
  //   return (
  //     <div className="experience-card-container neumorphic-hover" onClick={() => setIsFlip(!isFlip)}>
  //       <h3 className="experience-card-heading">Fact</h3>
  //       <p className="experience-card-description">{fact}</p>
  //     </div>
  //   );

  return (
    <div
      className="experience-card neumorphic-hover"
      onClick={() => setIsFlip(!isFlip)}
    >
      <h3 className="heading">{roleTitle}</h3>
      <p className="subheading">{company}</p>
      <p className="description">{description}</p>
    </div>
  );
};

export default ExperienceCard;
