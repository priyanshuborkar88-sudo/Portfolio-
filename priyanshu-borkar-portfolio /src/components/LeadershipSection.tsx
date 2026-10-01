import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { 
  Users, 
  Flag, 
  Calendar, 
  BookOpen, 
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Layers,
  ArrowRight
} from 'lucide-react';

export const LeadershipSection: React.FC = () => {
  const [activeActivityIndex, setActiveActivityIndex] = useState<number>(0);

  const activities = [
    {
      title: 'Brain-Spark 2K25',
      tag: 'Academic & Creative Event',
      summary: 'Quiz and Canva Creator-oriented student event conducted in collaboration with Pragyan Forum.',
      points: [
        'Organized inter-departmental quiz rounds testing general awareness and technical aptitude.',
        'Structured Canva Creator segment evaluating creative visual storytelling under timed constraints.',
        'Coordinated student participation, team scheduling, and cross-forum logistics.',
      ],
    },
    {
      title: 'GATE 2026 Mock Tests',
      tag: 'Competitive Exam Series',
      summary: 'Targeted preparation initiative designed for engineering students aspiring for GATE examination benchmarks.',
      points: [
        'Structured peer mock testing sessions and simulated examination conditions.',
        'Facilitated syllabus tracking and study material distribution across engineering cohorts.',
        'Encouraged peer study groups for technical problem solving.',
      ],
    },
    {
      title: 'Constitution Day Book Donation',
      tag: 'Social & Civic Initiative',
      summary: 'Student and community initiative collecting and distributing educational reading material.',
      points: [
        'Organized campus book collection drive for textbooks, reference guides, and literature.',
        'Coordinated student volunteers for book cataloging and distribution.',
        'Emphasized community social responsibility alongside engineering coursework.',
      ],
    },
    {
      title: 'Independence Day / Futala Flag Hoisting',
      tag: 'Civic Representation',
      summary: 'Student activity involving an external organization at Futala Lake, Nagpur.',
      points: [
        'Mobilized student representation and coordinated arrival logistics at Futala Lake.',
        'Liaised with external organizational representatives for event flow.',
        'Fostered civic awareness and team unity outside the campus perimeter.',
      ],
    },
  ];

  const leadershipAreas = [
    'Team coordination',
    'Event planning',
    'Student engagement',
    'Communication',
    'Delegation',
    'Organizational management',
    'Initiative building',
  ];

  return (
    <section id="experience" className="py-20 sm:py-28 border-b border-white/5 relative bg-[#07090c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-widest">
            <Users className="w-3.5 h-3.5" />
            <span>Leadership & Student Initiative</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Beyond the Code
          </h2>
          <p className="text-slate-400 text-base max-w-2xl">
            Building initiatives, coordinating people, and turning organizational goals into executed student programs.
          </p>
        </div>

        {/* Primary Role Card */}
        <div className="bg-[#0f131a] border border-white/10 rounded-lg p-6 sm:p-8 mb-12">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/5">
            <div className="flex items-center gap-4">
              <img
                src={PORTFOLIO_DATA.personal.photoUrl}
                alt="Priyanshu Borkar — Founder & CEO CEC"
                className="w-13 h-13 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-sky-400/40 shadow-md shadow-sky-500/10 shrink-0"
                referrerPolicy="no-referrer"
              />
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-sky-400 uppercase">
                  <span>Collegiate Leadership</span>
                  <span className="text-slate-600">·</span>
                  <span>JDCOEM Nagpur</span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-white mt-0.5">
                  Founder / CEO — Competitive Exam Cell (CEC)
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                  JD College of Engineering & Management, Nagpur
                </p>
              </div>
            </div>
            
            <div className="text-xs font-mono text-slate-400 bg-white/5 border border-white/5 px-3 py-1.5 rounded self-start md:self-auto">
              Leadership & Student Initiative
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
            
            {/* Overview & Leadership Areas */}
            <div className="lg:col-span-6 space-y-6">
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                CEC focuses on supporting engineering students who are interested in competitive examinations (GATE, Public Sector, Higher Studies) and career opportunities beyond conventional engineering recruitment paths.
              </p>

              <div>
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                  Core Leadership Competencies Developed:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {leadershipAreas.map((area) => (
                    <div 
                      key={area}
                      className="flex items-center gap-2 p-2 bg-white/[0.02] border border-white/5 rounded text-xs text-slate-200"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 text-xs text-slate-400 leading-relaxed border-t border-white/5">
                Organized and managed cross-functional verticals covering Administration, Events, Discipline, Media, Technical, Exam Cell, and Creative student teams.
              </div>
            </div>

            {/* Selected CEC Activities: Compact Interactive Timeline */}
            <div className="lg:col-span-6 space-y-4">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center justify-between">
                <span>Selected CEC Activities // Timeline</span>
                <span className="text-[11px] text-slate-500">Click to expand</span>
              </div>

              <div className="space-y-3">
                {activities.map((act, idx) => {
                  const isActive = activeActivityIndex === idx;
                  return (
                    <div
                      key={act.title}
                      onClick={() => setActiveActivityIndex(idx)}
                      className={`p-4 rounded-md border cursor-pointer transition-all ${
                        isActive
                          ? 'bg-[#141822] border-sky-500/40 ring-1 ring-sky-500/20'
                          : 'bg-black/20 border-white/5 hover:border-white/15'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-xs font-bold text-white">
                            {act.title}
                          </span>
                          <span className="text-[11px] font-mono text-sky-400 ml-2">
                            ({act.tag})
                          </span>
                        </div>
                        <ChevronRight className={`w-4 h-4 text-slate-400 transition-transform ${isActive ? 'rotate-90 text-sky-400' : ''}`} />
                      </div>

                      <p className="text-xs text-slate-400 mt-1">
                        {act.summary}
                      </p>

                      {isActive && (
                        <div className="mt-3 pt-3 border-t border-white/5 space-y-1.5">
                          {act.points.map((pt, pIdx) => (
                            <div key={pIdx} className="text-xs text-slate-300 flex items-start gap-2">
                              <span className="text-sky-400 mt-0.5">•</span>
                              <span className="leading-relaxed">{pt}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
