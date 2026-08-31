import { useState, useEffect, useRef } from "react";
import styles from "../styles/about.module.css";
// import Marquee from "react-fast-marquee";
// import { aboutMe } from "../constants";

const About = () => {
  const [doorsOpen, setDoorsOpen] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start the door animation
            setTimeout(() => {
              setDoorsOpen(true);
            }, 300);
            
            // Show about content after doors start opening
            setTimeout(() => {
              setAboutVisible(true);
            }, 100);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: "0px 0px -100px 0px"
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section id="About" className={styles.container} ref={sectionRef}>
      <h1 className={styles.generalHeader}>About Me</h1>
      
      <div className={`${styles.aboutBox} ${aboutVisible ? styles.visible : ''}`}>
        {/* Door Transition - positioned over the about box */}
        <div className={styles.doorContainer}>
          <div className={`${styles.doorOverlay} ${doorsOpen ? styles.hidden : ''}`}></div>
          <div className={`${styles.doorLeft} ${doorsOpen ? styles.open : ''}`}></div>
          <div className={`${styles.doorRight} ${doorsOpen ? styles.open : ''}`}></div>
        </div>
        <div className={`${styles.text} ${aboutVisible ? styles.visible : ''}`}>
          <h1 className={styles.myName}>Alex Shrestha</h1>
          <div className={styles.aboutMe}>
            <p>
              I&apos;m a junior <span className={styles.bolded}>Computer Science</span> student at{" "}
              <span className={styles.bolded}>The University of Maryland, College Park</span> with a minor in Economics. I&apos;m passionate about <span className={styles.bolded}>software development</span> with direct experience in full-stack development, security engineering, and research. I&apos;ve also become interested in <span className={styles.bolded}>quantum computing</span> and its real-world applications. I&apos;m driven to continuously learn, develop impactful solutions, and push the boundaries of technology. Check out my{" "}
              <a
                className={styles.resume}
                target="_blank"
                href={`${import.meta.env.BASE_URL}Alex-Shrestha-Resume.pdf`}
                rel="noopener noreferrer"
              >
                resume
              </a>!
            </p>
            <br />
            <h3 className={styles.bolded}>Relevant Classes:</h3>
            <div className={styles.classesContainer}>
              <ul className={styles.classesList}>
                <li>💻 Advanced Data Structures</li>
                <li>🧩 Algorithms</li>
                <li>📦 Object-Oriented Programming</li>
                <li>📊 Data Science</li>
                <li>🔐 Computer and Network Security</li>
              </ul>
              <ul className={styles.classesList}>
                <li>⚛️ Quantum Computing</li>
                <li>🛰️ Quantum Technologies</li>
                <li>📐 Linear Algebra</li>
                <li>➗ Calculus III</li>
                <li>🎲 Advanced Statistics</li>
              </ul>
            </div>
            <br />
            <h3 className={styles.bolded}>Random Interests:</h3>
            <p>
              🦇👨 | 🏈 | 🐦🟣 | 🏀👑 | 🎬 | 💥🚄 | 💸 | 🏋️‍♂️ | 🎮 | 🥩🍣 | 🎶 | 🗺️ | 💤
            </p>
          </div>
        </div>
        <div className={`${styles.photo} ${aboutVisible ? styles.visible : ''}`}>
          <img src={"Me.jpg"} alt="Photo of Me" className={styles.profilePhoto} />
        </div>
      </div>
    </section>
  );
};

export default About;
