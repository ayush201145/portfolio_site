import { useState } from 'react';
import PROJECTS from '../data/projects';
import SectionLabel from './SectionLabel';
import useInView from '../hooks/useInView';
import './Projects.css';

function ProjectCard({ project, index }) {
  const [ref, visible] = useInView();
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref}
      className={`project-card fade-up ${visible ? 'visible' : ''} ${hovered ? 'project-card--hovered' : ''}`}
      style={{ transitionDelay: `${(index % 4) * 100}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && <div className="project-card__topline" />}

      <div className="project-card__header">
        <span className="project-card__id">{project.id}</span>
        <span className="project-card__tag">{project.tag}</span>
      </div>

      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__subtitle">{project.subtitle}</p>
      <p className="project-card__desc">{project.desc}</p>

      <div className="project-card__stack">
        {project.stack.map(s => (
          <span key={s} className="project-card__tech">{s}</span>
        ))}
      </div>

      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="project-card__link"
      >
        GitHub ↗
      </a>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <SectionLabel num="02." title="Projects" />
      <div className="projects__grid">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
