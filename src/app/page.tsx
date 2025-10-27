import Image from "next/image";
import styles from "./page.module.css";
import Header from "./sections/header/Header";
import Experience from "./sections/experience/Experience";
import Projects from "./sections/projects/Projects";
import Skills from "./sections/skills/Skills";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <Experience />
      <Projects />
      <Skills />
    </div>
  );
}
