import styles from "../styles/skills.module.css";
import { technologies } from "../constants";
import BallCanvas from "./Ball";

const Skills = () => {
  // Group technologies by category
  const groupedTechnologies = technologies.reduce((acc, tech) => {
    if (!acc[tech.category]) {
      acc[tech.category] = [];
    }
    acc[tech.category].push(tech);
    return acc;
  }, {});

  const languages = groupedTechnologies["Languages"] || [];
  const frameworks = groupedTechnologies["Frameworks"] || [];
  const devTools = groupedTechnologies["Dev Tools"] || [];

  return (
    <section id="Skills" className={styles.container}>
      <div className={styles.generalHeader}>Skills</div>
      
      <div className={styles.skillsGrid}>
        {/* Languages - Full top row */}
        <div className={`${styles.categorySection} ${styles.languagesSection}`}>
          <h3 className={styles.categoryTitle}>Programming Languages</h3>
          <div className={styles.technologiesContainer}>
            {languages.map((technology) => (
              <div className={styles.technologyItem} key={technology.name}>
                <BallCanvas icon={technology.icon} label={technology.name} />
              </div>
            ))}
          </div>
        </div>
        
        {/* Frameworks - Bottom left */}
        <div className={styles.categorySection}>
          <h3 className={styles.categoryTitle}>Frameworks</h3>
          <div className={styles.technologiesContainer}>
            {frameworks.map((technology) => (
              <div className={styles.technologyItem} key={technology.name}>
                <BallCanvas icon={technology.icon} label={technology.name} />
              </div>
            ))}
          </div>
        </div>
        
        {/* Dev Tools - Bottom right */}
        <div className={styles.categorySection}>
          <h3 className={styles.categoryTitle}>Tools</h3>
          <div className={styles.technologiesContainer}>
            {devTools.map((technology) => (
              <div className={styles.technologyItem} key={technology.name}>
                <BallCanvas icon={technology.icon} label={technology.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
