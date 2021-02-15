import styles from "./home.module.css";

import HomeImage from "./homeBanner.png";
import CtaButton from "../../Components/CtaButton";

function Home() {
  return (
    <div className={styles.home}>
      <section className={styles.homeHeading}>
        <h1 id="kunmiHeading">Hi there, i'm Kunmi</h1>
        <h1>Software Engineer</h1>
      </section>
      <section className={styles.buttons}>
        <CtaButton
          style={{ backgroundColor: "#1C8DA6" }}
          id="seeMyStuff"
          buttonText={"See my stuff"}
        ></CtaButton>
        <CtaButton
          style={{ backgroundColor: "#6688EC" }}
          id="contact"
          buttonText={"Contact me"}
        ></CtaButton>
      </section>
      <img src={HomeImage} alt={" kunmi with an ankara print sky"} />
    </div>
  );
}
export default Home;
