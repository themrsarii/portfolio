import React from 'react';
import { Terminal } from 'lucide-react';

export const AboutSection = () => {
  const principles = [
    { 
      title: "Reliable Code", 
      desc: "Choosing clean, maintainable patterns over fleeting hype. Modular components, clear state, and readable logic." 
    },
    { 
      title: "Real-World Focus", 
      desc: "Building software that solves actual operational bottlenecks instead of making shallow demo projects." 
    },
    { 
      title: "Fast & Responsive", 
      desc: "Optimizing render cycles, lightweight bundle sizes, database indexing, and smooth mobile usability." 
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F7F7F5] dark:bg-[#0E0F13] border-b border-[#E8E8E8] dark:border-[#222429]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400"></span>
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#666666] dark:text-[#A1A1AA]">
                About Me
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#171717] dark:text-[#EDEDED] tracking-tight">
              Developer focused on building useful software.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#666666] dark:text-[#A1A1AA] leading-relaxed">
              <p>
                Hi, I'm <strong className="text-[#171717] dark:text-[#EDEDED]">Muhammad Sarfaraz</strong> (known online as <strong className="text-[#171717] dark:text-[#EDEDED]">Mr SARii</strong>). I'm a full-stack developer who enjoys building practical web applications from front to back.
              </p>
              <p>
                I work primarily with the MERN stack (MongoDB, Express, React, and Node.js). On the frontend, I focus on building responsive, clean user interfaces with React and Tailwind CSS. On the backend, I write organized REST APIs, handle database modeling, and make sure features run reliably under real usage.
              </p>
              <p>
                I enjoy tackling real operational challenges, including offline-capable restaurant POS systems built to survive internet drops and full-stack business web applications.
              </p>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {principles.map((p, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white dark:bg-[#111216] border border-[#E8E8E8] dark:border-[#222429] shadow-sm">
                  <h4 className="text-xs font-bold text-[#171717] dark:text-[#EDEDED] mb-1.5">{p.title}</h4>
                  <p className="text-[11px] text-[#666666] dark:text-[#A1A1AA] leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Specialization Summary (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-white dark:bg-[#111216] border border-[#E8E8E8] dark:border-[#222429] shadow-sm">
              <span className="text-xs font-mono uppercase tracking-wider text-[#171717] dark:text-[#EDEDED] font-semibold block mb-4">
                Specialization Summary
              </span>

              <div className="space-y-3.5 font-mono text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-[#E8E8E8] dark:border-[#222429]">
                  <span className="text-[#929292]">Primary Stack</span>
                  <span className="text-[#171717] dark:text-[#EDEDED] font-semibold">MERN (Mongo, Express, React, Node)</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-[#E8E8E8] dark:border-[#222429]">
                  <span className="text-[#929292]">Frontend Focus</span>
                  <span className="text-[#171717] dark:text-[#EDEDED] font-medium">React.js, SPA, Tailwind CSS</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-[#E8E8E8] dark:border-[#222429]">
                  <span className="text-[#929292]">Backend Focus</span>
                  <span className="text-[#171717] dark:text-[#EDEDED] font-medium">Node.js, Express, REST APIs</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-[#E8E8E8] dark:border-[#222429]">
                  <span className="text-[#929292]">Data Persistence</span>
                  <span className="text-[#171717] dark:text-[#EDEDED] font-medium">MongoDB, SQLite & MySQL</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#929292]">Availability</span>
                  <span className="text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Open to Opportunities
                  </span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-[#111216] border border-[#E8E8E8] dark:border-[#222429] text-xs font-mono text-[#666666] dark:text-[#A1A1AA] flex items-center gap-3">
              <Terminal className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
              <span>Targeting full-stack roles at product companies, high-growth startups, and engineering teams.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
