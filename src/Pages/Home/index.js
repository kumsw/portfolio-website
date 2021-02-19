import styles from "./home.module.css";
import HomeImage from "./homeBanner.png";
import CtaButton from "../../Components/CtaButton";
import { Link } from "react-scroll";

function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.home}>
        <section className={styles.homeHeading}>
          <h1>Hi there, I'm Kunmi</h1>
          <section className={styles.jobTitle}>
            <h1>Software Engineer</h1>
          </section>
        </section>
        <section className={styles.buttons}>
          <Link
            to={"projects"}
            spy={true}
            smooth={true}
            duration={600}
            offset={-70}
          >
            <CtaButton
              style={{ backgroundColor: "#1C8DA6" }}
              buttonText={"See my stuff"}
            ></CtaButton>
          </Link>
          <Link
            to={"contact"}
            spy={true}
            smooth={true}
            offset={-70}
            duration={600}
          >
            <CtaButton
              style={{ backgroundColor: "#6688EC" }}
              buttonText={"Contact me"}
            ></CtaButton>
          </Link>
        </section>
        <img src={HomeImage} alt={" kunmi with an ankara print sky"} />
      </div>
    </div>
  );
}
export default Home;
