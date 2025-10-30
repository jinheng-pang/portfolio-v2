import {
  CssIcon,
  PythonIcon,
  JavaIcon,
  JavascriptIcon,
  TypescriptIcon,
  ReactIcon,
  NodeIcon,
  RxjsIcon,
} from "../techStack/techStack";

export interface ProjectProps {
  title: string;
  description: string;
  techStack: React.ReactNode[];
  imagePath: string;
  imageAlt: string;
  projectLink: string;
}

const placeholderImgPath = "/images/placeholder-img.png";

export const projects: ProjectProps[] = [
  {
    title: "Portfolio Website",
    description:
      "Developed a personal portfolio website using React and TypeScript.",
    techStack: [ReactIcon, TypescriptIcon, CssIcon],
    imagePath: 'images/portfolio.png',
    imageAlt: "portfolio website",
    projectLink: "https://github.com/jinheng-pang/portfolio-v2"
  },
  {
    title: "Guitar Heroes Game",
    description:
      "Built a game in Full Functional Paradigm using typescipt, observables, and Rxjs library.",
    techStack: [TypescriptIcon, RxjsIcon, CssIcon],
    imagePath: 'images/guitar-heroes.png',
    imageAlt: "guitar heroes game",
    projectLink: "https://github.com/jinheng-pang/guitar-heroes"
  },
];
