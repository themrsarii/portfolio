import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, FileText } from 'lucide-react';
import { GithubIcon } from './Icons';

const TYPING_PHRASES = [
  "Full Stack Developer",
  "Specializing in the MERN Stack",
];

export const Hero = ({ onOpenResume }) => {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const targetPhrase = TYPING_PHRASES[phraseIndex];
    let timer;

    if (isDeleting) {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(targetPhrase.substring(0, displayText.length - 1));
        }, 30);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % TYPING_PHRASES.length);
        }, 250);
      }
    } else {
      if (displayText.length < targetPhrase.length) {
        timer = setTimeout(() => {
          setDisplayText(targetPhrase.substring(0, displayText.length + 1));
        }, 65);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, phraseIndex]);
  return (
    <section
      id="hero"
      className="relative min-h-[calc(100svh-65px)] flex flex-col justify-center pt-20 sm:pt-24 lg:pt-20 pb-8 sm:pb-12 lg:pb-10 px-4 sm:px-6 lg:px-8 border-b border-[#E8E8E8] dark:border-[#222429] bg-[#FFFFFF] dark:bg-[#090A0C]"
    >
      <div className="max-w-7xl mx-auto w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* Main Editorial Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center">

            {/* Subtle Availability & Role Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="flex flex-wrap items-center gap-2.5 mb-3 sm:mb-4"
            >
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#F7F7F5] dark:bg-[#131418] border border-[#E8E8E8] dark:border-[#222429] text-xs font-mono text-[#666666] dark:text-[#A1A1AA]">

                <span>Available for full-time roles and freelance work</span>
              </div>
              <span className="text-xs font-mono text-[#595959] dark:text-[#A1A1AA] hidden sm:inline">
                Pakistan, Remote
              </span>
            </motion.div>

            {/* Prominent Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171717] dark:text-[#EDEDED] leading-[1.12]"
            >
              Muhammad Sarfaraz
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="min-h-[1.75rem] sm:min-h-[2rem] flex items-center mt-1.5"
            >
              <span className="text-base sm:text-lg font-medium text-indigo-600 dark:text-indigo-400 tracking-tight">
                {displayText}
              </span>
              <span
                className="inline-block w-[2px] h-[1.15em] bg-indigo-600 dark:bg-indigo-400 ml-1.5 animate-cursor align-middle"
                aria-hidden="true"
              />
            </motion.div>

            {/* Concise Value Proposition */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="mt-4 text-sm sm:text-base text-[#666666] dark:text-[#A1A1AA] leading-relaxed max-w-xl"
            >
              I build full-stack web applications and tools that people actually use. My core focus is the MERN stack (React, Node, Express, MongoDB), with hands-on experience building an offline-capable restaurant POS and client web platforms.
            </motion.p>

            {/* Call to Actions */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 mt-6 pt-1"
            >
              {/* Primary CTA */}
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-md text-xs sm:text-sm font-medium text-white bg-[#171717] hover:bg-[#262626] dark:bg-[#EDEDED] dark:text-[#090A0C] dark:hover:bg-white transition-colors"
              >
                <span>View Selected Work</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              {/* Secondary CTA */}
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-md text-xs sm:text-sm font-medium text-[#171717] dark:text-[#EDEDED] bg-[#F7F7F5] dark:bg-[#131418] hover:bg-[#EAEAEA] dark:hover:bg-[#1A1B22] border border-[#E8E8E8] dark:border-[#222429] transition-colors"
              >
                <span>Get in touch</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#666666] dark:text-[#A1A1AA]" />
              </a>

              {/* Resume CTA */}
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-xs sm:text-sm font-medium text-[#666666] dark:text-[#A1A1AA] hover:text-[#171717] dark:hover:text-white transition-colors"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Resume (CV)</span>
              </button>

              {/* GitHub Link */}
              <a
                href="https://github.com/themrsarii"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md text-xs sm:text-sm font-medium text-[#666666] dark:text-[#A1A1AA] hover:text-[#171717] dark:hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
                <span className="hidden xs:inline">GitHub</span>
              </a>
            </motion.div>

            {/* Quick Engineering Focus Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.45, delay: 0.25 }}
              className="mt-8 pt-6 border-t border-[#E8E8E8] dark:border-[#222429] grid grid-cols-2 gap-6 max-w-lg"
            >
              <div>
                <span className="block text-[11px] font-mono uppercase tracking-wider text-[#595959] dark:text-[#A1A1AA]">
                  Primary Stack
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[#171717] dark:text-[#EDEDED] mt-0.5 block">
                  MERN Architecture
                </span>
              </div>
              <div>
                <span className="block text-[11px] font-mono uppercase tracking-wider text-[#595959] dark:text-[#A1A1AA]">
                  Engineering Scope
                </span>
                <span className="text-xs sm:text-sm font-semibold text-[#171717] dark:text-[#EDEDED] mt-0.5 block">
                  Frontend and REST APIs
                </span>
              </div>
            </motion.div>

          </div>

          {/* Right Portrait & Visual Composition (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, delay: 0.15 }}
              className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[340px]"
            >
              {/* Art-Directed Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-[#E8E8E8] dark:border-[#222429] bg-[#F7F7F5] dark:bg-[#111114] shadow-sm">

                {/* Clean Frame Bar */}
                <div className="px-3.5 py-2 border-b border-[#E8E8E8] dark:border-[#222429] flex items-center justify-between bg-white dark:bg-[#141418]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                  </div>
                  <span className="text-[10px] font-mono text-[#595959] dark:text-[#A1A1AA]">
                    sarfaraz.webp
                  </span>
                </div>

                {/* Portrait Image with Responsive Sources */}
                <div className="relative aspect-[4/4.8] sm:aspect-[4/5] overflow-hidden bg-[#F2F2F0] dark:bg-[#0D0E11]">
                  <picture>
                    <source media="(max-width: 640px)" srcSet="/assets/hero-portrait-mobile.webp" type="image/webp" />
                    <source media="(min-width: 641px)" srcSet="/assets/hero-portrait-natural.webp" type="image/webp" />
                    <img
                      src="/assets/hero-portrait-natural.webp"
                      alt="Muhammad Sarfaraz, Full Stack Developer"
                      width="340"
                      height="425"
                      className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                      loading="eager"
                      fetchPriority="high"
                    />
                  </picture>
                </div>

                {/* Bottom Frame Info */}
                <div className="p-3 sm:p-3.5 bg-white dark:bg-[#141418] border-t border-[#E8E8E8] dark:border-[#222429] flex items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold text-[#171717] dark:text-[#EDEDED] block">
                      Muhammad Sarfaraz
                    </span>
                    <span className="text-[11px] font-mono text-[#595959] dark:text-[#A1A1AA]">
                      Full Stack Developer
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#595959] dark:text-[#A1A1AA]">
                    Pakistan
                  </span>
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
