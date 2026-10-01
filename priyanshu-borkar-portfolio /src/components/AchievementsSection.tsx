import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Trophy, Award, CheckCircle2, ShieldCheck } from 'lucide-react';

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-20 sm:py-28 border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-widest">
            <Trophy className="w-3.5 h-3.5" />
            <span>Milestones & Credibility</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Verified Achievements
          </h2>
          <p className="text-slate-400 text-base max-w-2xl">
            Academic consistency, technical initiative, and student leadership milestones achieved during undergraduate studies at JDCOEM.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {PORTFOLIO_DATA.achievements.map((item, idx) => (
            <div
              key={item.title}
              className="bg-[#0f131a] border border-white/5 rounded-md p-6 flex flex-col justify-between hover:border-white/15 transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-sky-400 font-semibold">{item.category}</span>
                  <span className="text-slate-500">Milestone 0{idx + 1}</span>
                </div>

                <h3 className="font-display text-lg font-bold text-white leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-400 font-medium">
                  {item.organization}
                </p>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Collegiate Record</span>
                </span>
                <span>Nagpur, India</span>
              </div>
            </div>
          ))}
        </div>

        {/* Verifiable Credential Policy */}
        <div className="p-5 bg-[#090b0e] border border-white/10 rounded-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              <span>Professional Certification Pathway</span>
            </div>
            <p className="text-xs text-slate-400 max-w-2xl leading-relaxed">
              Active coursework and hands-on preparation across Google Data Analytics and Microsoft Power BI competencies to supplement formal engineering degree.
            </p>
          </div>
          <span className="text-xs font-mono text-sky-400 shrink-0">
            Active Study: Google Data Analytics · Power BI
          </span>
        </div>

      </div>
    </section>
  );
};
