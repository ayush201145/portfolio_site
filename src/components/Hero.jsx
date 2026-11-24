import React from 'react';
import { BIO } from '../data/bioData';
import { PROJECTS } from '../data/projectsData';

export default function Hero({ onSelectProject }) {
  return (
    <section style={{ paddingTop: '130px', paddingBottom: '70px', position: 'relative' }}>
      <div className="container-xl">
        
        {/* HUD TERMINAL PROMPT HEADER */}
        <div style={{
          background: 'rgba(10, 16, 28, 0.8)',
          border: '1px solid var(--border-medium)',
          borderRadius: 'var(--radius-md)',
          padding: '12px 20px',
          fontFamily: 'var(--font-mono)',
          fontSize: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '36px',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: '#00ff88' }}>ayush@vibe-workstation:~$</span>
            <span style={{ color: 'var(--text-primary)' }}>./mount_production_nodes.sh --full-spec</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span className="pulse-led" style={{ background: '#00ff88' }} />
            <span style={{ color: '#00ff88', fontSize: '11px', textTransform: 'uppercase' }}>
              5 NODES AT 100% HEALTH
            </span>
          </div>
        </div>

        {/* HERO TITLE & POSITIONING */}
        <div style={{ textAlign: 'center', maxWidth: '980px', margin: '0 auto 40px auto' }}>
          
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            borderRadius: 'var(--radius-full)',
            background: 'rgba(0, 255, 136, 0.08)',
            border: '1px solid rgba(0, 255, 136, 0.25)',
            color: '#00ff88',
            fontSize: '12px',
            fontFamily: 'var(--font-mono)',
            fontWeight: '700',
            marginBottom: '20px'
          }}>
            <span>⚡</span> AYUSH // SOFTWARE & SYSTEMS ENGINEER
          </div>

          <h1 style={{
            fontSize: '54px',
            fontWeight: '800',
            letterSpacing: '-1.8px',
            lineHeight: '1.12',
            color: 'var(--text-primary)',
            marginBottom: '20px'
          }}>
            High-Concurrency Backends, <br />
            <span style={{
              background: 'linear-gradient(135deg, #00ff88 0%, #00f0ff 45%, #a855f7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Real-Time Vision & Event-Driven Cloud
            </span>
          </h1>

          <p style={{
            fontSize: '17px',
            color: 'var(--text-secondary)',
            lineHeight: '1.65',
            maxWidth: '740px',
            margin: '0 auto 36px auto'
          }}>
            Production-grade architectures spanning FastAPI distributed checkout, Celery/FFmpeg HLS video pipelines, YOLOv8/SORT traffic inference, full-stack React/React Native sync, and Redis/Kafka URL redirect streaming.
          </p>

          {/* CTA BUTTONS */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', flexWrap: 'wrap', marginBottom: '48px' }}>
            <a href="#deck" className="btn-vibe-primary" style={{ fontSize: '14px', padding: '12px 24px' }}>
              ⚡ Open Architecture Deck (5 Projects)
            </a>
            <a href="#matrix" className="btn-vibe-outline" style={{ fontSize: '14px', padding: '12px 24px' }}>
              📊 Compare Tech Matrices
            </a>
            <a href={BIO.github} target="_blank" rel="noreferrer" className="btn-vibe-outline" style={{ fontSize: '14px', padding: '12px 24px' }}>
              🐙 GitHub Repositories ↗
            </a>
          </div>

        </div>

        {/* 5-NODE INTERACTIVE SYSTEM LAUNCH RACK */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '14px',
          marginBottom: '40px'
        }}>
          {PROJECTS.map((proj) => (
            <a
              key={proj.id}
              href="#deck"
              onClick={() => onSelectProject && onSelectProject(proj.id)}
              style={{
                textDecoration: 'none',
                background: 'rgba(14, 21, 37, 0.65)',
                border: '1px solid var(--border-subtle)',
                borderTop: `3px solid ${proj.accentColor}`,
                borderRadius: 'var(--radius-sm)',
                padding: '16px',
                transition: 'var(--transition-fast)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = proj.accentColor;
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
                e.currentTarget.style.borderTopColor = proj.accentColor;
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: '800', color: proj.accentColor }}>
                    NODE {proj.number}
                  </span>
                  <span className="pulse-led" style={{ background: proj.accentColor, width: '6px', height: '6px' }} />
                </div>
                <div style={{ fontSize: '13px', fontWeight: '700', color: 'var(--text-primary)', lineHeight: '1.3', marginBottom: '6px' }}>
                  {proj.title}
                </div>
              </div>

              <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginTop: '8px' }}>
                {proj.mainFocus}
              </div>
            </a>
          ))}
        </div>

        {/* TELEMETRY HUD STATS ROW */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
          background: 'rgba(10, 16, 28, 0.7)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-md)',
          padding: '20px 24px'
        }}>
          <div>
            <div style={{ fontSize: '24px', fontWeight: '800', color: '#00ff88', fontFamily: 'var(--font-mono)' }}>5</div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>Core Production Architectures</div>
          </div>

          <div>
            <div style={{ fontSize: '24px', fontWeight: '800', color: '#00f0ff', fontFamily: 'var(--font-mono)' }}>&lt;1ms</div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>Redis Cache-Aside Latency</div>
          </div>

          <div>
            <div style={{ fontSize: '24px', fontWeight: '800', color: '#a855f7', fontFamily: 'var(--font-mono)' }}>30+ FPS</div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>YOLOv8 + SORT Inference</div>
          </div>

          <div>
            <div style={{ fontSize: '24px', fontWeight: '800', color: '#f59e0b', fontFamily: 'var(--font-mono)' }}>100%</div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>Payment & Concurrency Idempotency</div>
          </div>
        </div>

      </div>
    </section>
  );
}
