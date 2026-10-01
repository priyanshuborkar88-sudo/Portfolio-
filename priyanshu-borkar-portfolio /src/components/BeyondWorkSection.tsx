import React from 'react';
import { Dumbbell, Palette, Box, Activity, Sparkles, BookOpen, Compass, Instagram } from 'lucide-react';

export const BeyondWorkSection: React.FC = () => {
  const interests = [
    {
      title: 'Fitness & Strength',
      category: 'Discipline',
      desc: 'Progressive consistency and daily physical training that translates directly into analytical patience and mental stamina.',
      icon: <Dumbbell className="w-4 h-4 text-sky-400" />,
      instagram: {
        handle: '@thepriyanshubuilds',
        url: 'https://instagram.com/thepriyanshubuilds',
      },
    },
    {
      title: 'Sketching & Art',
      category: 'Visual Balance',
      desc: 'Exploring composition, light, and perspective—cultivating an eye for information design and aesthetic balance in data visuals.',
      icon: <Palette className="w-4 h-4 text-indigo-400" />,
    },
    {
      title: "Rubik's Cube",
      category: 'Spatial Logic',
      desc: 'Speed-solving and spatial algorithms that exercise pattern recognition, step-by-step state resolution, and mental models.',
      icon: <Box className="w-4 h-4 text-amber-400" />,
    },
    {
      title: 'Badminton',
      category: 'Reflexes & Agility',
      desc: 'Fast-paced court sport sharpening split-second tactical decisions, coordination, and team collaboration.',
      icon: <Activity className="w-4 h-4 text-emerald-400" />,
    },
    {
      title: 'Self-Improvement',
      category: 'Mindset',
      desc: 'Building daily habits, reading across business and psychology, and practicing deliberate personal discipline.',
      icon: <Compass className="w-4 h-4 text-rose-400" />,
    },
    {
      title: 'Continuous Learning',
      category: 'Curiosity',
      desc: 'Consistently reviewing Python libraries, business case studies, and modern data analytics workflows.',
      icon: <BookOpen className="w-4 h-4 text-cyan-400" />,
    },
  ];

  return (
    <section id="beyond-work" className="py-20 sm:py-24 border-b border-white/5 relative bg-[#07090c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5" />
            <span>Human Dimension</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Beyond Work
          </h2>
          <p className="text-slate-400 text-base max-w-2xl">
            Discipline beyond code. Personal interests that reinforce focus, pattern recognition, and continuous growth.
          </p>
        </div>

        {/* Minimal Visual Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {interests.map((item) => (
            <div
              key={item.title}
              className="bg-[#0f131a] border border-white/5 rounded-md p-5 flex flex-col justify-between hover:border-white/15 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 bg-white/[0.03] border border-white/5 rounded">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                  {item.desc}
                </p>

                {item.instagram && (
                  <div className="mt-3.5">
                    <a
                      href={item.instagram.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/[0.04] hover:bg-sky-500/10 border border-white/10 hover:border-sky-500/30 text-slate-300 hover:text-white text-xs font-mono transition-colors group/ig"
                      title="Follow Priyanshu on Instagram"
                    >
                      <Instagram className="w-3.5 h-3.5 text-pink-400 group-hover/ig:scale-110 transition-transform" />
                      <span className="text-sky-300 font-medium">{item.instagram.handle}</span>
                    </a>
                  </div>
                )}
              </div>

              <div className="mt-4 pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <span>Personal Habit</span>
                {item.instagram ? (
                  <a
                    href={item.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-400/90 hover:text-pink-300 flex items-center gap-1 transition-colors"
                  >
                    <Instagram className="w-3 h-3" />
                    <span>Instagram</span>
                  </a>
                ) : (
                  <span>Focus Area</span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
