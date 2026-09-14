import React from 'react';
import { SKILL_CATEGORIES } from '../data/skillsData';

export default function SkillsRadar() {
  return (
    <section id="skills" className="section-padding" style={{ background: 'rgba(15, 23, 42, 0.3)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container-xl">
        
        {/* HEADER */}
        <div className="section-header">
          <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
            TECHNICAL PROFICIENCY MATRIX
          </div>
          <h2 className="section-title">Multi-Track Skills Taxonomy</h2>
          <p className="section-subtitle">
            Core technical competencies across Systems, Full-Stack, Machine Learning, Analytics, Business Architecture, and Cloud Infrastructure.
          </p>
        </div>

        {/* SKILLS CATEGORIES GRID */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '24px' }}>
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div key={idx} className="glass-panel" style={{ padding: '24px' }}>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px', paddingBottom: '12px', borderBottom: '1px solid var(--border-subtle)' }}>
                <span style={{ fontSize: '22px' }}>{cat.icon}</span>
                <h3 style={{ fontSize: '17px', fontWeight: '700', color: 'var(--text-primary)', margin: 0 }}>
                  {cat.title}
                </h3>
              </div>

              {/* SKILLS LIST */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                      <span style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-primary)' }}>
                        {skill.name}
                      </span>
                      <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                        {skill.desc}
                      </span>
                    </div>

                    {/* PROGRESS BAR */}
                    <div style={{ height: '5px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '3px', overflow: 'hidden' }}>
                      <div style={{
                        height: '100%',
                        width: `${skill.level}%`,
                        background: 'var(--accent-gradient)',
                        borderRadius: '3px'
                      }} />
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
