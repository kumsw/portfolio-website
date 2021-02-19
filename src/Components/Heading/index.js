import styles from "./heading.module.css";

function Heading({ text, id }) {
  return (
    <h1 id={id} className={styles.heading}>
      {text}
    </h1>
  );
}

export default Heading;
