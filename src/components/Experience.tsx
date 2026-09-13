import React from 'react';
import {
  Briefcase,
  Calendar,
  Building2,
  CheckCircle,
  Clock,
  ArrowRight,
} from 'lucide-react';
import { experiences } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 relative bg-[#060B19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A1128] border border-[#C5A059]/30 text-xs font-mono text-[#F5E8BA] uppercase tracking-widest mb-3">
            <span>Professional Exposure</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#FAF6E8]">
            Work & Internship Experience
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-3">
            Hands-on technical internships in web engineering, full-stack workflows, API integration, and corporate data handling.
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mt-4" />
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, idx) => (
            <div
              key={exp.id}
              id={`experience-card-${exp.id}`}
              className="flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#0A1128] border border-[#C5A059]/25 hover:border-[#C5A059]/60 transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_32px_rgba(197,160,89,0.12)] group relative"
            >
              <div>
                {/* Header with Company & Role */}
                <div className="flex items-start justify-between gap-4 mb-4 pb-4 border-b border-[#16244E]">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#060B19] border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] group-hover:text-[#F5E8BA] group-hover:border-[#C5A059] transition-colors shrink-0">
                      <Building2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-[#FAF6E8] group-hover:text-[#F5E8BA] transition-colors">
                        {exp.company}
                      </h3>
                      <span className="inline-block text-xs font-mono font-medium text-[#C5A059] mt-0.5">
                        Internship {idx + 1}
                      </span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#16244E]/80 border border-[#C5A059]/30 text-[#F5E8BA] text-xs font-mono font-semibold shrink-0">
                    <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Role Title */}
                <div className="mb-4">
                  <p className="text-xs uppercase font-mono tracking-wider text-slate-400">Designation / Track</p>
                  <p className="text-base sm:text-lg font-semibold text-[#F5E8BA] mt-1">
                    {exp.role}
                  </p>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  {exp.description}
                </p>
              </div>

              {/* Skills and exposure pills */}
              <div className="pt-4 border-t border-[#16244E]">
                <p className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-2.5">
                  Core Practical Exposure
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.skillsGained.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-[#060B19] border border-[#16244E] text-xs text-slate-200 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
