import "./header.css";
import LinkItem from "../../../components/link/LinkItem";
import SvgMailIcon from "@/svgs/MailIcon";
import SvgGithubIcon from "@/svgs/GithubIcon";
import SvgLinkedinIcon from "@/svgs/LinkedinIcon";
import ModalTrigger from "../../../components/modal/ModalTrigger";
import ContactMe from "../../../components/modalChildren/ContactMe";

const Header = () => {
  return (
    <header className="header neumorphic">
      <div className="header-titles">
        <h1 className="header-title">Jin Heng Pang</h1>
        <p className="header-subtitle">Software Engineer</p>
      </div>
      <ul className="header-links">
        <ModalTrigger Icon={SvgMailIcon} label="Contact Me">
          <ContactMe />
        </ModalTrigger>
        <LinkItem
          href="https://github.com/jinheng-pang"
          Icon={SvgGithubIcon}
          label="Github"
        />
        <LinkItem
          href="https://www.linkedin.com/in/jin-heng-pang/"
          Icon={SvgLinkedinIcon}
          label="LinkedIn"
        />
      </ul>
    </header>
  );
};

export default Header;
