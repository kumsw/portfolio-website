import styles from "./home.module.css";
import Heading from "../../Components/Heading";
import HomeImage from "./homeBanner.png";
import CtaButton from "../../Components/CtaButton";

function Home() {
  return (
    <div className={styles.home}>
      <section className={styles.heading}>
        <Heading text={"Hi i'm Kunmi"}></Heading>
        <Heading text={"Software Developer"}></Heading>
      </section>
      <section className={styles.buttons}>
        <CtaButton buttonText={"See my stuff"}></CtaButton>
        <CtaButton buttonText={"Contact me"}></CtaButton>
      </section>
      <img src={HomeImage} alt={" kunmi with an ankara print sky"} />
    </div>
  );
}
export default Home;
