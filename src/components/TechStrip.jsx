import React from 'react';
import { Database, Server, Globe, Code2, Cpu, FileCode2, Layers, GitBranch } from 'lucide-react';
import { GithubIcon } from './Icons';

export const TechStrip = () => {
  const technologies = [
    { name: 'MongoDB', isMern: true, role: 'Document Database', icon: Database, color: 'text-emerald-400' },
    { name: 'Express.js', isMern: true, role: 'API Framework', icon: Server, color: 'text-neutral-200' },
    { name: 'React.js', isMern: true, role: 'Frontend UI', icon: Globe, color: 'text-cyan-400' },
    { name: 'Node.js', isMern: true, role: 'JS Runtime', icon: Code2, color: 'text-green-500' },
    { name: 'JavaScript', isMern: false, role: 'ES6+ Core', icon: Cpu, color: 'text-amber-400' },
    { name: 'TypeScript', isMern: false, role: 'Typed JS', icon: FileCode2, color: 'text-blue-400' },
    { name: 'Tailwind CSS', isMern: false, role: 'Modern Styling', icon: Layers, color: 'text-sky-400' },
    { name: 'Git', isMern: false, role: 'Version Control', icon: GitBranch, color: 'text-rose-400' },
    { name: 'GitHub', isMern: false, role: 'Code & CI', icon: GithubIcon, color: 'text-purple-400' }
  ];

  return (
    <section className="py-12 border-y border-[#252B36]/80 bg-[#0C0F14]/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          
          {/* Label */}
          <div className="flex items-center gap-2.5 min-w-[240px]">
            <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
            <span className="text-xs font-mono font-semibold tracking-wider text-[#98A1AF] uppercase">
              Technologies I Build With
            </span>
          </div>

          {/* Grid / Horizontal Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-2.5 flex-1">
            {technologies.map((tech) => {
              const Icon = tech.icon;
              return (
                <div
                  key={tech.name}
                  className={`group relative flex flex-col items-center justify-center p-3 rounded-xl transition-all duration-200 ${
                    tech.isMern
                      ? 'bg-[#11151C] border border-indigo-500/40 shadow-sm shadow-indigo-500/10 hover:border-indigo-400'
                      : 'bg-[#0C0F14] border border-[#252B36] hover:border-neutral-700'
                  }`}
                >
                  {tech.isMern && (
                    <span className="absolute -top-2 left-1/2 -translate-x-1/2 px-1.5 py-0.2 text-[9px] font-mono font-bold bg-indigo-600 text-white rounded">
                      MERN
                    </span>
                  )}
                  <Icon className={`w-5 h-5 mb-1.5 ${tech.color} group-hover:scale-110 transition-transform`} />
                  <span className="text-xs font-semibold text-[#F5F7FA] text-center">{tech.name}</span>
                  <span className="text-[10px] text-[#98A1AF] text-center font-mono">{tech.role}</span>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
