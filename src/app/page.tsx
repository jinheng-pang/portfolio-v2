import Image from "next/image";
import styles from "./page.module.css";
import Header from "./sections/header/Header";
import Experience from "./sections/experience/Experience";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <Experience />
    </div>
  );
}
