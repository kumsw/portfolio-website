import styles from "./aboutMe.module.css";
import Heading from "../../Components/Heading";
import Text from "../../Components/TextContent";

export default function AboutMe() {
  return (
    <div className={styles.aboutMe}>
      <Heading className={styles.heading} text={"About me"}></Heading>

      <section className={styles.section}>
        <h3>Why that photo? </h3>
        <Text
          text={
            "That's me up there sitting on a Henry Moore at Yorkshire Sculpture park. The sky is actually made out of ankara print, as a proud Nigerian 🇳🇬 , I love wearing bright colourful prints"
          }
        ></Text>
      </section>
      <section className={styles.section}>
        <h3> What's my background?</h3>
        <Text text={" I worked in marketing"}> </Text>
      </section>
      <section className={styles.section}>
        <h3> Why technology? </h3>
        <Text
          text={
            "There is so much opportunity for technology to solve the worlds greatest probblems. I think innovation in technology is the more efficient way to bypass all the worlds old inefficent infrastructure"
          }
        ></Text>
      </section>
    </div>
  );
}
