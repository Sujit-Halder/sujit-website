import { useState, useEffect, useRef } from "react";
import { experiences } from "../constants";
import styles from "../styles/experience.module.css";

const Experiences = () => {
  const [topRowVisible, setTopRowVisible] = useState(false);
  const [bottomRowVisible, setBottomRowVisible] = useState(false);
  const sectionRef = useRef(null);

  // Split experiences into first 3 and last 2
  const firstThree = experiences.slice(0, 3);
  const lastTwo = experiences.slice(3, 5);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setTopRowVisible(true);
            }, 300);
            
            setTimeout(() => {
              setBottomRowVisible(true);
            }, 300);
          }
        });
      },
      {
        threshold: 0.2, // Trigger when 20% of the section is visible
        rootMargin: "0px 0px -50px 0px"
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
    <section id="Experiences" className={styles.container} ref={sectionRef}>
      <div className={styles.generalHeader}>Experiences</div>
      
      {/* First row - first 3 experiences */}
      <div className={`${styles.experienceGrid} ${styles.topRow} ${topRowVisible ? styles.visible : ''}`}>
        {firstThree.map((exp, i) => (
          <FlipCard key={i} {...exp} />
        ))}
      </div>
      
      {/* Second row - last 2 experiences */}
      <div className={`${styles.experienceGrid} ${styles.bottomRow} ${bottomRowVisible ? styles.visible : ''}`}>
        {lastTwo.map((exp, i) => (
          <FlipCard key={i + 3} {...exp} />
        ))}
      </div>
    </section>
  );
}

// eslint-disable-next-line react/prop-types
function FlipCard({ logo, company, date, location, role, description, zoom = 1.0 }) {
  return (
    <div className={styles.flipCard}>
      <div className={styles.flipCardInner}>
        {/* Front of the card - 3/5 image, 2/5 content */}
        <div className={styles.flipCardFront}>
          <div className={styles.frontImageContainer}>
            <img 
              src={logo} 
              alt={`${company} logo`} 
              className={styles.frontImage}
              style={{ transform: `scale(${zoom})` }}
            />
          </div>
          <div className={styles.frontContent}>
            <h3 className={styles.frontTitle}>{role}</h3>
            <p className={styles.frontSubtitle}>{date}</p>
          </div>
        </div>
        
        {/* Back of the card - 1/5 shrunken image, 4/5 content */}
        <div className={styles.flipCardBack}>
          <div className={styles.backImageContainer}>
            <img 
              src={logo} 
              alt={`${company} logo`} 
              className={styles.backImage}
              style={{ transform: `scale(${zoom})` }}
            />
          </div>
          <div className={styles.backContent}>
            <h3 className={styles.backTitle}>{role}</h3>
            <p className={styles.backSubtitle}>{company} • {date} • {location}</p>
            <div className={styles.backDescription}>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
