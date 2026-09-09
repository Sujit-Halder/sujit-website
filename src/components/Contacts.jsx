import styles from '../styles/contact.module.css';
import { Linkedin, Github, Facebook } from "../constants/icons";

const Contacts = () => {
  return (
    <section id="Contacts" className={styles.contact}>
      <h1 className={styles.header}>Reach Out</h1>

      <div className={styles.socialGroup}>
        <h2 className={styles.contactSub}>Email</h2>
        <div className={styles.myemail}><a href="mailto:mail2sujithalder@gmail.com">mail2sujithalder@gmail.com</a></div>
      </div>

      <div className={styles.socialGroup}>
        <h2 className={styles.contactSub}>Social Media</h2>
        <div className={styles.icons} id="icons">
          <a href="https://www.linkedin.com/in/sujit-halder-053ab2287/" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
          <a href="https://github.com/Sujit-Halder" target="_blank" rel="noopener noreferrer"><Github /></a>
          {/* <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer"><Facebook /></a> */}
          {/* Resergate  */}
          {/* Maybe Youtube  */}
        </div>
      </div>
    </section>
  );
};

export default Contacts;