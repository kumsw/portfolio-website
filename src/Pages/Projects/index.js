import Heading from "../../Components/Heading";
import styles from "./projects.modules.css";
import ProjectCard from "../../Components/ProjectCard";

export default function Projects() {
  return (
    <div className={styles.projects}>
      <Heading
        id={"projects"}
        className={styles.heading}
        text={"Projects"}
      ></Heading>
      <ProjectCard heading={"project title"} text={"hello"} />
    </div>
  );
}
