import React, { useState, useEffect } from 'react';
import { TRACKS } from '../data/tracksData';

export default function ArchitectureDrawer({ project, onClose }) {
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const trackInfo = TRACKS.find(t => t.id === project.trackId) || { color: '#6366f1', name: project.trackId };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 999,
      display: 'flex',
      justifyContent: 'flex-end',
      background: 'rgba(0, 0, 0, 0.75)',
      backdropFilter: 'blur(8px)',
      animation: 'fadeIn 0.25s ease'
    }} onClick={onClose}>
      
      {/* DRAWER CONTAINER */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '680px',
          height: '100%',
          background: '#090e17',
          borderLeft: '1px solid var(--border-subtle)',
          boxShadow: '-10px 0 40px rgba(0, 0, 0, 0.8)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}
      >
        
        {/* HEADER */}
        <div style={{
          padding: '24px 28px',
          borderBottom: '1px solid var(--border-subtle)',
          background: 'rgba(15, 23, 42, 0.9)',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <span className={`track-badge ${project.trackId}`}>
                {trackInfo.name}
              </span>
              <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                {project.timeline}
              </span>
            </div>
            <h2 style={{ fontSize: '22px', fontWeight: '800', color: 'var(--text-primary)', margin: '0 0 4px 0', letterSpacing: '-0.4px' }}>
              {project.title}
            </h2>
            <div style={{ fontSize: '14px', color: trackInfo.color, fontWeight: '500' }}>
              {project.subtitle}
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: 'none',
              color: 'var(--text-primary)',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              cursor: 'pointer',
              fontSize: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            ✕
          </button>
        </div>

        {/* 4-TAB NAVIGATION */}
        <div style={{
          display: 'flex',
          borderBottom: '1px solid var(--border-subtle)',
          background: 'rgba(15, 23, 42, 0.5)',
          padding: '0 28px'
        }}>
          {[
            { id: 'overview', label: '📌 Overview & Impact' },
            { id: 'architecture', label: '🏗️ Architecture Flow' },
            { id: 'tech', label: '💻 Tech & Deliverables' },
            { id: 'repo', label: '🔗 GitHub Repo' }
          ].map(t => (
            <button
              key={t.id}
              type="button"
              onClick={() => setActiveTab(t.id)}
              style={{
                background: 'transparent',
                border: 'none',
                borderBottom: activeTab === t.id ? `2px solid ${trackInfo.color}` : '2px solid transparent',
                color: activeTab === t.id ? '#fff' : 'var(--text-muted)',
                padding: '12px 16px',
                fontSize: '13px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'var(--transition-fast)'
              }}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* DRAWER BODY CONTENT */}
        <div style={{ flex: 1, padding: '28px', overflowY: 'auto' }}>
          
          {/* TAB 1: OVERVIEW & IMPACT BULLET POINTS */}
          {activeTab === 'overview' && (
            <div>
              <div style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '24px' }}>
                {project.summary}
              </div>

              <h4 style={{ fontSize: '14px', fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '14px' }}>
                Key Engineering Deliverables & Impact
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {project.deliverables.map((bullet, idx) => (
                  <div key={idx} style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    padding: '14px 16px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    fontSize: '13px',
                    color: 'var(--text-primary)',
                    lineHeight: '1.5'
                  }}>
                    <span style={{ color: trackInfo.color, fontWeight: 'bold' }}>#{idx + 1}</span>
                    <div>{bullet}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: SYSTEM ARCHITECTURE DIAGRAM */}
          {activeTab === 'architecture' && (
            <div>
              <h4 style={{ fontSize: '14px', fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '14px' }}>
                System Architecture Topology
              </h4>

              <div className="terminal-window" style={{ marginBottom: '20px' }}>
                <div className="terminal-header">
                  <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Architecture Topology Diagram</span>
                </div>
                <div className="terminal-body" style={{ whiteSpace: 'pre', color: '#38bdf8', fontSize: '12px' }}>
                  {project.architecture || 'System diagram rendering...'}
                </div>
              </div>

              <div style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Designed with modular microservice boundaries, thread safety, and deterministic failure recovery.
              </div>
            </div>
          )}

          {/* TAB 3: TECH STACK & SPECIFICATIONS */}
          {activeTab === 'tech' && (
            <div>
              <h4 style={{ fontSize: '14px', fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '14px' }}>
                Technology Stack Breakdown
              </h4>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                {project.techStack.map((tech, idx) => (
                  <div key={idx} style={{
                    background: 'rgba(99, 102, 241, 0.15)',
                    border: '1px solid rgba(99, 102, 241, 0.3)',
                    color: '#a5b4fc',
                    fontSize: '13px',
                    fontWeight: '600',
                    fontFamily: 'var(--font-mono)',
                    padding: '8px 14px',
                    borderRadius: 'var(--radius-md)'
                  }}>
                    {tech}
                  </div>
                ))}
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '16px', fontSize: '13px', color: 'var(--text-secondary)' }}>
                <strong>Repository Status:</strong> Verified Production Implementation<br />
                <strong>Track Category:</strong> {trackInfo.name}<br />
                <strong>Deployment Spec:</strong> Containerized Docker topology with automated health checks.
              </div>
            </div>
          )}

          {/* TAB 4: GITHUB REPOSITORY LINK */}
          {activeTab === 'repo' && (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🐙</div>
              <h3 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '8px' }}>
                Source Code & Documentation
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginBottom: '24px', maxWidth: '400px', margin: '0 auto 24px auto' }}>
                Access full source code, commit history, setup instructions, and tests on GitHub.
              </p>

              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
                style={{ fontSize: '15px', padding: '12px 28px' }}
              >
                Open GitHub Repository ↗
              </a>
            </div>
          )}

        </div>

        {/* DRAWER FOOTER */}
        <div style={{
          padding: '16px 28px',
          borderTop: '1px solid var(--border-subtle)',
          background: 'rgba(15, 23, 42, 0.9)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <a href={project.repoUrl} target="_blank" rel="noreferrer" className="btn-outline" style={{ fontSize: '13px' }}>
            GitHub Repository ↗
          </a>
          <button type="button" onClick={onClose} className="btn-primary" style={{ fontSize: '13px', padding: '8px 16px' }}>
            Close Drawer
          </button>
        </div>

      </div>

    </div>
  );
}
