import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { DataTransformationVisual } from './DataTransformationVisual';
import { 
  User, 
  Compass, 
  Layers, 
  Dumbbell, 
  Palette, 
  Box, 
  Activity, 
  GraduationCap,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-widest">
            <User className="w-3.5 h-3.5" />
            <span>Profile & Trajectory</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            A little about me.
          </h2>
          <p className="text-slate-400 text-base max-w-2xl">
            AI foundation. Analytical direction. Builder mindset.
          </p>
        </div>

        {/* Narrative & Visual Metaphor Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Exact Authentic Narrative */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                I am a B.Tech Artificial Intelligence Engineering student at <strong className="text-white font-semibold">JD College of Engineering & Management, Nagpur</strong>, actively directing my focus toward <strong className="text-sky-300 font-semibold">Data Analytics</strong> and <strong className="text-sky-300 font-semibold">Business Analytics</strong>.
              </p>

              {/* Structured 3-Pillar Overview */}
              <div className="space-y-3 pt-2">
                <div className="p-3.5 bg-white/[0.02] border border-white/5 rounded-md">
                  <div className="text-xs font-mono text-sky-400 uppercase tracking-wider mb-1">
                    01. Academic Foundation
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300">
                    B.Tech AI curriculum with a current CGPA of 8.72 (7th semester), establishing strong engineering rigor, algorithms, and computational modeling.
                  </p>
                </div>

                <div className="p-3.5 bg-white/[0.02] border border-white/5 rounded-md">
                  <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1">
                    02. Analytical Toolkit
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Hands-on proficiency in Python, SQL, Excel, Pandas, NumPy, Power BI, database management, and exploratory data analysis.
                  </p>
                </div>

                <div className="p-3.5 bg-white/[0.02] border border-white/5 rounded-md">
                  <div className="text-xs font-mono text-indigo-400 uppercase tracking-wider mb-1">
                    03. Leadership & Student Initiative
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300">
                    Founder and CEO of the Competitive Exam Cell (CEC) at JDCOEM, organizing campus events, academic mock tests, and student coordination.
                  </p>
                </div>
              </div>

              <p className="text-sky-400 text-sm font-medium pt-1">
                Aiming to build a disciplined career where artificial intelligence, data pipelines, and commercial business decisions intersect.
              </p>
            </div>

            {/* Quick Education & Background Badge */}
            <div className="p-4 bg-[#0d1016] border border-white/5 rounded-md flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-sky-500/10 text-sky-400 rounded">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">B.Tech Artificial Intelligence Engineering</div>
                  <div className="text-[11px] font-mono text-slate-400">CGPA 8.72 (7th Sem) · Expected 2027</div>
                </div>
              </div>
              <a
                href="#education"
                className="text-xs font-mono text-sky-400 hover:text-sky-300 inline-flex items-center gap-1"
              >
                <span>Full Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

          {/* Right Column: Abstract Interactive Data Visual Metaphor */}
          <div className="lg:col-span-6 space-y-6">
            <DataTransformationVisual />
          </div>

        </div>

      </div>
    </section>
  );
};
