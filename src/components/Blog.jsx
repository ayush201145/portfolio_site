import { useState } from 'react';
import BLOG_POSTS from '../data/blog';
import SectionLabel from './SectionLabel';
import useInView from '../hooks/useInView';
import './Blog.css';

function BlogCard({ post, index }) {
  const [ref, visible] = useInView();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      className={`blog-card fade-up ${visible ? 'visible' : ''} ${hovered ? 'blog-card--hovered' : ''}`}
      style={{ transitionDelay: `${index * 120}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="blog-card__body">
        <div className="blog-card__meta">
          <span className="blog-card__tag">{post.tag}</span>
          {post.coming && <span className="blog-card__coming">COMING SOON</span>}
        </div>
        <h3 className="blog-card__title">{post.title}</h3>
        <p className="blog-card__desc">{post.desc}</p>
      </div>
      <span className={`blog-card__arrow ${hovered ? 'blog-card__arrow--active' : ''}`}>→</span>
    </div>
  );
}

export default function Blog() {
  return (
    <section id="blog" className="section">
      <SectionLabel num="03." title="Writing" />
      <p className="blog__sub">
        Articles coming soon — planned topics based on my project work.
      </p>
      <div className="blog__list">
        {BLOG_POSTS.map((post, i) => (
          <BlogCard key={i} post={post} index={i} />
        ))}
      </div>
    </section>
  );
}
