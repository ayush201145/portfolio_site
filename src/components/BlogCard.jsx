import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import styles from './BlogCard.module.css';

export default function BlogCard({ post, index }) {
  const [ref, vis] = useInView();
  const [hov, setHov] = useState(false);

  return (
    <article
      ref={ref}
      className={`${styles.card} ${vis ? styles.visible : ''} ${hov ? styles.hovered : ''}`}
      style={{ transitionDelay: `${index * 120}ms` }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <div className={styles.left}>
        <div className={styles.meta}>
          <span className={styles.tag}>{post.tag}</span>
          {post.coming && <span className={styles.soon}>COMING SOON</span>}
        </div>
        <h3 className={styles.title}>{post.title}</h3>
        <p className={styles.desc}>{post.desc}</p>
      </div>
      <span className={`${styles.arrow} ${hov ? styles.arrowActive : ''}`}>→</span>
    </article>
  );
}
