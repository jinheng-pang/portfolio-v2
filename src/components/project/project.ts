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
      "Portfolio site built with React + TypeScript.",
    techStack: [ReactIcon, TypescriptIcon, CssIcon],
    imagePath: "/images/portfolio.png",   
    imageAlt: "Portfolio website",
    projectLink: "https://github.com/jinheng-pang/portfolio-v2",
  },
  {
    title: "Guitar Heroes Game",
    description:
      "Functional game implemented in TypeScript using RxJS observables.",
    techStack: [TypescriptIcon, RxjsIcon, CssIcon],
    imagePath: '/images/guitar-heroes.png', 
    imageAlt: "Guitar Heroes game",
    projectLink: "https://github.com/jinheng-pang/guitar-heroes",
  },
];

