import styles from "./mySkills.module.css";
import Heading from "../../Components/Heading";
import {
  SiJavascript,
  SiNodeDotJs,
  SiReact,
  SiPostgresql,
  SiJest,
  SiHtml5,
  SiCss3,
  SiGit,
  SiPostman,
  SiFigma,
} from "react-icons/si";

export default function MySkills() {
  return (
    <div className={styles.skills}>
      <Heading id={"mySkills"} text={"My Skills"}></Heading>
      <section className={styles.icons}>
        <SiHtml5 />
        <SiCss3 />
        <SiJavascript />
        <SiReact />
        <SiNodeDotJs />
        <SiPostman />
        <SiPostgresql />
        <SiJest />
        <SiGit />
        <SiFigma />
      </section>
    </div>
  );
}
