import React, { useState, useEffect } from 'react';
import { 
  X, Download, ExternalLink, FileText, Check, Copy, 
  Eye, ListFilter
} from 'lucide-react';

export const ResumeModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('pdf'); // 'pdf' | 'overview'
  const [copiedEmail, setCopiedEmail] = useState(false);

  const emailAddress = import.meta.env.VITE_CONTACT_EMAIL || 'the.mrsarii@gmail.com';
  const resumeUrl = '/Resume.pdf';
  const resumeFileName = 'Muhammad_Sarfaraz_Resume.pdf';

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      />

      {/* Modal Window */}
      <div
        className="relative w-full max-w-5xl h-[96vh] sm:h-[90vh] bg-white dark:bg-[#111216] border border-[#E8E8E8] dark:border-[#222429] rounded-2xl shadow-2xl flex flex-col z-10 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
      >
          {/* Header Bar */}
          <div className="p-3 sm:p-4 border-b border-[#E8E8E8] dark:border-[#222429] bg-[#F7F7F5] dark:bg-[#14151B] flex flex-wrap items-center justify-between gap-3 shrink-0">
            {/* Left: Identity & Tabs */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 rounded-md bg-white dark:bg-[#181920] border border-[#E8E8E8] dark:border-[#282B34] flex items-center justify-center text-[#171717] dark:text-[#EDEDED] shrink-0">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-xs sm:text-sm text-[#171717] dark:text-[#EDEDED] leading-tight">
                    Muhammad Sarfaraz
                  </h3>
                  <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-white dark:bg-[#1E2028] text-[#171717] dark:text-[#EDEDED] border border-[#E8E8E8] dark:border-[#2A2E38]">
                    Curriculum Vitae
                  </span>
                </div>
                <p className="text-[11px] font-mono text-[#666666] dark:text-[#595959] dark:text-[#A1A1AA] hidden sm:block">
                  Full Stack Engineer · MERN Architecture
                </p>
              </div>

              {/* View Toggle Tabs */}
              <div className="flex items-center p-0.5 rounded-md bg-white dark:bg-[#0D0E11] border border-[#E8E8E8] dark:border-[#222429] ml-1 sm:ml-4 text-xs font-mono">
                <button
                  onClick={() => setActiveTab('pdf')}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded transition-colors ${
                    activeTab === 'pdf'
                      ? 'bg-[#171717] dark:bg-[#EDEDED] text-white dark:text-[#090A0C] font-semibold'
                      : 'text-[#666666] dark:text-[#A1A1AA] hover:text-[#171717] dark:hover:text-white'
                  }`}
                  title="PDF Preview"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>PDF View</span>
                </button>
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded transition-colors ${
                    activeTab === 'overview'
                      ? 'bg-[#171717] dark:bg-[#EDEDED] text-white dark:text-[#090A0C] font-semibold'
                      : 'text-[#666666] dark:text-[#A1A1AA] hover:text-[#171717] dark:hover:text-white'
                  }`}
                  title="Text Overview"
                >
                  <ListFilter className="w-3.5 h-3.5" />
                  <span>Overview</span>
                </button>
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-2 ml-auto">
              <a
                href={resumeUrl}
                download={resumeFileName}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#171717] hover:bg-[#262626] dark:bg-[#EDEDED] dark:text-[#090A0C] dark:hover:bg-white text-white font-medium text-xs transition-colors"
                title="Download PDF"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden xs:inline">Download</span>
                <span>CV</span>
              </a>

              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-white dark:bg-[#181920] border border-[#E8E8E8] dark:border-[#282B34] text-xs font-medium text-[#666666] dark:text-[#A1A1AA] hover:text-[#171717] dark:hover:text-white transition-colors"
                title="Fullscreen PDF"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span className="hidden lg:inline">Fullscreen</span>
              </a>

              <button
                onClick={onClose}
                className="p-1.5 rounded-md bg-white dark:bg-[#181920] hover:bg-[#EAEAEA] dark:hover:bg-[#202228] border border-[#E8E8E8] dark:border-[#282B34] text-[#666666] dark:text-[#A1A1AA] hover:text-[#171717] dark:hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Body Content Area */}
          <div className="flex-1 overflow-hidden relative bg-[#F7F7F5] dark:bg-[#0A0B0E]">
            {activeTab === 'pdf' ? (
              <div className="w-full h-full p-2 sm:p-4 flex flex-col items-center justify-center">
                <object
                  data={`${resumeUrl}#view=FitH`}
                  type="application/pdf"
                  className="w-full h-full rounded-xl bg-white shadow-sm border border-[#E8E8E8] dark:border-[#222429]"
                >
                  <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-4 bg-white dark:bg-[#111216] rounded-xl border border-[#E8E8E8] dark:border-[#222429]">
                    <div className="w-12 h-12 rounded-xl bg-[#F7F7F5] dark:bg-[#181920] flex items-center justify-center text-[#171717] dark:text-[#EDEDED]">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-[#171717] dark:text-[#EDEDED]">Muhammad Sarfaraz CV</h4>
                      <p className="text-xs text-[#666666] dark:text-[#A1A1AA] max-w-sm mt-1">
                        Download the PDF directly or switch to the structured text overview.
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                      <a
                        href={resumeUrl}
                        download={resumeFileName}
                        className="flex items-center gap-2 px-4 py-2 rounded-md bg-[#171717] hover:bg-[#262626] dark:bg-[#EDEDED] dark:text-[#090A0C] dark:hover:bg-white text-white font-medium text-xs transition-colors"
                      >
                        <Download className="w-4 h-4" />
                        <span>Download Resume (PDF)</span>
                      </a>
                      <button
                        onClick={() => setActiveTab('overview')}
                        className="px-4 py-2 rounded-md bg-[#F7F7F5] dark:bg-[#181920] border border-[#E8E8E8] dark:border-[#282B34] text-[#171717] dark:text-[#EDEDED] text-xs font-medium transition-colors"
                      >
                        <span>View Text Overview</span>
                      </button>
                    </div>
                  </div>
                </object>
              </div>
            ) : (
              <div className="h-full overflow-y-auto p-4 sm:p-8 md:p-10 space-y-8 bg-white dark:bg-[#111216] text-[#666666] dark:text-[#A1A1AA] text-xs sm:text-sm leading-relaxed">
                {/* Header */}
                <div className="border-b border-[#E8E8E8] dark:border-[#222429] pb-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h1 className="text-2xl sm:text-3xl font-bold text-[#171717] dark:text-[#EDEDED]">Muhammad Sarfaraz</h1>
                      <p className="text-sm sm:text-base font-medium text-indigo-600 dark:text-indigo-400 font-mono mt-1">
                        Full Stack Engineer · MERN Architecture
                      </p>
                    </div>
                    <div className="flex flex-col text-xs font-mono text-[#666666] dark:text-[#A1A1AA] space-y-1">
                      <span className="text-[#171717] dark:text-[#EDEDED]">{emailAddress}</span>
                      <span>github.com/themrsarii</span>
                      <span>linkedin.com/in/themrsarii</span>
                      <span>Pakistan (Open to Remote Worldwide)</span>
                    </div>
                  </div>
                </div>

                {/* Profile */}
                <div>
                  <h2 className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-bold mb-2">
                    Professional Profile
                  </h2>
                  <p className="text-[#666666] dark:text-[#A1A1AA] leading-relaxed bg-[#F7F7F5] dark:bg-[#16171E] p-4 rounded-xl border border-[#E8E8E8] dark:border-[#262830]">
                    Full-stack software engineer with deep specialization in the MERN stack (MongoDB, Express.js, React.js, Node.js). Experienced in designing responsive single-page applications, architecting resilient RESTful APIs, modeling transactional document databases, and implementing production security standards (JWT, bcrypt, rate-limiting, CORS). Committed to clean code, modular software architecture, and product-focused delivery.
                  </p>
                </div>

                {/* Capabilities */}
                <div>
                  <h2 className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-bold mb-3">
                    Technical Stack & Capabilities
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3.5 rounded-xl bg-[#F7F7F5] dark:bg-[#16171E] border border-[#E8E8E8] dark:border-[#262830]">
                      <span className="font-bold text-[#171717] dark:text-[#EDEDED] block mb-1">Primary Stack:</span>
                      <span className="font-mono text-[#666666] dark:text-[#A1A1AA]">MongoDB, Express.js, React.js, Node.js</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#F7F7F5] dark:bg-[#16171E] border border-[#E8E8E8] dark:border-[#262830]">
                      <span className="font-bold text-[#171717] dark:text-[#EDEDED] block mb-1">Frontend Engineering:</span>
                      <span className="font-mono text-[#666666] dark:text-[#A1A1AA]">JavaScript ES6+, TypeScript, Tailwind CSS, HTML5, CSS3, Bootstrap</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#F7F7F5] dark:bg-[#16171E] border border-[#E8E8E8] dark:border-[#262830]">
                      <span className="font-bold text-[#171717] dark:text-[#EDEDED] block mb-1">Backend & Security:</span>
                      <span className="font-mono text-[#666666] dark:text-[#A1A1AA]">REST APIs, JWT, Middleware, HTTP-Only Cookies, RBAC</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#F7F7F5] dark:bg-[#16171E] border border-[#E8E8E8] dark:border-[#262830]">
                      <span className="font-bold text-[#171717] dark:text-[#EDEDED] block mb-1">Tools & Persistence:</span>
                      <span className="font-mono text-[#666666] dark:text-[#A1A1AA]">Git, GitHub, Postman, VS Code, SQLite, MySQL, PHP</span>
                    </div>
                  </div>
                </div>

                {/* Experience */}
                <div>
                  <h2 className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-bold mb-3">
                    Professional Experience
                  </h2>
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-[#F7F7F5] dark:bg-[#16171E] border border-[#E8E8E8] dark:border-[#262830]">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1 gap-1">
                        <div>
                          <h3 className="font-bold text-sm text-[#171717] dark:text-[#EDEDED]">MERN Stack Developer</h3>
                          <span className="text-xs text-[#666666] dark:text-[#A1A1AA] font-mono">Independent Software Projects • Remote / Pakistan</span>
                        </div>
                        <span className="text-[11px] font-mono text-indigo-600 dark:text-indigo-400">2024 to Present</span>
                      </div>
                      <ul className="space-y-1.5 mt-2.5 text-xs text-[#666666] dark:text-[#A1A1AA]">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 mt-1.5 shrink-0" />
                          <span>Built and deployed full-stack web applications using React, Node.js, Express, and MongoDB.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 mt-1.5 shrink-0" />
                          <span>Designed RESTful API endpoints with JWT authentication, RBAC authorization, and input validation schemas.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 mt-1.5 shrink-0" />
                          <span>Engineered responsive, accessible frontends using Tailwind CSS with a strong focus on Core Web Vitals.</span>
                        </li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl bg-[#F7F7F5] dark:bg-[#16171E] border border-[#E8E8E8] dark:border-[#262830]">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1 gap-1">
                        <div>
                          <h3 className="font-bold text-sm text-[#171717] dark:text-[#EDEDED]">Full-Stack Developer (Retailspoint POS)</h3>
                          <span className="text-xs text-[#666666] dark:text-[#A1A1AA] font-mono">Retailspoint • Restaurant Management SaaS</span>
                        </div>
                        <span className="text-[11px] font-mono text-indigo-600 dark:text-indigo-400">2025 to Present</span>
                      </div>
                      <ul className="space-y-1.5 mt-2.5 text-xs text-[#666666] dark:text-[#A1A1AA]">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 mt-1.5 shrink-0" />
                          <span>Contributing to the development of a restaurant POS system focused on order processing, billing, inventory, and sales reporting.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 mt-1.5 shrink-0" />
                          <span>Building workflows for dine-in and takeaway orders, kitchen order tickets (KOT), and restaurant operations.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 mt-1.5 shrink-0" />
                          <span>Working on dashboard features for tracking pending orders, completed orders, running orders, and daily sales.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="pt-2 text-center">
                  <button
                    onClick={() => setActiveTab('pdf')}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-[#171717] dark:bg-[#EDEDED] text-white dark:text-[#090A0C] text-xs font-mono transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Switch to PDF Preview</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Footer Bar */}
          <div className="p-3 sm:p-4 border-t border-[#E8E8E8] dark:border-[#222429] bg-[#F7F7F5] dark:bg-[#14151B] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0 text-xs">
            <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start">
              <span className="font-mono text-[#595959] dark:text-[#A1A1AA] text-[11px] sm:text-xs">
                Email: <span className="text-[#171717] dark:text-[#EDEDED]">{emailAddress}</span>
              </span>
              <button
                onClick={handleCopyEmail}
                className="p-1.5 rounded-md bg-white dark:bg-[#181920] border border-[#E8E8E8] dark:border-[#282B34] text-[#666666] dark:text-[#A1A1AA] hover:text-[#171717] dark:hover:text-white transition-colors"
                title="Copy email to clipboard"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
              <a
                href={resumeUrl}
                download={resumeFileName}
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2 rounded-md bg-[#171717] hover:bg-[#262626] dark:bg-[#EDEDED] dark:text-[#090A0C] dark:hover:bg-white text-white font-medium text-xs transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
