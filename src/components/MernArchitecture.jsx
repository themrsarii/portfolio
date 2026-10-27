import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers } from 'lucide-react';

export const MernArchitecture = () => {
  const [selectedLayer, setSelectedLayer] = useState('react');

  const layers = [
    {
      id: 'react',
      letter: 'R',
      name: 'React.js',
      role: 'Client-Side Interface',
      tagline: 'Declarative, component-driven UI architecture',
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-950/30',
      borderColor: 'border-cyan-500/40',
      details: [
        'Single-Page Application (SPA) architecture with client-side routing',
        'Custom hooks encapsulating API communication and state synchronization',
        'Virtual DOM reconciliation ensuring fluid 60fps rendering cycles',
        'Tailwind CSS design token integration for responsive, accessible styling'
      ],
      codeSample: `// Client-Side API Consumer Hook
const useApplications = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/v1/applications', { credentials: 'include' })
      .then(res => res.json())
      .then(payload => { setData(payload); setLoading(false); });
  }, []);

  return { data, loading };
};`
    },
    {
      id: 'express',
      letter: 'E',
      name: 'Express.js',
      role: 'REST API & Middleware Layer',
      tagline: 'Robust routing, request sanitization, and security guards',
      color: 'text-neutral-200',
      bgColor: 'bg-neutral-900/40',
      borderColor: 'border-neutral-500/40',
      details: [
        'RESTful modular route handlers with controller-service architecture',
        'Custom JWT authorization middleware with role validation (RBAC)',
        'Helmet security headers, rate-limiting, and CORS origin whitelisting',
        'Centralized async error handling middleware preventing server crashes'
      ],
      codeSample: `// Express Route Controller & Middleware
router.get('/api/v1/applications',
  authMiddleware.verifyToken,
  rateLimiter({ windowMs: 15 * 60 * 1000, max: 100 }),
  async (req, res, next) => {
    try {
      const items = await ApplicationService.getUserApps(req.user.id);
      return res.status(200).json({ success: true, data: items });
    } catch (err) {
      next(err);
    }
  }
);`
    },
    {
      id: 'node',
      letter: 'N',
      name: 'Node.js',
      role: 'Asynchronous JavaScript Runtime',
      tagline: 'Event-driven, non-blocking I/O execution engine',
      color: 'text-green-500',
      bgColor: 'bg-green-950/30',
      borderColor: 'border-green-500/40',
      details: [
        'V8 JavaScript engine executing unified language across client & server',
        'Non-blocking event loop capable of handling high concurrent HTTP connections',
        'Stream processing for file uploads, PDF generation, and LLM token feeds',
        'Environment variable security and native cluster worker process scaling'
      ],
      codeSample: `// Asynchronous Event Loop Worker
import http from 'node:http';
import app from './app.js';

const server = http.createServer(app);
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(\`[NODE] Runtime listening on port \${PORT}\`);
});`
    },
    {
      id: 'mongodb',
      letter: 'M',
      name: 'MongoDB',
      role: 'Document Database Store',
      tagline: 'Flexible BSON schema modeling and aggregation pipelines',
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-950/30',
      borderColor: 'border-emerald-500/40',
      details: [
        'Mongoose ODM with schema-level validation and lifecycle pre-save hooks',
        'Compound indexing strategies targeting sub-10ms query latency',
        'Aggregation pipelines for multi-stage analytics, grouping, and conversions',
        'Multi-document ACID transactions ensuring atomic financial & inventory ledgering'
      ],
      codeSample: `// Mongoose Schema with Compound Indexing
const ApplicationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  status: { type: String, enum: ['applied', 'interview', 'offer'], required: true },
  company: { type: String, required: true },
  appliedAt: { type: Date, default: Date.now }
});

ApplicationSchema.index({ userId: 1, status: 1 });`
    }
  ];

  const currentLayer = layers.find(l => l.id === selectedLayer) || layers[0];

  return (
    <section id="architecture" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-medium tracking-wide bg-[#11151C] text-indigo-400 border border-[#252B36] mb-3">
            <Layers className="w-3.5 h-3.5" />
            UNIFIED FULL-STACK ARCHITECTURE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F7FA] tracking-tight">
            The MERN Stack Architecture
          </h2>
          <p className="text-base text-[#98A1AF] mt-3 leading-relaxed">
            By leveraging a unified JavaScript and TypeScript ecosystem from browser DOM to database engine, MERN eliminates context switching and delivers type safety across every layer.
          </p>
        </div>

        {/* Connected Visual Flow (React -> Express -> Node -> MongoDB) */}
        <div className="relative mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {layers.map((layer, index) => {
              const isSelected = selectedLayer === layer.id;
              return (
                <button
                  key={layer.id}
                  onClick={() => setSelectedLayer(layer.id)}
                  className={`relative text-left p-4 sm:p-5 rounded-xl transition-all duration-300 flex flex-col justify-between ${
                    isSelected
                      ? `bg-[#11151C] border-2 ${layer.borderColor} shadow-xl shadow-indigo-500/10 scale-[1.02]`
                      : 'bg-[#0C0F14] border border-[#252B36] hover:border-neutral-700 opacity-80 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono font-black text-lg ${layer.color} ${layer.bgColor} border ${layer.borderColor}`}>
                      {layer.letter}
                    </span>
                    <span className="text-[10px] font-mono text-[#98A1AF]">
                      TIER 0{index + 1}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-bold text-sm sm:text-base text-[#F5F7FA]">{layer.name}</h3>
                    <p className="text-xs text-indigo-300 font-mono mt-0.5">{layer.role}</p>
                  </div>

                  {isSelected && (
                    <motion.div
                      layoutId="layerIndicator"
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-indigo-500 rotate-45"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Deep-Dive Card */}
        <div className="rounded-2xl bg-[#0C0F14] border border-[#252B36] p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start shadow-xl">
          
          {/* Left Details (7 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className={`text-2xl font-black font-mono ${currentLayer.color}`}>
                  {currentLayer.letter}
                </span>
                <div>
                  <h4 className="text-xl font-bold text-[#F5F7FA]">{currentLayer.name}</h4>
                  <span className="text-xs font-mono text-indigo-400">{currentLayer.role}</span>
                </div>
              </div>
              <p className="text-sm text-[#98A1AF] mt-2 leading-relaxed">
                {currentLayer.tagline}
              </p>
            </div>

            <div className="space-y-2.5">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold block">
                Technical Highlights:
              </span>
              {currentLayer.details.map((detail, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 shrink-0" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Code Example (5 cols) */}
          <div className="lg:col-span-6">
            <div className="bg-[#080B10] border border-[#252B36] rounded-xl p-4 font-mono text-xs overflow-hidden shadow-inner">
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-[#252B36]">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[10px] text-[#98A1AF]">{currentLayer.id}.implementation.js</span>
              </div>
              <pre className="text-neutral-300 leading-relaxed overflow-x-auto text-[11px] sm:text-xs">
                <code>{currentLayer.codeSample}</code>
              </pre>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
