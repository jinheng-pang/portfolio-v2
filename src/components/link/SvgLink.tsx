import React from "react";
import "./SvgLink.css";

interface SvgLinkProps {
  href: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  className?: string;
}

const SvgLink: React.FC<SvgLinkProps> = ({ href, Icon, className = "" }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`svg-link ${className}`}
    >
      <Icon className="svg-icon" />
    </a>
  );
};

export default SvgLink;
