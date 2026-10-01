import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#06080b] border-t border-white/5 py-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-white/5">
          
          {/* Brand Info */}
          <div className="space-y-1">
            <h4 className="font-display text-base sm:text-lg font-bold text-white tracking-tight">
              {PORTFOLIO_DATA.personal.name}
            </h4>
            <p className="text-xs text-sky-400 font-medium">
              Artificial Intelligence • Data Analytics • Business Analytics
            </p>
            <p className="text-xs text-slate-500">
              Nagpur, India
            </p>
          </div>

          {/* Clean Socials */}
          <div className="flex items-center gap-6 text-xs">
            <a
              href={PORTFOLIO_DATA.personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <span className="text-slate-700">·</span>
            <a
              href={PORTFOLIO_DATA.personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-slate-700">·</span>
            <a
              href={PORTFOLIO_DATA.personal.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition-colors"
            >
              Instagram
            </a>
            <span className="text-slate-700">·</span>
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              className="hover:text-white transition-colors font-mono"
            >
              Email
            </a>
            <span className="text-slate-700">·</span>
            <a
              href={PORTFOLIO_DATA.personal.resumeUrl}
              download={PORTFOLIO_DATA.personal.resumeFileName}
              className="text-sky-400 hover:text-sky-300 transition-colors"
            >
              Resume PDF
            </a>
          </div>

        </div>

        {/* Bottom copyright & Back to top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © 2026 Priyanshu Borkar. Built with authentic collegiate credentials.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
