import "./project-card.css";

import React from "react";
import type { ProjectProps } from "../project";
import SvgLink from "@/components/link/SvgLink";
import SvgExternalLinkIcon from "@/svgs/ExternalLinkIcon";

const ProjectCard = ({
  title,
  description,
  techStack,
  imagePath,
  imageAlt,
}: ProjectProps) => {
  return (
    <div className="project-card neumorphic">
      <SvgLink
        href="lol"
        Icon={SvgExternalLinkIcon}
        className="external-link"
      />
      <div className="left-container">
          <h3 className="title">{title}</h3>
          <p className="description">{description}</p>
          <ul className="tech-stack">
            {techStack.map((Stack, index) => (
              <Stack className="tech-icon" key={index} />
            ))}
          </ul>
      </div>
      <img className="image" src={imagePath} alt={imageAlt}></img>
    </div>
  );
};

export default ProjectCard;
