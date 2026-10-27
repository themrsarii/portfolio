import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, ExternalLink, Database, 
  ArrowRight, CheckCircle2, AlertTriangle, ArrowUpRight
} from 'lucide-react';
import { GithubIcon } from './Icons';

export const CaseStudyModal = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;
  const cs = project.caseStudy;

  const tabs = [
    { id: 'overview', label: '01. Overview & Solution' },
    { id: 'architecture', label: '02. Architecture & Data Flow' },
    { id: 'database', label: '03. Database & REST API' },
    { id: 'engineering', label: '04. Challenges & Security' },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.35, bounce: 0.1 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-[#0C0F14] border border-[#252B36] rounded-2xl shadow-2xl flex flex-col z-10 overflow-hidden"
        >
          {/* Top Bar Header */}
          <div className="flex items-center justify-between p-5 sm:p-6 border-b border-[#252B36] bg-[#0F141C]">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-indigo-950/70 text-indigo-300 border border-indigo-500/30">
                  {project.category}
                </span>
                <span className="text-xs font-mono text-[#98A1AF]">{project.badge}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#F5F7FA] mt-1">
                {project.title} - Architectural Case Study
              </h2>
            </div>

            <div className="flex items-center gap-2">
              {!project.isPlaceholder && (
                <>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-[#151B24] border border-[#252B36] text-[#98A1AF] hover:text-white transition-colors"
                    title="View Source on GitHub"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-sm transition-colors"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </>
              )}
              <button
                onClick={onClose}
                className="p-2 rounded-lg bg-[#151B24] hover:bg-[#1C2430] border border-[#252B36] text-[#98A1AF] hover:text-white transition-colors ml-1"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Sub-Nav Tabs */}
          <div className="flex border-b border-[#252B36] bg-[#090C10] px-5 sm:px-6 overflow-x-auto gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-3 px-3 text-xs font-mono font-medium whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-indigo-500 text-white'
                    : 'border-transparent text-[#98A1AF] hover:text-neutral-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Scrollable Content Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
            
            {/* TAB 1: OVERVIEW & SOLUTION */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {cs.collaborators && (
                  <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-xl bg-[#11151C] border border-[#252B36] text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <span className="text-[#98A1AF]">
                        {cs.client ? 'Project Stakeholders:' : 'Startup Collaboration:'}
                      </span>
                      <span className="text-indigo-300 font-semibold">{cs.collaborators}</span>
                    </div>
                    {cs.productCategory && (
                      <span className="px-2 py-0.5 rounded text-[11px] bg-indigo-950/60 border border-indigo-500/30 text-indigo-300">
                        {cs.productCategory}
                      </span>
                    )}
                  </div>
                )}

                <div>
                  <h3 className="text-sm font-mono uppercase tracking-wider text-indigo-400 mb-2 font-semibold">
                    01. Project Overview
                  </h3>
                  <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                    {cs.overview}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-5 rounded-xl bg-[#11151C] border border-[#252B36]">
                    <div className="flex items-center gap-2 text-rose-400 font-mono text-xs uppercase mb-2 font-semibold">
                      <AlertTriangle className="w-4 h-4" /> The Problem
                    </div>
                    <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                      {cs.problem}
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-[#11151C] border border-indigo-500/30">
                    <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase mb-2 font-semibold">
                      <CheckCircle2 className="w-4 h-4" /> The Engineering Solution
                    </div>
                    <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                      {cs.solution}
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-mono uppercase tracking-wider text-indigo-400 mb-3 font-semibold">
                    Core Application Features
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {cs.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-[#11151C] border border-[#252B36]">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-2 shrink-0" />
                        <span className="text-xs sm:text-sm text-neutral-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: ARCHITECTURE FLOW */}
            {activeTab === 'architecture' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-mono uppercase tracking-wider text-indigo-400 mb-2 font-semibold">
                    05. System Architecture & Request Lifecycle
                  </h3>
                  <p className="text-neutral-300 text-sm leading-relaxed">
                    A decoupled client-server architecture built on the MERN stack with strict separation of concerns, transactional integrity, and stateless JWT session management.
                  </p>
                </div>

                {/* Architecture Visual Diagram */}
                <div className="p-5 rounded-xl bg-[#090C10] border border-[#252B36] font-mono">
                  <div className="text-[11px] text-[#98A1AF] mb-4 pb-2 border-b border-[#252B36]">
                    DATA FLOW DIAGRAM:
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center">
                    {/* Tier 1 */}
                    <div className="p-3 bg-[#11151C] border border-cyan-500/40 rounded-lg w-full md:w-auto flex-1">
                      <span className="block text-[10px] text-cyan-400 font-bold">CLIENT TIER</span>
                      <span className="font-semibold text-xs text-neutral-200">
                        {project.technologies.includes('Bootstrap 5') ? 'Bootstrap 5 UI' : project.technologies.includes('Desktop Shell') ? 'React POS Client' : 'React 19 SPA'}
                      </span>
                      <span className="block text-[10px] text-neutral-400 mt-1">
                        {project.technologies.includes('Bootstrap 5') ? 'AJAX & jQuery Handlers' : project.technologies.includes('Desktop Shell') ? 'Touch POS & Offline Dispatchers' : 'Virtual DOM & Hooks'}
                      </span>
                    </div>

                    <ArrowRight className="hidden md:block w-4 h-4 text-indigo-400 shrink-0" />

                    {/* Tier 2 */}
                    <div className="p-3 bg-[#11151C] border border-indigo-500/40 rounded-lg w-full md:w-auto flex-1">
                      <span className="block text-[10px] text-indigo-400 font-bold">API GATEWAY</span>
                      <span className="font-semibold text-xs text-neutral-200">
                        {project.technologies.includes('PHP') ? 'PHP Controllers' : 'RESTful Endpoints'}
                      </span>
                      <span className="block text-[10px] text-neutral-400 mt-1">JSON Payloads & AJAX</span>
                    </div>

                    <ArrowRight className="hidden md:block w-4 h-4 text-indigo-400 shrink-0" />

                    {/* Tier 3 */}
                    <div className="p-3 bg-[#11151C] border border-purple-500/40 rounded-lg w-full md:w-auto flex-1">
                      <span className="block text-[10px] text-purple-400 font-bold">SERVER & RUNTIME</span>
                      <span className="font-semibold text-xs text-neutral-200">
                        {project.technologies.includes('PHP') ? 'PHP 8 + Apache' : 'Express + Node.js'}
                      </span>
                      <span className="block text-[10px] text-neutral-400 mt-1">
                        {project.technologies.includes('Desktop Shell') ? 'Local Embedded Server' : 'Session & Business Logic'}
                      </span>
                    </div>

                    <ArrowRight className="hidden md:block w-4 h-4 text-indigo-400 shrink-0" />

                    {/* Tier 4 */}
                    <div className="p-3 bg-[#11151C] border border-emerald-500/40 rounded-lg w-full md:w-auto flex-1">
                      <span className="block text-[10px] text-emerald-400 font-bold">DATA STORE</span>
                      <span className="font-semibold text-xs text-neutral-200">
                        {project.technologies.includes('SQLite') ? 'SQLite Database' : project.technologies.includes('MySQL') ? 'MySQL Database' : 'MongoDB Database'}
                      </span>
                      <span className="block text-[10px] text-neutral-400 mt-1">
                        {project.technologies.includes('SQLite') ? 'Local Offline Relational DB' : project.technologies.includes('MySQL') ? 'Relational Foreign Keys' : 'Indexed Documents'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Tier Responsibilities Table */}
                <div className="space-y-3">
                  <h4 className="text-xs font-mono uppercase text-neutral-400">Component Responsibilities</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {cs.architecture.map((item, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-[#11151C] border border-[#252B36]">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-bold text-indigo-300">{item.tier}</span>
                          <span className="text-[10px] font-mono text-neutral-400 bg-[#0C0F14] px-2 py-0.5 rounded border border-[#252B36]">
                            {item.tech}
                          </span>
                        </div>
                        <p className="text-xs text-neutral-300 mt-2 leading-relaxed">
                          {item.role}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: DATABASE & REST API */}
            {activeTab === 'database' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-mono uppercase tracking-wider text-indigo-400 mb-2 font-semibold">
                    06. Database Schema Design {project.technologies.includes('SQLite') ? '(SQLite Local Relational Database)' : project.technologies.includes('MySQL') ? '(MySQL Relational Tables)' : '(MongoDB Collections)'}
                  </h3>
                  <p className="text-neutral-300 text-sm mb-3">
                    {project.technologies.includes('SQLite')
                      ? 'Local SQLite database file (retailspoint.sqlite) organized with relational table schemas, foreign key integrity, and ACID transaction safety for offline-first desktop reliability.'
                      : project.technologies.includes('MySQL')
                      ? 'Relational MySQL tables normalized with foreign key constraints, composite unique indexes, and indexed query paths for sub-15ms social graph queries.'
                      : 'Mongoose schemas normalized with foreign key references and compound indexes to balance write performance and query speed.'}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {cs.databaseSchema.map((col, idx) => (
                      <div key={idx} className="p-3.5 rounded-lg bg-[#11151C] border border-[#252B36]">
                        <div className="flex items-center gap-2 mb-1.5">
                          <Database className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-xs font-bold text-neutral-200">{col.collection}</span>
                        </div>
                        <div className="font-mono text-[11px] text-neutral-400 bg-[#090C10] p-2 rounded border border-[#252B36]/60 break-words">
                          {col.fields}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-mono uppercase tracking-wider text-indigo-400 mb-2 font-semibold">
                    07. RESTful API Contract
                  </h3>
                  <div className="border border-[#252B36] rounded-xl overflow-hidden bg-[#090C10]">
                    <table className="w-full text-left text-xs font-mono">
                      <thead className="bg-[#11151C] border-b border-[#252B36] text-[#98A1AF] text-[11px]">
                        <tr>
                          <th className="p-3">Method</th>
                          <th className="p-3">Endpoint</th>
                          <th className="p-3">Description & Payload</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#252B36]/60 text-neutral-300">
                        {cs.apiEndpoints.map((ep, idx) => (
                          <tr key={idx} className="hover:bg-white/[0.02]">
                            <td className="p-3">
                              <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                ep.method === 'GET' ? 'bg-blue-950/60 text-blue-300 border border-blue-500/30' :
                                ep.method === 'POST' ? 'bg-emerald-950/60 text-emerald-300 border border-emerald-500/30' :
                                'bg-amber-950/60 text-amber-300 border border-amber-500/30'
                              }`}>
                                {ep.method}
                              </span>
                            </td>
                            <td className="p-3 text-indigo-300 font-semibold">{ep.path}</td>
                            <td className="p-3 text-neutral-400 font-sans">{ep.desc}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: CHALLENGES & SECURITY */}
            {activeTab === 'engineering' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-mono uppercase tracking-wider text-indigo-400 mb-2 font-semibold">
                    08. Authentication & Security Hardening
                  </h3>
                  <div className="p-4 rounded-xl bg-[#11151C] border border-[#252B36] text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    <p>{cs.security}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-5 rounded-xl bg-[#11151C] border border-amber-500/30">
                    <span className="text-xs font-mono uppercase text-amber-400 font-semibold block mb-2">
                      09. Key Technical Challenge
                    </span>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      {cs.challenges}
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-[#11151C] border border-emerald-500/30">
                    <span className="text-xs font-mono uppercase text-emerald-400 font-semibold block mb-2">
                      10. Engineering Solution Applied
                    </span>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      {cs.solutionApplied}
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-mono uppercase tracking-wider text-indigo-400 mb-3 font-semibold">
                    12. Future Architectural Improvements
                  </h3>
                  <ul className="space-y-2">
                    {cs.futureImprovements.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-300 p-2.5 rounded-lg bg-[#11151C] border border-[#252B36]">
                        <ArrowUpRight className="w-4 h-4 text-indigo-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

          </div>

          {/* Footer Bar */}
          <div className="p-4 sm:p-5 border-t border-[#252B36] bg-[#0F141C] flex items-center justify-between">
            <span className="text-xs font-mono text-[#98A1AF]">
              Muhammad Sarfaraz • Production Quality Architecture
            </span>
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-neutral-200 bg-[#151B24] hover:bg-[#1C2430] border border-[#252B36] rounded-lg transition-colors"
            >
              Close Case Study
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
