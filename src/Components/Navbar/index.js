import styles from "./navbar.module.css";
import { Link, animateScroll as scroll } from "react-scroll";
import { navItems } from "./data.js";
import logo from "./Polygon3Kunmi_home_spikes.png";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logoWrapper}>
        <img
          className={styles.navLogo}
          alt="Kunmi Logo"
          src={logo}
          onClick={() => scroll.scrollToTop()}
        />
      </div>
      <div className={styles.container}>
        {navItems.map((item) => {
          return (
            <Link
              className={styles.navItem}
              key={item.value}
              activeClass="active"
              to={item.name}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {item.value}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar;
