import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../data/projectsData';

export default function CyberDeck({ defaultProjectId }) {
  const [selectedProjectId, setSelectedProjectId] = useState(defaultProjectId || PROJECTS[0].id);

  useEffect(() => {
    if (defaultProjectId) {
      setSelectedProjectId(defaultProjectId);
    }
  }, [defaultProjectId]);
  const [activeTab, setActiveTab] = useState('architecture'); // 'architecture' | 'features' | 'simulation' | 'interview'
  const [searchFilter, setSearchFilter] = useState('');
  const [copiedCode, setCopiedCode] = useState(false);

  // Simulation states
  // 1. E-Commerce
  const [simStock, setSimStock] = useState(3);
  const [simOrders, setSimOrders] = useState([]);
  const [simIsCheckingOut, setSimIsCheckingOut] = useState(false);

  // 2. Transcoder
  const [simTranscodeProgress, setSimTranscodeProgress] = useState(0);
  const [simTranscodeState, setSimTranscodeState] = useState('idle'); // idle | transcoding | completed
  const [simSelectedResolution, setSimSelectedResolution] = useState('1080p');

  // 3. CityPulse-X
  const [simTrafficDensity, setSimTrafficDensity] = useState('heavy'); // light | medium | heavy
  const [simYoloConfidence, setSimYoloConfidence] = useState(88);

  // 4. School System
  const [simUserRole, setSimUserRole] = useState('ADMIN');
  const [simOfflineMode, setSimOfflineMode] = useState(false);
  const [simPendingDeltas, setSimPendingDeltas] = useState(0);
  const [simSyncLogs, setSimSyncLogs] = useState([]);

  // 5. URL Shortener
  const [simLongUrl, setSimLongUrl] = useState('https://github.com/ayush201145/distributed-systems-core');
  const [simShortUrl, setSimShortUrl] = useState('sho.rt/9xK2q');
  const [simCacheStatus, setSimCacheStatus] = useState(null); // 'HIT' | 'MISS'
  const [simKafkaEvents, setSimKafkaEvents] = useState([]);

  const currentProject = PROJECTS.find(p => p.id === selectedProjectId) || PROJECTS[0];

  // Filter projects by search query
  const filteredProjects = PROJECTS.filter(p => {
    if (!searchFilter.trim()) return true;
    const q = searchFilter.toLowerCase();
    return (
      p.title.toLowerCase().includes(q) ||
      p.primaryTech.toLowerCase().includes(q) ||
      p.mainFocus.toLowerCase().includes(q) ||
      p.techStack.some(t => t.toLowerCase().includes(q))
    );
  });

  const copyArchitecture = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  // E-Commerce Simulation Trigger
  const triggerConcurrentCheckout = () => {
    if (simIsCheckingOut) return;
    setSimIsCheckingOut(true);
    const orderId = `ORD-${Math.floor(1000 + Math.random() * 9000)}`;
    const idempotencyKey = `idemp_${Date.now().toString(36)}`;

    setTimeout(() => {
      if (simStock > 0) {
        setSimStock(prev => Math.max(0, prev - 1));
        setSimOrders(prev => [
          {
            id: orderId,
            idempKey: idempotencyKey,
            status: 'SUCCESS',
            lock: 'MUTEX_ACQUIRED',
            event: 'order.placed -> RabbitMQ',
            time: new Date().toLocaleTimeString()
          },
          ...prev.slice(0, 5)
        ]);
      } else {
        setSimOrders(prev => [
          {
            id: orderId,
            idempKey: idempotencyKey,
            status: 'REJECTED (ZERO STOCK)',
            lock: 'PREVENTED_OVERSELL',
            event: 'rollback -> Postgres ACID',
            time: new Date().toLocaleTimeString()
          },
          ...prev.slice(0, 5)
        ]);
      }
      setSimIsCheckingOut(false);
    }, 600);
  };

  // Transcoding Simulation Trigger
  const startTranscodeJob = () => {
    setSimTranscodeState('transcoding');
    setSimTranscodeProgress(10);
    const interval = setInterval(() => {
      setSimTranscodeProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setSimTranscodeState('completed');
          return 100;
        }
        return prev + 25;
      });
    }, 450);
  };

  // School Offline Sync Trigger
  const addOfflineRecord = () => {
    setSimPendingDeltas(prev => prev + 1);
    setSimSyncLogs(prev => [
      `[OFFLINE MUTATION] ${simUserRole} recorded partial tuition fee payment ($250)`,
      ...prev.slice(0, 4)
    ]);
  };

  const syncOfflineData = () => {
    if (simPendingDeltas === 0) return;
    setSimSyncLogs(prev => [
      `[PRISMA $TRANSACTION] Pushed ${simPendingDeltas} pending delta records to PostgreSQL. Conflict resolution: Server authoritative.`,
      ...prev.slice(0, 4)
    ]);
    setSimPendingDeltas(0);
  };

  // URL Shortener Simulation Trigger
  const simulateRedirect = (isFirstCall = false) => {
    const isHit = !isFirstCall && Math.random() > 0.3;
    setSimCacheStatus(isHit ? 'HIT' : 'MISS');
    const newKafkaEvent = {
      id: Math.floor(Math.random() * 90000),
      topic: 'url.clicks.events',
      code: simShortUrl.split('/')[1] || '9xK2q',
      latency: isHit ? '0.8ms (Redis Cache)' : '18.4ms (Postgres B-Tree)',
      userAgent: 'Mozilla/5.0 (Client)',
      time: new Date().toLocaleTimeString()
    };
    setSimKafkaEvents(prev => [newKafkaEvent, ...prev.slice(0, 4)]);
  };

  return (
    <section id="deck" className="section-padding">
      <div className="container-xl">
        
        {/* SECTION HEADER */}
        <div className="section-header">
          <div className="section-tag">
            <span className="pulse-led" style={{ background: currentProject.accentColor }} />
            SYSTEM ARCHITECTURE DECK & LAB
          </div>
          <h2 className="section-title">
            Core Production Systems
          </h2>
          <p className="section-subtitle">
            Explore the 5 foundational engineering architectures. Switch between visual topologies, technical feature checklists, live simulators, and system design drill-downs.
          </p>
        </div>

        {/* WORKSTATION COMMAND DECK */}
        <div style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.7)'
        }}>
          
          {/* DECK TOP HUD BAR */}
          <div style={{
            background: 'rgba(10, 15, 26, 0.95)',
            borderBottom: '1px solid var(--border-subtle)',
            padding: '16px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px'
          }}>
            {/* TERMINAL STATUS LIGHTS */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ display: 'flex', gap: '6px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#00ff88' }} />
              </div>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: '700', color: 'var(--text-primary)', letterSpacing: '0.5px' }}>
                SYS_CONSOLE // 5 NODES MOUNTED
              </span>
            </div>

            {/* QUICK SEARCH FILTER */}
            <div style={{ position: 'relative', width: '280px' }}>
              <input
                type="text"
                placeholder="Search tech (e.g. FastAPI, Kafka)..."
                value={searchFilter}
                onChange={(e) => setSearchFilter(e.target.value)}
                style={{
                  width: '100%',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid var(--border-medium)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '7px 12px',
                  color: 'var(--text-primary)',
                  fontSize: '12px',
                  fontFamily: 'var(--font-mono)',
                  outline: 'none'
                }}
              />
              {searchFilter && (
                <button
                  type="button"
                  onClick={() => setSearchFilter('')}
                  style={{
                    position: 'absolute',
                    right: '8px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    color: 'var(--text-muted)',
                    cursor: 'pointer',
                    fontSize: '12px'
                  }}
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* MAIN DECK SPLIT: LEFT RACK SELECTOR + RIGHT ACTIVE SYSTEM WORKSPACE */}
          <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', minHeight: '680px' }}>
            
            {/* LEFT COLUMN: RACK MOUNT SELECTOR */}
            <div style={{
              background: 'rgba(8, 12, 22, 0.9)',
              borderRight: '1px solid var(--border-subtle)',
              padding: '20px 16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              overflowY: 'auto'
            }}>
              <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>
                SYSTEM SELECTION // 01 - 05
              </div>

              {filteredProjects.map((p) => {
                const isSelected = p.id === selectedProjectId;
                return (
                  <div
                    key={p.id}
                    onClick={() => {
                      setSelectedProjectId(p.id);
                      setActiveTab('architecture');
                    }}
                    style={{
                      background: isSelected ? 'rgba(255, 255, 255, 0.06)' : 'rgba(255, 255, 255, 0.015)',
                      border: `1px solid ${isSelected ? p.accentColor : 'var(--border-subtle)'}`,
                      borderLeft: `4px solid ${p.accentColor}`,
                      borderRadius: 'var(--radius-sm)',
                      padding: '14px 16px',
                      cursor: 'pointer',
                      transition: 'var(--transition-fast)',
                      position: 'relative',
                      boxShadow: isSelected ? `0 4px 20px ${p.accentGlow}` : 'none'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: '800', color: p.accentColor }}>
                        NODE {p.number}
                      </span>
                      <span style={{
                        fontSize: '9px',
                        fontFamily: 'var(--font-mono)',
                        padding: '2px 6px',
                        borderRadius: '3px',
                        background: 'rgba(255, 255, 255, 0.05)',
                        color: 'var(--text-muted)',
                        textTransform: 'uppercase'
                      }}>
                        {p.shortCategory}
                      </span>
                    </div>

                    <div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text-primary)', lineHeight: '1.3', marginBottom: '8px' }}>
                      {p.title}
                    </div>

                    <div style={{ fontSize: '11px', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span className="pulse-led" style={{ background: p.accentColor, width: '6px', height: '6px' }} />
                      <span>{p.mainFocus}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* RIGHT COLUMN: ACTIVE SYSTEM WORKSPACE */}
            <div style={{
              background: 'rgba(11, 17, 30, 0.85)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden'
            }}>
              
              {/* SYSTEM HEADER BANNER */}
              <div style={{
                padding: '24px 32px',
                borderBottom: '1px solid var(--border-subtle)',
                background: 'rgba(14, 22, 38, 0.95)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <span className="hud-tag" style={{ color: currentProject.accentColor, borderColor: currentProject.accentColor, background: currentProject.accentGlow }}>
                    SYS // {currentProject.number}
                  </span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-muted)' }}>
                    {currentProject.category}
                  </span>
                  <span style={{ margin: '0 4px', color: 'var(--border-medium)' }}>•</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: currentProject.accentColor, fontWeight: '600' }}>
                    {currentProject.type}
                  </span>
                </div>

                <h3 style={{ fontSize: '24px', fontWeight: '800', color: 'var(--text-primary)', margin: '0 0 8px 0', letterSpacing: '-0.5px' }}>
                  {currentProject.title}
                </h3>

                <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: '0 0 16px 0', lineHeight: '1.5', maxWidth: '880px' }}>
                  {currentProject.summary}
                </p>

                {/* TECH STACK BADGES */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {currentProject.techStack.map((tech, idx) => (
                    <span key={idx} className="code-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* TAB CONTROLLER */}
              <div style={{
                display: 'flex',
                background: 'rgba(7, 11, 20, 0.9)',
                borderBottom: '1px solid var(--border-subtle)',
                padding: '0 24px',
                overflowX: 'auto'
              }}>
                {[
                  { id: 'architecture', label: '1. Architecture & Flow', icon: '⚡' },
                  { id: 'features', label: `2. Features (${currentProject.features.length})`, icon: '📋' },
                  { id: 'simulation', label: '3. Interactive Lab', icon: '🧪' },
                  { id: 'interview', label: `4. Concepts & System Design (${currentProject.importantConcepts.length})`, icon: '🎯' }
                ].map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id)}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        borderBottom: isActive ? `2px solid ${currentProject.accentColor}` : '2px solid transparent',
                        color: isActive ? '#fff' : 'var(--text-muted)',
                        padding: '14px 20px',
                        fontSize: '13px',
                        fontWeight: '700',
                        fontFamily: 'var(--font-mono)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        whiteSpace: 'nowrap',
                        transition: 'var(--transition-fast)'
                      }}
                    >
                      <span>{tab.icon}</span> {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* ACTIVE TAB CONTENT */}
              <div style={{ padding: '28px 32px', overflowY: 'auto', flex: 1 }}>
                
                {/* TAB 1: ARCHITECTURE & TOPOLOGY */}
                {activeTab === 'architecture' && (
                  <div className="animate-fade-in">
                    
                    {/* TECH STACK GROUPED BREAKDOWN */}
                    <div style={{ marginBottom: '24px' }}>
                      <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>
                        TECHNICAL STACK MATRIX
                      </div>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
                        {currentProject.techStackGrouped.map((grp, gIdx) => (
                          <div
                            key={gIdx}
                            style={{
                              background: 'rgba(255, 255, 255, 0.025)',
                              border: '1px solid var(--border-subtle)',
                              borderRadius: 'var(--radius-sm)',
                              padding: '10px 14px'
                            }}
                          >
                            <div style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: currentProject.accentColor, fontWeight: '700', marginBottom: '4px' }}>
                              {grp.category}
                            </div>
                            <div style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-primary)' }}>
                              {grp.items.join(', ')}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* ASCII SYSTEM TOPOLOGY DIAGRAM */}
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                          TOPOLOGY SCHEMATIC & PROTOCOL BUS
                        </div>
                        <button
                          type="button"
                          onClick={() => copyArchitecture(currentProject.architecture)}
                          className="btn-vibe-outline"
                          style={{ padding: '4px 10px', fontSize: '11px' }}
                        >
                          {copiedCode ? '✓ Copied Diagram' : 'Copy ASCII Schematic'}
                        </button>
                      </div>

                      <pre style={{
                        background: 'var(--bg-terminal)',
                        border: '1px solid var(--border-subtle)',
                        borderRadius: 'var(--radius-md)',
                        padding: '20px',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '12px',
                        lineHeight: '1.6',
                        color: '#38bdf8',
                        overflowX: 'auto',
                        margin: 0
                      }}>
                        <code>{currentProject.architecture}</code>
                      </pre>
                    </div>

                  </div>
                )}

                {/* TAB 2: FEATURES BLUEPRINT */}
                {activeTab === 'features' && (
                  <div className="animate-fade-in">
                    <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>
                      ENGINEERED SPECIFICATIONS & DELIVERABLES ({currentProject.features.length})
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '14px' }}>
                      {currentProject.features.map((feat, fIdx) => (
                        <div
                          key={feat.id || fIdx}
                          style={{
                            background: 'rgba(255, 255, 255, 0.025)',
                            border: '1px solid var(--border-subtle)',
                            borderRadius: 'var(--radius-sm)',
                            padding: '16px',
                            display: 'flex',
                            gap: '12px',
                            alignItems: 'flex-start'
                          }}
                        >
                          <span style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '11px',
                            fontWeight: '800',
                            color: currentProject.accentColor,
                            background: 'rgba(255, 255, 255, 0.05)',
                            padding: '3px 7px',
                            borderRadius: 'var(--radius-xs)',
                            marginTop: '2px'
                          }}>
                            {String(fIdx + 1).padStart(2, '0')}
                          </span>
                          <div>
                            <div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '4px' }}>
                              {feat.name}
                            </div>
                            <div style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                              {feat.detail}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* TAB 3: LIVE INTERACTIVE SIMULATOR LAB */}
                {activeTab === 'simulation' && (
                  <div className="animate-fade-in">
                    
                    {/* 01: E-COMMERCE SIMULATION */}
                    {currentProject.simulationType === 'ecommerce' && (
                      <div style={{ background: 'var(--bg-terminal)', border: '1px solid var(--border-medium)', borderRadius: 'var(--radius-md)', padding: '24px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                          <div>
                            <h4 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: '700', color: currentProject.accentColor }}>
                              Distributed Concurrency & Idempotency Simulator
                            </h4>
                            <p style={{ margin: 0, fontSize: '12px', color: 'var(--text-secondary)' }}>
                              Simulate checkout requests hitting Redis distributed locks (SETNX) and PostgreSQL row-level locks (SELECT FOR UPDATE).
                            </p>
                          </div>
                          <div style={{ textAlign: 'right' }}>
                            <div style={{ fontSize: '20px', fontFamily: 'var(--font-mono)', fontWeight: '800', color: simStock > 0 ? '#00ff88' : '#ef4444' }}>
                              {simStock} UNITS
                            </div>
                            <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Inventory Stock</div>
                          </div>
                        </div>

                        <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
                          <button
                            type="button"
                            onClick={triggerConcurrentCheckout}
                            disabled={simIsCheckingOut}
                            className="btn-vibe-primary"
                            style={{ background: currentProject.accentColor, color: '#000' }}
                          >
                            {simIsCheckingOut ? 'Acquiring Distributed Mutex...' : '⚡ Submit Checkout Request'}
                          </button>

                          <button
                            type="button"
                            onClick={() => {
                              setSimStock(5);
                              setSimOrders([]);
                            }}
                            className="btn-vibe-outline"
                          >
                            Reset Inventory to 5
                          </button>
                        </div>

                        {/* SIMULATION TELEMETRY STREAM */}
                        <div style={{ background: '#040710', borderRadius: 'var(--radius-sm)', padding: '14px', border: '1px solid var(--border-subtle)', fontFamily: 'var(--font-mono)', fontSize: '12px' }}>
                          <div style={{ color: 'var(--text-muted)', marginBottom: '8px', borderBottom: '1px solid rgba(255,255,255,0.06)', paddingBottom: '6px' }}>
                            [TELEMETRY] RabbitMQ Message Bus & Redis Mutex Stream
                          </div>
                          {simOrders.length === 0 ? (
                            <div style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>
                              Click "Submit Checkout Request" to observe real-time concurrency resolution.
                            </div>
                          ) : (
                            simOrders.map((ord, idx) => (
                              <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', borderBottom: '1px dashed rgba(255,255,255,0.04)' }}>
                                <span style={{ color: ord.status.includes('SUCCESS') ? '#00ff88' : '#ef4444' }}>
                                  [{ord.status}] {ord.id}
                                </span>
                                <span style={{ color: '#38bdf8' }}>{ord.event}</span>
                                <span style={{ color: 'var(--text-muted)' }}>{ord.time}</span>
                              </div>
                            ))
                          )}
                        </div>
                      </div>
                    )}

                    {/* 02: VIDEO TRANSCODER SIMULATION */}
                    {currentProject.simulationType === 'transcoder' && (
                      <div style={{ background: 'var(--bg-terminal)', border: '1px solid var(--border-medium)', borderRadius: 'var(--radius-md)', padding: '24px' }}>
                        <h4 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: '700', color: currentProject.accentColor }}>
                          Celery Worker & FFmpeg HLS Transcoding Ladder
                        </h4>
                        <p style={{ margin: '0 0 20px 0', fontSize: '12px', color: 'var(--text-secondary)' }}>
                          Simulate offloading MP4 video encode tasks to asynchronous Celery workers backed by Redis, producing HLS .m3u8 playlists.
                        </p>

                        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '20px' }}>
                          <button
                            type="button"
                            onClick={startTranscodeJob}
                            disabled={simTranscodeState === 'transcoding'}
                            className="btn-vibe-primary"
                            style={{ background: currentProject.accentColor, color: '#fff' }}
                          >
                            {simTranscodeState === 'transcoding' ? 'Transcoding in Celery Worker...' : '🎬 Ingest Video & Transcode'}
                          </button>

                          <div style={{ display: 'flex', gap: '6px' }}>
                            {['1080p', '720p', '480p'].map(res => (
                              <button
                                key={res}
                                type="button"
                                onClick={() => setSimSelectedResolution(res)}
                                style={{
                                  background: simSelectedResolution === res ? 'rgba(168, 85, 247, 0.25)' : 'rgba(255,255,255,0.04)',
                                  border: `1px solid ${simSelectedResolution === res ? currentProject.accentColor : 'var(--border-subtle)'}`,
                                  color: simSelectedResolution === res ? '#fff' : 'var(--text-secondary)',
                                  padding: '6px 12px',
                                  borderRadius: 'var(--radius-xs)',
                                  fontFamily: 'var(--font-mono)',
                                  fontSize: '11px',
                                  cursor: 'pointer'
                                }}
                              >
                                {res} Rendition
                              </button>
                            ))}
                          </div>
                        </div>

                        {/* PROGRESS BAR */}
                        <div style={{ marginBottom: '16px' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', fontFamily: 'var(--font-mono)', marginBottom: '6px' }}>
                            <span style={{ color: 'var(--text-secondary)' }}>
                              FFmpeg Multi-Bitrate Ladder Status: {simTranscodeState.toUpperCase()}
                            </span>
                            <span style={{ color: currentProject.accentColor, fontWeight: '700' }}>
                              {simTranscodeProgress}%
                            </span>
                          </div>
                          <div style={{ height: '8px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '4px', overflow: 'hidden' }}>
                            <div style={{ height: '100%', width: `${simTranscodeProgress}%`, background: currentProject.accentColor, transition: 'width 0.4s ease' }} />
                          </div>
                        </div>

                        {/* PLAYLIST PREVIEW */}
                        {simTranscodeState === 'completed' && (
                          <div style={{ background: '#040710', borderRadius: 'var(--radius-sm)', padding: '12px', border: '1px solid var(--border-subtle)', fontFamily: 'var(--font-mono)', fontSize: '11px', color: '#a855f7' }}>
                            #EXTM3U (Master Manifest Ready)<br />
                            #EXT-X-STREAM-INF:BANDWIDTH=4500000,RESOLUTION=1920x1080<br />
                            master_1080p.m3u8<br />
                            #EXT-X-STREAM-INF:BANDWIDTH=2500000,RESOLUTION=1280x720<br />
                            master_720p.m3u8
                          </div>
                        )}
                      </div>
                    )}

                    {/* 03: CITYPULSE-X SIMULATION */}
                    {currentProject.simulationType === 'traffic' && (
                      <div style={{ background: 'var(--bg-terminal)', border: '1px solid var(--border-medium)', borderRadius: 'var(--radius-md)', padding: '24px' }}>
                        <h4 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: '700', color: currentProject.accentColor }}>
                          YOLOv8m + SORT Dynamic Traffic Signal Simulator
                        </h4>
                        <p style={{ margin: '0 0 20px 0', fontSize: '12px', color: 'var(--text-secondary)' }}>
                          Observe Kalman filter tracking counts and adaptive green-time allocation adjusting dynamically with vehicle volume.
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '20px' }}>
                          <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                            <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>TRAFFIC DENSITY</div>
                            <div style={{ display: 'flex', gap: '6px', marginTop: '6px' }}>
                              {['light', 'medium', 'heavy'].map(d => (
                                <button
                                  key={d}
                                  type="button"
                                  onClick={() => setSimTrafficDensity(d)}
                                  style={{
                                    background: simTrafficDensity === d ? currentProject.accentColor : 'transparent',
                                    color: simTrafficDensity === d ? '#000' : 'var(--text-secondary)',
                                    border: `1px solid ${simTrafficDensity === d ? currentProject.accentColor : 'var(--border-subtle)'}`,
                                    padding: '4px 8px',
                                    borderRadius: 'var(--radius-xs)',
                                    fontSize: '11px',
                                    fontFamily: 'var(--font-mono)',
                                    cursor: 'pointer',
                                    textTransform: 'uppercase'
                                  }}
                                >
                                  {d}
                                </button>
                              ))}
                            </div>
                          </div>

                          <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                            <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>YOLO CONFIDENCE: {simYoloConfidence}%</div>
                            <input
                              type="range"
                              min="50"
                              max="99"
                              value={simYoloConfidence}
                              onChange={(e) => setSimYoloConfidence(Number(e.target.value))}
                              style={{ width: '100%', marginTop: '8px' }}
                            />
                          </div>

                          <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '12px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                            <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>CALCULATED GREEN TIME</div>
                            <div style={{ fontSize: '20px', fontWeight: '800', color: currentProject.accentColor, fontFamily: 'var(--font-mono)' }}>
                              {simTrafficDensity === 'light' ? '18s' : simTrafficDensity === 'medium' ? '32s' : '55s'}
                            </div>
                          </div>
                        </div>

                        {/* RADAR METRICS */}
                        <div style={{ background: '#040710', borderRadius: 'var(--radius-sm)', padding: '14px', border: '1px solid var(--border-subtle)', fontFamily: 'var(--font-mono)', fontSize: '12px' }}>
                          <div style={{ color: '#00ff88', marginBottom: '6px' }}>
                            [SORT TRACKER] {simTrafficDensity === 'light' ? '7' : simTrafficDensity === 'medium' ? '18' : '34'} Active Vehicle Trajectories Associated
                          </div>
                          <div style={{ color: 'var(--text-muted)' }}>
                            Inference Latency: 28.4ms (35.2 FPS) • Hungarian Assignment Cost: 0.12 • IoU Threshold: 0.45
                          </div>
                        </div>
                      </div>
                    )}

                    {/* 04: SCHOOL MANAGEMENT SYSTEM SIMULATION */}
                    {currentProject.simulationType === 'school' && (
                      <div style={{ background: 'var(--bg-terminal)', border: '1px solid var(--border-medium)', borderRadius: 'var(--radius-md)', padding: '24px' }}>
                        <h4 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: '700', color: currentProject.accentColor }}>
                          Offline Sync, RBAC & Conflict Resolution Lab
                        </h4>
                        <p style={{ margin: '0 0 20px 0', fontSize: '12px', color: 'var(--text-secondary)' }}>
                          Simulate mobile offline mutations (React Native / Zustand) pushed to backend PostgreSQL via batched delta sync.
                        </p>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'center', marginBottom: '20px' }}>
                          <div style={{ display: 'flex', gap: '6px' }}>
                            {['ADMIN', 'TEACHER', 'ACCOUNTANT', 'PARENT'].map(role => (
                              <button
                                key={role}
                                type="button"
                                onClick={() => setSimUserRole(role)}
                                style={{
                                  background: simUserRole === role ? currentProject.accentColor : 'rgba(255,255,255,0.04)',
                                  color: simUserRole === role ? '#000' : 'var(--text-secondary)',
                                  border: `1px solid ${simUserRole === role ? currentProject.accentColor : 'var(--border-subtle)'}`,
                                  padding: '6px 10px',
                                  borderRadius: 'var(--radius-xs)',
                                  fontFamily: 'var(--font-mono)',
                                  fontSize: '11px',
                                  cursor: 'pointer'
                                }}
                              >
                                {role}
                              </button>
                            ))}
                          </div>

                          <button
                            type="button"
                            onClick={() => setSimOfflineMode(!simOfflineMode)}
                            style={{
                              background: simOfflineMode ? 'rgba(239, 68, 68, 0.2)' : 'rgba(0, 255, 136, 0.15)',
                              border: `1px solid ${simOfflineMode ? '#ef4444' : '#00ff88'}`,
                              color: simOfflineMode ? '#f87171' : '#4ade80',
                              padding: '6px 12px',
                              borderRadius: 'var(--radius-xs)',
                              fontFamily: 'var(--font-mono)',
                              fontSize: '11px',
                              cursor: 'pointer'
                            }}
                          >
                            {simOfflineMode ? '● Device Offline' : '● Device Online'}
                          </button>
                        </div>

                        <div style={{ display: 'flex', gap: '12px', marginBottom: '16px' }}>
                          <button
                            type="button"
                            onClick={addOfflineRecord}
                            className="btn-vibe-primary"
                            style={{ background: currentProject.accentColor, color: '#000' }}
                          >
                            + Record Mutation (Deltas: {simPendingDeltas})
                          </button>

                          <button
                            type="button"
                            onClick={syncOfflineData}
                            disabled={simPendingDeltas === 0}
                            className="btn-vibe-outline"
                          >
                            🔄 Push & Sync Deltas
                          </button>
                        </div>

                        {/* LOGS */}
                        <div style={{ background: '#040710', borderRadius: 'var(--radius-sm)', padding: '14px', border: '1px solid var(--border-subtle)', fontFamily: 'var(--font-mono)', fontSize: '11px' }}>
                          {simSyncLogs.length === 0 ? (
                            <div style={{ color: 'var(--text-muted)' }}>
                              Ready. Toggle offline state and record mutations to test delta synchronization.
                            </div>
                          ) : (
                            simSyncLogs.map((log, idx) => (
                              <div key={idx} style={{ color: '#38bdf8', padding: '2px 0' }}>{log}</div>
                            ))
                          )}
                        </div>
                      </div>
                    )}

                    {/* 05: DISTRIBUTED URL SHORTENER SIMULATION */}
                    {currentProject.simulationType === 'shortener' && (
                      <div style={{ background: 'var(--bg-terminal)', border: '1px solid var(--border-medium)', borderRadius: 'var(--radius-md)', padding: '24px' }}>
                        <h4 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: '700', color: currentProject.accentColor }}>
                          Redis Cache-Aside & Kafka Event Streaming Lab
                        </h4>
                        <p style={{ margin: '0 0 20px 0', fontSize: '12px', color: 'var(--text-secondary)' }}>
                          Inspect sub-millisecond Redis Cache-Aside lookups vs PostgreSQL fallback, paired with asynchronous Apache Kafka event emission.
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '12px', marginBottom: '16px' }}>
                          <input
                            type="text"
                            value={simLongUrl}
                            onChange={(e) => setSimLongUrl(e.target.value)}
                            style={{
                              background: 'rgba(255,255,255,0.04)',
                              border: '1px solid var(--border-medium)',
                              borderRadius: 'var(--radius-sm)',
                              padding: '10px 14px',
                              color: '#fff',
                              fontFamily: 'var(--font-mono)',
                              fontSize: '12px'
                            }}
                          />
                          <button
                            type="button"
                            onClick={() => {
                              const newCode = Math.random().toString(36).substring(2, 7);
                              setSimShortUrl(`sho.rt/${newCode}`);
                              simulateRedirect(true);
                            }}
                            className="btn-vibe-primary"
                            style={{ background: currentProject.accentColor, color: '#fff' }}
                          >
                            Encode Base62
                          </button>
                        </div>

                        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '16px' }}>
                          <button
                            type="button"
                            onClick={() => simulateRedirect(false)}
                            className="btn-vibe-outline"
                          >
                            Resolve Link: {simShortUrl}
                          </button>

                          {simCacheStatus && (
                            <span style={{
                              fontFamily: 'var(--font-mono)',
                              fontSize: '11px',
                              fontWeight: '700',
                              padding: '4px 10px',
                              borderRadius: 'var(--radius-xs)',
                              background: simCacheStatus === 'HIT' ? 'rgba(0, 255, 136, 0.2)' : 'rgba(244, 63, 94, 0.2)',
                              color: simCacheStatus === 'HIT' ? '#00ff88' : '#f43f5e',
                              border: `1px solid ${simCacheStatus === 'HIT' ? '#00ff88' : '#f43f5e'}`
                            }}>
                              CACHE {simCacheStatus} {simCacheStatus === 'HIT' ? '(<1ms from Redis)' : '(18ms from PostgreSQL Index)'}
                            </span>
                          )}
                        </div>

                        {/* KAFKA TOPIC FEED */}
                        <div style={{ background: '#040710', borderRadius: 'var(--radius-sm)', padding: '14px', border: '1px solid var(--border-subtle)', fontFamily: 'var(--font-mono)', fontSize: '11px' }}>
                          <div style={{ color: 'var(--text-muted)', marginBottom: '6px' }}>
                            [KAFKA PRODUCER] Stream Topic: 'url.clicks.events' (Partition 0-2)
                          </div>
                          {simKafkaEvents.length === 0 ? (
                            <div style={{ color: 'var(--text-muted)' }}>
                              Click "Resolve Link" to trigger non-blocking Kafka click analytics emission.
                            </div>
                          ) : (
                            simKafkaEvents.map((evt, idx) => (
                              <div key={idx} style={{ color: '#fb7185', padding: '2px 0' }}>
                                #{evt.id} | code: {evt.code} | latency: {evt.latency} | time: {evt.time}
                              </div>
                            ))
                          )}
                        </div>
                      </div>
                    )}

                  </div>
                )}

                {/* TAB 4: INTERVIEW CONCEPTS & SYSTEM DESIGN */}
                {activeTab === 'interview' && (
                  <div className="animate-fade-in">
                    <div style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '16px' }}>
                      IMPORTANT CONCEPTS TO PREPARE // TECHNICAL INTERVIEW DRILL-DOWN ({currentProject.importantConcepts.length})
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                      {currentProject.importantConcepts.map((concept, cIdx) => (
                        <div
                          key={cIdx}
                          style={{
                            background: 'rgba(255, 255, 255, 0.025)',
                            border: '1px solid var(--border-subtle)',
                            borderRadius: 'var(--radius-sm)',
                            padding: '16px 20px',
                            borderLeft: `3px solid ${currentProject.accentColor}`
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: currentProject.accentColor, fontWeight: '800' }}>
                              #{String(cIdx + 1).padStart(2, '0')}
                            </span>
                            <span style={{ fontSize: '15px', fontWeight: '700', color: 'var(--text-primary)' }}>
                              {concept.name}
                            </span>
                          </div>
                          <p style={{ margin: 0, fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                            {concept.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
