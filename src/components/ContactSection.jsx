import React, { useState } from 'react';
import { BIO } from '../data/bioData';

export default function ContactSection() {
  const [copiedField, setCopiedField] = useState(null);

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-xl">
        
        <div className="section-header">
          <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
            GET IN TOUCH
          </div>
          <h2 className="section-title">Let's Connect & Build</h2>
          <p className="section-subtitle">
            Open for Software Engineering, AI/ML Infrastructure, Systems Architecture, and Technical Advisory roles.
          </p>
        </div>

        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="glass-panel" style={{ padding: '36px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
            
            {/* CONTACT INFO */}
            <div>
              <h3 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '12px' }}>
                Direct Channels
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '24px' }}>
                Feel free to reach out via email or phone, or connect on GitHub and LinkedIn.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                
                {/* EMAIL */}
                <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '14px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>EMAIL ADDRESS</div>
                    <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>{BIO.email}</div>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(BIO.email, 'email')}
                    className="btn-outline"
                    style={{ padding: '6px 12px', fontSize: '12px' }}
                  >
                    {copiedField === 'email' ? '✓ Copied!' : 'Copy'}
                  </button>
                </div>

                {/* PHONE */}
                <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '14px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>PHONE NUMBER</div>
                    <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>{BIO.phone}</div>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(BIO.phone, 'phone')}
                    className="btn-outline"
                    style={{ padding: '6px 12px', fontSize: '12px' }}
                  >
                    {copiedField === 'phone' ? '✓ Copied!' : 'Copy'}
                  </button>
                </div>

              </div>
            </div>

            {/* PROFILES & LINKS */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontSize: '20px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '12px' }}>
                  Developer Profiles
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '24px' }}>
                  Explore 18 open-source repositories and detailed commit histories.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <a href={BIO.github} target="_blank" rel="noreferrer" className="btn-outline" style={{ justifyContent: 'space-between' }}>
                    <span>🐙 GitHub Profile (ayush201145)</span>
                    <span>↗</span>
                  </a>
                  <a href={BIO.linkedin} target="_blank" rel="noreferrer" className="btn-outline" style={{ justifyContent: 'space-between' }}>
                    <span>💼 LinkedIn Profile</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>

              <div style={{ marginTop: '24px' }}>
                <a href={BIO.email} className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  ⚡ Send Direct Message
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
