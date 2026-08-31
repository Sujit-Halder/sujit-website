import { motion } from "framer-motion";
import styles from '../styles/hero.module.css';

const Hero = () => {
  return (
    <section id="Hero" className={styles.container}>
      <div className={styles.shootingStar3}></div>
      <div className={styles.shootingStar}></div>
      <div className={styles.shootingStar2}></div>


      <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className={styles.heroContent}>
        <div className={styles.heroHeader}> Hey, I&apos;m Alex. </div>
        <p className={styles.heroSubheader}> I code and do other things </p>
      </motion.div>

    </section>
  );
};

export default Hero;
