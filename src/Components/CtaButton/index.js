import styles from "./ctaButton.module.css";

function CtaButton({ buttonText, style }) {
  return (
    <button style={style} className={styles.button}>
      {buttonText}
    </button>
  );
}

export default CtaButton;
