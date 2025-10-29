import Image from "next/image";
import styles from "./page.module.css";

import { Header, Experience, Projects, Skills, Footer } from "@/sections";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <Experience />
      <Projects />
      <Skills />
      <Footer />
    </div>
  );
}
