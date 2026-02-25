import useTypewriter from '../hooks/useTypewriter';
import './Hero.css';

const STATS = [
  { val: '8+',   label: 'Projects Built' },
  { val: '300+', label: 'DSA Problems'   },
  { val: '94%',  label: 'Model Accuracy' },
  { val: 'MERN', label: 'Primary Stack'  },
];

export default function Hero() {
  const typed = useTypewriter('Full-Stack Developer & ML Engineer', 65);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="hero section">
      <div className="hero__content">
        <p className="hero__eyebrow">// NIT Patna · CS Engineering</p>

        <h1 className="hero__name">
          Ayush<br />
          <span className="hero__name--hollow">Kumar</span>
        </h1>

        <div className="hero__role">
          {typed}
          <span className="hero__cursor">▋</span>
        </div>

        <p className="hero__bio">
          CS Engineering student at NIT Patna building scalable full-stack web apps
          and integrating ML models. 300+ DSA problems solved. Obsessed with clean
          architecture and systems that scale.
        </p>

        <div className="hero__actions">
          <button className="btn btn--solid" onClick={() => scrollTo('projects')}>
            View Projects
          </button>
          <button className="btn btn--outline" onClick={() => scrollTo('contact')}>
            Get in Touch
          </button>
        </div>
      </div>

      <div className="hero__stats">
        {STATS.map(({ val, label }) => (
          <div key={label} className="hero__stat">
            <span className="hero__stat-val">{val}</span>
            <span className="hero__stat-label">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
