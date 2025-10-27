import React from "react";

interface LinkItemProps {
  href: string;
  label: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

const LinkItem: React.FC<LinkItemProps> = ({ href, Icon, ...props }) => {
  return (
    <a
      href={href}
      className="header-link neumorphic-hover"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="header-svg" />
    </a>
  );
};

export default LinkItem;
