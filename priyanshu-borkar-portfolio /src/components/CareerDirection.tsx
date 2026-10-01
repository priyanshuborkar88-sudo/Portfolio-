import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Compass, ArrowDown, ChevronRight, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';

export const CareerDirection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(4); // Default highlight on Professional Direction

  const journeySteps = [
    {
      step: '01',
      phase: 'Undergraduate Foundation',
      title: 'Artificial Intelligence Engineering',
      tags: ['Algorithms', 'Computational Logic', 'Systems Thinking', 'JDCOEM Nagpur'],
      desc: 'Grounding in core computer engineering, computational models, data structures, and mathematical foundations.',
    },
    {
      step: '02',
      phase: 'Technical Toolkit',
      title: 'Technical Foundation',
      tags: ['Python', 'SQL', 'Excel', 'Programming', 'DBMS', 'Git/GitHub'],
      desc: 'Developing structured code hygiene, relational database querying, workbook modeling, and systematic version control.',
    },
    {
      step: '03',
      phase: 'Analytical Exploration',
      title: 'Data Analytics',
      tags: ['Pandas', 'NumPy', 'Statistics', 'Visualization', 'EDA'],
      desc: 'Transforming raw unstructured data into clean statistical patterns, evaluating variance, and discovering meaningful signals.',
    },
    {
      step: '04',
      phase: 'Strategic Decisioning',
      title: 'Business Intelligence',
      tags: ['Power BI', 'Business Analytics', 'KPI Modeling', 'Reporting'],
      desc: 'Translating quantitative insights into executive dashboards, commercial metrics, and actionable decision frameworks.',
    },
    {
      step: '05',
      phase: 'Career Milestone',
      title: 'Professional Direction',
      tags: ['Business Analyst', 'Data Analyst', 'BI / Data Analytics'],
      desc: 'Target roles where technical engineering discipline meets commercial insight to solve real-world problems.',
      isTarget: true,
    },
  ];

  return (
    <section id="career-direction" className="py-20 sm:py-28 border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-14 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-mono text-sky-400 uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5" />
            <span>Strategic Career Roadmap</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Where I'm Headed
          </h2>
          <p className="text-slate-400 text-base max-w-2xl">
            A continuous progression from technical AI engineering into high-impact data analytics and business intelligence.
          </p>
        </div>

        {/* Signature Journey Visual Flow (Vertical on mobile, interconnected cards on desktop) */}
        <div className="relative">
          
          {/* Subtle connecting spine on desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-slate-800 via-sky-500/30 to-sky-400 -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 relative z-10">
            {journeySteps.map((item, index) => {
              const isSelected = activeStep === index;
              const isTarget = item.isTarget;

              return (
                <div
                  key={item.step}
                  onClick={() => setActiveStep(index)}
                  className={`p-5 rounded-md border flex flex-col justify-between transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-[#121722] border-sky-500/60 ring-1 ring-sky-500/30 shadow-lg shadow-sky-950/40 -translate-y-1'
                      : 'bg-[#0f131a] border-white/5 hover:border-white/15'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className={isSelected ? 'text-sky-400 font-bold' : 'text-slate-500'}>
                        {item.step}
                      </span>
                      {isTarget ? (
                        <span className="text-[10px] text-sky-400 font-mono font-semibold uppercase">
                          Target Goal
                        </span>
                      ) : (
                        <span className="text-[10px] text-slate-500 font-mono">
                          Phase 0{index + 1}
                        </span>
                      )}
                    </div>

                    <div>
                      <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                        {item.phase}
                      </div>
                      <h3 className="font-display text-base font-bold text-white mt-1 leading-snug">
                        {item.title}
                      </h3>
                    </div>

                    {/* Tags (Zero-Pill: Clean unboxed text layout) */}
                    <div className="text-[11px] font-mono text-slate-400 flex flex-wrap gap-x-1.5 gap-y-1 pt-1">
                      {item.tags.map((t, idx) => (
                        <React.Fragment key={t}>
                          <span className={isSelected ? 'text-slate-200' : 'text-slate-400'}>{t}</span>
                          {idx < item.tags.length - 1 && (
                            <span className="text-slate-600" aria-hidden="true">•</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed pt-2 border-t border-white/5">
                      {item.desc}
                    </p>
                  </div>

                  {/* Flow Arrow Indicator */}
                  <div className="mt-4 pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span>{isSelected ? 'Active Focus' : 'Click to inspect'}</span>
                    {index < journeySteps.length - 1 && (
                      <span className="text-slate-600 hidden lg:inline">→</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Narrative Summary Box */}
        <div className="mt-12 p-6 bg-[#0a0d13] border border-white/5 rounded-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs font-mono text-sky-400 uppercase tracking-wider">
              The Analytical Narrative
            </span>
            <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              "I started with Artificial Intelligence and technology, developed a strong technical foundation, became increasingly interested in data and analytical problem solving, and am now building toward Business Analytics and Data Analytics while continuing to use AI as part of my technical foundation."
            </p>
          </div>

          <a
            href="#contact"
            className="text-xs font-semibold text-sky-400 hover:text-sky-300 shrink-0 inline-flex items-center gap-1 font-mono"
          >
            <span>Discuss Placement Roles</span>
            <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
};
