import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight, Sun, Moon } from 'lucide-react';

export const Navbar = ({ onOpenResume, theme, onToggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Efficient IntersectionObserver for section highlighting without layout reflows
    const sections = ['hero', 'work', 'architecture', 'engineering', 'skills', 'experience', 'about', 'contact'];
    const observers = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(id);
              }
            });
          },
          { rootMargin: '-20% 0px -70% 0px' }
        );
        observer.observe(el);
        observers.push(observer);
      }
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Architecture', href: '#architecture' },
    { name: 'Process', href: '#engineering' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${scrolled
          ? 'bg-[#FFFFFF]/90 dark:bg-[#090A0C]/90 backdrop-blur-md border-b border-[#E8E8E8] dark:border-[#222429] py-3 shadow-[0_1px_3px_rgba(0,0,0,0.03)] dark:shadow-none'
          : 'bg-transparent py-4 sm:py-5 border-b border-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand & Identity */}
          <a
            href="#hero"
            className="group flex items-center gap-3 focus:outline-none rounded-md"
          >
            <div className="w-8 h-8 rounded-md bg-[#171717] dark:bg-[#EDEDED] text-white dark:text-[#171717] flex items-center justify-center font-mono font-semibold text-xs transition-transform group-hover:scale-105">
              MS
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-[#171717] dark:text-[#EDEDED] transition-colors">
                Muhammad Sarfaraz
              </span>
              <span className="font-mono text-[10px] tracking-wider text-[#4B5563] dark:text-[#A1A1AA] font-medium flex items-center gap-1.5">
                FULL STACK ENGINEER
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#F7F7F5] dark:bg-[#131418] border border-[#E8E8E8] dark:border-[#222429] rounded-full px-3 py-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1 text-xs font-medium rounded-full transition-all relative ${isActive
                    ? 'text-[#171717] dark:text-white'
                    : 'text-[#4B5563] dark:text-[#A1A1AA] hover:text-[#171717] dark:hover:text-white'
                    }`}
                >
                  {isActive && (
                    <div
                      className="absolute inset-0 bg-white dark:bg-[#202228] border border-[#E8E8E8] dark:border-[#2E3138] rounded-full shadow-sm transition-all duration-150"
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Action CTAs & Theme Toggle */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-lg border border-[#E8E8E8] dark:border-[#282B34] bg-[#F7F7F5] dark:bg-[#14151B] text-[#555555] dark:text-[#CCCCCC] hover:text-[#171717] dark:hover:text-white hover:border-[#D4D4D4] dark:hover:border-[#383C46] transition-all flex items-center justify-center"
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
              title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-neutral-200 transition-transform duration-300 hover:rotate-45" strokeWidth={1.8} />
              ) : (
                <Moon className="w-4 h-4 text-neutral-800 transition-transform duration-300 hover:-rotate-12" strokeWidth={1.8} />
              )}
            </button>

            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#171717] dark:text-[#EDEDED] bg-white dark:bg-[#131418] hover:bg-[#F7F7F5] dark:hover:bg-[#18191E] border border-[#E8E8E8] dark:border-[#222429] rounded-md transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-[#666666] dark:text-[#A1A1AA]" />
              <span>Resume</span>
            </button>

            <a
              href="#contact"
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-white bg-[#171717] hover:bg-[#262626] dark:bg-[#EDEDED] dark:text-[#090A0C] dark:hover:bg-white rounded-md transition-colors"
            >
              <span>Get in touch</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex sm:hidden items-center gap-1.5">
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-lg border border-[#E8E8E8] dark:border-[#282B34] bg-[#F7F7F5] dark:bg-[#14151B] text-[#555555] dark:text-[#CCCCCC]"
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-neutral-200" strokeWidth={1.8} />
              ) : (
                <Moon className="w-4 h-4 text-neutral-800" strokeWidth={1.8} />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-md text-[#4B5563] dark:text-[#A1A1AA] hover:text-[#171717] dark:hover:text-white bg-white dark:bg-[#131418] border border-[#E8E8E8] dark:border-[#222429]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-x-0 top-[60px] z-30 bg-[#FFFFFF] dark:bg-[#0E0F13] border-b border-[#E8E8E8] dark:border-[#222429] p-5 shadow-xl sm:hidden transition-all duration-150 ease-out"
        >
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2 text-sm font-medium text-[#4B5563] dark:text-[#A1A1AA] hover:text-[#171717] dark:hover:text-white hover:bg-[#F7F7F5] dark:hover:bg-[#14151A] rounded-md transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-[#E8E8E8] dark:border-[#222429] flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center gap-2 py-2 text-xs font-medium text-[#171717] dark:text-[#EDEDED] bg-[#F7F7F5] dark:bg-[#14151A] border border-[#E8E8E8] dark:border-[#222429] rounded-md"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>View Resume</span>
              </button>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2 text-xs font-medium text-white bg-[#171717] dark:bg-[#EDEDED] dark:text-[#090A0C] rounded-md"
              >
                <span>Get in touch</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
