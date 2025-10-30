import React from "react";

interface LinkItemProps {
  href: string;
  label: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  className: string;
}

const LinkItem: React.FC<LinkItemProps> = ({ href, Icon, className, ...props }) => {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon className="header-svg" />
    </a>
  );
};

export default LinkItem;
