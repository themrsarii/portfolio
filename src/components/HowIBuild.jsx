import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, Compass, Code, CheckCircle, RefreshCw, 
  Layers, Database, Shield, Zap, Terminal, Globe, Cpu, Layout, Workflow
} from 'lucide-react';

export const HowIBuild = () => {
  const stages = [
    {
      number: "01",
      title: "Understand",
      icon: Search,
      color: "text-blue-400",
      border: "border-blue-500/30",
      description: "Deconstruct the core problem, user personas, technical constraints, and business goals before writing a single line of code."
    },
    {
      number: "02",
      title: "Plan",
      icon: Compass,
      color: "text-indigo-400",
      border: "border-indigo-500/30",
      description: "Define MongoDB document schemas, plan normalized REST endpoints, design component hierarchy, and sketch interface workflows."
    },
    {
      number: "03",
      title: "Build",
      icon: Code,
      color: "text-purple-400",
      border: "border-purple-500/30",
      description: "Implement clean React components, robust Express controllers, transactional Mongoose logic, and type-safe data flows."
    },
    {
      number: "04",
      title: "Test",
      icon: CheckCircle,
      color: "text-emerald-400",
      border: "border-emerald-500/30",
      description: "Validate endpoints via Postman, handle edge-case error boundaries, verify responsive viewports, and eliminate console warnings."
    },
    {
      number: "05",
      title: "Improve",
      icon: RefreshCw,
      color: "text-amber-400",
      border: "border-amber-500/30",
      description: "Profile database queries with compound indexes, optimize Core Web Vitals (LCP/CLS), and refactor for maintainability."
    }
  ];

  const capabilities = [
    { name: "Frontend Development", icon: Globe, desc: "Modern, component-driven single page applications" },
    { name: "React Architecture", icon: Layout, desc: "Custom hooks, clean state trees, and performance tuning" },
    { name: "REST APIs", icon: Terminal, desc: "Predictable, documented HTTP endpoints with JSON contracts" },
    { name: "Authentication", icon: Shield, desc: "JWT tokens, bcrypt passwords, and HTTP-only cookie security" },
    { name: "Database Design", icon: Database, desc: "MongoDB BSON schemas, indexing, and transactional integrity" },
    { name: "CRUD Systems", icon: Layers, desc: "High-density data operations with optimistic client updates" },
    { name: "Responsive UI", icon: Cpu, desc: "Fluid layouts tested from 360px mobile to 1440px+ displays" },
    { name: "State Management", icon: Workflow, desc: "Predictable unidirectional data flow and clean prop drilling avoidance" },
    { name: "API Integration", icon: Zap, desc: "Third-party APIs (OpenAI, payment gateways, webhooks)" },
    { name: "Deployment", icon: CheckCircle, desc: "Production cloud setups on Vercel, Render, and GitHub Actions" }
  ];

  return (
    <section id="engineering" className="py-20 lg:py-28 bg-[#0C0F14]/40 border-y border-[#252B36]/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-indigo-400">
              Engineering Methodology
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F7FA] tracking-tight">
            How I Build Software
          </h2>
          <p className="text-base text-[#98A1AF] mt-2 max-w-2xl">
            A disciplined five-stage development lifecycle focused on predictability, code quality, and real-world system resilience.
          </p>
        </div>

        {/* 5 Stages Flow */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-16">
          {stages.map((stage, idx) => {
            const Icon = stage.icon;
            return (
              <motion.div
                key={stage.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`relative p-5 rounded-xl bg-[#11151C] border ${stage.border} flex flex-col justify-between group hover:-translate-y-1 transition-all duration-200`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-neutral-500">
                      STAGE {stage.number}
                    </span>
                    <div className={`p-2 rounded-lg bg-[#0C0F14] ${stage.color}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-[#F5F7FA] mb-2">{stage.title}</h3>
                  <p className="text-xs text-[#98A1AF] leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Engineering Capabilities Grid */}
        <div className="pt-8 border-t border-[#252B36]/60">
          <div className="flex items-center justify-between mb-6">
            <span className="font-mono text-xs font-semibold text-neutral-300 uppercase tracking-wider">
              Engineering Capabilities & Specialties
            </span>
            <span className="text-[11px] font-mono text-indigo-400">
              10 Core Competencies
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.name}
                  className="p-3.5 rounded-lg bg-[#0C0F14] border border-[#252B36] hover:border-indigo-500/40 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="w-7 h-7 rounded-md bg-[#151B24] flex items-center justify-center text-indigo-400 mb-2.5">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <h4 className="text-xs font-bold text-[#F5F7FA]">{cap.name}</h4>
                    <p className="text-[11px] text-[#98A1AF] mt-1 leading-snug">{cap.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
