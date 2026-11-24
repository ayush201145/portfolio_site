import React, { useState } from 'react';
import { CONSOLIDATED_COMPARISON } from '../data/comparisonData';

export default function ConsolidatedMatrix({ onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [expandedRow, setExpandedRow] = useState(null);

  const filterKeywords = ['ALL', 'FastAPI', 'Redis', 'PostgreSQL', 'Python', 'Node.js', 'Event-Driven'];

  const filteredData = CONSOLIDATED_COMPARISON.filter(item => {
    if (activeFilter === 'ALL') return true;
    const filter = activeFilter.toLowerCase();
    return (
      item.primaryTechnologies.toLowerCase().includes(filter) ||
      item.mainEngineeringFocus.toLowerCase().includes(filter) ||
      item.paradigm.toLowerCase().includes(filter)
    );
  });

  return (
    <section id="matrix" className="section-padding" style={{ background: 'rgba(8, 12, 22, 0.5)' }}>
      <div className="container-xl">
        
        {/* SECTION HEADER */}
        <div className="section-header">
          <div className="section-tag">
            <span className="pulse-led" style={{ background: '#00f0ff' }} />
            SYSTEMS TAXONOMY & ARCHITECTURAL COMPARISON
          </div>
          <h2 className="section-title">
            Consolidated Technology Comparison
          </h2>
          <p className="section-subtitle">
            Side-by-side synthesis of core technical stacks, concurrency models, and asynchronous design patterns across all 5 systems.
          </p>
        </div>

        {/* FILTER BAR */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center', marginBottom: '28px' }}>
          {filterKeywords.map(keyword => {
            const isActive = activeFilter === keyword;
            return (
              <button
                key={keyword}
                type="button"
                onClick={() => setActiveFilter(keyword)}
                style={{
                  background: isActive ? '#00f0ff' : 'rgba(255, 255, 255, 0.04)',
                  color: isActive ? '#000' : 'var(--text-secondary)',
                  border: `1px solid ${isActive ? '#00f0ff' : 'var(--border-subtle)'}`,
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '12px',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'var(--transition-fast)'
                }}
              >
                {keyword}
              </button>
            );
          })}
        </div>

        {/* COMPARISON TABLE CONTAINER */}
        <div style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)'
        }}>
          
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{
                  background: 'rgba(10, 15, 26, 0.95)',
                  borderBottom: '1px solid var(--border-medium)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.8px'
                }}>
                  <th style={{ padding: '16px 20px', width: '60px' }}>#</th>
                  <th style={{ padding: '16px 20px', minWidth: '180px' }}>Project</th>
                  <th style={{ padding: '16px 20px', minWidth: '280px' }}>Primary Technologies</th>
                  <th style={{ padding: '16px 20px', minWidth: '280px' }}>Main Engineering Focus</th>
                  <th style={{ padding: '16px 20px', width: '140px', textAlign: 'center' }}>Inspect</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((row) => {
                  const isExpanded = expandedRow === row.id;
                  return (
                    <React.Fragment key={row.id}>
                      <tr
                        onClick={() => setExpandedRow(isExpanded ? null : row.id)}
                        style={{
                          borderBottom: '1px solid var(--border-subtle)',
                          cursor: 'pointer',
                          background: isExpanded ? 'rgba(255, 255, 255, 0.04)' : 'transparent',
                          transition: 'background 0.15s ease'
                        }}
                        onMouseEnter={(e) => {
                          if (!isExpanded) e.currentTarget.style.background = 'rgba(255, 255, 255, 0.025)';
                        }}
                        onMouseLeave={(e) => {
                          if (!isExpanded) e.currentTarget.style.background = 'transparent';
                        }}
                      >
                        {/* NUMBER */}
                        <td style={{ padding: '18px 20px', fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: '800', color: row.accentColor }}>
                          0{row.number}
                        </td>

                        {/* PROJECT NAME */}
                        <td style={{ padding: '18px 20px' }}>
                          <div style={{ fontSize: '15px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '4px' }}>
                            {row.project}
                          </div>
                          <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                            {row.productionStatus}
                          </div>
                        </td>

                        {/* PRIMARY TECHNOLOGIES */}
                        <td style={{ padding: '18px 20px' }}>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                            {row.primaryTechnologies.split(', ').map((tech, tIdx) => (
                              <span key={tIdx} className="code-pill">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </td>

                        {/* MAIN ENGINEERING FOCUS */}
                        <td style={{ padding: '18px 20px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <span className="pulse-led" style={{ background: row.accentColor }} />
                            <span style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-primary)' }}>
                              {row.mainEngineeringFocus}
                            </span>
                          </div>
                        </td>

                        {/* ACTION BUTTON */}
                        <td style={{ padding: '18px 20px', textAlign: 'center' }}>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setExpandedRow(isExpanded ? null : row.id);
                            }}
                            style={{
                              background: 'transparent',
                              border: `1px solid ${isExpanded ? row.accentColor : 'var(--border-subtle)'}`,
                              color: isExpanded ? row.accentColor : 'var(--text-secondary)',
                              padding: '6px 12px',
                              borderRadius: 'var(--radius-xs)',
                              fontFamily: 'var(--font-mono)',
                              fontSize: '11px',
                              cursor: 'pointer'
                            }}
                          >
                            {isExpanded ? '▲ Close' : '▼ Specs'}
                          </button>
                        </td>
                      </tr>

                      {/* EXPANDED SYSTEM SPECIFICATION ROW */}
                      {isExpanded && (
                        <tr style={{ background: 'rgba(5, 8, 16, 0.95)', borderBottom: '1px solid var(--border-medium)' }}>
                          <td colSpan={5} style={{ padding: '24px 28px' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
                              
                              <div>
                                <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: row.accentColor, fontWeight: '700', marginBottom: '6px' }}>
                                  ARCHITECTURE PARADIGM
                                </div>
                                <div style={{ fontSize: '13px', color: 'var(--text-primary)' }}>
                                  {row.paradigm}
                                </div>
                              </div>

                              <div>
                                <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: row.accentColor, fontWeight: '700', marginBottom: '6px' }}>
                                  CRITICAL BOTTLENECK SOLVED
                                </div>
                                <div style={{ fontSize: '13px', color: 'var(--text-primary)' }}>
                                  {row.criticalBottleneckSolved}
                                </div>
                              </div>

                              <div>
                                <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: row.accentColor, fontWeight: '700', marginBottom: '6px' }}>
                                  CONCURRENCY & DATA CONSISTENCY
                                </div>
                                <div style={{ fontSize: '13px', color: 'var(--text-primary)' }}>
                                  {row.dataConsistency}
                                </div>
                              </div>

                              <div>
                                <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: row.accentColor, fontWeight: '700', marginBottom: '6px' }}>
                                  ASYNCHRONOUS MECHANISM
                                </div>
                                <div style={{ fontSize: '13px', color: 'var(--text-primary)' }}>
                                  {row.asyncMechanism}
                                </div>
                              </div>

                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>

        </div>

      </div>
    </section>
  );
}
