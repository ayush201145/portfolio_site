import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CyberDeck from './components/CyberDeck';
import ConsolidatedMatrix from './components/ConsolidatedMatrix';
import SkillsRadar from './components/SkillsRadar';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './styles/global.css';

export default function App() {
  const [selectedProjectId, setSelectedProjectId] = useState('ecommerce-checkout');

  const handleLaunchProject = (projId) => {
    setSelectedProjectId(projId);
    const deckElem = document.getElementById('deck');
    if (deckElem) {
      deckElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      
      {/* SCANLINES & CYBER AMBIENT BACKDROP OVERLAYS */}
      <div className="cyber-scanlines" style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', opacity: 0.35 }} />

      {/* TOP HUD NAVBAR */}
      <Navbar />

      {/* MAIN WORKSTATION CANVAS */}
      <main style={{ flex: 1, zIndex: 1 }}>
        {/* HERO SECTION */}
        <Hero onSelectProject={handleLaunchProject} />

        {/* 5-PROJECT BESPOKE CYBER-DECK & INTERACTIVE LAB */}
        <CyberDeck defaultProjectId={selectedProjectId} />

        {/* CONSOLIDATED TECHNOLOGY COMPARISON MATRIX */}
        <ConsolidatedMatrix onSelectProject={handleLaunchProject} />

        {/* TECHNICAL TAXONOMY */}
        <SkillsRadar />

        {/* CONTACT TERMINAL */}
        <ContactSection />
      </main>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}
