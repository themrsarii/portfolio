import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Server, Database, Wrench, Layers, Compass
} from 'lucide-react';
import { skillsData } from '../data/skillsData';

export const SkillsSection = () => {
  const iconMap = {
    Layout: Code2,
    Server: Server,
    Database: Database,
    Wrench: Wrench,
    Layers: Layers,
    Compass: Compass
  };

  return (
    <section id="skills" className="py-20 lg:py-28 bg-[#F7F7F5] dark:bg-[#0E0F13] border-b border-[#E8E8E8] dark:border-[#222429]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E8E8E8] dark:border-[#222429] gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400"></span>
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#666666] dark:text-[#A1A1AA]">
                Skills & Stack
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#171717] dark:text-[#EDEDED] tracking-tight">
              Technologies & Tools
            </h2>
            <p className="text-base text-[#666666] dark:text-[#A1A1AA] mt-2 max-w-2xl leading-relaxed">
              The primary technologies, libraries, and tools I use to design and build web software.
            </p>
          </div>

          <div className="text-xs font-mono text-[#666666] dark:text-[#A1A1AA] bg-white dark:bg-[#131418] border border-[#E8E8E8] dark:border-[#222429] px-3 py-1.5 rounded-md self-start md:self-auto">
            MERN & Beyond
          </div>
        </div>

        {/* PRIMARY STACK FOCUS (MERN) */}
        <div className="mb-14">
          <span className="font-mono text-xs uppercase tracking-wider text-[#171717] dark:text-[#EDEDED] font-semibold block mb-4">
            Core Stack (MERN)
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skillsData.coreStack.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
                className="p-5 rounded-xl bg-white dark:bg-[#111216] border border-[#E8E8E8] dark:border-[#222429] relative overflow-hidden flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-8 h-8 rounded-md bg-[#F7F7F5] dark:bg-[#181920] border border-[#E8E8E8] dark:border-[#282B34] flex items-center justify-center font-mono font-bold text-indigo-600 dark:text-indigo-400 text-sm">
                      {item.letter}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#F2F2F0] dark:bg-[#181920] text-[#666666] dark:text-[#A1A1AA]">
                      {item.level}
                    </span>
                  </div>
                  <h3 className="font-bold text-base text-[#171717] dark:text-[#EDEDED]">{item.name}</h3>
                  <span className="text-xs font-mono text-indigo-600 dark:text-indigo-400 block mb-2">{item.role}</span>
                  <p className="text-xs text-[#666666] dark:text-[#A1A1AA] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CATEGORIZED SKILLS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.categories.map((category) => {
            const Icon = iconMap[category.icon] || Code2;
            const isAdditional = category.title.includes("Additional");

            return (
              <div
                key={category.title}
                className="p-6 rounded-xl bg-white dark:bg-[#111216] border border-[#E8E8E8] dark:border-[#222429] flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-md bg-[#F7F7F5] dark:bg-[#181920] border border-[#E8E8E8] dark:border-[#282B34] text-[#171717] dark:text-[#EDEDED]">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#171717] dark:text-[#EDEDED]">{category.title}</h4>
                      <p className="text-[11px] text-[#666666] dark:text-[#A1A1AA] leading-tight">{category.description}</p>
                    </div>
                  </div>

                  {/* Skills Chips */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`px-2.5 py-1 rounded text-xs font-mono transition-colors flex items-center gap-1.5 ${
                          skill.highlighted
                            ? 'bg-[#F2F2F0] dark:bg-[#181920] text-[#171717] dark:text-[#EDEDED] border border-[#D4D4D4] dark:border-[#323640] font-medium'
                            : 'bg-white dark:bg-[#131418] text-[#666666] dark:text-[#A1A1AA] border border-[#E8E8E8] dark:border-[#222429]'
                        }`}
                      >
                        {skill.name}
                        {skill.note && (
                          <span className="text-[9px] text-[#595959] dark:text-[#A1A1AA] uppercase">({skill.note})</span>
                        )}
                        {skill.status && (
                          <span className="text-[9px] px-1 py-0.2 rounded bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400">
                            {skill.status}
                          </span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>

                {isAdditional && (
                  <div className="mt-4 pt-3 border-t border-[#E8E8E8] dark:border-[#222429] text-[10px] text-[#595959] dark:text-[#A1A1AA] font-mono">
                    * MERN is my core stack, with relational databases used where needed.
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
