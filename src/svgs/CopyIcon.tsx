import * as React from "react";
import type { SVGProps } from "react";
const SvgCopyIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className="contact-me-svg"
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 10 10"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.833}
      d="M7.917 3.333h-3.75a.833.833 0 0 0-.834.834v3.75c0 .46.373.833.834.833h3.75c.46 0 .833-.373.833-.833v-3.75a.833.833 0 0 0-.833-.834"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={0.833}
      d="M1.667 5.833H1.25A.833.833 0 0 1 .417 5V1.25A.833.833 0 0 1 1.25.417H5a.833.833 0 0 1 .833.833v.417"
    />
  </svg>
);
export default SvgCopyIcon;
