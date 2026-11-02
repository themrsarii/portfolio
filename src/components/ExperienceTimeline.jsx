import React from 'react';
import { Calendar, MapPin } from 'lucide-react';
import { experienceData } from '../data/experienceData';

export const ExperienceTimeline = () => {
  return (
    <section id="experience" className="py-20 lg:py-28 bg-[#FFFFFF] dark:bg-[#090A0C] border-b border-[#E8E8E8] dark:border-[#222429]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E8E8E8] dark:border-[#222429] gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400"></span>
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#666666] dark:text-[#A1A1AA]">
                Experience
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#171717] dark:text-[#EDEDED] tracking-tight">
              Work & Experience
            </h2>
            <p className="text-base text-[#666666] dark:text-[#A1A1AA] mt-2 max-w-2xl leading-relaxed">
              My journey building real-world products, client projects, and full-stack applications.
            </p>
          </div>

          <div className="text-xs font-mono text-[#666666] dark:text-[#A1A1AA] bg-[#F7F7F5] dark:bg-[#131418] border border-[#E8E8E8] dark:border-[#222429] px-3 py-1.5 rounded-md self-start md:self-auto">
            Production Experience
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-[#E8E8E8] dark:border-[#222429] ml-4 sm:ml-6 space-y-10">
          {experienceData.map((item, idx) => {
            return (
              <div
                key={idx}
                className="relative pl-6 sm:pl-8 group"
              >
                {/* Minimalist node */}
                <div className="absolute -left-[7px] top-2 w-3.5 h-3.5 rounded-full border-2 bg-white dark:bg-[#090A0C] border-indigo-600 dark:border-indigo-400" />

                {/* Card */}
                <div className="p-6 sm:p-7 rounded-xl bg-[#F7F7F5] dark:bg-[#111216] border border-[#E8E8E8] dark:border-[#222429] shadow-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <span className="text-xs font-mono text-indigo-600 dark:text-indigo-400 font-semibold">{item.type}</span>
                      <h3 className="text-lg font-bold text-[#171717] dark:text-[#EDEDED] mt-0.5">{item.role}</h3>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-[#666666] dark:text-[#A1A1AA] mt-1 font-mono">
                        <span className="font-semibold text-[#171717] dark:text-[#EDEDED]">{item.company}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-[#595959] dark:text-[#A1A1AA]" /> {item.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-white dark:bg-[#181920] border border-[#E8E8E8] dark:border-[#282B34] text-xs font-mono text-[#666666] dark:text-[#A1A1AA] self-start sm:self-auto">
                      <Calendar className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2 mt-4 pt-4 border-t border-[#E8E8E8] dark:border-[#222429]">
                    {item.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="text-xs sm:text-sm text-[#666666] dark:text-[#A1A1AA] flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 mt-2 shrink-0" />
                        <span className="leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Engineering Milestones Chips */}
                  {item.milestones && (
                    <div className="mt-4 pt-4 border-t border-[#E8E8E8] dark:border-[#222429] flex flex-wrap items-center gap-1.5">
                      <span className="text-[10px] font-mono text-[#171717] dark:text-[#EDEDED] font-semibold mr-1 uppercase tracking-wider">
                        Key Areas:
                      </span>
                      {item.milestones.map((m, mIdx) => (
                        <span
                          key={mIdx}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-white dark:bg-[#181920] border border-[#E8E8E8] dark:border-[#282B34] text-[#666666] dark:text-[#A1A1AA]"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ExperienceTimeline;
