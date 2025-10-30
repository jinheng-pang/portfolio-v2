import "./project-card.css";

import React from "react";
import type { ProjectProps } from "../project";
import SvgLink from "@/components/link/SvgLink/SvgLink";
import SvgExternalLinkIcon from "@/svgs/ExternalLinkIcon";

const ProjectCard = ({
  title,
  description,
  techStack,
  imagePath,
  imageAlt,
  projectLink,
}: ProjectProps) => {
  return (
    <div className="project-card neumorphic">
      <SvgLink
        href={projectLink}
        Icon={SvgExternalLinkIcon}
        className="external-link"
      />
      <div className="left-container">
        <h3 className="title">{title}</h3>
        <p className="description">{description}</p>
        <div className="tech-stack">
          {techStack.map((Icon, index) => (
            <React.Fragment key={index}>{Icon}</React.Fragment>
          ))}
        </div>
      </div>
      <img className="image" src={imagePath} alt={imageAlt}></img>
    </div>
  );
};

export default ProjectCard;
