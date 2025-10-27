"use client";
import type { SVGProps } from "react";
const SvgMailIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className="header-svg"
    xmlns="http://www.w3.org/2000/svg"
    width="3.5em"
    height="2.5em"
    fill="none"
    viewBox="0 0 18 15"
    {...props}
  >
    <path
      fill="#fff"
      d="M2.25 1.875c-.31 0-.562.281-.562.625v.863l6.064 5.532a1.817 1.817 0 0 0 2.5 0l6.06-5.532V2.5c0-.344-.253-.625-.562-.625zm-.562 3.914V12.5c0 .344.253.625.562.625h13.5c.31 0 .563-.281.563-.625V5.79l-4.993 4.554c-1.35 1.23-3.294 1.23-4.64 0zM0 2.5C0 1.121 1.009 0 2.25 0h13.5C16.991 0 18 1.121 18 2.5v10c0 1.379-1.009 2.5-2.25 2.5H2.25C1.009 15 0 13.879 0 12.5z"
    />
  </svg>
);
export default SvgMailIcon;
