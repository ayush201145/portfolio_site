import React from 'react';
import { BIO } from '../data/bioData';

export default function Hero() {
  return (
    <section style={{ paddingTop: '130px', paddingBottom: '60px', textAlign: 'center' }}>
      <div className="container-xl" style={{ maxWidth: '840px', margin: '0 auto' }}>
        
        {/* AVATAR / BADGE */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 16px',
          borderRadius: '20px',
          background: 'rgba(99, 102, 241, 0.12)',
          border: '1px solid rgba(99, 102, 241, 0.3)',
          color: 'var(--accent-primary)',
          fontSize: '13px',
          fontWeight: '600',
          marginBottom: '24px'
        }}>
          <span>👋</span> Hi, I'm Ayush — Software Engineer & AI Developer
        </div>

        {/* MAIN HEADLINE */}
        <h1 style={{
          fontSize: '48px',
          fontWeight: '800',
          letterSpacing: '-1.5px',
          lineHeight: '1.15',
          marginBottom: '20px',
          color: 'var(--text-primary)'
        }}>
          Building Scalable Software, <br />
          <span style={{ background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Distributed Systems & AI Solutions
          </span>
        </h1>

        {/* CONCISE SUBTITLE */}
        <p style={{
          fontSize: '18px',
          color: 'var(--text-secondary)',
          lineHeight: '1.6',
          marginBottom: '32px',
          maxWidth: '680px',
          margin: '0 auto 32px auto'
        }}>
          Full-stack developer experienced in Go, React/Next.js, Python AI/ML, PostgreSQL, and Kubernetes. Built 18 production projects across systems, SaaS, AI, and cloud infrastructure.
        </p>

        {/* PRIMARY CTA BUTTONS */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '48px' }}>
          <a href="#projects" className="btn-primary" style={{ fontSize: '15px', padding: '12px 24px' }}>
            ⚡ View Projects (18)
          </a>
          <a href={BIO.github} target="_blank" rel="noreferrer" className="btn-outline" style={{ fontSize: '15px', padding: '12px 24px' }}>
            🐙 GitHub Repositories
          </a>
          <a href="#contact" className="btn-outline" style={{ fontSize: '15px', padding: '12px 24px' }}>
            📬 Get in Touch
          </a>
        </div>

        {/* KEY STATS ROW */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '16px',
          background: 'rgba(15, 23, 42, 0.5)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-lg)',
          padding: '20px'
        }}>
          <div>
            <div style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>18</div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Production Projects</div>
          </div>
          <div>
            <div style={{ fontSize: '24px', fontWeight: '800', color: 'var(--accent-primary)', fontFamily: 'var(--font-mono)' }}>6</div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Tech Domains</div>
          </div>
          <div>
            <div style={{ fontSize: '24px', fontWeight: '800', color: '#10b981', fontFamily: 'var(--font-mono)' }}>300+</div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>DSA Solved</div>
          </div>
          <div>
            <div style={{ fontSize: '24px', fontWeight: '800', color: '#f59e0b', fontFamily: 'var(--font-mono)' }}>50k+</div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Req/Sec Capacity</div>
          </div>
        </div>

      </div>
    </section>
  );
}
