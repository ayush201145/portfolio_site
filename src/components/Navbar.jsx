import React from 'react';
import { BIO } from '../data/bioData';

export default function Navbar() {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: 'rgba(7, 10, 17, 0.85)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--border-subtle)',
      padding: '16px 24px'
    }}>
      <div className="container-xl" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* BRAND LOGO */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '10px',
            background: 'var(--accent-gradient)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: '800',
            fontSize: '18px',
            color: '#fff',
            boxShadow: '0 4px 12px rgba(99, 102, 241, 0.3)'
          }}>
            A
          </div>
          <div>
            <div style={{ fontSize: '17px', fontWeight: '700', letterSpacing: '-0.3px', color: 'var(--text-primary)' }}>
              {BIO.name}
            </div>
            <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Software & AI Engineer</div>
          </div>
        </div>

        {/* NAV LINKS */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
          <a href="#projects" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '14px', fontWeight: '500', transition: 'var(--transition-fast)' }} onMouseOver={(e) => e.target.style.color = '#fff'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>Projects</a>
          <a href="#skills" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '14px', fontWeight: '500', transition: 'var(--transition-fast)' }} onMouseOver={(e) => e.target.style.color = '#fff'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>Skills</a>
          <a href="#contact" style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '14px', fontWeight: '500', transition: 'var(--transition-fast)' }} onMouseOver={(e) => e.target.style.color = '#fff'} onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}>Contact</a>
        </div>

        {/* DIRECT ACTION BUTTONS */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <a href={BIO.github} target="_blank" rel="noreferrer" className="btn-outline" style={{ padding: '8px 16px', fontSize: '13px' }}>
            GitHub ↗
          </a>
          <a href={`mailto:${BIO.email}`} className="btn-primary" style={{ padding: '8px 16px', fontSize: '13px' }}>
            Email Me
          </a>
        </div>

      </div>
    </nav>
  );
}
