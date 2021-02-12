import styles from "./mySkills.module.css";
import Heading from "../../Components/Heading";
export default function MySkills() {
  return (
    <div className={styles.skills}>
      <Heading text={"My Skills"}></Heading>
    </div>
  );
}
