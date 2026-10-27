import React from 'react';
import { ArrowUp, Terminal, Mail, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#252B36] bg-[#07090D] py-12 text-[#98A1AF] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Title */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div className="w-8 h-8 rounded-lg bg-[#11151C] border border-[#252B36] flex items-center justify-center text-indigo-400">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-[#F5F7FA] text-sm block">
                Muhammad Sarfaraz
              </span>
              <span className="font-mono text-[11px] text-indigo-400">
                MERN Stack Developer • Full-Stack Engineer
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={import.meta.env.VITE_GITHUB_URL || "https://github.com/themrsarii"}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#0C0F14] hover:bg-[#151B24] border border-[#252B36] text-[#98A1AF] hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={import.meta.env.VITE_LINKEDIN_URL || "https://www.linkedin.com/in/themrsarii/?isSelfProfile=true"}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#0C0F14] hover:bg-[#151B24] border border-[#252B36] text-[#98A1AF] hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL || "the.mrsarii@gmail.com"}`}
              className="p-2 rounded-lg bg-[#0C0F14] hover:bg-[#151B24] border border-[#252B36] text-[#98A1AF] hover:text-white transition-colors"
              aria-label="Email Contact"
            >
              <Mail className="w-4 h-4" />
            </a>
            {onOpenResume && (
              <button
                type="button"
                onClick={onOpenResume}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#0C0F14] hover:bg-[#151B24] border border-[#252B36] hover:border-indigo-500/50 text-[#98A1AF] hover:text-white transition-all text-xs font-medium"
                aria-label="View Resume"
                title="View & Download Resume (CV)"
              >
                <FileText className="w-3.5 h-3.5 text-indigo-400" />
                <span className="font-mono">CV</span>
              </button>
            )}
          </div>

          {/* Back to Top & Copyright */}
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] text-neutral-500">
              © 2026 Muhammad Sarfaraz
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-[#11151C] hover:bg-[#1A212E] border border-[#252B36] text-[#98A1AF] hover:text-white transition-colors"
              title="Back to Top"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
