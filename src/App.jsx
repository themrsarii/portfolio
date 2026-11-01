import React, { useState, useEffect } from 'react';
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
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('portfolio-theme');
      if (stored) return stored;
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'dark';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('portfolio-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('portfolio-theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] dark:bg-[#090A0C] text-[#171717] dark:text-[#EDEDED] font-sans antialiased selection:bg-indigo-500/15 selection:text-indigo-600 dark:selection:bg-indigo-500/25 dark:selection:text-indigo-300 transition-colors duration-150">
      {/* Sticky Editorial Navigation */}
      <Navbar
        onOpenResume={() => setResumeOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* Editorial Hero with Authentic Typography & Refined Subject Presentation */}
        <Hero onOpenResume={() => setResumeOpen(true)} />

        {/* Technologies I Build With Strip */}
        <TechStrip />

        {/* Selected Work: Premium Editorial Showcase */}
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

        {/* GitHub Code & Open Source Repositories */}
        <GithubSection />

        {/* Contact Section: Direct Collaboration & Inquiries */}
        <ContactSection onOpenResume={() => setResumeOpen(true)} />
      </main>

      {/* Minimalist Editorial Footer */}
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
