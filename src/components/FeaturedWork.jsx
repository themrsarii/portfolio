import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink, BookOpen } from 'lucide-react';
import { GithubIcon } from './Icons';
import { ProjectMockup } from './ProjectMockup';
import { projectsData } from '../data/projectsData';

export const FeaturedWork = ({ onSelectProject }) => {
  return (
    <section id="work" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-indigo-400">
                Portfolio Engineering
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F7FA] tracking-tight">
              Selected Work
            </h2>
            <p className="text-base text-[#98A1AF] mt-2 max-w-xl">
              Real-world applications built with modern web technologies, scalable APIs, and production architecture.
            </p>
          </div>

          <div className="text-xs font-mono text-[#98A1AF] bg-[#11151C] border border-[#252B36] px-3 py-1.5 rounded-lg self-start md:self-auto">
            4 Production Architectures
          </div>
        </div>

        {/* Projects Grid: 2 Columns for high density and readability */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {projectsData.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group relative rounded-2xl bg-[#0C0F14] border border-[#252B36] overflow-hidden flex flex-col transition-all duration-300 ${
                project.isPlaceholder 
                  ? 'border-dashed border-neutral-700/80' 
                  : 'hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1'
              }`}
            >
              {/* Project Card Window Header Bar */}
              <div className="px-3.5 sm:px-4 py-2.5 bg-[#0B0E14] border-b border-[#252B36] flex items-center justify-between">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="flex items-center gap-1.5 mr-1 shrink-0" aria-hidden="true">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#1C2330] border border-[#2E3748]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#1C2330] border border-[#2E3748]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#1C2330] border border-[#2E3748]" />
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] sm:text-[11px] font-mono bg-indigo-950/60 border border-indigo-500/20 text-indigo-300 truncate">
                    {project.category}
                  </span>
                  {project.statusBadge && (
                    <span className="hidden sm:inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-950/60 border border-emerald-500/30 text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                      <span className="truncate">{project.statusBadge}</span>
                    </span>
                  )}
                </div>
                <span className="text-[10px] font-mono text-[#98A1AF] shrink-0 ml-2">
                  {project.badge}
                </span>
              </div>

              {/* Product UI Mockup Container */}
              <div className="relative w-full h-72 sm:h-80 bg-[#080B10] border-b border-[#252B36] overflow-hidden">
                <div className="w-full h-full transition-transform duration-500 group-hover:scale-[1.01]">
                  <ProjectMockup type={project.mockupType} />
                </div>
              </div>

              {/* Project Content */}
              <div className="p-5 sm:p-7 flex flex-col flex-1 justify-between space-y-5">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F5F7FA] tracking-tight group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#98A1AF] mt-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Engineering Highlights */}
                  <div className="mt-4 pt-4 border-t border-[#252B36]/60">
                    <span className="text-[11px] font-mono text-indigo-400 uppercase tracking-wider block mb-2 font-medium">
                      Engineering Highlights:
                    </span>
                    <ul className="space-y-1.5">
                      {project.engineeringHighlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="text-xs text-neutral-300 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech Chips & Actions */}
                <div className="pt-4 border-t border-[#252B36]/60 flex flex-col gap-4">
                  {/* Technology Chips */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#11151C] border border-[#252B36] text-[#98A1AF]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTAs: Live Demo, GitHub, Case Study */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pt-2">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="w-full sm:w-auto justify-center flex items-center gap-1.5 px-4 py-2.5 sm:py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-all shadow-sm shadow-indigo-600/30 group/btn"
                    >
                      <BookOpen className="w-3.5 h-3.5 shrink-0" />
                      <span>Technical Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5 shrink-0 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>

                    <div className="flex items-center justify-between sm:justify-end gap-2 w-full sm:w-auto">
                      {!project.isPlaceholder ? (
                        <>
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#98A1AF] hover:text-white bg-[#11151C] hover:bg-[#181F2B] border border-[#252B36] rounded-lg transition-colors shrink-0 group/gh"
                            title="GitHub Repository ↗"
                          >
                            <GithubIcon className="w-3.5 h-3.5 shrink-0" />
                            <span className="hidden xs:inline">GitHub</span>
                            <ArrowUpRight className="w-3 h-3 opacity-60 group-hover/gh:translate-x-0.5 group-hover/gh:-translate-y-0.5 transition-transform shrink-0" />
                          </a>
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 sm:flex-initial justify-center flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-[#F5F7FA] bg-[#11151C] hover:bg-[#181F2B] border border-[#252B36] rounded-lg transition-colors group/live"
                            title={`Live Demo ↗ ${project.liveUrl}`}
                          >
                            <span>Live Demo</span>
                            <ExternalLink className="w-3.5 h-3.5 text-indigo-400 group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5 transition-transform shrink-0" />
                          </a>
                        </>
                      ) : (
                        <span className="text-[11px] font-mono text-[#98A1AF] px-2 py-1 bg-[#11151C] rounded border border-[#252B36]">
                          Configurable Slot
                        </span>
                      )}
                    </div>
                  </div>

                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};
