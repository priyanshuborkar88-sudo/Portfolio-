import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { GraduationCap, Award, Calendar, MapPin, AlertCircle, CheckCircle2 } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 sm:py-28 border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-widest">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Education
          </h2>
          <p className="text-slate-400 text-base max-w-2xl">
            Formal technical education in Artificial Intelligence Engineering complemented by foundational schooling.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.education.map((item, idx) => {
            const isDegree = idx === 0;

            return (
              <div
                key={item.degree}
                className={`p-6 rounded-md border flex flex-col justify-between transition-colors ${
                  isDegree
                    ? 'bg-[#0f141f] border-sky-500/30 ring-1 ring-sky-500/20'
                    : 'bg-[#0d1016] border-white/5'
                }`}
              >
                <div className="space-y-4">
                  {/* Status & Period Bar */}
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className={isDegree ? 'text-sky-400 font-semibold' : 'text-slate-400'}>
                      {item.period}
                    </span>
                    <span className="text-[11px] text-slate-500">
                      {item.status}
                    </span>
                  </div>

                  {/* Degree Name & Institution */}
                  <div>
                    <h3 className="font-display text-lg font-bold text-white leading-snug">
                      {item.degree}
                    </h3>
                    <p className="text-sm font-medium text-slate-300 mt-1">
                      {item.institution}
                    </p>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1">
                      <MapPin className="w-3 h-3 text-slate-500" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  {/* Score / CGPA Display */}
                  <div className="pt-2">
                    <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                      {item.scoreLabel}
                    </div>
                    <div className="mt-1 flex items-center justify-between">
                      <div className="text-2xl font-bold font-mono text-white tracking-tight flex items-baseline gap-2">
                        <span className="text-sky-400">{item.scoreValue}</span>
                      </div>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Verified Record</span>
                      </span>
                    </div>
                  </div>

                  {/* Notes / Description */}
                  {item.notes && (
                    <p className="text-xs text-slate-400 leading-relaxed pt-1 border-t border-white/5">
                      {item.notes}
                    </p>
                  )}
                </div>

                {/* Footer Tag */}
                <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>{isDegree ? 'Undergraduate Degree' : idx === 1 ? 'Higher Secondary (12th)' : 'Secondary School (10th)'}</span>
                  <span className="text-slate-400">
                    {item.status}
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
