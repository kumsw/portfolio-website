import styles from "./App.module.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import About from "../../Pages/AboutMe";
import MySkills from "../../Pages/MySkills";
import Projects from "../../Pages/Projects";
import Contact from "../../Pages/Contact";
import Home from "../../Pages/Home";

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <Home />
      <About />
      <MySkills />
      <Projects />
      <Contact />
      <Footer> </Footer>
    </div>
  );
}

export default App;
