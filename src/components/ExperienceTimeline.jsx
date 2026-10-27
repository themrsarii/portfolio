import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import { experienceData } from '../data/experienceData';

export const ExperienceTimeline = () => {
  return (
    <section id="experience" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-indigo-400">
              Career Journey
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F7FA] tracking-tight">
            Experience & Milestones
          </h2>
          <p className="text-base text-[#98A1AF] mt-2 max-w-2xl">
            A chronological progression of full-stack engineering milestones, software projects, and applied technical training.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-[#252B36] ml-4 sm:ml-6 space-y-12">
          {experienceData.map((item, idx) => {
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative pl-6 sm:pl-8 group"
              >
                {/* Timeline node */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 bg-[#07090D] border-indigo-500 group-hover:scale-125 group-hover:bg-indigo-500 transition-all" />

                {/* Card */}
                <div className="p-6 rounded-xl bg-[#0C0F14] border border-[#252B36] hover:border-indigo-500/40 hover:shadow-xl transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <span className="text-xs font-mono text-indigo-400 font-semibold">{item.type}</span>
                      <h3 className="text-lg font-bold text-[#F5F7FA] mt-0.5">{item.role}</h3>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-[#98A1AF] mt-1 font-mono">
                        <span className="text-neutral-300">{item.company}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-neutral-500" /> {item.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#11151C] border border-[#252B36] text-xs font-mono text-neutral-300 self-start sm:self-auto">
                      <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2 mt-4 pt-4 border-t border-[#252B36]/60">
                    {item.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="text-xs sm:text-sm text-neutral-300 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Engineering Milestones Chips */}
                  {item.milestones && (
                    <div className="mt-4 pt-3 border-t border-[#252B36]/40 flex flex-wrap items-center gap-1.5">
                      <span className="text-[10px] font-mono text-indigo-400 font-semibold mr-1 uppercase tracking-wider">
                        Engineering Milestones:
                      </span>
                      {item.milestones.map((m, mIdx) => (
                        <span
                          key={mIdx}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#11151C] border border-[#252B36] text-neutral-300"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
