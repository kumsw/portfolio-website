import styles from "./textContent.module.css";

function TextContent({ text }) {
  return <p className={styles.textContent}>{text}</p>;
}

export default TextContent;
