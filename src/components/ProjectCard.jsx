import React from 'react';
import { TRACKS } from '../data/tracksData';

export default function ProjectCard({ project, onOpenDrawer }) {
  const trackInfo = TRACKS.find(t => t.id === project.trackId) || { color: '#6366f1', name: project.trackId };

  return (
    <div
      className="glass-panel"
      style={{
        padding: '24px',
        display: 'flex',
        flexDirection: 'column',
        justify: 'space-between',
        position: 'relative',
        transition: 'var(--transition-smooth)'
      }}
    >
      {/* Featured Badge */}
      {project.featured && (
        <div style={{
          position: 'absolute',
          top: '14px',
          right: '14px',
          background: 'rgba(99, 102, 241, 0.2)',
          border: '1px solid rgba(99, 102, 241, 0.4)',
          color: '#a5b4fc',
          fontSize: '10px',
          fontWeight: '700',
          padding: '2px 8px',
          borderRadius: '10px',
          fontFamily: 'var(--font-mono)'
        }}>
          ★ FLAGSHIP
        </div>
      )}

      <div>
        {/* TRACK BADGE & TIMELINE */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
          <span className={`track-badge ${project.trackId}`}>
            {trackInfo.shortName || trackInfo.name}
          </span>
          <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
            {project.timeline}
          </span>
        </div>

        {/* TITLE & SUBTITLE */}
        <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '4px', letterSpacing: '-0.3px' }}>
          {project.title}
        </h3>
        <div style={{ fontSize: '13px', fontWeight: '500', color: trackInfo.color, marginBottom: '14px' }}>
          {project.subtitle}
        </div>

        {/* SUMMARY */}
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '16px' }}>
          {project.summary}
        </p>

        {/* TECH STACK TAGS */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
          {project.techStack.map((tech, idx) => (
            <span key={idx} className="tech-pill">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* FOOTER ACTIONS */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '14px', borderTop: '1px solid var(--border-subtle)' }}>
        <button
          type="button"
          onClick={() => onOpenDrawer(project)}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--accent-primary)',
            fontSize: '13px',
            fontWeight: '600',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: 0
          }}
        >
          View Architecture & Deliverables ➔
        </button>

        <a
          href={project.repoUrl}
          target="_blank"
          rel="noreferrer"
          style={{
            color: 'var(--text-muted)',
            textDecoration: 'none',
            fontSize: '13px',
            transition: 'var(--transition-fast)'
          }}
          onMouseOver={(e) => e.target.style.color = '#fff'}
          onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'}
          title="Open GitHub Repository"
        >
          GitHub ↗
        </a>
      </div>

    </div>
  );
}
