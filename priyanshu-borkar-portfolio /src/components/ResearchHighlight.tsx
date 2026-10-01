import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { BookOpen, Users, Compass, ShieldAlert, Cpu, ArrowUpRight } from 'lucide-react';

export const ResearchHighlight: React.FC = () => {
  const { researchHighlight } = PORTFOLIO_DATA;

  return (
    <section id="research" className="py-20 sm:py-24 border-b border-white/5 bg-[#090c10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Tag */}
        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-3">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Academic Research Spotlight</span>
        </div>

        <div className="bg-[#0f141d] border border-emerald-500/20 rounded-lg p-6 sm:p-10 relative overflow-hidden">
          
          {/* Subtle gradient accent */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 blur-3xl pointer-events-none rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-5">
              
              <div className="space-y-2">
                <span className="text-xs font-mono text-slate-400">
                  Department of Artificial Intelligence · JDCOEM, Nagpur
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {researchHighlight.title}
                </h3>
                <p className="text-sm font-medium text-emerald-400">
                  Paper Direction: {researchHighlight.paperDirection}
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {researchHighlight.summary}
              </p>

              {/* Research Vectors Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-black/30 border border-white/5 rounded-sm">
                  <span className="text-[11px] font-mono text-slate-400 uppercase block mb-1">
                    Dynamic Signal Adaptation
                  </span>
                  <p className="text-xs text-slate-300">
                    Calculates intersection vehicle queue density in real time to reallocate green cycle splits dynamically rather than relying on fixed timers.
                  </p>
                </div>

                <div className="p-3 bg-black/30 border border-white/5 rounded-sm">
                  <span className="text-[11px] font-mono text-slate-400 uppercase block mb-1">
                    Emergency Corridor Priority
                  </span>
                  <p className="text-xs text-slate-300">
                    Identifies approaching ambulances or emergency response vehicles to preempt standard cycles and clear green channels safely.
                  </p>
                </div>

                <div className="p-3 bg-black/30 border border-white/5 rounded-sm">
                  <span className="text-[11px] font-mono text-slate-400 uppercase block mb-1">
                    Next-Intersection Context
                  </span>
                  <p className="text-xs text-slate-300">
                    Accounts for localized surges (e.g. school hours or shifts) to propagate preemptive traffic smoothing downstream.
                  </p>
                </div>

                <div className="p-3 bg-black/30 border border-white/5 rounded-sm">
                  <span className="text-[11px] font-mono text-slate-400 uppercase block mb-1">
                    Command Dashboard Concept
                  </span>
                  <p className="text-xs text-slate-300">
                    Centralized telemetry schema for monitoring intersection health, vehicle counts, and system status across urban hubs.
                  </p>
                </div>
              </div>

              {/* Truthful Academic Standing Notice */}
              <div className="pt-2 text-xs font-mono text-slate-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Status: Academic Research Project · Under Institutional Review</span>
              </div>

            </div>

            {/* Right Meta Column: Research Credits */}
            <div className="lg:col-span-4 bg-[#0a0d13] border border-white/5 rounded-md p-6 space-y-6">
              
              <div>
                <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block mb-2">
                  Academic Guide
                </span>
                <div className="text-sm font-bold text-white">
                  {researchHighlight.guide}
                </div>
                <div className="text-xs text-slate-400">
                  {researchHighlight.department}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  {researchHighlight.institution}
                </div>
              </div>

              <div className="border-t border-white/5 pt-4">
                <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block mb-2">
                  Research Cohort & Authors
                </span>
                <div className="space-y-2">
                  {researchHighlight.authors.map((a) => (
                    <div key={a.name} className="flex items-center justify-between text-xs">
                      <span className={`font-medium ${a.name === 'Priyanshu Borkar' ? 'text-blue-400 font-semibold' : 'text-slate-300'}`}>
                        {a.name}
                      </span>
                      <span className="text-[11px] font-mono text-slate-500">
                        {a.role}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/5 pt-4">
                <a
                  href={PORTFOLIO_DATA.personal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 text-xs font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 rounded-sm transition-colors"
                >
                  <span>Explore on GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
