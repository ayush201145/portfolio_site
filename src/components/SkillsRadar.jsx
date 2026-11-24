import React from 'react';

export default function SkillsRadar() {
  const categories = [
    {
      title: 'Distributed Systems & Event Brokers',
      icon: '⚡',
      accent: '#f59e0b',
      skills: [
        { name: 'RabbitMQ', spec: 'Exchange routing, message durability, worker ACKs' },
        { name: 'Apache Kafka', spec: 'Event streaming, consumer groups, partition offset management' },
        { name: 'Redis (Cache & Pub/Sub)', spec: 'Cache-aside pattern, atomic SETNX locks, sliding window limits' },
        { name: 'Celery Distributed Workers', spec: 'Asynchronous task queue, prefetch limits, worker concurrency' }
      ]
    },
    {
      title: 'Backend Runtimes & Data Engines',
      icon: '🛠️',
      accent: '#00ff88',
      skills: [
        { name: 'FastAPI & Python', spec: 'Async def endpoints, Pydantic schemas, dependency injection' },
        { name: 'Node.js & Express.js', spec: 'High-throughput event loop, RESTful microservices, routing' },
        { name: 'PostgreSQL & Prisma ORM', spec: 'ACID transactions, SELECT FOR UPDATE, B-tree indexes, migrations' },
        { name: 'Idempotency & Concurrency', spec: 'X-Idempotency-Key headers, database locking, race condition mitigation' }
      ]
    },
    {
      title: 'Computer Vision & Media Engines',
      icon: '🧠',
      accent: '#a855f7',
      skills: [
        { name: 'YOLOv8m Object Detection', spec: 'PyTorch inference, bounding box regression, NMS, IoU filtering' },
        { name: 'SORT Tracking Algorithm', spec: 'Kalman filter trajectory prediction, Hungarian bipartite matching' },
        { name: 'FFmpeg Transcoding Pipeline', spec: 'H.264 video compression, keyframe alignment, container muxing' },
        { name: 'HLS Adaptive Streaming', spec: 'Multi-bitrate ladder (.m3u8), TS media segment chunking' }
      ]
    },
    {
      title: 'Full-Stack, Mobile & Cloud Runtimes',
      icon: '📱',
      accent: '#38bdf8',
      skills: [
        { name: 'React & React Native', spec: 'Cross-platform web & mobile UI, state management via Zustand' },
        { name: 'Expo & Mobile Hardware', spec: 'Expo SecureStore, offline SQLite caching, delta synchronization' },
        { name: 'JWT & Granular RBAC', spec: 'Multi-role authentication, token verification, route security gates' },
        { name: 'Docker & Containerization', spec: 'Multi-stage builds, worker isolation, microservice topology' }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-xl">
        
        {/* SECTION HEADER */}
        <div className="section-header">
          <div className="section-tag">
            <span className="pulse-led" style={{ background: '#a855f7' }} />
            TECHNICAL COMPETENCY TAXONOMY
          </div>
          <h2 className="section-title">
            Systems & Infrastructure Stack
          </h2>
          <p className="section-subtitle">
            Core technical mastery across distributed brokers, backend runtimes, computer vision models, and full-stack mobile applications.
          </p>
        </div>

        {/* SKILLS GRID */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: '24px',
                borderTop: `3px solid ${cat.accent}`
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px', paddingBottom: '12px', borderBottom: '1px solid var(--border-subtle)' }}>
                <span style={{ fontSize: '20px' }}>{cat.icon}</span>
                <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--text-primary)', margin: 0 }}>
                  {cat.title}
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)', padding: '10px 14px' }}>
                    <div style={{ fontSize: '13px', fontWeight: '700', color: cat.accent, marginBottom: '3px' }}>
                      {skill.name}
                    </div>
                    <div style={{ fontSize: '11px', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)', lineHeight: '1.4' }}>
                      {skill.spec}
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
