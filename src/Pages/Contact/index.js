import Heading from "../../Components/Heading";
import styles from "./contact.module.css";

export default function Contact() {
  return (
    <div>
      <Heading
        id={"contact"}
        className={styles.heading}
        text={"Let's Connect"}
      ></Heading>
    </div>
  );
}
