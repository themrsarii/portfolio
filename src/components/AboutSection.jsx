import React from 'react';
import { Terminal } from 'lucide-react';

export const AboutSection = () => {
  const principles = [
    { title: "Pragmatic Architecture", desc: "Choosing reliable, maintainable patterns over fleeting hype. Clean code, predictable state, and explicit typing." },
    { title: "Product-Minded Engineering", desc: "Building software that directly solves real workflow bottlenecks rather than creating abstract vanity demos." },
    { title: "Performance by Default", desc: "Measuring Core Web Vitals, trimming bundle bloat, indexing databases, and minimizing network roundtrips." }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#0C0F14]/40 border-y border-[#252B36]/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-indigo-400">
                Engineering Philosophy
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F7FA] tracking-tight">
              Developer focused on building useful software.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#98A1AF] leading-relaxed">
              <p>
                I am <strong className="text-[#F5F7FA]">Muhammad Sarfaraz</strong>, a MERN Stack Developer specializing in building end-to-end web applications that bridge responsive frontend interfaces with scalable backend services.
              </p>
              <p>
                My engineering identity is anchored in the modern JavaScript ecosystem. On the frontend, I construct modular single-page applications with React and Tailwind CSS, focusing on snappy responsiveness, accessibility, and intuitive user ergonomics. On the backend, I design RESTful APIs using Node.js and Express, backed by MongoDB schemas built for transactional integrity and low-latency queries.
              </p>
              <p>
                I continuously expand my technical capabilities into system design, advanced TypeScript, and AI integrations, with an emphasis on production stability and measurable business value.
              </p>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              {principles.map((p, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#11151C] border border-[#252B36]">
                  <h4 className="text-xs font-bold text-[#F5F7FA] mb-1.5">{p.title}</h4>
                  <p className="text-[11px] text-[#98A1AF] leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Key Stats / Technical Badges (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-[#11151C] border border-[#252B36] shadow-xl">
              <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 font-semibold block mb-4">
                Specialization Summary
              </span>

              <div className="space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-[#252B36]/60">
                  <span className="text-[#98A1AF]">Primary Stack</span>
                  <span className="text-[#F5F7FA] font-bold">MERN (Mongo, Express, React, Node)</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-[#252B36]/60">
                  <span className="text-[#98A1AF]">Frontend Focus</span>
                  <span className="text-cyan-400 font-semibold">React.js, SPA, Tailwind CSS</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-[#252B36]/60">
                  <span className="text-[#98A1AF]">Backend Focus</span>
                  <span className="text-emerald-400 font-semibold">Node.js, Express, REST APIs</span>
                </div>
                <div className="flex items-center justify-between pb-3 border-b border-[#252B36]/60">
                  <span className="text-[#98A1AF]">Data Persistence</span>
                  <span className="text-indigo-400 font-semibold">MongoDB, MySQL & SQLite</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#98A1AF]">Hiring Readiness</span>
                  <span className="text-emerald-400 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Immediate Availability
                  </span>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#090C10] border border-[#252B36] text-xs font-mono text-[#98A1AF] flex items-center gap-3">
              <Terminal className="w-5 h-5 text-indigo-400 shrink-0" />
              <span>Targeting roles at product companies, high-growth startups, and leading engineering firms.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
