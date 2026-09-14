import React, { useState } from 'react';
import { BIO } from '../data/bioData';

export default function HeroTerminal({ onSelectTrack }) {
  const [inputVal, setInputVal] = useState('');
  const [terminalOutput, setTerminalOutput] = useState([
    'Welcome to Ayush Multi-Track Engineering Workstation v2.4 [x86_64]',
    'Type "help" or click quick chips below to query portfolio tracks & specs.'
  ]);

  const handleCommand = (cmd) => {
    const cleanCmd = cmd.trim().toLowerCase();
    let newLogs = [...terminalOutput, `ayush@portfolio:~$ ${cmd}`];

    if (cleanCmd === 'help') {
      newLogs.push(
        'Available commands:',
        '  sde        - View SDE & Systems projects (Distributed Gateway, KV Store)',
        '  swe        - View Software Engineering projects (Multi-Tenant SaaS, HLS Transcoder)',
        '  aiml       - View AI/ML projects (Multimodal RAG, QLoRA Fine-Tuning)',
        '  da         - View Data Analyst projects (Cohort Retention, RFM Clustering)',
        '  ba         - View Business Analyst projects (Loan Origination BRD, CRM NPV)',
        '  devops     - View DevOps projects (EKS GitOps, Canary CI/CD, OTel)',
        '  clear      - Clear terminal logs'
      );
    } else if (['sde', 'swe', 'aiml', 'da', 'ba', 'devops'].includes(cleanCmd)) {
      newLogs.push(`Filter updated: Active track set to "${cleanCmd.toUpperCase()}".`);
      if (onSelectTrack) onSelectTrack(cleanCmd);
      const targetSec = document.getElementById('projects');
      if (targetSec) targetSec.scrollIntoView({ behavior: 'smooth' });
    } else if (cleanCmd === 'clear') {
      newLogs = ['Terminal reset. Type "help" for command list.'];
    } else {
      newLogs.push(`Command not recognized: "${cmd}". Type "help" for valid options.`);
    }

    setTerminalOutput(newLogs);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && inputVal) {
      handleCommand(inputVal);
    }
  };

  return (
    <section style={{ paddingTop: '130px', paddingBottom: '70px', position: 'relative' }}>
      <div className="container-xl">
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '40px', alignItems: 'center' }}>
          
          {/* LEFT: HEADLINE & STATS */}
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '20px',
              background: 'rgba(99, 102, 241, 0.12)',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              color: 'var(--accent-primary)',
              fontSize: '13px',
              fontWeight: '600',
              marginBottom: '20px'
            }}>
              <span>⚡</span> Multi-Disciplinary Engineering Portfolio (18 Production Projects)
            </div>

            <h1 style={{
              fontSize: '44px',
              fontWeight: '800',
              letterSpacing: '-1.2px',
              lineHeight: '1.15',
              marginBottom: '16px',
              color: 'var(--text-primary)'
            }}>
              Architecting <span style={{ background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>High-Throughput Systems</span> & AI Workspaces
            </h1>

            <p style={{
              fontSize: '16px',
              color: 'var(--text-secondary)',
              lineHeight: '1.6',
              marginBottom: '28px',
              maxWidth: '560px'
            }}>
              {BIO.subtext}
            </p>

            {/* QUICK ACTIONS */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '36px' }}>
              <a href="#projects" className="btn-primary">
                ⚡ Explore Projects Grid
              </a>
              <a href={BIO.github} target="_blank" rel="noreferrer" className="btn-outline">
                <span style={{ fontSize: '16px' }}>🐙</span> View GitHub Repos
              </a>
            </div>

            {/* METRICS ROW */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '16px',
              background: 'rgba(15, 23, 42, 0.5)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              padding: '16px'
            }}>
              {BIO.stats.slice(0, 3).map((st, i) => (
                <div key={i} style={{ borderRight: i < 2 ? '1px solid var(--border-subtle)' : 'none', paddingRight: '12px' }}>
                  <div style={{ fontSize: '22px', fontWeight: '800', color: 'var(--text-primary)', fontFamily: 'var(--font-mono)' }}>
                    {st.value}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{st.label}</div>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT: INTERACTIVE TERMINAL WIDGET */}
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dot red"></div>
              <div className="terminal-dot yellow"></div>
              <div className="terminal-dot green"></div>
              <span style={{ marginLeft: 'auto', fontSize: '11px', color: 'var(--text-muted)' }}>ayush@workstation: ~</span>
            </div>

            <div className="terminal-body" style={{ height: '240px', overflowY: 'auto' }}>
              {terminalOutput.map((line, idx) => (
                <div key={idx} style={{ color: line.startsWith('ayush@') ? 'var(--accent-primary)' : line.includes('Available') ? '#f59e0b' : '#cbd5e1', marginBottom: '4px' }}>
                  {line}
                </div>
              ))}
            </div>

            {/* CLI INPUT & QUICK CHIPS */}
            <div style={{ padding: '12px 16px', borderTop: '1px solid rgba(255,255,255,0.08)', background: 'rgba(0,0,0,0.4)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <span style={{ color: 'var(--accent-primary)', fontWeight: 'bold' }}>$</span>
                <input
                  type="text"
                  placeholder="Type 'help', 'sde', 'aiml', 'devops'..."
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  onKeyDown={handleKeyDown}
                  style={{
                    width: '100%',
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    color: '#fff',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '13px'
                  }}
                />
              </div>

              {/* QUICK CHIPS */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {['help', 'sde', 'swe', 'aiml', 'da', 'ba', 'devops'].map(chip => (
                  <button
                    key={chip}
                    type="button"
                    onClick={() => handleCommand(chip)}
                    style={{
                      background: 'rgba(255, 255, 255, 0.06)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: 'var(--text-secondary)',
                      borderRadius: '4px',
                      padding: '2px 8px',
                      fontSize: '11px',
                      fontFamily: 'var(--font-mono)',
                      cursor: 'pointer',
                      transition: 'var(--transition-fast)'
                    }}
                    onMouseOver={(e) => { e.target.style.background = 'rgba(255,255,255,0.15)'; e.target.style.color = '#fff'; }}
                    onMouseOut={(e) => { e.target.style.background = 'rgba(255,255,255,0.06)'; e.target.style.color = 'var(--text-secondary)'; }}
                  >
                    {chip}
                  </button>
                ))}
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
