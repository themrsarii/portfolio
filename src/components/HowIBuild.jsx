import React from 'react';
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
      description: "Deconstruct the core problem, user workflows, operational bottlenecks, and technical constraints before writing code."
    },
    {
      number: "02",
      title: "Plan",
      icon: Compass,
      description: "Define normalized data schemas, map RESTful API endpoints, specify component states, and sketch interface ergonomics."
    },
    {
      number: "03",
      title: "Build",
      icon: Code,
      description: "Implement modular React components, robust Express routes, transactional database queries, and type-safe flows."
    },
    {
      number: "04",
      title: "Test",
      icon: CheckCircle,
      description: "Validate API response payloads via Postman, test edge conditions, enforce error handling, and audit viewports."
    },
    {
      number: "05",
      title: "Refine",
      icon: RefreshCw,
      description: "Index database queries, profile Core Web Vitals, trim bundle footprints, and refine component maintainability."
    }
  ];

  const capabilities = [
    { name: "Frontend Engineering", icon: Globe, desc: "Component-driven single page applications" },
    { name: "React Architecture", icon: Layout, desc: "Custom hooks, clean state trees, and fast render cycles" },
    { name: "RESTful APIs", icon: Terminal, desc: "Predictable, documented HTTP endpoints with JSON contracts" },
    { name: "Authentication & RBAC", icon: Shield, desc: "JWT tokens, secure session handling, and role guards" },
    { name: "Database Design", icon: Database, desc: "MongoDB schemas, compound indexing, and SQLite offline stores" },
    { name: "Data CRUD Systems", icon: Layers, desc: "Transactional operations with optimistic UI feedback" },
    { name: "Responsive UI/UX", icon: Cpu, desc: "Adaptive layouts tested across 360px to 1440px+ viewports" },
    { name: "State Synchronization", icon: Workflow, desc: "Predictable unidirectional data flows without prop bloat" },
    { name: "External Integrations", icon: Zap, desc: "Payment gateways, thermal print protocols, and webhooks" },
    { name: "Production Deployment", icon: CheckCircle, desc: "Static hosting, Node runtimes, and environment hardening" }
  ];

  return (
    <section id="engineering" className="py-20 lg:py-28 bg-[#FFFFFF] dark:bg-[#090A0C] border-b border-[#E8E8E8] dark:border-[#222429]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#E8E8E8] dark:border-[#222429] gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400"></span>
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#666666] dark:text-[#A1A1AA]">
                Process
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#171717] dark:text-[#EDEDED] tracking-tight">
              My Development Process
            </h2>
            <p className="text-base text-[#666666] dark:text-[#A1A1AA] mt-2 max-w-2xl leading-relaxed">
              How I approach building projects from initial concept through deployment.
            </p>
          </div>

          <div className="text-xs font-mono text-[#666666] dark:text-[#A1A1AA] bg-[#F7F7F5] dark:bg-[#131418] border border-[#E8E8E8] dark:border-[#222429] px-3 py-1.5 rounded-md self-start md:self-auto">
            Process & Capabilities
          </div>
        </div>

        {/* 5 Stages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {stages.map((stage) => {
            const Icon = stage.icon;
            return (
              <div
                key={stage.number}
                className="p-5 rounded-xl bg-[#F7F7F5] dark:bg-[#111216] border border-[#E8E8E8] dark:border-[#222429] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-[#4B5563] dark:text-[#A1A1AA]">
                      Step {stage.number}
                    </span>
                    <div className="w-7 h-7 rounded-md bg-white dark:bg-[#181920] border border-[#E8E8E8] dark:border-[#282B34] flex items-center justify-center text-[#171717] dark:text-[#EDEDED]">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-[#171717] dark:text-[#EDEDED] mb-2">
                    {stage.title}
                  </h3>
                  <p className="text-xs text-[#4B5563] dark:text-[#A1A1AA] leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Capabilities Grid */}
        <div className="pt-8 border-t border-[#E8E8E8] dark:border-[#222429]">
          <div className="flex items-center justify-between mb-6">
            <span className="font-mono text-xs font-semibold text-[#171717] dark:text-[#EDEDED] uppercase tracking-wider">
              Core Capabilities
            </span>
            <span className="text-[11px] font-mono text-[#666666] dark:text-[#A1A1AA]">
              Areas of Expertise
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.name}
                  className="p-4 rounded-lg bg-white dark:bg-[#111216] border border-[#E8E8E8] dark:border-[#222429] flex flex-col justify-between transition-colors hover:border-[#D4D4D4] dark:hover:border-[#323640]"
                >
                  <div>
                    <div className="w-7 h-7 rounded-md bg-[#F7F7F5] dark:bg-[#181920] flex items-center justify-center text-[#171717] dark:text-[#EDEDED] mb-3">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <h4 className="text-xs font-bold text-[#171717] dark:text-[#EDEDED]">
                      {cap.name}
                    </h4>
                    <p className="text-[11px] text-[#666666] dark:text-[#A1A1AA] mt-1 leading-snug">
                      {cap.desc}
                    </p>
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

export default HowIBuild;
