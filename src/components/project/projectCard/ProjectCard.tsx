import "./project-card.css";

import React from "react";
import type { ProjectProps } from "../project";
import SvgLink from "@/components/link/SvgLink/SvgLink";
import SvgExternalLinkIcon from "@/svgs/ExternalLinkIcon";
import Image from "next/image";

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
      <Image className="image" src={imagePath} alt={imageAlt} width={500} height={400} />
    </div>
  );
};

export default ProjectCard;
