import SKILLS from '../data/skills';
import SectionLabel from './SectionLabel';
import useInView from '../hooks/useInView';
import './About.css';

function SkillChip({ label, delay, visible }) {
  return (
    <span
      className={`skill-chip fade-up ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {label}
    </span>
  );
}

function SkillGroup({ category, items, groupIndex }) {
  const [ref, visible] = useInView();
  return (
    <div ref={ref} className="skill-group">
      <p className="skill-group__label">{category}</p>
      <div className="skill-group__chips">
        {items.map((s, i) => (
          <SkillChip
            key={s}
            label={s}
            delay={i * 40 + groupIndex * 80}
            visible={visible}
          />
        ))}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="section">
      <SectionLabel num="01." title="About & Skills" />

      <div className="about__grid">
        {/* Bio */}
        <div className="about__bio">
          <p>
            I'm a Computer Science Engineering student at{' '}
            <span className="about__highlight">NIT Patna</span>, passionate about
            building things at the intersection of full-stack engineering and
            artificial intelligence.
          </p>
          <p>
            I've shipped production-grade apps with real-time communication,
            containerized ML pipelines, and edge computing systems — with a strong
            algorithmic foundation of 300+ DSA problems solved.
          </p>
          <p>
            Actively looking for opportunities where I can contribute to high-impact
            teams, learn fast, and build products people rely on.
          </p>

          <div className="about__card">
            <p className="about__card-line"><span className="about__card-icon">🎓</span> B.Tech CSE · NIT Patna</p>
            <p className="about__card-line"><span className="about__card-icon">📧</span> ayushk.ug23.cs@nitp.ac.in</p>
            <p className="about__card-line"><span className="about__card-icon">📱</span> +91-6207885970</p>
          </div>
        </div>

        {/* Skills */}
        <div className="about__skills">
          {Object.entries(SKILLS).map(([cat, items], i) => (
            <SkillGroup key={cat} category={cat} items={items} groupIndex={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
