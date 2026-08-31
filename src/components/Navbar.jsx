import { useState } from "react";
import styles from "../styles/nav.module.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.nav}>
      <a href="#Hero" className={styles.navTitle}>
        Alex Shrestha
      </a>
      
      {/* Hamburger Menu Button */}
      <button 
        className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation Menu */}
      <ul className={`${styles.navMenu} ${isMenuOpen ? styles.active : ''}`}>
        <li>
          <a href="#Hero" onClick={closeMenu}>Home</a>
        </li>
        <li>
          <a href="#About" onClick={closeMenu}>About</a>
        </li>
        <li>
          <a href="#Skills" onClick={closeMenu}>Skills</a>
        </li>
        <li>
          <a href="#Experiences" onClick={closeMenu}>Experiences</a>
        </li>
        <li>
          <a href="#Projects" onClick={closeMenu}>Projects</a>
        </li>
        <li>
          <a href="#Contact" onClick={closeMenu}>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
