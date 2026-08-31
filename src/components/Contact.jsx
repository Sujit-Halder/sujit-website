import styles from '../styles/contact.module.css';
import { Linkedin, Github, Facebook } from "../constants/icons";

const Contact = () => {
  return (
    <section id="Contact" className={styles.contact}>
      <h1 className={styles.header}>Reach Out</h1>

      <div className={styles.socialGroup}>
        <h2 className={styles.contactSub}>Email</h2>
        <div className={styles.myemail}><a href="mailto:ashrest6@terpmail.umd.edu.com">ashrest6@terpmail.umd.edu</a></div>
      </div>

      <div className={styles.socialGroup}>
        <h2 className={styles.contactSub}>Social Media</h2>
        <div className={styles.icons} id="icons">
          <a href="https://www.linkedin.com/in/shrestha2023/" target="_blank" rel="noreferrer"><Linkedin /></a>
          <a href="https://github.com/shresthaa23/" target="_blank" rel="noreferrer"><Github /></a>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer"><Facebook /></a>
        </div>
      </div>
    </section>
  );
};

export default Contact;