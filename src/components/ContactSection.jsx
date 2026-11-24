import React, { useState } from 'react';
import { BIO } from '../data/bioData';

export default function ContactSection() {
  const [copiedKey, setCopiedKey] = useState(null);

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <section id="contact" className="section-padding" style={{ background: 'rgba(7, 10, 18, 0.6)' }}>
      <div className="container-xl">
        
        {/* HEADER */}
        <div className="section-header">
          <div className="section-tag">
            <span className="pulse-led" style={{ background: '#38bdf8' }} />
            INITIATE COMMUNICATIONS
          </div>
          <h2 className="section-title">
            Let's Build & Deploy
          </h2>
          <p className="section-subtitle">
            Open for Backend Engineering, Distributed Systems Architecture, AI/Computer Vision Infrastructure, and Full-Stack Engineering roles.
          </p>
        </div>

        <div style={{ maxWidth: '820px', margin: '0 auto' }}>
          <div className="glass-panel" style={{ padding: '36px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            
            {/* DIRECT CHANNELS */}
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '10px' }}>
                Direct Communication Channels
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '20px' }}>
                Reach out for architectural discussions, technical roles, or open-source collaborations.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                
                {/* EMAIL CARD */}
                <div style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '12px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <div>
                    <div style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>EMAIL</div>
                    <div style={{ fontSize: '13px', fontFamily: 'var(--font-mono)', fontWeight: '600', color: 'var(--text-primary)' }}>
                      {BIO.email}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(BIO.email, 'email')}
                    className="btn-vibe-outline"
                    style={{ padding: '4px 10px', fontSize: '11px' }}
                  >
                    {copiedKey === 'email' ? '✓ Copied' : 'Copy'}
                  </button>
                </div>

                {/* PHONE CARD */}
                <div style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '12px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <div>
                    <div style={{ fontSize: '10px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>PHONE / WHATSAPP</div>
                    <div style={{ fontSize: '13px', fontFamily: 'var(--font-mono)', fontWeight: '600', color: 'var(--text-primary)' }}>
                      {BIO.phone}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(BIO.phone, 'phone')}
                    className="btn-vibe-outline"
                    style={{ padding: '4px 10px', fontSize: '11px' }}
                  >
                    {copiedKey === 'phone' ? '✓ Copied' : 'Copy'}
                  </button>
                </div>

              </div>
            </div>

            {/* DEVELOPER PROFILES */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '10px' }}>
                  Developer Network
                </h3>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '20px' }}>
                  Inspect public repositories, commit patterns, and verified engineering credentials.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <a
                    href={BIO.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-vibe-outline"
                    style={{ justifyContent: 'space-between' }}
                  >
                    <span>🐙 GitHub (ayush201145)</span>
                    <span style={{ fontFamily: 'var(--font-mono)' }}>↗</span>
                  </a>

                  <a
                    href={BIO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-vibe-outline"
                    style={{ justifyContent: 'space-between' }}
                  >
                    <span>💼 LinkedIn Profile</span>
                    <span style={{ fontFamily: 'var(--font-mono)' }}>↗</span>
                  </a>
                </div>
              </div>

              <div style={{ marginTop: '20px' }}>
                <a
                  href={`mailto:${BIO.email}`}
                  className="btn-vibe-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  ⚡ Send Direct Dispatch
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
