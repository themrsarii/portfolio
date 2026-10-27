import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Server, Database, Wrench, Layers, Compass, 
  CheckCircle2, Sparkles, ArrowUpRight 
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
    <section id="skills" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-indigo-400">
              Technical Proficiencies
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F7FA] tracking-tight">
            Skills & Technology Matrix
          </h2>
          <p className="text-base text-[#98A1AF] mt-2 max-w-2xl">
            A transparent breakdown of production-ready technologies, engineering workflows, and actively expanding domains.
          </p>
        </div>

        {/* CORE STACK HERO CARDS (MERN PROMINENCE) */}
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-wider text-neutral-400 font-semibold block mb-4">
            Primary Stack Focus (MERN)
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skillsData.coreStack.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
                className="p-5 rounded-xl bg-[#11151C] border border-indigo-500/40 relative overflow-hidden group hover:border-indigo-400 transition-colors shadow-lg shadow-black/40"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="w-9 h-9 rounded-lg bg-[#0C0F14] border border-indigo-500/30 flex items-center justify-center font-mono font-bold text-indigo-400 text-base">
                    {item.letter}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-950/60 text-emerald-400 border border-emerald-500/30">
                    {item.level}
                  </span>
                </div>
                <h3 className="font-bold text-base text-[#F5F7FA]">{item.name}</h3>
                <span className="text-xs font-mono text-indigo-300 block mb-2">{item.role}</span>
                <p className="text-xs text-[#98A1AF] leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CATEGORIZED SKILLS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.categories.map((category) => {
            const Icon = iconMap[category.icon] || Code2;
            const isAdditional = category.title.includes("Additional");
            const isLearning = category.title.includes("Learning");

            return (
              <div
                key={category.title}
                className={`p-6 rounded-xl bg-[#0C0F14] border transition-colors flex flex-col justify-between ${
                  isAdditional
                    ? 'border-[#252B36]/80 bg-[#090C10]'
                    : isLearning
                    ? 'border-purple-500/30 bg-[#0E1118]'
                    : 'border-[#252B36]'
                }`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2 rounded-lg bg-[#11151C] border border-[#252B36] ${
                      isLearning ? 'text-purple-400' : 'text-indigo-400'
                    }`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#F5F7FA]">{category.title}</h4>
                      <p className="text-[11px] text-[#98A1AF] leading-tight">{category.description}</p>
                    </div>
                  </div>

                  {/* Skills Chips */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {category.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className={`px-2.5 py-1 rounded-md text-xs font-mono transition-colors flex items-center gap-1.5 ${
                          skill.highlighted
                            ? 'bg-indigo-950/40 text-indigo-300 border border-indigo-500/30 font-medium'
                            : isLearning
                            ? 'bg-purple-950/40 text-purple-300 border border-purple-500/30'
                            : 'bg-[#11151C] text-[#98A1AF] border border-[#252B36]'
                        }`}
                      >
                        {skill.name}
                        {skill.note && (
                          <span className="text-[9px] text-neutral-500 uppercase">({skill.note})</span>
                        )}
                        {skill.status && (
                          <span className="text-[9px] px-1 py-0.2 rounded bg-purple-500/20 text-purple-300">
                            {skill.status}
                          </span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>

                {isAdditional && (
                  <div className="mt-4 pt-3 border-t border-[#252B36]/60 text-[10px] text-neutral-500 font-mono">
                    * MERN remains the primary technology identity. PHP & MySQL maintained as foundational knowledge.
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
