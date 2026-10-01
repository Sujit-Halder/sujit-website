import styles from "../../styles/project.module.css";
import ImageSlider from "./ImageSlider";

const Projects = () => {
  return (
    <section id="Projects" className={styles.container}>
      <h1 className={styles.generalHeader}>Projects</h1>
      <ImageSlider />
    </section>
  );
};

export default Projects;
