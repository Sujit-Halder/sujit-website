import styles from "../../styles/research.module.css";
import ImageSlider from "./ImageSlider";

const Researches = () => {
  return (
    <section id="Researches" className={styles.container}>
      <h1 className={styles.generalHeader}>Researchs</h1>
      <ImageSlider />
    </section>
  );
};

export default Researches;
