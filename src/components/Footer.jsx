import React from 'react';
import { BIO } from '../data/bioData';

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border-subtle)',
      background: 'rgba(5, 7, 13, 0.95)',
      padding: '36px 24px',
      fontFamily: 'var(--font-mono)',
      fontSize: '12px',
      color: 'var(--text-muted)'
    }}>
      <div className="container-xl" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ color: '#00ff88', fontWeight: '800' }}>AYUSH // SYS_CORE</span>
          <span>•</span>
          <span>5 Core Systems Deployed</span>
          <span>•</span>
          <span>Vibe Coded Architecture Workstation</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <a href={BIO.github} target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
            GitHub
          </a>
          <a href={BIO.linkedin} target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
            LinkedIn
          </a>
          <a href={`mailto:${BIO.email}`} style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
            Email
          </a>
          <span style={{ color: '#00ff88' }}>[READY 2026]</span>
        </div>

      </div>
    </footer>
  );
}
