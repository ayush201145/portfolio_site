import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ project, index }) {
  const [ref, vis] = useInView();
  const [hov, setHov] = useState(false);

  return (
    <article
      ref={ref}
      className={`${styles.card} ${vis ? styles.visible : ''} ${hov ? styles.hovered : ''}`}
      style={{ transitionDelay: `${(index % 4) * 100}ms` }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {hov && <div className={styles.topGlow} />}

      <div className={styles.header}>
        <span className={styles.id}>{project.id}</span>
        <span className={styles.tag}>{project.tag}</span>
      </div>

      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.subtitle}>{project.subtitle}</p>
      <p className={styles.desc}>{project.desc}</p>

      <div className={styles.stack}>
        {project.stack.map((s) => (
          <span key={s} className={styles.chip}>{s}</span>
        ))}
      </div>
    </article>
  );
}
