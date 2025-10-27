"use client";
import { useState } from "react";
import { ExperienceProps } from "./experience";

const ExperienceCard = (experience: ExperienceProps) => {
  const { roleTitle, company, description, fact } = experience;
  const [isFlip, setIsFlip] = useState(false);

  if (isFlip)
    return (
      <div onClick={() => setIsFlip(!isFlip)}>
        <h3>Fact</h3>
        <p>{fact}</p>
      </div>
    );

  return (
    <div
      className="experience-card-container"
      onClick={() => setIsFlip(!isFlip)}
    >
      <h3 className="experience-card-role">{roleTitle}</h3>
      <p className="experience-card-company">{company}</p>
      <p className="experience-card-description">{description}</p>
    </div>
  );
};

export default ExperienceCard;
