import './svg-link.css'

interface SvgLinkProps {
  href: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  className?: string;
  title?: string; 
}

const SvgLink: React.FC<SvgLinkProps> = ({ href, Icon, className = "", title }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`svg-link ${className}`}
      title={title}
    >
      <Icon className="svg-icon" />
    </a>
  );
};

export default SvgLink;
