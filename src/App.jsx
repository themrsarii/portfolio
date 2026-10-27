import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechStrip } from './components/TechStrip';
import { FeaturedWork } from './components/FeaturedWork';
import { CaseStudyModal } from './components/CaseStudyModal';
import { HowIBuild } from './components/HowIBuild';
import { MernArchitecture } from './components/MernArchitecture';
import { SkillsSection } from './components/SkillsSection';
import { AboutSection } from './components/AboutSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { GithubSection } from './components/GithubSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#07090D] text-[#F5F7FA] font-sans antialiased selection:bg-indigo-600/30 selection:text-indigo-200">
      {/* Sticky Frosted Navigation */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* Asymmetric Hero with Large Editorial Portrait */}
        <Hero onOpenResume={() => setResumeOpen(true)} />

        {/* Technologies I Build With Strip */}
        <TechStrip />

        {/* Selected Work (4 Production Full-Stack Architectures) */}
        <FeaturedWork onSelectProject={(project) => setSelectedProject(project)} />

        {/* Connected MERN Architecture & Code Deep Dive */}
        <MernArchitecture />

        {/* How I Build (5-Stage Engineering Lifecycle + Capabilities) */}
        <HowIBuild />

        {/* Categorized Skills Matrix */}
        <SkillsSection />

        {/* Experience & Journey Timeline */}
        <ExperienceTimeline />

        {/* About Section: Developer Focused on Useful Software */}
        <AboutSection />

        {/* GitHub Code & Open Source API Module */}
        <GithubSection />

        {/* Contact Section: Let's Build Something Useful */}
        <ContactSection onOpenResume={() => setResumeOpen(true)} />
      </main>

      {/* Minimal Footer */}
      <Footer onOpenResume={() => setResumeOpen(true)} />

      {/* Modals */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}

export default App;
