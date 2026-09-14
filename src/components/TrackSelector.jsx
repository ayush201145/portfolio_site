import React from 'react';
import { TRACKS } from '../data/tracksData';

export default function TrackSelector({ selectedTrack, onSelectTrack }) {
  return (
    <section id="tracks" className="section-padding" style={{ background: 'rgba(15, 23, 42, 0.3)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container-xl">
        
        <div className="section-header">
          <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
            ENGINEERING DISCIPLINES & TRACKS
          </div>
          <h2 className="section-title">6 Specialized Track Workspaces</h2>
          <p className="section-subtitle">
            Explore 18 production projects categorized by technical domain. Click any track to filter the project matrix.
          </p>
        </div>

        {/* TRACK CARDS GRID */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '20px' }}>
          {TRACKS.map(track => {
            const isSelected = selectedTrack === track.id;

            return (
              <div
                key={track.id}
                onClick={() => {
                  onSelectTrack(isSelected ? 'all' : track.id);
                  const targetSec = document.getElementById('projects');
                  if (targetSec) targetSec.scrollIntoView({ behavior: 'smooth' });
                }}
                className="glass-panel"
                style={{
                  padding: '24px',
                  cursor: 'pointer',
                  borderColor: isSelected ? track.color : 'var(--border-subtle)',
                  boxShadow: isSelected ? `0 0 20px ${track.color}33` : 'none',
                  background: isSelected ? 'rgba(30, 41, 59, 0.85)' : 'var(--bg-card)',
                  transform: isSelected ? 'translateY(-2px)' : 'none',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Top accent bar */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: track.color }} />

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '24px' }}>{track.icon}</span>
                    <div>
                      <h3 style={{ fontSize: '17px', fontWeight: '700', color: 'var(--text-primary)', margin: 0 }}>
                        {track.name}
                      </h3>
                      <span className={`track-badge ${track.id}`} style={{ marginTop: '4px' }}>
                        {track.projectIds.length} Projects
                      </span>
                    </div>
                  </div>

                  {/* METRIC BADGE */}
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '18px', fontWeight: '800', color: track.color, fontFamily: 'var(--font-mono)' }}>
                      {track.metric}
                    </div>
                    <div style={{ fontSize: '10px', color: 'var(--text-muted)' }}>{track.metricLabel}</div>
                  </div>
                </div>

                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.5', margin: 0 }}>
                  {track.tagline}
                </p>

                <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '12px', fontWeight: '600', color: isSelected ? track.color : 'var(--text-muted)' }}>
                  <span>{isSelected ? '✓ Filter Active' : 'Click to Filter Track'}</span>
                  <span>➔</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
