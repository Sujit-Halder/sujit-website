import { useState } from "react";
import { projects } from "../../constants";
import { FaArrowRight, FaArrowLeft, FaExternalLinkAlt } from 'react-icons/fa';
import styles from "../../styles/project.module.css";

const ImageSlider = () => {

    const [current, setCurrent] = useState(0);
    const length = projects.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    }

    if (!Array.isArray(projects) || projects.length <= 0) {
        return null;
    }

    return (
        <div className={styles.sliderContainer}>
            <FaArrowLeft className={styles.leftArrow} onClick={prevSlide} />
            <div className={styles.projectBox}>
                <div className={styles.slider}>
                    {projects.map((project, index) => (
                        <div key={index} className={`${styles.slide} ${index === current ? styles.active : ''}`}
                        >
                            {index === current && (
                                <div className={styles.imageWrapper}>
                                    <img src={`${project.path}`} alt={project.title} className={styles.image} />
                                    <div className={styles.overlay}>
                                        <p className={styles.title}>{project.title}</p>

                                        <p className={styles.description}>
                                            {project.description}
                                        </p>

                                        <div className={styles.techDetails}>
                                            {project.languages && (
                                                <div className={styles.techRow}>
                                                    <span className={styles.techLabel}>Languages</span>
                                                    <span className={styles.techValue}>{project.languages}</span>
                                                </div>
                                            )}

                                            {project.frameworks && (
                                                <div className={styles.techRow}>
                                                    <span className={styles.techLabel}>Frameworks</span>
                                                    <span className={styles.techValue}>{project.frameworks}</span>
                                                </div>
                                            )}

                                            {project.tools && (
                                                <div className={styles.techRow}>
                                                    <span className={styles.techLabel}>Tools</span>
                                                    <span className={styles.techValue}>{project.tools}</span>
                                                </div>
                                            )}
                                        </div>

                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={styles.code}
                                                aria-label={`Open ${project.title}`}
                                            >
                                                <FaExternalLinkAlt size="1.5rem" />
                                            </a>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <FaArrowRight className={styles.rightArrow} onClick={nextSlide} />
        </div>
    );
};


export default ImageSlider;
