import "./header.css";
import LinkItem from "../../components/link/LinkItem";
import SvgMailIcon from "@/svgs/MailIcon";
import SvgGithubIcon from "@/svgs/GithubIcon";
import SvgLinkedinIcon from "@/svgs/LinkedinIcon";
import ModalTrigger from "../../components/modal/ModalTrigger";
import ContactMe from "../../components/modal/modalChildren/ContactMe";

const Header = () => {
  return (
    <header className="header neumorphic">
      <div className="headings">
        <h1 className="heading">Jin Heng Pang</h1>
        <p className="subheading">Software Engineer</p>
      </div>
      <ul className="links">
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
