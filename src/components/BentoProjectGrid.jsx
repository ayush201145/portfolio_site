import React, { useState } from 'react';
import { PROJECTS } from '../data/projectsData';
import { TRACKS } from '../data/tracksData';
import ProjectCard from './ProjectCard';

export default function BentoProjectGrid({ selectedTrack, onSelectTrack, onOpenDrawer }) {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter projects by track & search query
  const filteredProjects = PROJECTS.filter(project => {
    const matchesTrack = selectedTrack === 'all' || project.trackId === selectedTrack;
    
    if (!matchesTrack) return false;
    if (!searchQuery.trim()) return true;

    const q = searchQuery.toLowerCase();
    const matchesTitle = project.title.toLowerCase().includes(q);
    const matchesSubtitle = project.subtitle.toLowerCase().includes(q);
    const matchesSummary = project.summary.toLowerCase().includes(q);
    const matchesTech = project.techStack.some(t => t.toLowerCase().includes(q));

    return matchesTitle || matchesSubtitle || matchesSummary || matchesTech;
  });

  return (
    <section id="projects" className="section-padding">
      <div className="container-xl">
        
        {/* HEADER */}
        <div className="section-header">
          <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>
            PORTFOLIO REPOSITORIES ({PROJECTS.length} PROJECTS)
          </div>
          <h2 className="section-title">Projects & Systems Showcase</h2>
          <p className="section-subtitle">
            Filter by engineering domain or search directly by technology stack (e.g. Go, Docker, PyTorch, Kubernetes).
          </p>
        </div>

        {/* CONTROLS: TRACK FILTER TABS & SEARCH BAR */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
          
          {/* TRACK FILTER PILLS */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
            <button
              type="button"
              onClick={() => onSelectTrack('all')}
              style={{
                background: selectedTrack === 'all' ? 'var(--accent-primary)' : 'rgba(255, 255, 255, 0.05)',
                color: selectedTrack === 'all' ? '#fff' : 'var(--text-secondary)',
                border: '1px solid var(--border-subtle)',
                padding: '8px 18px',
                borderRadius: 'var(--radius-full)',
                fontSize: '13px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'var(--transition-fast)'
              }}
            >
              All Projects ({PROJECTS.length})
            </button>

            {TRACKS.map(t => (
              <button
                key={t.id}
                type="button"
                onClick={() => onSelectTrack(t.id)}
                style={{
                  background: selectedTrack === t.id ? t.color : 'rgba(255, 255, 255, 0.05)',
                  color: selectedTrack === t.id ? '#fff' : 'var(--text-secondary)',
                  border: `1px solid ${selectedTrack === t.id ? t.color : 'var(--border-subtle)'}`,
                  padding: '8px 18px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '13px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'var(--transition-fast)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <span>{t.icon}</span> {t.shortName}
              </button>
            ))}
          </div>

          {/* REAL-TIME SEARCH BAR */}
          <div style={{ maxWidth: '540px', margin: '0 auto', width: '100%', position: 'relative' }}>
            <input
              type="text"
              placeholder="🔍 Search by tech stack (e.g. Go, Docker, PyTorch, Kubernetes)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                background: 'rgba(15, 23, 42, 0.8)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '12px 18px',
                color: 'var(--text-primary)',
                fontSize: '14px',
                outline: 'none',
                transition: 'var(--transition-fast)'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--accent-primary)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--border-subtle)'}
            />

            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-muted)',
                  cursor: 'pointer',
                  fontSize: '13px'
                }}
              >
                ✕ Clear
              </button>
            )}
          </div>

        </div>

        {/* PROJECT GRID */}
        {filteredProjects.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px', color: 'var(--text-muted)' }}>
            No projects found matching "{searchQuery}". Try searching for "Go", "Docker", or "Python".
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '24px'
          }}>
            {filteredProjects.map(project => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenDrawer={onOpenDrawer}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
