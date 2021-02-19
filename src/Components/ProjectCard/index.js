import styles from "./projectCard.module.css";

import TextContent from "../TextContent";

function ProjectCard({ text, heading, src, alt }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <img src={src} alt={alt} />
        <section className={styles.projectInfo}>
          <h3>{heading}</h3>
          <TextContent text={text}></TextContent>
          <button>View project</button>
        </section>
      </div>
    </div>
  );
}

export default ProjectCard;
