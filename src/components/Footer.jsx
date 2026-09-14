import React from 'react';
import { BIO } from '../data/bioData';

export default function Footer() {
  return (
    <footer style={{
      background: 'rgba(7, 10, 17, 0.95)',
      borderTop: '1px solid var(--border-subtle)',
      padding: '32px 0',
      color: 'var(--text-muted)',
      fontSize: '13px'
    }}>
      <div className="container-xl" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          © {new Date().getFullYear()} {BIO.name}. Multi-Disciplinary Engineering Workstation.
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <a href={BIO.github} target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>GitHub</a>
          <a href={BIO.linkedin} target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>LinkedIn</a>
          <a href="#projects" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Projects</a>
        </div>
      </div>
    </footer>
  );
}
