import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Download, ExternalLink, FileText, Check, Copy, 
  Eye, ListFilter, Sparkles
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
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', duration: 0.35, bounce: 0.1 }}
          className="relative w-full max-w-5xl h-[96vh] sm:h-[90vh] bg-[#0C0F14] border border-[#252B36] rounded-2xl shadow-2xl flex flex-col z-10 overflow-hidden"
        >
          {/* Header Bar */}
          <div className="p-3 sm:p-4 border-b border-[#252B36] bg-[#0F141C] flex flex-wrap items-center justify-between gap-3 shrink-0">
            {/* Left: Identity & Tabs */}
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-xs sm:text-sm text-[#F5F7FA] leading-tight">
                    Muhammad Sarfaraz
                  </h3>
                  <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    PDF Document
                  </span>
                </div>
                <p className="text-[11px] font-mono text-[#98A1AF] hidden sm:block">
                  MERN Stack Developer • Curriculum Vitae
                </p>
              </div>

              {/* View Toggle Tabs */}
              <div className="flex items-center p-0.5 rounded-lg bg-[#07090D] border border-[#252B36] ml-1 sm:ml-4 text-xs font-mono">
                <button
                  onClick={() => setActiveTab('pdf')}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-all ${
                    activeTab === 'pdf'
                      ? 'bg-indigo-600 text-white shadow-sm font-semibold'
                      : 'text-[#98A1AF] hover:text-[#F5F7FA]'
                  }`}
                  title="Native Canvas PDF Preview"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>PDF View</span>
                </button>
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md transition-all ${
                    activeTab === 'overview'
                      ? 'bg-indigo-600 text-white shadow-sm font-semibold'
                      : 'text-[#98A1AF] hover:text-[#F5F7FA]'
                  }`}
                  title="View Text Overview"
                >
                  <ListFilter className="w-3.5 h-3.5" />
                  <span>Overview</span>
                </button>
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-2 ml-auto">
              {/* Direct Download Button */}
              <a
                href={resumeUrl}
                download={resumeFileName}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-md shadow-indigo-600/30 transition-all hover:scale-[1.02]"
                title="Download PDF directly to your device"
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden xs:inline">Download</span>
                <span>CV</span>
              </a>

              {/* Open in New Tab */}
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#151B24] hover:bg-[#1F2736] border border-[#252B36] text-xs font-medium text-[#98A1AF] hover:text-white transition-colors"
                title="Open raw PDF file in new browser window"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span className="hidden lg:inline">Fullscreen</span>
              </a>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-[#151B24] hover:bg-[#1F2736] border border-[#252B36] text-[#98A1AF] hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Mobile Quick Action Banner */}
          <div className="sm:hidden px-3 py-2 bg-[#090C10] border-b border-[#252B36] flex items-center justify-between text-[11px] font-mono">
            <span className="text-[#98A1AF] flex items-center gap-1 truncate mr-2">
              <Sparkles className="w-3 h-3 text-indigo-400 shrink-0" />
              Resume.pdf
            </span>
            <div className="flex items-center gap-3 shrink-0">
              <a
                href={resumeUrl}
                download={resumeFileName}
                className="text-indigo-400 font-semibold underline underline-offset-2 flex items-center gap-1"
              >
                <Download className="w-3 h-3" /> Download
              </a>
              <span className="text-[#252B36]">|</span>
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#98A1AF] hover:text-white flex items-center gap-1"
              >
                <ExternalLink className="w-3 h-3" /> Fullscreen
              </a>
            </div>
          </div>

          {/* Body Content Area */}
          <div className="flex-1 overflow-hidden relative bg-[#07090D]">
            {activeTab === 'pdf' ? (
              /* TAB 1: High-Performance Native PDF Viewer */
              <div className="w-full h-full p-2 sm:p-4 bg-[#090C10] flex flex-col items-center justify-center">
                <object
                  data={`${resumeUrl}#view=FitH`}
                  type="application/pdf"
                  className="w-full h-full rounded-xl bg-white shadow-2xl border border-[#252B36]"
                >
                  <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-4 bg-[#0C0F14] rounded-xl border border-[#252B36]">
                    <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                      <FileText className="w-7 h-7" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-base font-bold text-white">Muhammad Sarfaraz CV</h4>
                      <p className="text-xs text-[#98A1AF] max-w-sm">
                        You can download the PDF directly, open it in fullscreen, or view the complete structured overview.
                      </p>
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                      <a
                        href={resumeUrl}
                        download={resumeFileName}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-md transition-all hover:scale-[1.02]"
                      >
                        <Download className="w-4 h-4" />
                        <span>Download Resume (PDF)</span>
                      </a>
                      <a
                        href={resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#151B24] hover:bg-[#1F2736] border border-[#252B36] text-white text-xs font-medium transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Open in Fullscreen</span>
                      </a>
                      <button
                        onClick={() => setActiveTab('overview')}
                        className="px-5 py-2.5 rounded-xl bg-[#0F141C] border border-[#252B36] text-indigo-400 text-xs font-medium hover:bg-[#151B24] transition-colors"
                      >
                        <span>View Text Overview</span>
                      </button>
                    </div>
                  </div>
                </object>
              </div>
            ) : (
              /* TAB 2: Clean Structured Overview (Responsive HTML Version) */
              <div className="h-full overflow-y-auto p-4 sm:p-8 md:p-10 space-y-8 text-neutral-300 text-xs sm:text-sm leading-relaxed">
                {/* Resume Header */}
                <div className="border-b border-[#252B36] pb-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h1 className="text-2xl sm:text-3xl font-extrabold text-[#F5F7FA]">Muhammad Sarfaraz</h1>
                      <p className="text-sm sm:text-base font-semibold text-indigo-400 font-mono mt-1">
                        MERN Stack Developer • Full-Stack JavaScript Engineer
                      </p>
                    </div>
                    <div className="flex flex-col text-xs font-mono text-[#98A1AF] space-y-1.5">
                      <span className="flex items-center gap-2 text-indigo-300">
                        {emailAddress}
                      </span>
                      <span>github.com/themrsarii</span>
                      <span>linkedin.com/in/themrsarii</span>
                      <span className="text-neutral-400">Pakistan (Open to Global Remote & Relocation)</span>
                    </div>
                  </div>
                </div>

                {/* Executive Summary */}
                <div>
                  <h2 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold mb-2">
                    Executive Profile
                  </h2>
                  <p className="text-neutral-300 leading-relaxed bg-[#0C0F14] p-4 rounded-xl border border-[#252B36]">
                    Full-stack software engineer with deep specialization in the MERN stack (MongoDB, Express.js, React.js, Node.js). Experienced in designing responsive single-page applications, architecting resilient RESTful APIs, modeling transactional document databases, and implementing production security standards (JWT, bcrypt, rate-limiting, CORS). Committed to clean code, modular software architecture, and product-focused delivery.
                  </p>
                </div>

                {/* Core Competencies Matrix */}
                <div>
                  <h2 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold mb-3">
                    Technical Stack & Capabilities
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="p-3.5 rounded-xl bg-[#0C0F14] border border-[#252B36]">
                      <span className="font-bold text-[#F5F7FA] block mb-1">Primary Stack:</span>
                      <span className="font-mono text-indigo-300">MongoDB, Express.js, React.js, Node.js</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#0C0F14] border border-[#252B36]">
                      <span className="font-bold text-[#F5F7FA] block mb-1">Frontend Engineering:</span>
                      <span className="font-mono text-cyan-300">JavaScript ES6+, TypeScript, Tailwind CSS, HTML5, CSS3, Bootstrap</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#0C0F14] border border-[#252B36]">
                      <span className="font-bold text-[#F5F7FA] block mb-1">Backend & Security:</span>
                      <span className="font-mono text-emerald-300">REST APIs, JWT, Middleware, HTTP-Only Cookies, RBAC</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-[#0C0F14] border border-[#252B36]">
                      <span className="font-bold text-[#F5F7FA] block mb-1">Tools & Foundational:</span>
                      <span className="font-mono text-amber-300">Git, GitHub, Postman, VS Code, PHP, MySQL, SQLite</span>
                    </div>
                  </div>
                </div>

                {/* Professional Experience */}
                <div>
                  <h2 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold mb-3">
                    Professional Experience
                  </h2>
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-[#0C0F14] border border-[#252B36]">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1 gap-1">
                        <div>
                          <h3 className="font-bold text-sm text-[#F5F7FA]">MERN Stack Developer & Full-Stack Builder</h3>
                          <span className="text-xs text-[#98A1AF] font-mono">Independent Software Projects • Remote / Pakistan</span>
                        </div>
                        <span className="text-[11px] font-mono text-indigo-400">2024 - Present</span>
                      </div>
                      <ul className="space-y-1.5 mt-2.5 text-xs text-neutral-300">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                          <span>Architected and deployed full-stack SaaS applications using React, Node.js, Express, and MongoDB.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                          <span>Designed RESTful API endpoints with JWT authentication, RBAC authorization, and input validation schemas.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                          <span>Integrated AI capabilities via OpenAI APIs to deliver streaming co-pilot assistants and semantic search features.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                          <span>Engineered responsive, accessible frontends using Tailwind CSS with a strong focus on Core Web Vitals.</span>
                        </li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl bg-[#0C0F14] border border-[#252B36]">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1 gap-1">
                        <div>
                          <h3 className="font-bold text-sm text-[#F5F7FA]">Full-Stack Developer - Retailspoint POS</h3>
                          <span className="text-xs text-[#98A1AF] font-mono">Retailspoint • Restaurant Management SaaS</span>
                        </div>
                        <span className="text-[11px] font-mono text-indigo-400">2025 - Present</span>
                      </div>
                      <ul className="space-y-1.5 mt-2.5 text-xs text-neutral-300">
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                          <span>Contributing to the development of a restaurant POS system focused on order processing, billing, inventory, and sales reporting.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                          <span>Building workflows for dine-in and takeaway orders, kitchen order tickets (KOT), and restaurant operations.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                          <span>Working on dashboard features for tracking pending orders, completed orders, running orders, and daily sales.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                          <span>Collaborating on product development, UI implementation, database integration, and software functionality.</span>
                        </li>
                      </ul>
                      <div className="mt-3 pt-2.5 border-t border-[#252B36]/50 flex flex-wrap gap-1.5">
                        {["Restaurant POS", "Order Management", "Inventory", "Sales Analytics", "Full-Stack Development"].map((m, idx) => (
                          <span key={idx} className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#11151C] border border-[#252B36] text-neutral-300">
                            {m}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Production Projects */}
                <div>
                  <h2 className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold mb-3">
                    Key Production Projects
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-[#0C0F14] border border-[#252B36]">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1 gap-1">
                        <h3 className="font-bold text-sm text-[#F5F7FA]">Retailspoint - Restaurant POS System</h3>
                        <span className="text-[11px] font-mono text-indigo-400">Production POS (React + Node + SQLite)</span>
                      </div>
                      <p className="text-xs text-neutral-300 mt-1">
                        Developed collaboratively with Hasan Tariq. Engineered a production restaurant POS with multi-channel order workflows, KOT kitchen dispatch, table management, inventory tracking, shift reconciliation, and offline-first local SQLite operations.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#0C0F14] border border-[#252B36]">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1 gap-1">
                        <h3 className="font-bold text-sm text-[#F5F7FA]">Social Networking Platform</h3>
                        <span className="text-[11px] font-mono text-indigo-400">Full-Stack Social Platform (PHP + MySQL)</span>
                      </div>
                      <p className="text-xs text-neutral-300 mt-1">
                        Engineered a database-driven social platform featuring dynamic AJAX interactions, session authentication, media posts, reactions, comments, friendships, and notifications.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#0C0F14] border border-[#252B36]">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1 gap-1">
                        <h3 className="font-bold text-sm text-[#F5F7FA]">Bilal Shahpur Foods</h3>
                        <span className="text-[11px] font-mono text-indigo-400">Full-Stack Business Platform (MERN)</span>
                      </div>
                      <p className="text-xs text-neutral-300 mt-1">
                        Architected an Urdu-first digital platform for traditional dairy products featuring interactive product catalogs, commercial deep freezer retailer onboarding, and administrative dispatch APIs.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#0C0F14] border border-[#252B36]">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1 gap-1">
                        <h3 className="font-bold text-sm text-[#F5F7FA]">PrimeLinks - Business Website</h3>
                        <span className="text-[11px] font-mono text-indigo-400">Client Website (React + Tailwind CSS)</span>
                      </div>
                      <p className="text-xs text-neutral-300 mt-1">
                        Developed for client Nasir. Created a professional business website establishing a strong digital presence with modern UI/UX design, service showcases, and responsive client inquiry touchpoints.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 text-center">
                  <button
                    onClick={() => setActiveTab('pdf')}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#11151C] border border-indigo-500/30 text-indigo-300 text-xs font-mono hover:bg-[#181F2B] transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Switch to PDF Preview</span>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Modal Bottom Bar */}
          <div className="p-3 sm:p-4 border-t border-[#252B36] bg-[#0F141C] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0 text-xs">
            {/* Direct Contact Email */}
            <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start">
              <span className="font-mono text-[#98A1AF] text-[11px] sm:text-xs">
                Email: <span className="text-neutral-200">{emailAddress}</span>
              </span>
              <button
                onClick={handleCopyEmail}
                className="p-1.5 rounded-md bg-[#151B24] hover:bg-[#1F2736] border border-[#252B36] text-[#98A1AF] hover:text-white transition-colors"
                title="Copy email to clipboard"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#151B24] hover:bg-[#1F2736] border border-[#252B36] text-neutral-200 text-xs font-semibold transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 text-indigo-400" />
                <span>New Tab</span>
              </a>

              <a
                href={resumeUrl}
                download={resumeFileName}
                className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs shadow-md shadow-indigo-600/30 transition-all hover:scale-[1.02]"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
