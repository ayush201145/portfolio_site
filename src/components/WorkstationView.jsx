import React, { useState } from 'react';
import { TRACKS } from '../data/tracksData';
import { PROJECTS } from '../data/projectsData';
import { BIO } from '../data/bioData';

export default function WorkstationView({ onOpenDrawer }) {
  const [activeTabTrack, setActiveTabTrack] = useState('sde');

  const activeTrack = TRACKS.find(t => t.id === activeTabTrack) || TRACKS[0];
  const trackProjects = PROJECTS.filter(p => p.trackId === activeTabTrack);

  return (
    <div style={{ paddingTop: '100px', paddingBottom: '80px' }}>
      <div className="container-xl">
        
        {/* WORKSTATION HEADER */}
        <div className="terminal-window" style={{ marginBottom: '28px' }}>
          <div className="terminal-header" style={{ justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div className="terminal-dot red" />
              <div className="terminal-dot yellow" />
              <div className="terminal-dot green" />
              <span style={{ fontSize: '13px', fontWeight: '600', color: '#fff', marginLeft: '6px' }}>
                Engineering Command Center OS v2.4
              </span>
            </div>
            <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
              Status: ALL SYSTEMS OPERATIONAL (18 Projects Loaded)
            </div>
          </div>

          {/* WORKSPACE TAB SWITCHER */}
          <div style={{ display: 'flex', background: 'rgba(0, 0, 0, 0.4)', borderBottom: '1px solid rgba(255, 255, 255, 0.08)', overflowX: 'auto' }}>
            {TRACKS.map(t => {
              const isActive = activeTabTrack === t.id;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setActiveTabTrack(t.id)}
                  style={{
                    background: isActive ? 'rgba(30, 41, 59, 0.9)' : 'transparent',
                    border: 'none',
                    borderBottom: isActive ? `2px solid ${t.color}` : '2px solid transparent',
                    color: isActive ? '#fff' : 'var(--text-muted)',
                    padding: '12px 20px',
                    fontSize: '13px',
                    fontWeight: '600',
                    fontFamily: 'var(--font-mono)',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    whiteSpace: 'nowrap'
                  }}
                >
                  <span>{t.icon}</span> {t.name}
                </button>
              );
            })}
          </div>

          {/* WORKSPACE MAIN PANEL */}
          <div className="terminal-body">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: activeTrack.color, margin: '0 0 4px 0' }}>
                  Workspace: {activeTrack.name}
                </h3>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                  {activeTrack.tagline}
                </div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '20px', fontWeight: '800', color: activeTrack.color }}>
                  {activeTrack.metric}
                </div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{activeTrack.metricLabel}</div>
              </div>
            </div>

            {/* PROJECTS IN WORKSPACE */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
              {trackProjects.map(proj => (
                <div
                  key={proj.id}
                  onClick={() => onOpenDrawer(proj)}
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: 'var(--radius-md)',
                    padding: '16px',
                    cursor: 'pointer',
                    transition: 'var(--transition-fast)'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.borderColor = activeTrack.color}
                  onMouseOut={(e) => e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)'}
                >
                  <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginBottom: '4px' }}>
                    {proj.timeline}
                  </div>
                  <h4 style={{ fontSize: '15px', fontWeight: '700', color: '#fff', margin: '0 0 6px 0' }}>
                    {proj.title}
                  </h4>
                  <p style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: '1.4', marginBottom: '12px' }}>
                    {proj.summary}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                    {proj.techStack.map((tech, idx) => (
                      <span key={idx} className="tech-pill" style={{ fontSize: '10px' }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
