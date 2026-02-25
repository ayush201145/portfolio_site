import { useState, useEffect } from 'react';
import './Navbar.css';

const NAV_ITEMS = ['home', 'about', 'projects', 'blog', 'contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActive(id);
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <span className="navbar__logo">AK.</span>

      <div className="navbar__links">
        {NAV_ITEMS.map(n => (
          <button
            key={n}
            className={`navbar__btn ${active === n ? 'navbar__btn--active' : ''}`}
            onClick={() => scrollTo(n)}
          >
            {n}
          </button>
        ))}
      </div>

      <a href="mailto:ayushk.ug23.cs@nitp.ac.in">
        <button className="btn btn--outline btn--sm">Hire Me</button>
      </a>
    </nav>
  );
}
