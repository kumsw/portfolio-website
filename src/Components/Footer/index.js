import styles from "./footer.module.css";
import { SiLinkedin, SiGithub, SiTwitter, SiMedium } from "react-icons/si";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className={styles.footer}>
      <h4>Where you can find me</h4>
      <Link to="https://www.linkedin.com/in/kunmi-williams/">
        <SiLinkedin />
      </Link>
      <SiGithub />
      <SiTwitter />
      <SiMedium />
    </div>
  );
}

export default Footer;
