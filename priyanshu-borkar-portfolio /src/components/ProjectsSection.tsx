import React, { useState } from 'react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { 
  FolderGit2, 
  ArrowUpRight, 
  Github, 
  ExternalLink, 
  FileText,
  Calendar,
  Activity,
  Layers,
  Sparkles
} from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Abstract visuals tailored specifically to each project's engineering domain
  const renderAbstractVisual = (projectId: string) => {
    if (projectId === 'smart-classroom-scheduler') {
      // Calendar/grid -> connected classrooms -> scheduling nodes
      return (
        <div className="h-36 w-full bg-[#07090c] rounded border border-white/5 relative p-3 flex flex-col justify-between overflow-hidden group-hover:border-white/10 transition-colors">
          <div className="flex items-center justify-between text-[10px] font-mono text-slate-500">
            <span>Schedule Allocation Matrix</span>
            <span className="text-sky-400">Zero Conflict</span>
          </div>
          
          <div className="grid grid-cols-4 gap-1.5 my-auto">
            {['Slot A', 'Slot B', 'Slot C', 'Slot D'].map((slot, i) => (
              <div key={slot} className="p-1.5 bg-white/[0.02] border border-white/5 rounded text-center">
                <div className="text-[9px] font-mono text-slate-400">{slot}</div>
                <div className={`w-full h-1.5 rounded-full mt-1.5 ${i === 1 ? 'bg-sky-400' : 'bg-slate-700'}`} />
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1 border-t border-white/5">
            <span>12 Classrooms</span>
            <span className="text-emerald-400">Optimized Load</span>
          </div>
        </div>
      );
    }

    if (projectId === 'itms-traffic-management') {
      // Four-lane road -> data nodes -> signal system
      return (
        <div className="h-36 w-full bg-[#07090c] rounded border border-white/5 relative p-3 flex flex-col justify-between overflow-hidden group-hover:border-white/10 transition-colors">
          <div className="flex items-center justify-between text-[10px] font-mono text-slate-500">
            <span>Dynamic Traffic Flow Model</span>
            <span className="text-emerald-400">Adaptive Split</span>
          </div>

          {/* Abstract 4-lane cross */}
          <div className="relative h-16 w-full flex items-center justify-center">
            {/* Horizontal lane */}
            <div className="w-full h-4 bg-slate-800/60 rounded flex items-center justify-around px-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            </div>
            {/* Vertical cross marker */}
            <div className="absolute w-4 h-full bg-slate-800/80 rounded flex flex-col items-center justify-around py-1">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1 border-t border-white/5">
            <span>Queue Density Active</span>
            <span className="text-sky-400">Emergency Corridor</span>
          </div>
        </div>
      );
    }

    // ml-learning-sandbox: dataset points -> model boundary -> visualization
    return (
      <div className="h-36 w-full bg-[#07090c] rounded border border-white/5 relative p-3 flex flex-col justify-between overflow-hidden group-hover:border-white/10 transition-colors">
        <div className="flex items-center justify-between text-[10px] font-mono text-slate-500">
          <span>Decision Boundary Surface</span>
          <span className="text-indigo-400">Interactive Model</span>
        </div>

        {/* Abstract Decision Surface */}
        <div className="relative h-16 w-full flex items-center justify-center">
          <svg className="w-full h-full" viewBox="0 0 200 60">
            {/* Curved decision boundary */}
            <path d="M 10 50 Q 80 10 120 40 T 190 20" fill="none" stroke="rgba(56, 189, 248, 0.6)" strokeWidth="1.5" strokeDasharray="3 3" />
            {/* Class A points */}
            <circle cx="35" cy="20" r="2.5" fill="#38bdf8" />
            <circle cx="65" cy="25" r="2.5" fill="#38bdf8" />
            <circle cx="95" cy="15" r="2.5" fill="#38bdf8" />
            {/* Class B points */}
            <circle cx="45" cy="45" r="2.5" fill="#a855f7" />
            <circle cx="115" cy="50" r="2.5" fill="#a855f7" />
            <circle cx="155" cy="35" r="2.5" fill="#a855f7" />
          </svg>
        </div>

        <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 pt-1 border-t border-white/5">
          <span>Non-linear Hyperplane</span>
          <span className="text-indigo-400">Real-time Visualization</span>
        </div>
      </div>
    );
  };

  const projectTags: Record<string, string[]> = {
    'smart-classroom-scheduler': ['Python', 'Scheduling', 'Problem Solving'],
    'itms-traffic-management': ['AI', 'Computer Vision', 'Traffic Management', 'Smart City'],
    'ml-learning-sandbox': ['Machine Learning', 'Interactive Learning', 'Web Development', 'Hackathon'],
  };

  return (
    <section id="projects" className="py-20 sm:py-28 border-b border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-14">
          <div className="flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-widest">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Applied Engineering</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Selected Projects
          </h2>
          <p className="text-slate-400 text-base max-w-2xl">
            Applied problem solving connecting academic computing with functional constraints.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.projects.map((project, index) => {
            const tags = projectTags[project.id] || project.technologies;
            const projectNumber = index + 1 < 10 ? `0${index + 1}` : `${index + 1}`;

            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="bg-[#0f131a] border border-white/5 rounded-md p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:border-white/20 hover:shadow-xl hover:shadow-black/40 cursor-pointer group"
              >
                <div className="space-y-4">
                  
                  {/* Number & Domain */}
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-sky-400 font-semibold">{projectNumber}</span>
                    <span className="text-slate-500">{project.category}</span>
                  </div>

                  {/* Abstract Domain Visual */}
                  <div className="overflow-hidden rounded transition-transform duration-300 group-hover:scale-[1.01]">
                    {renderAbstractVisual(project.id)}
                  </div>

                  {/* Project Name */}
                  <h3 className="font-display text-xl font-bold text-white group-hover:text-sky-300 transition-colors leading-snug">
                    {project.name}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.shortDescription}
                  </p>

                  {/* Tags (Zero-Pill: Clean unboxed typography with typographic slashes/bullets) */}
                  <div className="pt-2 text-xs font-mono text-slate-400 flex flex-wrap items-center gap-x-2 gap-y-1">
                    {tags.map((tag, idx) => (
                      <React.Fragment key={tag}>
                        <span className="text-slate-300 group-hover:text-sky-300 transition-colors">{tag}</span>
                        {idx < tags.length - 1 && (
                          <span className="text-slate-600" aria-hidden="true">/</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>

                </div>

                {/* Footer Link & Trigger */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs font-semibold text-sky-400 group-hover:text-sky-300 inline-flex items-center gap-1.5 transition-colors">
                    <FileText className="w-3.5 h-3.5" />
                    <span>View Case Study</span>
                  </span>
                  
                  <div className="p-1.5 text-slate-400 group-hover:text-white transition-colors">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Case Study Viewer */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};
