import React, { useState } from 'react';
import { DataNetworkBackground } from './components/DataNetworkBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ResearchHighlight } from './components/ResearchHighlight';
import { LeadershipSection } from './components/LeadershipSection';
import { CareerDirection } from './components/CareerDirection';
import { AchievementsSection } from './components/AchievementsSection';
import { BeyondWorkSection } from './components/BeyondWorkSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#090b0e] text-[#f1f5f9] selection:bg-sky-500/20 selection:text-sky-300">
      {/* 
        Signature Interactive Neural Data Network Background Layer:
        Organically distributed data nodes, subtle connection lines,
        occasional data packet flows, mouse-driven cluster reaction & click pulse wave.
      */}
      <DataNetworkBackground />

      {/* Sticky Blurred Glass Navigation */}
      <Navbar onOpenResumeModal={() => setIsResumeModalOpen(true)} />

      {/* Main Structured Portfolio Sections */}
      <main className="relative z-10">
        {/* 1. Hero */}
        <Hero onOpenResumeModal={() => setIsResumeModalOpen(true)} />

        {/* 2. About snapshot + Signature Visual Metaphor */}
        <AboutSection />

        {/* 3. What I Work With & Currently Building */}
        <SkillsSection />

        {/* 4. Selected Projects */}
        <ProjectsSection />

        {/* Academic Research Spotlight */}
        <ResearchHighlight />

        {/* 5. Leadership / Experience (Beyond the Code) */}
        <LeadershipSection />

        {/* 6. Career Direction (Signature 5-Phase Visual Journey) */}
        <CareerDirection />

        {/* 7. Achievements */}
        <AchievementsSection />

        {/* 8. Education */}
        <EducationSection />

        {/* 9. Beyond Work (Personal Interests & Discipline) */}
        <BeyondWorkSection />

        {/* 10. Contact (Let's build something meaningful) */}
        <ContactSection onOpenResumeModal={() => setIsResumeModalOpen(true)} />
      </main>

      {/* Clean Minimal Footer */}
      <Footer />

      {/* In-app Resume Preview Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
