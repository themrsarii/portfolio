import React from 'react';
import { 
  Database, Server, Globe, Code2, Cpu, FileCode2, Layers, 
  Terminal, ShieldCheck, HardDrive, CheckCircle2
} from 'lucide-react';
import { GithubIcon } from './Icons';

export const TechStrip = () => {
  const technologies = [
    { name: 'React.js', role: 'Frontend UI', icon: Globe },
    { name: 'Node.js', role: 'JavaScript Runtime', icon: Code2 },
    { name: 'Express.js', role: 'REST API Framework', icon: Server },
    { name: 'MongoDB', role: 'Document Database', icon: Database },
    { name: 'TypeScript', role: 'Type Safety', icon: FileCode2 },
    { name: 'JavaScript', role: 'ES6+ Core', icon: Cpu },
    { name: 'Tailwind CSS', role: 'Design Systems', icon: Layers },
    { name: 'SQLite', role: 'Offline-First DB', icon: HardDrive },
    { name: 'RESTful APIs', role: 'System Architecture', icon: Terminal },
    { name: 'Git & GitHub', role: 'Version Control', icon: GithubIcon },
    { name: 'JWT & Security', role: 'Auth & Middleware', icon: ShieldCheck },
    { name: 'Postman & Testing', role: 'API Validation', icon: CheckCircle2 },
  ];

  // Duplicate items for continuous 50% translation loop
  const marqueeItems = [...technologies, ...technologies];

  return (
    <section 
      className="py-5 border-b border-[#E8E8E8] dark:border-[#222429] bg-[#F7F7F5] dark:bg-[#0E0F13] overflow-hidden select-none"
      aria-label="Core Technologies Marquee"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400"></span>
          <span className="text-xs font-mono font-medium tracking-wider text-[#666666] dark:text-[#A1A1AA] uppercase">
            Core Technologies & Environments
          </span>
        </div>
      </div>

      {/* Marquee Wrapper with Edge Fade Mask */}
      <div className="relative w-full marquee-container marquee-mask overflow-hidden py-1">
        <div className="marquee-track flex items-center gap-3">
          {marqueeItems.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={`${tech.name}-${index}`}
                className="flex items-center gap-2.5 px-3.5 py-2 rounded-md bg-white dark:bg-[#141418] border border-[#E8E8E8] dark:border-[#222429] hover:border-[#D4D4D4] dark:hover:border-[#383C48] shadow-sm transition-colors shrink-0 group cursor-default"
              >
                <div className="w-6 h-6 rounded bg-[#F7F7F5] dark:bg-[#1C1D24] border border-[#E8E8E8] dark:border-[#282B34] flex items-center justify-center text-[#171717] dark:text-[#EDEDED] shrink-0">
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0 pr-1">
                  <span className="text-xs font-medium text-[#171717] dark:text-[#EDEDED] block whitespace-nowrap">
                    {tech.name}
                  </span>
                  <span className="text-[10px] font-mono text-[#929292] block whitespace-nowrap">
                    {tech.role}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStrip;
