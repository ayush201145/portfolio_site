import React, { useState, useEffect, useRef } from 'react';
import { BIO } from '../data/bioData';

export default function Navbar() {
  const [soundActive, setSoundActive] = useState(false);
  const audioCtxRef = useRef(null);
  const oscNodesRef = useRef([]);

  // Ambient sound synthesizer using Web Audio API
  const toggleAmbientSound = () => {
    if (soundActive) {
      oscNodesRef.current.forEach(node => {
        try {
          node.stop();
          node.disconnect();
        } catch (e) {}
      });
      oscNodesRef.current = [];
      setSoundActive(false);
    } else {
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const ctx = new AudioContext();
        audioCtxRef.current = ctx;

        // Warm ambient drone chord (root + fifth + octave)
        const freqs = [108, 162, 216];
        const gainNode = ctx.createGain();
        gainNode.gain.setValueAtTime(0.04, ctx.currentTime);
        gainNode.connect(ctx.destination);

        const oscs = freqs.map(f => {
          const osc = ctx.createOscillator();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(f, ctx.currentTime);
          osc.connect(gainNode);
          osc.start();
          return osc;
        });

        oscNodesRef.current = oscs;
        setSoundActive(true);
      } catch (err) {
        console.warn('AudioContext not allowed or supported', err);
      }
    }
  };

  useEffect(() => {
    return () => {
      oscNodesRef.current.forEach(node => {
        try { node.stop(); node.disconnect(); } catch (e) {}
      });
    };
  }, []);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: 'rgba(5, 7, 13, 0.88)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid var(--border-subtle)',
      padding: '14px 24px'
    }}>
      <div className="container-xl" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* BRAND IDENTITY HUD */}
        <div
          style={{ display: 'flex', alignItems: 'center', gap: '14px', cursor: 'pointer' }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: 'var(--radius-xs)',
            background: 'var(--accent-gradient)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: '900',
            fontSize: '16px',
            color: '#05070d',
            fontFamily: 'var(--font-mono)',
            boxShadow: '0 0 20px rgba(0, 255, 136, 0.4)'
          }}>
            A://
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '15px', fontWeight: '800', letterSpacing: '-0.3px', color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
                AYUSH.CORE
              </span>
              <span className="pulse-led" style={{ background: '#00ff88' }} />
              <span style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)', textTransform: 'uppercase' }}>
                ONLINE
              </span>
            </div>
            <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              5 Systems Deployed
            </div>
          </div>
        </div>

        {/* NAVIGATION SHORTCUTS */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <a
            href="#deck"
            style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '13px', fontWeight: '600', fontFamily: 'var(--font-mono)', transition: 'var(--transition-fast)' }}
            onMouseOver={(e) => e.target.style.color = '#00ff88'}
            onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
          >
            // 01 ARCHITECTURE DECK
          </a>
          <a
            href="#matrix"
            style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '13px', fontWeight: '600', fontFamily: 'var(--font-mono)', transition: 'var(--transition-fast)' }}
            onMouseOver={(e) => e.target.style.color = '#00f0ff'}
            onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
          >
            // 02 COMPARISON MATRIX
          </a>
          <a
            href="#skills"
            style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '13px', fontWeight: '600', fontFamily: 'var(--font-mono)', transition: 'var(--transition-fast)' }}
            onMouseOver={(e) => e.target.style.color = '#a855f7'}
            onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
          >
            // 03 TECH TAXONOMY
          </a>
          <a
            href="#contact"
            style={{ color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '13px', fontWeight: '600', fontFamily: 'var(--font-mono)', transition: 'var(--transition-fast)' }}
            onMouseOver={(e) => e.target.style.color = '#38bdf8'}
            onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
          >
            // 04 CONNECT
          </a>
        </div>

        {/* ACTIONS & SOUND VIBE SYNTH */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* AMBIENT SOUND VIBE TOGGLE */}
          <button
            type="button"
            onClick={toggleAmbientSound}
            style={{
              background: soundActive ? 'rgba(0, 255, 136, 0.15)' : 'rgba(255, 255, 255, 0.04)',
              border: `1px solid ${soundActive ? '#00ff88' : 'var(--border-subtle)'}`,
              color: soundActive ? '#00ff88' : 'var(--text-muted)',
              padding: '6px 12px',
              borderRadius: 'var(--radius-xs)',
              fontSize: '11px',
              fontFamily: 'var(--font-mono)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <span>{soundActive ? '🔊' : '🔇'}</span>
            <span>{soundActive ? 'VIBE ON' : 'SYNTH'}</span>
          </button>

          <a href={BIO.github} target="_blank" rel="noreferrer" className="btn-vibe-outline" style={{ padding: '6px 14px', fontSize: '12px' }}>
            GitHub ↗
          </a>
          <a href={`mailto:${BIO.email}`} className="btn-vibe-primary" style={{ padding: '6px 14px', fontSize: '12px' }}>
            Get in Touch
          </a>
        </div>

      </div>
    </nav>
  );
}
