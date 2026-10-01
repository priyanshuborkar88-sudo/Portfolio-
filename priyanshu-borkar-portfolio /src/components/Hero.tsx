import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Download, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, MapPin, Instagram, Sparkles, User } from 'lucide-react';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResumeModal }) => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Subtle, restrained micro-parallax
      const x = ((e.clientX / window.innerWidth) - 0.5) * 6;
      const y = ((e.clientY / window.innerHeight) - 0.5) * 6;
      setOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div 
        className="max-w-7xl mx-auto w-full relative z-10 transition-transform duration-700 ease-out"
        style={{
          transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Authentic Executive Narrative */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-7">
            
            {/* Small Top Label */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-white/[0.03] border border-white/10 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              <span className="text-[11px] font-mono tracking-widest text-slate-300 uppercase">
                Artificial Intelligence · Data Analytics · Business Analytics
              </span>
            </div>

            {/* Candidate Name Heading */}
            <div className="space-y-3">
              <h1 className="font-display text-4xl sm:text-6xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white uppercase leading-[1.05]">
                PRIYANSHU BORKAR
              </h1>

              {/* Supporting Line */}
              <p className="font-display text-lg sm:text-2xl md:text-2xl lg:text-3xl font-medium text-sky-400 tracking-tight">
                Turning Data & Technology into Meaningful Insights.
              </p>
            </div>

            {/* Short Description */}
            <p className="max-w-2xl mx-auto lg:mx-0 text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed font-normal">
              B.Tech Artificial Intelligence Engineering student building toward Data Analytics and Business Analytics, with a strong foundation in AI, programming and problem solving.
            </p>

            {/* Primary Buttons & Secondary Link */}
            <div className="pt-1 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-md transition-all duration-200 shadow-sm hover:shadow-sky-500/20 active:translate-y-0.5"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PORTFOLIO_DATA.personal.resumeUrl}
                download={PORTFOLIO_DATA.personal.resumeFileName}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs sm:text-sm font-semibold text-slate-200 hover:text-white bg-[#12161f] hover:bg-[#1a202c] border border-white/10 rounded-md transition-all duration-200 active:translate-y-0.5"
                title="Download Priyanshu's Resume PDF directly"
              >
                <Download className="w-4 h-4 text-sky-400" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-sky-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Minimal Credential Substrip */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2 text-xs font-mono text-slate-400">
              <span className="text-slate-300">JDCOEM Nagpur</span>
              <span className="text-slate-600 hidden sm:inline">·</span>
              <span>CGPA <strong className="text-sky-400 font-semibold">8.72</strong></span>
              <span className="text-slate-600 hidden sm:inline">·</span>
              <span>Class of 2027</span>
              <span className="text-slate-600 hidden sm:inline">·</span>
              <span className="flex items-center gap-1 text-slate-400">
                <MapPin className="w-3 h-3 text-slate-500" />
                <span>Nagpur, India</span>
              </span>
            </div>

            {/* Social Direct Links */}
            <div className="pt-1 flex items-center justify-center lg:justify-start gap-5 text-xs text-slate-400">
              <a
                href={PORTFOLIO_DATA.personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-sky-400 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
              <span className="text-slate-700">·</span>
              <a
                href={PORTFOLIO_DATA.personal.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
              <span className="text-slate-700">·</span>
              <a
                href={PORTFOLIO_DATA.personal.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-pink-400 transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>Instagram</span>
              </a>
              <span className="text-slate-700">·</span>
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="flex items-center gap-1.5 hover:text-white transition-colors font-mono"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </a>
            </div>

          </div>

          {/* Right Column: Executive Framed Portrait Presentation */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Soft Ambient Studio Lighting Backdrops */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-sky-500/15 via-transparent to-indigo-500/15 blur-2xl rounded-3xl opacity-70 pointer-events-none" />

              {/* Main Architectural Portrait Card */}
              <div className="relative rounded-2xl p-2.5 bg-[#0d1118]/90 border border-white/10 shadow-2xl shadow-black/80 backdrop-blur-sm overflow-hidden group">
                
                {/* Precision Corner Accent Marks */}
                <div className="absolute top-4 left-4 w-3 h-3 border-t-2 border-l-2 border-sky-400/60 rounded-tl-sm pointer-events-none z-20" />
                <div className="absolute top-4 right-4 w-3 h-3 border-t-2 border-r-2 border-sky-400/60 rounded-tr-sm pointer-events-none z-20" />
                <div className="absolute bottom-4 left-4 w-3 h-3 border-b-2 border-l-2 border-sky-400/60 rounded-bl-sm pointer-events-none z-20" />
                <div className="absolute bottom-4 right-4 w-3 h-3 border-b-2 border-r-2 border-sky-400/60 rounded-br-sm pointer-events-none z-20" />

                {/* Inner Image Container with Studio Background Noise Softening */}
                <div className="relative aspect-square sm:aspect-[4/5] w-full rounded-xl overflow-hidden bg-[#07090c] border border-white/5">
                  {!imageError ? (
                    <>
                      <img
                        src={PORTFOLIO_DATA.personal.photoUrl}
                        alt="Priyanshu Borkar — Artificial Intelligence Engineering Student"
                        className="w-full h-full object-cover object-center filter contrast-[1.04] brightness-[1.0] transition-all duration-700 group-hover:scale-[1.02]"
                        referrerPolicy="no-referrer"
                        onError={() => setImageError(true)}
                      />

                      {/* Optical Studio Vignette Scrim: Silences background distractions/noise, keeping Priyanshu in crisp focus */}
                      <div 
                        className="absolute inset-0 pointer-events-none z-10"
                        style={{
                          background: 'radial-gradient(ellipse at 50% 42%, transparent 42%, rgba(9, 11, 14, 0.4) 72%, rgba(9, 11, 14, 0.88) 100%)',
                        }}
                      />
                    </>
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-[#0f141f] to-[#07090c]">
                      <div className="w-16 h-16 rounded-full bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-3">
                        <User className="w-8 h-8" />
                      </div>
                      <h4 className="text-sm font-bold text-white">Priyanshu Borkar</h4>
                      <p className="text-xs text-slate-400 mt-1 font-mono">B.Tech Artificial Intelligence · JDCOEM</p>
                    </div>
                  )}

                  {/* Measured Contrast Scrim for Floating Tag */}
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#090b0e]/90 via-[#090b0e]/50 to-transparent pointer-events-none z-10" />

                  {/* Refined Floating Information Glass Pill */}
                  <div className="absolute bottom-3 inset-x-3 z-20 px-3 py-2 rounded-lg bg-[#0b0f16]/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <div className="text-xs font-semibold text-white tracking-tight">
                      Priyanshu Borkar
                    </div>
                    <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Available for Roles</span>
                    </div>
                  </div>

                </div>

              </div>

              {/* Quiet Architectural Sub-caption */}
              <div className="mt-3 flex items-center justify-between px-2 text-[11px] font-mono text-slate-500">
                <span>Profile Credential · 2026</span>
                <span className="text-slate-400">JDCOEM Nagpur</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
