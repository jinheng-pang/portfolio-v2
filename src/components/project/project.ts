import {
  SvgCss,
  SvgJava,
  SvgPython,
  SvgJavascript,
  SvgTypescript,
} from "@/svgs/coding-languages";

import { SvgNodejs, SvgReact } from "@/svgs/frameworks";

type Icon = React.FC<React.SVGProps<SVGSVGElement>>;

export interface ProjectProps {
  title: string;
  description: string;
  techStack: Icon[];
  imagePath: string;
  imageAlt: string;
}

const placeholderImgPath = "/images/placeholder-img.png";

export const projects: ProjectProps[] = [
  {
    title: "Portfolio Website",
    description:
      "Developed a personal portfolio website using React and TypeScript. Implemented responsive design, smooth scrolling, and dynamic content rendering. Emphasized maintainable component structure and clean UI aesthetics.",
    techStack: [SvgReact, SvgTypescript, SvgCss],
    imagePath: placeholderImgPath,
    imageAlt: "",
  },
  {
    title: "Student Management API",
    description:
      "Built a RESTful API for managing student records using Java and Spring Boot. Integrated authentication, validation, and database persistence. Focused on scalability, modularity, and test-driven development.",
    techStack: [SvgJava, SvgPython, SvgJavascript],
    imagePath: placeholderImgPath,
    imageAlt: "",
  },
];
