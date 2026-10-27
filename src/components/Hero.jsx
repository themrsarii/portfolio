import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowDown,
  ArrowUpRight,
  FileText,
  Sparkles,
  Code2,
  Play,
  Pause,
  X
} from 'lucide-react';
import { GithubIcon } from './Icons';

export const Hero = ({ onOpenResume }) => {
  const [photoStyle, setPhotoStyle] = useState('studio'); // 'studio' | 'natural'
  const [showConfigModal, setShowConfigModal] = useState(false);
  const [motionEnabled, setMotionEnabled] = useState(true);

  const togglePhotoStyle = () => {
    setPhotoStyle(prev => prev === 'studio' ? 'natural' : 'studio');
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] lg:min-h-[920px] max-h-[1200px] flex flex-col justify-between pt-16 sm:pt-28 pb-8 px-4 sm:px-8 lg:px-14 overflow-hidden select-none bg-[#07090D]"
    >
      {/* Architectural vertical grid lines */}
      <div
        className="absolute inset-0 top-[88px] hero-grid-architectural pointer-events-none z-0 opacity-25"
        aria-hidden="true"
      />

      {/* Ambient Radial Backlight Glow behind the subject */}
      <div
        className="absolute left-1/2 top-[34%] -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[540px] lg:w-[680px] h-[340px] sm:h-[540px] lg:h-[680px] hero-glow-backlight pointer-events-none z-0 rounded-full blur-[100px] sm:blur-[130px] opacity-80"
        aria-hidden="true"
      />

      {/* CENTER STAGE: Editorial Portrait of Muhammad Sarfaraz */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-[98px] sm:top-[74px] lg:top-[80px] w-[270px] sm:w-[460px] md:w-[540px] lg:w-[620px] max-h-[82svh] pointer-events-none z-0 flex justify-center hero-portrait-mask"
        aria-hidden="true"
      >
        <motion.img
          key={photoStyle}
          initial={motionEnabled ? { opacity: 0, scale: 0.98 } : false}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          src={photoStyle === 'studio' ? '/assets/hero-portrait-studio.webp' : '/assets/hero-portrait-natural.webp'}
          alt="Muhammad Sarfaraz - Full-Stack MERN Developer"
          className="w-full h-auto object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.9)] transition-all duration-500"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
      </div>

      {/* TOPLINE / METADATA HEADER */}
      <div className="relative z-10 w-full flex items-center justify-between text-[#98A1AF] pt-1 sm:pt-2">
        <motion.div
          initial={motionEnabled ? { opacity: 0, y: -10 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 sm:gap-3"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399] animate-pulse" />
          <span className="font-mono text-[9px] sm:text-[11px] tracking-[0.22em] uppercase font-medium text-[#D1D5DB]">
            ENGINEER. ARCHITECT. BUILDER.
          </span>
        </motion.div>

        <motion.div
          initial={motionEnabled ? { opacity: 0, y: -10 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden sm:flex items-center gap-2"
        >
          <span className="font-mono text-[9px] sm:text-[11px] tracking-[0.2em] uppercase text-[#98A1AF]">
            BASED IN PAKISTAN · AVAILABLE WORLDWIDE
          </span>
        </motion.div>
      </div>

      {/* LEFT SIDE NOTE: 01 / PRESENCE (visible on md+) */}
      <motion.div
        initial={motionEnabled ? { opacity: 0, x: -20 } : false}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="hidden md:flex absolute left-6 sm:left-10 lg:left-14 top-[35%] lg:top-[38%] -translate-y-1/2 flex-col gap-6 z-10 pointer-events-none"
      >
        <div className="flex flex-col gap-2">
          <span className="font-mono text-[10px] tracking-[0.25em] text-[#818CF8] font-semibold">
            01 / PRESENCE
          </span>
          <span className="text-[#818CF8] text-sm font-mono">+</span>
        </div>
        <div className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] leading-[1.8] text-[#98A1AF] uppercase">
          FULL-STACK<br />
          MERN ARCHITECTURE<br />
          CLEAN EXECUTION
        </div>
      </motion.div>

      {/* RIGHT SIDE NOTE: 02 / SPECIFICATION & CODE MODAL TRIGGER (visible on md+) */}
      <motion.div
        initial={motionEnabled ? { opacity: 0, x: 20 } : false}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="hidden md:flex absolute right-6 sm:right-10 lg:right-14 top-[35%] lg:top-[38%] -translate-y-1/2 flex-col items-end gap-6 z-10"
      >
        <div className="flex flex-col items-end gap-2 pointer-events-none">
          <span className="font-mono text-[10px] tracking-[0.25em] text-[#818CF8] font-semibold">
            02 / SPECIFICATION
          </span>
          <span className="text-[#818CF8] text-sm font-mono">+</span>
        </div>
        <div className="text-right font-mono text-[9px] sm:text-[10px] tracking-[0.2em] leading-[1.8] text-[#98A1AF] uppercase pointer-events-none">
          REACT · NODE.JS<br />
          EXPRESS · MONGODB<br />
          REST & SCALABLE APIS
        </div>

        {/* Interactive Developer Config trigger button */}
        <button
          onClick={() => setShowConfigModal(true)}
          className="mt-2 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#11151C]/80 hover:bg-[#1A202C] border border-[#252B36] hover:border-indigo-500/50 text-[10px] font-mono text-indigo-300 hover:text-white transition-all shadow-sm group"
          title="Inspect developer.config.js"
        >
          <Code2 className="w-3 h-3 text-indigo-400 group-hover:scale-110 transition-transform" />
          <span>developer.config.js</span>
        </button>
      </motion.div>

      {/* CENTER EDITORIAL TYPOGRAPHY & VALUE PROPOSITION */}
      <div className="relative z-10 my-auto pt-36 sm:pt-28 lg:pt-32 pb-4 text-center flex flex-col items-center">

        {/* Kicker Tagline (A HUMAN/MODERN PERSPECTIVE) */}
        <motion.div
          initial={motionEnabled ? { opacity: 0, y: 15 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center justify-center gap-2 mb-3 sm:mb-4"
        >
          <span className="font-mono text-[9px] sm:text-[10.5px] tracking-[0.25em] text-[#CBD5E1] uppercase font-medium">
            BUILDING MODERN FULL-STACK WEB APPLICATIONS
          </span>
        </motion.div>

        {/* The Giant Display Name in Instrument Serif */}
        <motion.h1
          initial={motionEnabled ? { opacity: 0, y: 20 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="font-display-serif text-[clamp(46px,11vw,165px)] font-normal tracking-[-0.035em] leading-[0.94] text-[#F5F7FA] drop-shadow-[0_8px_35px_rgba(0,0,0,0.85)]"
        >
          Muhammad <em className="font-display-serif italic font-normal text-white not-italic inline-block transition-all hover:text-indigo-200">Sarfaraz</em>
        </motion.h1>

        {/* Core Subtitle / Description */}
        <motion.p
          initial={motionEnabled ? { opacity: 0, y: 15 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 sm:mt-6 text-sm sm:text-base lg:text-[17px] text-[#A3ADB8] max-w-xl sm:max-w-2xl mx-auto leading-relaxed font-normal px-4"
        >
          I design and develop responsive interfaces, scalable APIs, and complete web applications using React, Node.js, Express, and MongoDB.
        </motion.p>

        {/* Primary Action Buttons (Pill + Links) */}
        <motion.div
          initial={motionEnabled ? { opacity: 0, y: 15 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-7 sm:mt-8"
        >
          {/* Main Frosted Pill CTA: Explore Work */}
          <a
            href="#work"
            className="group flex items-center gap-3 px-6 sm:px-7 py-3 rounded-full bg-[#11151C]/90 hover:bg-indigo-600 border border-[#252B36] hover:border-indigo-400 text-xs sm:text-sm font-medium text-white transition-all duration-300 shadow-lg shadow-black/40 hover:shadow-indigo-600/30 hover:-translate-y-0.5 backdrop-blur-md"
          >
            <span>Explore my work</span>
            <ArrowDown className="w-3.5 h-3.5 text-indigo-400 group-hover:text-white group-hover:translate-y-0.5 transition-all" />
          </a>

          {/* Text Link: Start a Conversation */}
          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#CBD5E1] hover:text-white transition-colors duration-200 border-b border-[#252B36] hover:border-indigo-400 pb-0.5"
          >
            <span>Start a conversation</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#98A1AF] group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>

          {/* Resume CTA */}
          <button
            onClick={onOpenResume}
            className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#CBD5E1] hover:text-white transition-colors duration-200 border-b border-[#252B36] hover:border-purple-400 pb-0.5"
          >
            <FileText className="w-3.5 h-3.5 text-purple-400 group-hover:scale-110 transition-transform" />
            <span>Resume</span>
          </button>

          {/* GitHub CTA */}
          <a
            href="https://github.com/themrsarii"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#CBD5E1] hover:text-white transition-colors duration-200 border-b border-[#252B36] hover:border-indigo-400 pb-0.5"
          >
            <GithubIcon className="w-3.5 h-3.5 text-indigo-400 group-hover:scale-110 transition-transform" />
            <span>GitHub</span>
          </a>
        </motion.div>

        {/* Mobile View: Quick Developer Config trigger */}
        <div className="md:hidden mt-5">
          <button
            onClick={() => setShowConfigModal(true)}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#11151C]/90 border border-[#252B36] text-[10px] font-mono text-indigo-300 shadow-sm"
          >
            <Code2 className="w-3 h-3 text-indigo-400" />
            <span>developer.config.js</span>
          </button>
        </div>

      </div>

      {/* HERO BOTTOM BAR */}
      <motion.div
        initial={motionEnabled ? { opacity: 0 } : false}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative z-10 w-full flex items-center justify-between text-[#8A94A6] pt-4 border-t border-white/[0.04]"
      >
        {/* Left: Scroll to discover */}
        <a
          href="#work"
          className="group inline-flex items-center gap-3 font-mono text-[9px] sm:text-[10px] tracking-[0.2em] text-[#98A1AF] hover:text-white transition-colors uppercase"
        >
          <span className="w-[1px] h-5 bg-gradient-to-b from-transparent via-indigo-500 to-indigo-400 group-hover:h-7 transition-all duration-300" />
          <span>SCROLL TO DISCOVER</span>
          <ArrowDown className="w-3 h-3 text-indigo-400 group-hover:translate-y-0.5 transition-transform" />
        </a>

        {/* Center: Specialization note */}
        <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] text-[#64748B] uppercase hidden md:inline">
          FULL-STACK ENGINEERING & MODERN SYSTEMS
        </span>

        {/* Right: Status / Edition */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/themrsarii"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[9px] sm:text-[10px] tracking-[0.18em] text-[#98A1AF] hover:text-indigo-300 transition-colors uppercase flex items-center gap-1.5"
          >
            <span>GITHUB: @themrsarii</span>
            <ArrowUpRight className="w-3 h-3 text-indigo-400" />
          </a>
        </div>
      </motion.div>

      {/* CORNER FLOATING CONTROLS: Motion & Portrait Style Switcher */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2">
        {/* Portrait Grade Switcher (Studio / Natural) */}
        <button
          onClick={togglePhotoStyle}
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-[#0C0F14]/90 border border-[#252B36] hover:border-indigo-500/50 backdrop-blur-md text-[9px] font-mono text-[#D1D5DB] hover:text-white transition-all shadow-xl"
          title={`Switch portrait to ${photoStyle === 'studio' ? 'Natural' : 'Studio'} mode`}
        >
          <Sparkles className="w-3 h-3 text-indigo-400" />
          <span>PORTRAIT: {photoStyle.toUpperCase()}</span>
        </button>

        {/* Motion Toggle (Like Sarthak's MOTION ON/OFF) */}
        <button
          onClick={() => setMotionEnabled(!motionEnabled)}
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-[#0C0F14]/90 border border-[#252B36] hover:border-indigo-500/50 backdrop-blur-md text-[9px] font-mono text-[#D1D5DB] hover:text-white transition-all shadow-xl"
          title={motionEnabled ? "Disable animations" : "Enable animations"}
          aria-pressed={motionEnabled}
        >
          {motionEnabled ? (
            <>
              <Pause className="w-3 h-3 text-emerald-400" />
              <span>MOTION ON</span>
            </>
          ) : (
            <>
              <Play className="w-3 h-3 text-amber-400" />
              <span>MOTION OFF</span>
            </>
          )}
        </button>
      </div>

      {/* DEVELOPER CONFIG MODAL / OVERLAY */}
      <AnimatePresence>
        {showConfigModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowConfigModal(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg bg-[#0C0F14] border border-[#252B36] rounded-2xl p-5 sm:p-6 shadow-2xl shadow-black/80"
            >
              {/* Card Window Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-[#252B36]/80 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="font-mono text-xs text-[#98A1AF] ml-2">developer.config.js</span>
                </div>
                <button
                  onClick={() => setShowConfigModal(false)}
                  className="p-1 rounded-md text-[#98A1AF] hover:text-white hover:bg-white/5 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Code Snippet */}
              <pre className="font-mono text-xs sm:text-sm text-[#F5F7FA] leading-relaxed overflow-x-auto bg-[#07090D] p-4 rounded-xl border border-[#252B36]/60">
                <code>
                  <span className="text-purple-400">const</span> <span className="text-indigo-300">developer</span> = &#123;{'\n'}
                  {'  '}name: <span className="text-emerald-400">"Muhammad Sarfaraz"</span>,{'\n'}
                  {'  '}role: <span className="text-emerald-400">"Full-Stack MERN Developer"</span>,{'\n'}
                  {'  '}focus: <span className="text-emerald-400">"Scalable Web Architecture & APIs"</span>,{'\n'}
                  {'  '}stack: [<span className="text-emerald-400">"React"</span>, <span className="text-emerald-400">"Node.js"</span>, <span className="text-emerald-400">"Express"</span>, <span className="text-emerald-400">"MongoDB"</span>],{'\n'}
                  {'  '}mindset: <span className="text-amber-300">"Build. Learn. Improve."</span>,{'\n'}
                  {'  '}status: <span className="text-emerald-400">"Open to Opportunities"</span>{'\n'}
                  &#125;;
                </code>
              </pre>

              <div className="mt-4 flex items-center justify-between pt-2 text-xs font-mono text-[#98A1AF]">
                <span>Engineered with React & Tailwind CSS</span>
                <button
                  onClick={() => setShowConfigModal(false)}
                  className="px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-sans text-xs font-medium transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Hero;
