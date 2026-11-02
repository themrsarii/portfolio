import React, { useState } from 'react';

export const MernArchitecture = () => {
  const [selectedLayer, setSelectedLayer] = useState('react');

  const layers = [
    {
      id: 'react',
      letter: 'R',
      name: 'React.js',
      role: 'Client-Side Interface',
      tagline: 'Declarative, component-driven UI architecture',
      fileName: 'react.specimen.js',
      details: [
        'Single-Page Application (SPA) architecture with modular component trees',
        'Custom hooks encapsulating API communication and state synchronization',
        'Virtual DOM reconciliation ensuring fluid, predictable render cycles',
        'Tailwind CSS design token integration for responsive, accessible styling'
      ],
      renderCode: () => (
        <>
          <div className="table-row">
            <span className="table-cell pr-4 text-right select-none text-[#768390]">1</span>
            <span className="table-cell"><span className="text-[#8B949E] italic">// Client-Side API Consumer Hook</span></span>
          </div>
          <div className="table-row">
            <span className="table-cell pr-4 text-right select-none text-[#768390]">2</span>
            <span className="table-cell"><span className="text-[#FF7B72]">import</span> &#123; useState, useEffect &#125; <span className="text-[#FF7B72]">from</span> <span className="text-[#9ECBFF]">'react'</span>;</span>
          </div>
          <div className="table-row">
            <span className="table-cell pr-4 text-right select-none text-[#768390]">3</span>
            <span className="table-cell"></span>
          </div>
          <div className="table-row">
            <span className="table-cell pr-4 text-right select-none text-[#768390]">4</span>
            <span className="table-cell"><span className="text-[#FF7B72]">export const</span> <span className="text-[#79B8FF] font-semibold">useApplications</span> = () =&gt; &#123;</span>
          </div>
          <div className="table-row">
            <span className="table-cell pr-4 text-right select-none text-[#768390]">5</span>
            <span className="table-cell">{'  '}<span className="text-[#FF7B72]">const</span> [data, setData] = <span className="text-[#B392F0]">useState</span>([]);</span>
          </div>
          <div className="table-row">
            <span className="table-cell pr-4 text-right select-none text-[#768390]">6</span>
            <span className="table-cell">{'  '}<span className="text-[#FF7B72]">const</span> [loading, setLoading] = <span className="text-[#B392F0]">useState</span>(<span className="text-[#79B8FF]">true</span>);</span>
          </div>
          <div className="table-row">
            <span className="table-cell pr-4 text-right select-none text-[#768390]">7</span>
            <span className="table-cell"></span>
          </div>
          <div className="table-row">
            <span className="table-cell pr-4 text-right select-none text-[#768390]">8</span>
            <span className="table-cell">{'  '}<span className="text-[#B392F0]">useEffect</span>(() =&gt; &#123;</span>
          </div>
          <div className="table-row">
            <span className="table-cell pr-4 text-right select-none text-[#768390]">9</span>
            <span className="table-cell">{'    '}<span className="text-[#79B8FF]">fetch</span>(<span className="text-[#9ECBFF]">'/api/v1/applications'</span>, &#123; credentials: <span className="text-[#9ECBFF]">'include'</span> &#125;)</span>
          </div>
          <div className="table-row">
            <span className="table-cell pr-4 text-right select-none text-[#768390]">10</span>
            <span className="table-cell">{'      '}.<span className="text-[#B392F0]">then</span>(res =&gt; res.<span className="text-[#79B8FF]">json</span>())</span>
          </div>
          <div className="table-row">
            <span className="table-cell pr-4 text-right select-none text-[#768390]">11</span>
            <span className="table-cell">{'      '}.<span className="text-[#B392F0]">then</span>(payload =&gt; &#123;</span>
          </div>
          <div className="table-row">
            <span className="table-cell pr-4 text-right select-none text-[#768390]">12</span>
            <span className="table-cell">{'        '}<span className="text-[#79B8FF]">setData</span>(payload);</span>
          </div>
          <div className="table-row">
            <span className="table-cell pr-4 text-right select-none text-[#768390]">13</span>
            <span className="table-cell">{'        '}<span className="text-[#79B8FF]">setLoading</span>(<span className="text-[#79B8FF]">false</span>);</span>
          </div>
          <div className="table-row">
            <span className="table-cell pr-4 text-right select-none text-[#768390]">14</span>
            <span className="table-cell">{'      '}&#125;);</span>
          </div>
          <div className="table-row">
            <span className="table-cell pr-4 text-right select-none text-[#768390]">15</span>
            <span className="table-cell">{'  '}&#125;, []);</span>
          </div>
          <div className="table-row">
            <span className="table-cell pr-4 text-right select-none text-[#768390]">16</span>
            <span className="table-cell"></span>
          </div>
          <div className="table-row">
            <span className="table-cell pr-4 text-right select-none text-[#768390]">17</span>
            <span className="table-cell">{'  '}<span className="text-[#FF7B72]">return</span> &#123; data, loading &#125;;</span>
          </div>
          <div className="table-row">
            <span className="table-cell pr-4 text-right select-none text-[#768390]">18</span>
            <span className="table-cell">&#125;;</span>
          </div>
        </>
      )
    },
    {
      id: 'express',
      letter: 'E',
      name: 'Express.js',
      role: 'REST API & Middleware Layer',
      tagline: 'Robust routing, request sanitization, and security guards',
      fileName: 'express.specimen.js',
      details: [
        'RESTful modular route handlers with controller-service architecture',
        'Custom JWT authorization middleware with role validation (RBAC)',
        'Helmet security headers, rate-limiting, and CORS origin whitelisting',
        'Centralized async error handling middleware preventing server crashes'
      ],
      renderCode: () => (
        <>
          <div className="table-row">
            <span className="table-cell pr-4 text-right select-none text-[#768390]">1</span>
            <span className="table-cell"><span className="text-[#8B949E] italic">// Express Route Controller & Middleware Pipeline</span></span>
          </div>
          <div className="table-row">
            <span className="table-cell pr-4 text-right select-none text-[#768390]">2</span>
            <span className="table-cell">router.<span className="text-[#B392F0]">get</span>(<span className="text-[#9ECBFF]">'/api/v1/applications'</span>,</span>
          </div>
          <div className="table-row">
            <span className="table-cell pr-4 text-right select-none text-[#768390]">3</span>
            <span className="table-cell">{'  '}authMiddleware.<span className="text-[#79B8FF]">verifyToken</span>,</span>
          </div>
          <div className="table-row">
            <span className="table-cell pr-4 text-right select-none text-[#768390]">4</span>
            <span className="table-cell">{'  '}<span className="text-[#B392F0]">rateLimiter</span>(&#123; windowMs: <span className="text-[#79B8FF]">15 * 60 * 1000</span>, max: <span className="text-[#79B8FF]">100</span> &#125;),</span>
          </div>
          <div className="table-row">
            <span className="table-cell pr-4 text-right select-none text-[#768390]">5</span>
            <span className="table-cell">{'  '}<span className="text-[#FF7B72]">async</span> (req, res, next) =&gt; &#123;</span>
          </div>
          <div className="table-row">
            <span className="table-cell pr-4 text-right select-none text-[#768390]">6</span>
            <span className="table-cell">{'    '}<span className="text-[#FF7B72]">try</span> &#123;</span>
          </div>
          <div className="table-row">
            <span className="table-cell pr-4 text-right select-none text-[#768390]">7</span>
            <span className="table-cell">{'      '}<span className="text-[#FF7B72]">const</span> items = <span className="text-[#FF7B72]">await</span> ApplicationService.<span className="text-[#79B8FF]">getUserApps</span>(req.user.id);</span>
          </div>
          <div className="table-row">
            <span className="table-cell pr-4 text-right select-none text-[#768390]">8</span>
            <span className="table-cell">{'      '}<span className="text-[#FF7B72]">return</span> res.<span className="text-[#B392F0]">status</span>(<span className="text-[#79B8FF]">200</span>).<span className="text-[#79B8FF]">json</span>(&#123; success: <span className="text-[#79B8FF]">true</span>, data: items &#125;);</span>
          </div>
          <div className="table-row">
            <span className="table-cell pr-4 text-right select-none text-[#768390]">9</span>
            <span className="table-cell">{'    '}&#125; <span className="text-[#FF7B72]">catch</span> (err) &#123;</span>
          </div>
          <div className="table-row">
            <span className="table-cell pr-4 text-right select-none text-[#768390]">10</span>
            <span className="table-cell">{'      '}<span className="text-[#B392F0]">next</span>(err);</span>
          </div>
          <div className="table-row">
            <span className="table-cell pr-4 text-right select-none text-[#768390]">11</span>
            <span className="table-cell">{'    '}&#125;</span>
          </div>
          <div className="table-row">
            <span className="table-cell pr-4 text-right select-none text-[#768390]">12</span>
            <span className="table-cell">{'  '}&#125;</span>
          </div>
          <div className="table-row">
            <span className="table-cell pr-4 text-right select-none text-[#768390]">13</span>
            <span className="table-cell">);</span>
          </div>
        </>
      )
    },
    {
      id: 'node',
      letter: 'N',
      name: 'Node.js',
      role: 'Asynchronous JavaScript Runtime',
      tagline: 'Event-driven, non-blocking I/O execution engine',
      fileName: 'node.specimen.js',
      details: [
        'V8 JavaScript engine executing unified language across client & server',
        'Non-blocking event loop capable of handling high concurrent HTTP connections',
        'Stream processing for file uploads, PDF generation, and token feeds',
        'Environment variable security and native cluster worker process scaling'
      ],
      renderCode: () => (
        <>
          <div className="table-row">
            <span className="table-cell pr-4 text-right select-none text-[#768390]">1</span>
            <span className="table-cell"><span className="text-[#8B949E] italic">// Asynchronous Event Loop Server Worker</span></span>
          </div>
          <div className="table-row">
            <span className="table-cell pr-4 text-right select-none text-[#768390]">2</span>
            <span className="table-cell"><span className="text-[#FF7B72]">import</span> http <span className="text-[#FF7B72]">from</span> <span className="text-[#9ECBFF]">'node:http'</span>;</span>
          </div>
          <div className="table-row">
            <span className="table-cell pr-4 text-right select-none text-[#768390]">3</span>
            <span className="table-cell"><span className="text-[#FF7B72]">import</span> app <span className="text-[#FF7B72]">from</span> <span className="text-[#9ECBFF]">'./app.js'</span>;</span>
          </div>
          <div className="table-row">
            <span className="table-cell pr-4 text-right select-none text-[#768390]">4</span>
            <span className="table-cell"></span>
          </div>
          <div className="table-row">
            <span className="table-cell pr-4 text-right select-none text-[#768390]">5</span>
            <span className="table-cell"><span className="text-[#FF7B72]">const</span> server = http.<span className="text-[#79B8FF]">createServer</span>(app);</span>
          </div>
          <div className="table-row">
            <span className="table-cell pr-4 text-right select-none text-[#768390]">6</span>
            <span className="table-cell"><span className="text-[#FF7B72]">const</span> PORT = process.env.PORT || <span className="text-[#79B8FF]">5000</span>;</span>
          </div>
          <div className="table-row">
            <span className="table-cell pr-4 text-right select-none text-[#768390]">7</span>
            <span className="table-cell"></span>
          </div>
          <div className="table-row">
            <span className="table-cell pr-4 text-right select-none text-[#768390]">8</span>
            <span className="table-cell">server.<span className="text-[#B392F0]">listen</span>(PORT, () =&gt; &#123;</span>
          </div>
          <div className="table-row">
            <span className="table-cell pr-4 text-right select-none text-[#768390]">9</span>
            <span className="table-cell">{'  '}console.<span className="text-[#79B8FF]">log</span>(<span className="text-[#9ECBFF]">`[NODE] Runtime listening on port $&#123;PORT&#125;`</span>);</span>
          </div>
          <div className="table-row">
            <span className="table-cell pr-4 text-right select-none text-[#768390]">10</span>
            <span className="table-cell">&#125;);</span>
          </div>
        </>
      )
    },
    {
      id: 'mongodb',
      letter: 'M',
      name: 'MongoDB',
      role: 'Document Database Store',
      tagline: 'Flexible BSON schema modeling and aggregation pipelines',
      fileName: 'mongodb.specimen.js',
      details: [
        'Mongoose ODM with schema-level validation and lifecycle pre-save hooks',
        'Compound indexing strategies targeting sub-10ms query latency',
        'Aggregation pipelines for multi-stage analytics, grouping, and conversions',
        'Multi-document ACID transactions ensuring atomic financial & inventory ledgering'
      ],
      renderCode: () => (
        <>
          <div className="table-row">
            <span className="table-cell pr-4 text-right select-none text-[#768390]">1</span>
            <span className="table-cell"><span className="text-[#8B949E] italic">// Mongoose Schema with Compound Indexing</span></span>
          </div>
          <div className="table-row">
            <span className="table-cell pr-4 text-right select-none text-[#768390]">2</span>
            <span className="table-cell"><span className="text-[#FF7B72]">const</span> ApplicationSchema = <span className="text-[#FF7B72]">new</span> mongoose.<span className="text-[#79B8FF]">Schema</span>(&#123;</span>
          </div>
          <div className="table-row">
            <span className="table-cell pr-4 text-right select-none text-[#768390]">3</span>
            <span className="table-cell">{'  '}userId: &#123; type: mongoose.Schema.Types.ObjectId, ref: <span className="text-[#9ECBFF]">'User'</span>, required: <span className="text-[#79B8FF]">true</span> &#125;,</span>
          </div>
          <div className="table-row">
            <span className="table-cell pr-4 text-right select-none text-[#768390]">4</span>
            <span className="table-cell">{'  '}status: &#123; type: String, enum: [<span className="text-[#9ECBFF]">'applied'</span>, <span className="text-[#9ECBFF]">'interview'</span>, <span className="text-[#9ECBFF]">'offer'</span>] &#125;,</span>
          </div>
          <div className="table-row">
            <span className="table-cell pr-4 text-right select-none text-[#768390]">5</span>
            <span className="table-cell">{'  '}company: &#123; type: String, required: <span className="text-[#79B8FF]">true</span> &#125;,</span>
          </div>
          <div className="table-row">
            <span className="table-cell pr-4 text-right select-none text-[#768390]">6</span>
            <span className="table-cell">{'  '}appliedAt: &#123; type: Date, default: Date.now &#125;</span>
          </div>
          <div className="table-row">
            <span className="table-cell pr-4 text-right select-none text-[#768390]">7</span>
            <span className="table-cell">&#125;);</span>
          </div>
          <div className="table-row">
            <span className="table-cell pr-4 text-right select-none text-[#768390]">8</span>
            <span className="table-cell"></span>
          </div>
          <div className="table-row">
            <span className="table-cell pr-4 text-right select-none text-[#768390]">9</span>
            <span className="table-cell"><span className="text-[#8B949E] italic">// Compound indexing for sub-10ms filter performance</span></span>
          </div>
          <div className="table-row">
            <span className="table-cell pr-4 text-right select-none text-[#768390]">10</span>
            <span className="table-cell">ApplicationSchema.<span className="text-[#B392F0]">index</span>(&#123; userId: <span className="text-[#79B8FF]">1</span>, status: <span className="text-[#79B8FF]">1</span> &#125;);</span>
          </div>
        </>
      )
    }
  ];

  const currentLayer = layers.find(l => l.id === selectedLayer) || layers[0];

  return (
    <section id="architecture" className="py-20 lg:py-28 bg-[#F7F7F5] dark:bg-[#0E0F13] border-b border-[#E8E8E8] dark:border-[#222429]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 pb-6 border-b border-[#E8E8E8] dark:border-[#222429] gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400"></span>
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#666666] dark:text-[#A1A1AA]">
                System Architecture
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#171717] dark:text-[#EDEDED] tracking-tight">
              MERN Stack Architecture
            </h2>
            <p className="text-base text-[#666666] dark:text-[#A1A1AA] mt-2 max-w-2xl leading-relaxed">
              Unified JavaScript/TypeScript engineering from browser DOM to database engine, eliminating context switching and establishing type safety.
            </p>
          </div>

          <div className="text-xs font-mono text-[#666666] dark:text-[#A1A1AA] bg-white dark:bg-[#131418] border border-[#E8E8E8] dark:border-[#222429] px-3 py-1.5 rounded-md self-start md:self-auto">
            4 Integrated Tiers
          </div>
        </div>

        {/* 4 Interactive Tier Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {layers.map((layer, index) => {
            const isSelected = selectedLayer === layer.id;
            return (
              <button
                key={layer.id}
                onClick={() => setSelectedLayer(layer.id)}
                className={`text-left p-4 sm:p-5 rounded-xl transition-all duration-150 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white dark:bg-[#141418] border-2 border-indigo-600 dark:border-indigo-500 shadow-sm'
                    : 'bg-white/60 dark:bg-[#111216] border border-[#E8E8E8] dark:border-[#222429] hover:border-[#D4D4D4] dark:hover:border-[#323640]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`w-8 h-8 rounded-md flex items-center justify-center font-mono font-bold text-sm ${
                    isSelected 
                      ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800' 
                      : 'bg-[#F2F2F0] dark:bg-[#181920] text-[#666666] dark:text-[#A1A1AA]'
                  }`}>
                    {layer.letter}
                  </span>
                  <span className="text-[10px] font-mono text-[#595959] dark:text-[#A1A1AA]">
                    Tier 0{index + 1}
                  </span>
                </div>

                <div>
                  <h3 className="font-semibold text-sm sm:text-base text-[#171717] dark:text-[#EDEDED]">
                    {layer.name}
                  </h3>
                  <p className="text-xs font-mono text-[#666666] dark:text-[#595959] dark:text-[#A1A1AA] mt-0.5 truncate">
                    {layer.role}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Deep Dive Card */}
        <div className="rounded-2xl bg-white dark:bg-[#111216] border border-[#E8E8E8] dark:border-[#222429] p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start shadow-sm">
          
          {/* Details (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xl font-bold font-mono text-indigo-600 dark:text-indigo-400">
                  {currentLayer.letter}
                </span>
                <div>
                  <h4 className="text-xl font-bold text-[#171717] dark:text-[#EDEDED]">
                    {currentLayer.name}
                  </h4>
                  <span className="text-xs font-mono text-[#666666] dark:text-[#A1A1AA]">
                    {currentLayer.role}
                  </span>
                </div>
              </div>
              <p className="text-sm text-[#666666] dark:text-[#A1A1AA] mt-2 leading-relaxed">
                {currentLayer.tagline}
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#171717] dark:text-[#EDEDED] font-semibold block">
                Architectural Principles
              </span>
              {currentLayer.details.map((detail, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#666666] dark:text-[#A1A1AA]">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400 mt-2 shrink-0" />
                  <span className="leading-relaxed">{detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Authentic Code Editor Specimen with Mac Window Controls (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-[#0D0E12] border border-[#222429] rounded-xl overflow-hidden shadow-2xl">
              
              {/* Window Header Bar with authentic macOS Control Dots */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-[#14161E] border-b border-[#222429]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E] shadow-sm hover:opacity-80 transition-opacity cursor-pointer" title="Close" />
                  <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123] shadow-sm hover:opacity-80 transition-opacity cursor-pointer" title="Minimize" />
                  <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29] shadow-sm hover:opacity-80 transition-opacity cursor-pointer" title="Expand" />
                </div>

                {/* Editor File Tab */}
                <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#0D0E12] border border-[#222429] text-[11px] text-[#A1A1AA] font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                  <span>{currentLayer.fileName}</span>
                </div>

                <span className="text-[10px] font-mono text-[#8B949E] uppercase hidden sm:inline">
                  JavaScript · UTF-8
                </span>
              </div>

              {/* Code Workspace with Line Numbers & Rich Syntax Highlighting */}
              <div className="p-4 sm:p-5 font-mono text-xs overflow-x-auto text-[#E1E4E8] leading-relaxed">
                <div className="table w-full">
                  {currentLayer.renderCode()}
                </div>
              </div>

              {/* Editor Status Bar */}
              <div className="px-4 py-1.5 bg-[#090A0D] border-t border-[#1C1E26] flex items-center justify-between text-[10px] font-mono text-[#8B949E]">
                <span>Spaces: 2</span>
                <span>MERN Architecture Tier</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default MernArchitecture;
