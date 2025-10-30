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

import { StaticImageData } from "next/image";


export interface ProjectProps {
  title: string;
  description: string;
  techStack: React.ReactNode[];
  imagePath: string;
  imageAlt: string;
  projectLink: string;
}


export const projects: ProjectProps[] = [
  {
    title: "Portfolio Website",
    description:
      "Developed a personal portfolio website using React and TypeScript.",
    techStack: [ReactIcon, TypescriptIcon, CssIcon],
    imagePath: "/images/portfolio.png",   
    imageAlt: "Portfolio website",
    projectLink: "https://github.com/jinheng-pang/portfolio-v2",
  },
  {
    title: "Guitar Heroes Game",
    description:
      "Built a game in full functional paradigm using TypeScript, observables, and the RxJS library.",
    techStack: [TypescriptIcon, RxjsIcon, CssIcon],
    imagePath: '/images/guitar-heroes.png', 
    imageAlt: "Guitar Heroes game",
    projectLink: "https://github.com/jinheng-pang/guitar-heroes",
  },
];

