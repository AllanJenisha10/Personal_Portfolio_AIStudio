import React from 'react';
import {
  Code,
  Globe,
  Database,
  Brain,
  Wrench,
  CheckCircle,
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'programming':
        return Code;
      case 'web-dev':
        return Globe;
      case 'database':
        return Database;
      case 'data-ai':
        return Brain;
      case 'tools':
        return Wrench;
      default:
        return Code;
    }
  };

  return (
    <section id="skills" className="py-20 sm:py-28 relative bg-[#060B19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A1128] border border-[#C5A059]/30 text-xs font-mono text-[#F5E8BA] uppercase tracking-widest mb-3">
            <span>Technical Capabilities</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#FAF6E8]">
            Skills & Competencies
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-3">
            Categorized technical toolkit acquired through rigorous Information Science coursework, hands-on software development, and machine learning experimentation.
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mt-4" />
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8">
          {skillCategories.map((category, idx) => {
            const IconComponent = getCategoryIcon(category.id);
            const isBottomRow = idx >= 3;
            return (
              <div
                key={category.id}
                id={`skill-card-${category.id}`}
                className={`flex flex-col justify-between p-6 sm:p-7 rounded-xl bg-[#0A1128] border border-[#C5A059]/20 hover:border-[#C5A059]/50 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgba(197,160,89,0.12)] group ${
                  isBottomRow ? 'lg:col-span-3' : 'lg:col-span-2'
                } ${idx === 4 ? 'md:col-span-2 md:max-w-xl md:mx-auto w-full lg:max-w-none' : 'md:col-span-1'}`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-lg bg-[#060B19] border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] group-hover:text-[#F5E8BA] group-hover:border-[#C5A059] transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#C5A059]">
                      {category.skills.length} Skills
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-semibold text-[#FAF6E8] group-hover:text-[#F5E8BA] transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 mb-5 leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Individual Skill Badges */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-[#16244E]/80">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#060B19] border border-[#16244E] hover:border-[#C5A059]/50 text-slate-200 text-xs font-medium transition-all group/badge"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059]/60 group-hover/badge:bg-[#D4AF37]" />
                      <span className="group-hover/badge:text-[#F5E8BA] transition-colors">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
