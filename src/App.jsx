import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechStrip } from './components/TechStrip';
import { FeaturedWork } from './components/FeaturedWork';
import { Footer } from './components/Footer';
import { WhatsAppWidget } from './components/WhatsAppWidget';

// Code-split below-the-fold modules to maximize Lighthouse Speed Index & minimize Total Blocking Time
const MernArchitecture = lazy(() => import('./components/MernArchitecture').then(m => ({ default: m.MernArchitecture })));
const HowIBuild = lazy(() => import('./components/HowIBuild').then(m => ({ default: m.HowIBuild })));
const SkillsSection = lazy(() => import('./components/SkillsSection').then(m => ({ default: m.SkillsSection })));
const ExperienceTimeline = lazy(() => import('./components/ExperienceTimeline').then(m => ({ default: m.ExperienceTimeline })));
const AboutSection = lazy(() => import('./components/AboutSection').then(m => ({ default: m.AboutSection })));
const GithubSection = lazy(() => import('./components/GithubSection').then(m => ({ default: m.GithubSection })));
const ContactSection = lazy(() => import('./components/ContactSection').then(m => ({ default: m.ContactSection })));

// Lazy-load modal overlays for minimal initial JS evaluation & optimal PageSpeed
const CaseStudyModal = lazy(() => import('./components/CaseStudyModal'));
const ResumeModal = lazy(() => import('./components/ResumeModal'));

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

  // Preload below-the-fold components during idle periods
  useEffect(() => {
    const preload = () => {
      import('./components/MernArchitecture');
      import('./components/HowIBuild');
      import('./components/SkillsSection');
      import('./components/ExperienceTimeline');
      import('./components/AboutSection');
      import('./components/GithubSection');
      import('./components/ContactSection');
    };

    if (typeof window !== 'undefined') {
      if ('requestIdleCallback' in window) {
        const id = window.requestIdleCallback(preload);
        return () => window.cancelIdleCallback(id);
      } else {
        const timer = setTimeout(preload, 1200);
        return () => clearTimeout(timer);
      }
    }
  }, []);

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

        {/* Deferred Content Sections wrapped in Suspense for maximum LCP & Speed Index */}
        <Suspense fallback={null}>
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
        </Suspense>
      </main>

      {/* Minimalist Editorial Footer */}
      <Footer onOpenResume={() => setResumeOpen(true)} />

      {/* Floating Direct Contact WhatsApp Widget */}
      <WhatsAppWidget />

      {/* Modals (Lazy-loaded) */}
      <Suspense fallback={null}>
        {selectedProject && (
          <CaseStudyModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

        {resumeOpen && (
          <ResumeModal
            isOpen={resumeOpen}
            onClose={() => setResumeOpen(false)}
          />
        )}
      </Suspense>
    </div>
  );
}

export default App;
