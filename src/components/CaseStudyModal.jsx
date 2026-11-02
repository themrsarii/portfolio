import React, { useEffect, useState } from 'react';
import { 
  X, ExternalLink, Database, 
  CheckCircle2, AlertTriangle, ArrowUpRight
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
    { id: 'overview', label: 'Overview & Solution' },
    { id: 'architecture', label: 'Architecture & Data Flow' },
    { id: 'database', label: 'Database & API' },
    { id: 'engineering', label: 'Challenges & Security' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
      />

      {/* Modal Window */}
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-[#111216] border border-[#E8E8E8] dark:border-[#222429] rounded-2xl shadow-2xl flex flex-col z-10 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
      >
          {/* Top Bar Header */}
          <div className="flex items-center justify-between p-5 sm:p-6 border-b border-[#E8E8E8] dark:border-[#222429] bg-[#F7F7F5] dark:bg-[#14151B]">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white dark:bg-[#1E2028] text-[#171717] dark:text-[#EDEDED] border border-[#E8E8E8] dark:border-[#2A2E38]">
                  {project.category}
                </span>
                <span className="text-xs font-mono text-[#595959] dark:text-[#A1A1AA]">{project.badge}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[#171717] dark:text-[#EDEDED] mt-1">
                {project.title}
              </h2>
            </div>

            <div className="flex items-center gap-2">
              {!project.isPlaceholder && (
                <>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-md bg-white dark:bg-[#181920] border border-[#E8E8E8] dark:border-[#282B34] text-[#666666] dark:text-[#A1A1AA] hover:text-[#171717] dark:hover:text-white transition-colors"
                      title="View Source on GitHub"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#171717] hover:bg-[#262626] dark:bg-[#EDEDED] dark:text-[#090A0C] dark:hover:bg-white text-white text-xs font-medium transition-colors"
                    >
                      <span>Live Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </>
              )}
              <button
                onClick={onClose}
                className="p-2 rounded-md bg-white dark:bg-[#181920] hover:bg-[#EAEAEA] dark:hover:bg-[#202228] border border-[#E8E8E8] dark:border-[#282B34] text-[#666666] dark:text-[#A1A1AA] hover:text-[#171717] dark:hover:text-white transition-colors ml-1"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Sub-Nav Tabs */}
          <div className="flex border-b border-[#E8E8E8] dark:border-[#222429] bg-white dark:bg-[#0F1014] px-5 sm:px-6 overflow-x-auto gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-3 px-3 text-xs font-mono font-medium whitespace-nowrap border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-indigo-600 dark:border-indigo-400 text-[#171717] dark:text-white font-semibold'
                    : 'border-transparent text-[#666666] dark:text-[#A1A1AA] hover:text-[#171717] dark:hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Scrollable Content Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1 bg-white dark:bg-[#111216]">
            
            {/* TAB 1: OVERVIEW & SOLUTION */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {cs.collaborators && (
                  <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-xl bg-[#F7F7F5] dark:bg-[#16171E] border border-[#E8E8E8] dark:border-[#262830] text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <span className="text-[#595959] dark:text-[#A1A1AA]">
                        {cs.client ? 'Project Stakeholders:' : 'Startup Collaboration:'}
                      </span>
                      <span className="text-[#171717] dark:text-[#EDEDED] font-semibold">{cs.collaborators}</span>
                    </div>
                    {cs.productCategory && (
                      <span className="px-2 py-0.5 rounded text-[11px] bg-white dark:bg-[#1E2028] border border-[#E8E8E8] dark:border-[#2A2E38] text-[#171717] dark:text-[#EDEDED]">
                        {cs.productCategory}
                      </span>
                    )}
                  </div>
                )}

                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2 font-semibold">
                    Project Overview
                  </h3>
                  <p className="text-[#666666] dark:text-[#A1A1AA] text-sm sm:text-base leading-relaxed">
                    {cs.overview}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-5 rounded-xl bg-[#F7F7F5] dark:bg-[#16171E] border border-[#E8E8E8] dark:border-[#262830]">
                    <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-mono text-xs uppercase mb-2 font-semibold">
                      <AlertTriangle className="w-4 h-4" /> The Problem
                    </div>
                    <p className="text-[#666666] dark:text-[#A1A1AA] text-xs sm:text-sm leading-relaxed">
                      {cs.problem}
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-[#F7F7F5] dark:bg-[#16171E] border border-[#E8E8E8] dark:border-[#262830]">
                    <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-mono text-xs uppercase mb-2 font-semibold">
                      <CheckCircle2 className="w-4 h-4" /> The Engineering Solution
                    </div>
                    <p className="text-[#666666] dark:text-[#A1A1AA] text-xs sm:text-sm leading-relaxed">
                      {cs.solution}
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-3 font-semibold">
                    Core Application Features
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {cs.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-[#F7F7F5] dark:bg-[#16171E] border border-[#E8E8E8] dark:border-[#262830]">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 mt-2 shrink-0" />
                        <span className="text-xs sm:text-sm text-[#666666] dark:text-[#A1A1AA]">{feature}</span>
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
                  <h3 className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2 font-semibold">
                    System Architecture & Flow
                  </h3>
                  <p className="text-[#666666] dark:text-[#A1A1AA] text-sm leading-relaxed">
                    Decoupled architecture with clear tier boundaries, predictable data contracts, and production stability.
                  </p>
                </div>

                {/* Tier Responsibilities Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {cs.architecture.map((item, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-[#F7F7F5] dark:bg-[#16171E] border border-[#E8E8E8] dark:border-[#262830]">
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-bold text-[#171717] dark:text-[#EDEDED]">{item.tier}</span>
                        <span className="text-[10px] font-mono text-[#666666] dark:text-[#A1A1AA] bg-white dark:bg-[#111216] px-2 py-0.5 rounded border border-[#E8E8E8] dark:border-[#222429]">
                          {item.tech}
                        </span>
                      </div>
                      <p className="text-xs text-[#666666] dark:text-[#A1A1AA] leading-relaxed">
                        {item.role}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 3: DATABASE & REST API */}
            {activeTab === 'database' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2 font-semibold">
                    Database Schema Design
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                    {cs.databaseSchema.map((col, idx) => (
                      <div key={idx} className="p-3.5 rounded-lg bg-[#F7F7F5] dark:bg-[#16171E] border border-[#E8E8E8] dark:border-[#262830]">
                        <div className="flex items-center gap-2 mb-1.5">
                          <Database className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                          <span className="text-xs font-bold text-[#171717] dark:text-[#EDEDED]">{col.collection}</span>
                        </div>
                        <div className="font-mono text-[11px] text-[#666666] dark:text-[#A1A1AA] bg-white dark:bg-[#111216] p-2 rounded border border-[#E8E8E8] dark:border-[#222429] break-words">
                          {col.fields}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2 font-semibold">
                    RESTful API Endpoints
                  </h3>
                  <div className="border border-[#E8E8E8] dark:border-[#222429] rounded-xl overflow-hidden bg-white dark:bg-[#111216]">
                    <table className="w-full text-left text-xs font-mono">
                      <thead className="bg-[#F7F7F5] dark:bg-[#16171E] border-b border-[#E8E8E8] dark:border-[#222429] text-[#595959] dark:text-[#A1A1AA] text-[11px]">
                        <tr>
                          <th className="p-3">Method</th>
                          <th className="p-3">Endpoint</th>
                          <th className="p-3">Description & Payload</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E8E8E8] dark:divide-[#222429] text-[#666666] dark:text-[#A1A1AA]">
                        {cs.apiEndpoints.map((ep, idx) => (
                          <tr key={idx} className="hover:bg-black/[0.01] dark:hover:bg-white/[0.01]">
                            <td className="p-3">
                              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#F2F2F0] dark:bg-[#181920] text-[#171717] dark:text-[#EDEDED] border border-[#E8E8E8] dark:border-[#282B34]">
                                {ep.method}
                              </span>
                            </td>
                            <td className="p-3 text-[#171717] dark:text-[#EDEDED] font-semibold">{ep.path}</td>
                            <td className="p-3 text-[#666666] dark:text-[#A1A1AA] font-sans">{ep.desc}</td>
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
                  <h3 className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2 font-semibold">
                    Security & Hardening
                  </h3>
                  <div className="p-4 rounded-xl bg-[#F7F7F5] dark:bg-[#16171E] border border-[#E8E8E8] dark:border-[#262830] text-xs sm:text-sm text-[#666666] dark:text-[#A1A1AA] leading-relaxed">
                    <p>{cs.security}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-5 rounded-xl bg-[#F7F7F5] dark:bg-[#16171E] border border-[#E8E8E8] dark:border-[#262830]">
                    <span className="text-xs font-mono uppercase text-[#171717] dark:text-[#EDEDED] font-semibold block mb-2">
                      Key Technical Challenge
                    </span>
                    <p className="text-xs sm:text-sm text-[#666666] dark:text-[#A1A1AA] leading-relaxed">
                      {cs.challenges}
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-[#F7F7F5] dark:bg-[#16171E] border border-[#E8E8E8] dark:border-[#262830]">
                    <span className="text-xs font-mono uppercase text-emerald-700 dark:text-emerald-400 font-semibold block mb-2">
                      Engineering Solution
                    </span>
                    <p className="text-xs sm:text-sm text-[#666666] dark:text-[#A1A1AA] leading-relaxed">
                      {cs.solutionApplied}
                    </p>
                  </div>
                </div>

                {cs.futureImprovements && (
                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-3 font-semibold">
                      Future Improvements Roadmap
                    </h3>
                    <ul className="space-y-2">
                      {cs.futureImprovements.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#666666] dark:text-[#A1A1AA] p-2.5 rounded-lg bg-[#F7F7F5] dark:bg-[#16171E] border border-[#E8E8E8] dark:border-[#262830]">
                          <ArrowUpRight className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

          </div>

          {/* Footer Bar */}
          <div className="p-4 sm:p-5 border-t border-[#E8E8E8] dark:border-[#222429] bg-[#F7F7F5] dark:bg-[#14151B] flex items-center justify-between">
            <span className="text-xs font-mono text-[#595959] dark:text-[#A1A1AA]">
              Muhammad Sarfaraz • Full Stack Architecture
            </span>
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-[#171717] dark:text-[#EDEDED] bg-white dark:bg-[#181920] hover:bg-[#EAEAEA] dark:hover:bg-[#202228] border border-[#E8E8E8] dark:border-[#282B34] rounded-md transition-colors"
            >
              Close
            </button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyModal;
