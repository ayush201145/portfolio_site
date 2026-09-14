import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoProjectGrid from './components/BentoProjectGrid';
import SkillsRadar from './components/SkillsRadar';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ArchitectureDrawer from './components/ArchitectureDrawer';
import './styles/global.css';

export default function App() {
  const [selectedTrack, setSelectedTrack] = useState('all');
  const [drawerProject, setDrawerProject] = useState(null);

  return (
    <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT AREA */}
      <main style={{ flex: 1 }}>
        <Hero />
        <BentoProjectGrid
          selectedTrack={selectedTrack}
          onSelectTrack={setSelectedTrack}
          onOpenDrawer={setDrawerProject}
        />
        <SkillsRadar />
        <ContactSection />
      </main>

      {/* FOOTER */}
      <Footer />

      {/* SLIDE-OVER ARCHITECTURE & DETAILS DRAWER */}
      {drawerProject && (
        <ArchitectureDrawer
          project={drawerProject}
          onClose={() => setDrawerProject(null)}
        />
      )}

    </div>
  );
}
