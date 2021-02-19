import styles from "./ctaButton.module.css";

function CtaButton({ buttonText, style, id }) {
  return (
    <button id={id} style={style} className={styles.button}>
      {buttonText}
    </button>
  );
}

export default CtaButton;
