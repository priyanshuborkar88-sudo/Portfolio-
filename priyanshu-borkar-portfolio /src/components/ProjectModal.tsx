import React from 'react';
import { Project } from '../data/portfolioData';
import { X, Github, ExternalLink, AlertCircle, CheckCircle2, Layers, Cpu, Compass } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="bg-[#0e1219] border border-white/10 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Modal Header */}
        <div className="sticky top-0 z-10 bg-[#0e1219]/95 backdrop-blur-md px-6 py-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-sky-400 uppercase tracking-wider">
              Case Study // {project.category}
            </span>
            {project.isResearch && (
              <span className="text-[11px] font-mono text-emerald-400">
                · Academic Research
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white hover:bg-white/5 rounded-sm transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Project Title & Short Description */}
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight">
              {project.name}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mt-2 leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* Technology & Concept Strip (Zero-Pill: Clean unboxed metadata) */}
          <div className="p-4 bg-[#0a0d12] border border-white/5 rounded-md">
            <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-2">
              Technologies & Methodologies
            </div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-200">
              {project.technologies.map((tech, idx) => (
                <React.Fragment key={tech}>
                  <span className="font-medium">{tech}</span>
                  {idx < project.technologies.length - 1 && (
                    <span className="text-slate-600" aria-hidden="true">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Structured Case Study Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* The Problem */}
            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-mono text-rose-400 uppercase">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>Problem Addressed</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-[#131722] p-4 rounded-md border border-white/5">
                {project.problem}
              </p>
            </div>

            {/* The Approach */}
            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-mono text-sky-400 uppercase">
                <Compass className="w-3.5 h-3.5" />
                <span>Approach & Architecture</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-[#131722] p-4 rounded-md border border-white/5">
                {project.approach}
              </p>
            </div>

          </div>

          {/* Key Features */}
          <div className="space-y-3">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              Core Capabilities & Features
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.keyFeatures.map((feat) => (
                <div 
                  key={feat}
                  className="flex items-start gap-2 p-3 bg-white/[0.02] border border-white/5 rounded-sm"
                >
                  <span className="text-sky-400 text-xs font-mono mt-0.5">•</span>
                  <span className="text-xs text-slate-200 leading-relaxed">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Priyanshu's Personal Contribution */}
          <div className="p-4 bg-[#111622] border-l-2 border-sky-500 rounded-r-md space-y-1">
            <div className="text-[11px] font-mono text-sky-400 uppercase tracking-wider">
              Priyanshu's Individual Contribution
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              {project.contribution}
            </p>
          </div>

          {/* Verified Outcome */}
          <div className="space-y-1">
            <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Verified Status & Standing</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.outcome}
            </p>
          </div>

          {/* Action Links Strip */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#161c28] hover:bg-[#1f2737] border border-white/10 rounded-sm transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub Profile / Repo</span>
                </a>
              ) : (
                <span className="text-xs font-mono text-slate-500">
                  Repo: [Available on request]
                </span>
              )}

              {project.liveDemoUrl && (
                <a
                  href={project.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 rounded-sm transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Close Case Study
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
