import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Database, BarChart3, CheckCircle } from 'lucide-react';

export const DataTransformationVisual: React.FC = () => {
  const [activeStage, setActiveStage] = useState<number>(0);

  const stages = [
    {
      id: 'ai',
      step: '01',
      title: 'AI & Computational Logic',
      subtitle: 'Raw Data & Algorithms',
      desc: 'High-dimensional inputs, feature extraction, and foundational machine-learning logic.',
      icon: <Sparkles className="w-4 h-4 text-sky-400" />,
    },
    {
      id: 'data',
      step: '02',
      title: 'Structured Data Pipeline',
      subtitle: 'Python, SQL & Modeling',
      desc: 'Relational schemas, cleaning with Pandas/NumPy, data consistency and normalization.',
      icon: <Database className="w-4 h-4 text-cyan-400" />,
    },
    {
      id: 'insights',
      step: '03',
      title: 'Analytical Insights',
      subtitle: 'Statistical EDA & BI Dashboards',
      desc: 'Visualizing distributions, identifying patterns, and modeling KPIs in Power BI.',
      icon: <BarChart3 className="w-4 h-4 text-emerald-400" />,
    },
    {
      id: 'decisions',
      step: '04',
      title: 'Business Decisions',
      subtitle: 'Actionable Strategic Outcomes',
      desc: 'Bridging engineering insights to stakeholder decisions that optimize operations.',
      icon: <CheckCircle className="w-4 h-4 text-indigo-400" />,
    },
  ];

  // Optional subtle cycle
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [stages.length]);

  return (
    <div className="bg-[#0b0e14] border border-white/10 rounded-lg p-6 sm:p-7 relative overflow-hidden">
      
      {/* Visual Header */}
      <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-5">
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-mono text-sky-400 uppercase tracking-wider">
            Data Transformation Pipeline
          </span>
        </div>
        <span className="text-[11px] font-mono text-slate-500">
          AI → Data → Insights → Decisions
        </span>
      </div>

      {/* Abstract Animated Transformation Canvas */}
      <div className="h-44 sm:h-48 w-full bg-[#07090c] rounded-md border border-white/5 relative flex items-center justify-center overflow-hidden mb-6">
        
        {/* Subtle background coordinate grid */}
        <div 
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
            backgroundSize: '20px 20px',
          }}
        />

        {/* Stage 0: Scattered Raw Data Nodes (AI / Raw Data) */}
        <div 
          className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
            activeStage === 0 ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
          }`}
        >
          <div className="relative w-64 h-32">
            {[
              { top: '20%', left: '15%', size: 'w-2 h-2', bg: 'bg-sky-400' },
              { top: '45%', left: '30%', size: 'w-2.5 h-2.5', bg: 'bg-slate-300' },
              { top: '15%', left: '55%', size: 'w-2 h-2', bg: 'bg-sky-500' },
              { top: '70%', left: '20%', size: 'w-1.5 h-1.5', bg: 'bg-slate-400' },
              { top: '65%', left: '60%', size: 'w-3 h-3', bg: 'bg-sky-400 ring-2 ring-sky-400/30' },
              { top: '35%', left: '80%', size: 'w-2 h-2', bg: 'bg-slate-300' },
              { top: '75%', left: '85%', size: 'w-2 h-2', bg: 'bg-sky-400' },
            ].map((pt, idx) => (
              <span
                key={idx}
                className={`absolute ${pt.top} ${pt.left} ${pt.size} ${pt.bg} rounded-full transition-all duration-500`}
                style={{ animation: `pulse 3s infinite ease-in-out ${idx * 0.4}s` }}
              />
            ))}
            {/* Organic connection filaments */}
            <svg className="absolute inset-0 w-full h-full stroke-slate-600/40 stroke-1" fill="none">
              <path d="M 40 28 L 78 60 L 140 20 L 155 85 L 205 45" />
              <path d="M 52 90 L 78 60 L 220 95" strokeDasharray="3 3" />
            </svg>
            <div className="absolute bottom-1 right-2 text-[10px] font-mono text-slate-500">
              Raw Computational Inputs
            </div>
          </div>
        </div>

        {/* Stage 1: Structured Grid Pipeline (SQL & Python Processing) */}
        <div 
          className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
            activeStage === 1 ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
          }`}
        >
          <div className="relative w-64 h-32 flex flex-col justify-center gap-2">
            {[1, 2, 3].map((row) => (
              <div key={row} className="flex items-center justify-between px-4 py-1.5 bg-white/[0.03] border border-white/5 rounded">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span className="text-[11px] font-mono text-slate-300">dim_metric_0{row}</span>
                </div>
                <div className="flex items-center gap-3 text-[10px] font-mono text-slate-500">
                  <span>TRANSFORM</span>
                  <span className="text-cyan-400 font-semibold">VALID</span>
                </div>
              </div>
            ))}
            <div className="text-[10px] font-mono text-slate-500 text-right pr-2">
              Normalized Schema Pipeline
            </div>
          </div>
        </div>

        {/* Stage 2: Analytical Visual Insights (EDA & Distribution Curve) */}
        <div 
          className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
            activeStage === 2 ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
          }`}
        >
          <div className="relative w-64 h-32 flex flex-col justify-end p-3">
            <div className="flex items-end justify-between h-20 gap-2 border-b border-white/10 pb-1">
              {[35, 55, 40, 80, 65, 95, 75].map((val, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    className="w-full bg-gradient-to-t from-emerald-600/40 to-emerald-400 rounded-t-sm transition-all duration-500"
                    style={{ height: `${val}%` }}
                  />
                  <span className="text-[9px] font-mono text-slate-600">t{i + 1}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 mt-1">
              <span>Trend Cluster: +24%</span>
              <span className="text-emerald-400 font-semibold">Analytical Clarity</span>
            </div>
          </div>
        </div>

        {/* Stage 3: Business Decision (Actionable Value Driver) */}
        <div 
          className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
            activeStage === 3 ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'
          }`}
        >
          <div className="relative w-64 h-32 flex flex-col justify-center items-center text-center p-3">
            <div className="w-10 h-10 rounded-full bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-2">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div className="text-xs font-bold text-white uppercase tracking-wider">
              Strategic Decision Executed
            </div>
            <div className="text-[11px] text-slate-400 mt-0.5 font-mono">
              Resource Allocation Optimized
            </div>
          </div>
        </div>

      </div>

      {/* Stage Selector Controls */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {stages.map((stage, idx) => {
          const isActive = activeStage === idx;
          return (
            <button
              key={stage.id}
              onClick={() => setActiveStage(idx)}
              className={`p-2.5 rounded-sm border text-left transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#141822] border-sky-500/40 ring-1 ring-sky-500/20'
                  : 'bg-black/20 border-white/5 hover:border-white/10'
              }`}
            >
              <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 mb-1">
                <span>{stage.step}</span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />}
              </div>
              <div className="text-xs font-semibold text-slate-200 truncate">
                {stage.title.split(' ')[0]} {stage.title.split(' ')[1] || ''}
              </div>
            </button>
          );
        })}
      </div>

      {/* Stage Active Description */}
      <div className="mt-4 pt-3 border-t border-white/5 flex items-start gap-2.5">
        <div className="mt-0.5 shrink-0">
          {stages[activeStage].icon}
        </div>
        <div>
          <div className="text-xs font-semibold text-slate-200">
            {stages[activeStage].title} — <span className="text-sky-400 font-mono text-[11px]">{stages[activeStage].subtitle}</span>
          </div>
          <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
            {stages[activeStage].desc}
          </p>
        </div>
      </div>

    </div>
  );
};
