import styles from "./ctaButton.module.css";

function CtaButton({ buttonText }) {
  return <button className={styles.button}>{buttonText}</button>;
}

export default CtaButton;
