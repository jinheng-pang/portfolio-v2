import React from "react";
import { projects } from "@/components/project/project";
import ProjectCard from "@/components/project/projectCard/ProjectCard";

const Projects = () => {
  return (
    <div className="projects page-section">
      <h2 className="page-subheading neumorphic">Projects</h2>
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  );
};

export default Projects;
