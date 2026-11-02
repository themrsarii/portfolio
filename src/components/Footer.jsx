import React from 'react';
import { ArrowUp, Mail, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#E8E8E8] dark:border-[#222429] bg-white dark:bg-[#090A0C] py-10 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Identity */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <div className="w-7 h-7 rounded-md bg-[#171717] dark:bg-[#EDEDED] text-white dark:text-[#171717] flex items-center justify-center font-mono font-bold text-xs">
              MS
            </div>
            <div>
              <span className="font-semibold text-[#171717] dark:text-[#EDEDED] text-sm block">
                Muhammad Sarfaraz
              </span>
              <span className="font-mono text-[11px] text-[#666666] dark:text-[#595959] dark:text-[#A1A1AA]">
                Full Stack Engineer · MERN Architecture
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            <a
              href={import.meta.env.VITE_GITHUB_URL || "https://github.com/themrsarii"}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md bg-[#F7F7F5] dark:bg-[#131418] hover:bg-[#EAEAEA] dark:hover:bg-[#1A1B22] border border-[#E8E8E8] dark:border-[#222429] text-[#666666] dark:text-[#A1A1AA] hover:text-[#171717] dark:hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={import.meta.env.VITE_LINKEDIN_URL || "https://www.linkedin.com/in/themrsarii/?isSelfProfile=true"}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md bg-[#F7F7F5] dark:bg-[#131418] hover:bg-[#EAEAEA] dark:hover:bg-[#1A1B22] border border-[#E8E8E8] dark:border-[#222429] text-[#666666] dark:text-[#A1A1AA] hover:text-[#171717] dark:hover:text-white transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL || "the.mrsarii@gmail.com"}`}
              className="p-2 rounded-md bg-[#F7F7F5] dark:bg-[#131418] hover:bg-[#EAEAEA] dark:hover:bg-[#1A1B22] border border-[#E8E8E8] dark:border-[#222429] text-[#666666] dark:text-[#A1A1AA] hover:text-[#171717] dark:hover:text-white transition-colors"
              aria-label="Email Contact"
            >
              <Mail className="w-4 h-4" />
            </a>
            {onOpenResume && (
              <button
                type="button"
                onClick={onOpenResume}
                className="flex items-center gap-1.5 px-3 py-2 rounded-md bg-[#F7F7F5] dark:bg-[#131418] hover:bg-[#EAEAEA] dark:hover:bg-[#1A1B22] border border-[#E8E8E8] dark:border-[#222429] text-[#666666] dark:text-[#A1A1AA] hover:text-[#171717] dark:hover:text-white transition-colors text-xs font-medium"
                aria-label="View Resume"
              >
                <FileText className="w-3.5 h-3.5" />
                <span className="font-mono">CV</span>
              </button>
            )}
          </div>

          {/* Copyright & Scroll to Top */}
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] text-[#595959] dark:text-[#A1A1AA]">
              © {new Date().getFullYear()} Muhammad Sarfaraz
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-md bg-[#F7F7F5] dark:bg-[#131418] hover:bg-[#EAEAEA] dark:hover:bg-[#1A1B22] border border-[#E8E8E8] dark:border-[#222429] text-[#666666] dark:text-[#A1A1AA] hover:text-[#171717] dark:hover:text-white transition-colors"
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

export default Footer;
