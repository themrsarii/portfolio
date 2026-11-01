import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, BookOpen, ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';
import { ProjectMockup } from './ProjectMockup';
import { projectsData } from '../data/projectsData';

export const FeaturedWork = ({ onSelectProject }) => {
  // Separate flagship project from secondary projects
  const flagshipProject = projectsData.find(p => p.id === 'retailspoint-pos') || projectsData[0];
  const gridProjects = projectsData.filter(p => p.id !== 'retailspoint-pos');

  return (
    <section id="work" className="py-20 lg:py-28 bg-[#FFFFFF] dark:bg-[#090A0C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E8E8E8] dark:border-[#222429] gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400"></span>
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#666666] dark:text-[#A1A1AA]">
                Selected Work
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#171717] dark:text-[#EDEDED] tracking-tight">
              Featured Projects
            </h2>
            <p className="text-base text-[#666666] dark:text-[#A1A1AA] mt-2 max-w-2xl">
              A collection of real-world web apps, business systems, and tools I have built.
            </p>
          </div>

          <div className="text-xs font-mono text-[#666666] dark:text-[#A1A1AA] bg-[#F7F7F5] dark:bg-[#131418] border border-[#E8E8E8] dark:border-[#222429] px-3 py-1.5 rounded-md self-start md:self-auto">
            Production & Client Work
          </div>
        </div>

        {/* 1. FLAGSHIP PROJECT SHOWCASE (Large Spanning Layout) */}
        {flagshipProject && (
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.4 }}
            className="mb-14 rounded-2xl bg-[#FFFFFF] dark:bg-[#0F1014] border border-[#E8E8E8] dark:border-[#222429] overflow-hidden shadow-sm"
          >
            {/* Project Header Bar */}
            <div className="px-5 py-3.5 bg-[#F7F7F5] dark:bg-[#131418] border-b border-[#E8E8E8] dark:border-[#222429] flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-medium bg-[#FFFFFF] dark:bg-[#1C1E24] border border-[#E8E8E8] dark:border-[#2C3038] text-[#171717] dark:text-[#EDEDED]">
                  SAAS PRODUCT
                </span>
                <span className="text-xs font-mono text-[#666666] dark:text-[#A1A1AA]">
                  Offline-First Architecture
                </span>
              </div>
              <span className="text-xs font-mono text-[#929292]">
                Muhammad Sarfaraz & Hasan Tariq (Startup Collaboration)
              </span>
            </div>

            {/* Split Composition: Preview + Detail Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              
              {/* Product Preview Canvas (7 cols) */}
              <div className="lg:col-span-7 bg-[#F2F2F0] dark:bg-[#0A0B0E] border-b lg:border-b-0 lg:border-r border-[#E8E8E8] dark:border-[#222429] relative overflow-hidden h-[420px] sm:h-[480px] lg:h-[540px]">
                <ProjectMockup type={flagshipProject.mockupType} />
              </div>

              {/* Information & Actions Column (5 cols) */}
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-white dark:bg-[#0F1014]">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-semibold uppercase tracking-wider">
                      {flagshipProject.category}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-[#171717] dark:text-[#EDEDED] tracking-tight">
                    {flagshipProject.title}
                  </h3>

                  <p className="text-sm text-[#666666] dark:text-[#A1A1AA] mt-3 leading-relaxed">
                    {flagshipProject.description}
                  </p>

                  {/* Key Highlights */}
                  <div className="mt-6 pt-5 border-t border-[#E8E8E8] dark:border-[#222429]">
                    <span className="text-xs font-mono text-[#171717] dark:text-[#EDEDED] uppercase tracking-wider block mb-3 font-semibold">
                      Highlights
                    </span>
                    <ul className="space-y-2">
                      {flagshipProject.engineeringHighlights.map((highlight, idx) => (
                        <li key={idx} className="text-xs text-[#666666] dark:text-[#A1A1AA] flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 mt-1.5 shrink-0" />
                          <span className="leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tech Tags & Actions */}
                <div className="pt-5 border-t border-[#E8E8E8] dark:border-[#222429] space-y-4">
                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {flagshipProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded text-xs font-mono bg-[#F7F7F5] dark:bg-[#16171D] border border-[#E8E8E8] dark:border-[#262830] text-[#666666] dark:text-[#A1A1AA]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap items-center gap-2.5 pt-1">
                    <button
                      onClick={() => onSelectProject(flagshipProject)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-white bg-[#171717] hover:bg-[#262626] dark:bg-[#EDEDED] dark:text-[#090A0C] dark:hover:bg-white rounded-md transition-colors"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Case Study</span>
                    </button>

                    <a
                      href={flagshipProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-medium text-[#171717] dark:text-[#EDEDED] bg-[#F7F7F5] dark:bg-[#141418] hover:bg-[#EAEAEA] dark:hover:bg-[#1A1B22] border border-[#E8E8E8] dark:border-[#222429] rounded-md transition-colors"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#666666] dark:text-[#A1A1AA]" />
                    </a>
                  </div>
                </div>

              </div>

            </div>
          </motion.article>
        )}

        {/* 2. SECONDARY PROJECTS (Balanced Alternating Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {gridProjects.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="rounded-2xl bg-[#FFFFFF] dark:bg-[#0F1014] border border-[#E8E8E8] dark:border-[#222429] overflow-hidden flex flex-col justify-between shadow-sm"
            >
              <div>
                {/* Project Header Bar */}
                <div className="px-4 py-3 bg-[#F7F7F5] dark:bg-[#131418] border-b border-[#E8E8E8] dark:border-[#222429] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-[#FFFFFF] dark:bg-[#1C1E24] border border-[#E8E8E8] dark:border-[#2C3038] text-[#171717] dark:text-[#EDEDED]">
                      {project.category}
                    </span>
                    {project.statusBadge && (
                      <span className="hidden sm:inline-block text-[11px] font-mono text-[#666666] dark:text-[#A1A1AA]">
                        • {project.statusBadge}
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] font-mono text-[#929292]">
                    {project.badge}
                  </span>
                </div>

                {/* Large Visual Preview Canvas */}
                <div className="relative w-full h-[340px] sm:h-[380px] bg-[#F2F2F0] dark:bg-[#0A0B0E] border-b border-[#E8E8E8] dark:border-[#222429] overflow-hidden">
                  <ProjectMockup type={project.mockupType} />
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#171717] dark:text-[#EDEDED] tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#666666] dark:text-[#A1A1AA] leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  {project.engineeringHighlights && (
                    <div className="pt-3">
                      <ul className="space-y-1.5">
                        {project.engineeringHighlights.slice(0, 2).map((h, hIdx) => (
                          <li key={hIdx} className="text-xs text-[#666666] dark:text-[#A1A1AA] flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 mt-1.5 shrink-0" />
                            <span className="leading-relaxed">{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Footer: Tech Chips & Actions */}
              <div className="p-6 sm:p-7 pt-0 border-t border-[#E8E8E8] dark:border-[#222429] mt-4 pt-5 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#F7F7F5] dark:bg-[#16171D] border border-[#E8E8E8] dark:border-[#262830] text-[#666666] dark:text-[#A1A1AA]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono text-[#929292]">
                      +{project.technologies.length - 5} more
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2.5 pt-2">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-white bg-[#171717] hover:bg-[#262626] dark:bg-[#EDEDED] dark:text-[#090A0C] dark:hover:bg-white rounded-md transition-colors"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Case Study</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#666666] dark:text-[#A1A1AA] hover:text-[#171717] dark:hover:text-white bg-[#F7F7F5] dark:bg-[#141418] border border-[#E8E8E8] dark:border-[#222429] rounded-md transition-colors"
                        title="GitHub Repository"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span className="hidden xs:inline">Code</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-[#171717] dark:text-[#EDEDED] bg-[#F7F7F5] dark:bg-[#141418] border border-[#E8E8E8] dark:border-[#222429] rounded-md transition-colors"
                        title="Live Demo"
                      >
                        <span>Demo</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
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

export default FeaturedWork;
