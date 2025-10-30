import {
  SvgCss,
  SvgJava,
  SvgPython,
  SvgJavascript,
  SvgTypescript,
} from "@/svgs/coding-languages";
import { SvgReact, SvgNodejs, SvgRxjs } from "@/svgs/frameworks";
import SvgLink from "../link/SvgLink/SvgLink";

import "./tech-stack.css";

export const CssIcon = (
  <SvgLink
    Icon={SvgCss}
    href="https://developer.mozilla.org/en-US/docs/Web/CSS"
    title="CSS"
    className="tech-icon"
  />
);
export const JavaIcon = (
  <SvgLink
    Icon={SvgJava}
    href="https://www.java.com/"
    title="Java"
    className="tech-icon"
  />
);
export const PythonIcon = (
  <SvgLink
    Icon={SvgPython}
    href="https://www.python.org/"
    title="Python"
    className="tech-icon"
  />
);
export const JavascriptIcon = (
  <SvgLink
    Icon={SvgJavascript}
    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    title="JavaScript"
    className="tech-icon"
  />
);
export const TypescriptIcon = (
  <SvgLink
    Icon={SvgTypescript}
    href="https://www.typescriptlang.org/"
    title="TypeScript"
    className="tech-icon"
  />
);
export const ReactIcon = (
  <SvgLink
    Icon={SvgReact}
    href="https://react.dev/"
    title="React"
    className="tech-icon"
  />
);
export const NodeIcon = (
  <SvgLink
    Icon={SvgNodejs}
    href="https://nodejs.org/"
    title="Node.js"
    className="tech-icon"
  />
);
export const RxjsIcon = (
  <SvgLink
    Icon={SvgRxjs}
    href="https://rxjs.dev/"
    title="RxJS"
    className="tech-icon"
  />
);
