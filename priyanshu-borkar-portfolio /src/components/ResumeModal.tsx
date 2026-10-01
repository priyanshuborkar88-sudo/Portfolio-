import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { X, Download, FileText, CheckCircle2 } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="bg-[#0e1219] border border-white/10 rounded-lg max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <div className="sticky top-0 z-10 bg-[#0e1219]/95 backdrop-blur-md px-6 py-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-sky-400" />
            <span className="font-display font-bold text-white text-base">
              Resume Preview // Priyanshu Borkar
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={PORTFOLIO_DATA.personal.resumeUrl}
              download={PORTFOLIO_DATA.personal.resumeFileName}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-sm transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-white/5 rounded-sm"
              aria-label="Close resume preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Resume Content Container */}
        <div className="p-6 sm:p-8 space-y-6 text-slate-300">
          
          {/* Header in Preview */}
          <div className="border-b border-white/10 pb-5 space-y-2">
            <h1 className="font-display text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">
              {PORTFOLIO_DATA.personal.name}
            </h1>
            <p className="text-sm font-semibold text-sky-400">
              {PORTFOLIO_DATA.personal.tagline}
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 font-mono">
              <span>{PORTFOLIO_DATA.personal.phone}</span>
              <span>·</span>
              <span>{PORTFOLIO_DATA.personal.email}</span>
              <span>·</span>
              <span>{PORTFOLIO_DATA.personal.location}</span>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400 font-mono">
              <a href={PORTFOLIO_DATA.personal.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-sky-400">
                LinkedIn: linkedin.com/in/priyanshu-borkar-3340a1331
              </a>
              <span>·</span>
              <a href={PORTFOLIO_DATA.personal.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-sky-400">
                GitHub: github.com/priyanshuborkar88-sudo
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
              Professional Profile
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              B.Tech Artificial Intelligence Engineering student at JD College of Engineering & Management, Nagpur, building toward the intersection of Artificial Intelligence, Data Analytics, and Business Analytics. Combines a disciplined technical foundation in Python, SQL, Excel, and data visualization with demonstrated leadership as Founder/CEO of the Competitive Exam Cell (CEC). Focused on translating analytical thinking and data into practical real-world solutions.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-2 border-t border-white/5 pt-4">
            <h2 className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
              Education
            </h2>
            <div className="space-y-3">
              {PORTFOLIO_DATA.education.map((edu) => (
                <div key={edu.degree} className="text-xs space-y-0.5">
                  <div className="flex justify-between font-semibold text-white">
                    <span>{edu.degree}</span>
                    <span className="text-sky-400">{edu.period}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>{edu.institution}, {edu.location}</span>
                    <span className="text-slate-200 flex items-center gap-1.5">
                      <span>{edu.scoreLabel}: {edu.scoreValue}</span>
                      <span className="text-emerald-400 text-[10px] font-mono">(Verified Record)</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2 border-t border-white/5 pt-4">
            <h2 className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
              Technical Skills & Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {PORTFOLIO_DATA.skills.categories.map((cat) => (
                <div key={cat.name} className="p-2.5 bg-black/20 rounded border border-white/5">
                  <div className="font-semibold text-slate-200">{cat.name}:</div>
                  <div className="text-slate-400 mt-0.5">
                    {cat.items.map(i => i.name).join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership */}
          <div className="space-y-2 border-t border-white/5 pt-4">
            <h2 className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
              Leadership & Initiatives
            </h2>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between font-semibold text-white">
                <span>{PORTFOLIO_DATA.leadership.cec.role} — {PORTFOLIO_DATA.leadership.cec.organization}</span>
                <span className="text-slate-400">{PORTFOLIO_DATA.leadership.cec.period}</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-slate-300">
                {PORTFOLIO_DATA.leadership.cec.responsibilities.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-2 border-t border-white/5 pt-4">
            <h2 className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
              Key Projects & Research
            </h2>
            <div className="space-y-3 text-xs">
              {PORTFOLIO_DATA.projects.map((p) => (
                <div key={p.name} className="p-3 bg-black/20 rounded border border-white/5">
                  <div className="font-semibold text-white">{p.name}</div>
                  <div className="text-slate-400 mt-0.5">{p.shortDescription}</div>
                  <div className="text-slate-500 font-mono text-[11px] mt-1">
                    Tech: {p.technologies.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Download Action Footer */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Official PDF ready for immediate placement review</span>
            </div>
            
            <a
              href={PORTFOLIO_DATA.personal.resumeUrl}
              download={PORTFOLIO_DATA.personal.resumeFileName}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-bold text-white bg-sky-600 hover:bg-sky-500 rounded-sm shadow-md transition-colors"
            >
              <Download className="w-4 h-4" />
              <span>Download Priyanshu_Borkar_Resume.pdf</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
