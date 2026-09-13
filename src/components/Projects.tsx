import React from 'react';
import {
  ExternalLink,
  Github,
  Search,
  Smartphone,
  Layers,
  Sparkles,
  CheckCircle2,
  ArrowUpRight,
} from 'lucide-react';
import { projects } from '../data/portfolioData';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 sm:py-28 relative bg-[#040813]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A1128] border border-[#C5A059]/30 text-xs font-mono text-[#F5E8BA] uppercase tracking-widest mb-3">
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#FAF6E8]">
            Key Projects
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-3">
            Engineered systems demonstrating end-to-end full-stack implementation, vector information retrieval algorithms, and modern interactive prototyping.
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mt-4" />
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {projects.map((project, idx) => {
            const isFirst = idx === 0;
            return (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className="flex flex-col justify-between rounded-2xl bg-[#0A1128] border border-[#C5A059]/30 hover:border-[#C5A059]/70 transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_36px_rgba(197,160,89,0.18)] p-6 sm:p-8 group"
              >
                <div>
                  {/* Category & Status Bar */}
                  <div className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-[#16244E]">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-md bg-[#060B19] border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059]">
                        {isFirst ? <Search className="w-4 h-4" /> : <Smartphone className="w-4 h-4" />}
                      </span>
                      <span className="text-xs font-mono tracking-wider text-[#F5E8BA] uppercase font-semibold">
                        {project.category}
                      </span>
                    </div>

                    {project.liveUrl && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-[11px] font-mono font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Live Deployed
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-2xl font-bold text-[#FAF6E8] group-hover:text-[#F5E8BA] transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Features List */}
                  <div className="mt-6">
                    <p className="text-xs uppercase font-mono tracking-wider text-[#C5A059] font-medium mb-3">
                      Features & Engineering Specifications
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-2 text-xs text-slate-300 bg-[#060B19]/70 px-2.5 py-1.5 rounded border border-[#16244E]"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                          <span className="truncate">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies Pills */}
                  <div className="mt-6">
                    <p className="text-xs uppercase font-mono tracking-wider text-slate-400 font-medium mb-2">
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded bg-[#16244E]/60 text-slate-300 text-xs font-medium border border-[#C5A059]/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Visible Action Buttons: Side-by-side Live Demo & GitHub Code */}
                <div className="mt-8 pt-6 border-t border-[#16244E] grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Primary "Live Demo" Button */}
                  {project.liveUrl && (
                    <a
                      id={`project-live-${project.id}`}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-[#C5A059] to-[#D4AF37] hover:from-[#D4AF37] hover:to-[#F5E8BA] text-[#060B19] font-semibold text-xs sm:text-sm tracking-wide transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-[#C5A059] active:scale-[0.99]"
                    >
                      <span>Live Demo</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}

                  {/* Secondary "GitHub Code" Button */}
                  {project.githubUrl && (
                    <a
                      id={`project-code-${project.id}`}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[#060B19] hover:bg-[#16244E] text-[#FAF6E8] hover:text-[#F5E8BA] border border-[#C5A059]/40 hover:border-[#C5A059] font-medium text-xs sm:text-sm tracking-wide transition-all focus:outline-none focus:ring-2 focus:ring-[#C5A059] active:scale-[0.99]"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub Code</span>
                      <ArrowUpRight className="w-4 h-4 text-[#C5A059]" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
