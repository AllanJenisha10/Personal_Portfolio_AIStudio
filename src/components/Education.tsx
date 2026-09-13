import React from 'react';
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  CheckCircle2,
  BookOpen,
} from 'lucide-react';
import { educationList } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 sm:py-28 relative bg-[#060B19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A1128] border border-[#C5A059]/30 text-xs font-mono text-[#F5E8BA] uppercase tracking-widest mb-3">
            <span>Academic Background</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#FAF6E8]">
            Education & Qualifications
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-3">
            Academic progression from secondary foundations through higher secondary achievements to undergraduate engineering at Puducherry Technological University.
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mt-4" />
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {educationList.map((edu, idx) => {
            const isBTech = idx === 0;
            return (
              <div
                key={edu.id}
                id={`education-card-${edu.id}`}
                className={`flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[#0A1128] border transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.4)] ${
                  isBTech
                    ? 'border-[#C5A059]/60 hover:border-[#C5A059] shadow-[0_6px_30px_rgba(197,160,89,0.18)]'
                    : 'border-[#C5A059]/20 hover:border-[#C5A059]/50'
                } group`}
              >
                <div>
                  {/* Top Bar with Icon & Duration */}
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#16244E]">
                    <div className="w-10 h-10 rounded-lg bg-[#060B19] border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] group-hover:text-[#F5E8BA] group-hover:border-[#C5A059] transition-colors">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#16244E]/80 border border-[#C5A059]/30 text-xs font-mono text-[#F5E8BA] font-medium">
                      <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>{edu.duration}</span>
                    </div>
                  </div>

                  {/* Degree / Level */}
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#FAF6E8] group-hover:text-[#F5E8BA] transition-colors">
                    {edu.degree}
                  </h3>

                  {/* Institution */}
                  <p className="text-sm font-medium text-slate-300 mt-2">
                    {edu.institution}
                  </p>

                  {/* University if available */}
                  {edu.university && (
                    <div className="mt-1.5 inline-block text-xs font-mono text-[#C5A059] font-medium">
                      Affiliation: {edu.university}
                    </div>
                  )}

                  {/* Location & Status */}
                  <div className="flex items-center gap-3 mt-4 text-xs text-slate-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                      {edu.location}
                    </span>
                    {edu.status && (
                      <span className="px-2 py-0.5 rounded bg-[#060B19] border border-slate-700 text-slate-300 font-mono text-[10px]">
                        {edu.status}
                      </span>
                    )}
                  </div>
                </div>

                {/* Score / CGPA Section */}
                <div className="mt-6 pt-4 border-t border-[#16244E]">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-[#060B19] border border-[#C5A059]/25">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      {edu.scoreLabel}
                    </span>
                    <span className="text-sm sm:text-base font-mono font-bold text-[#D4AF37]">
                      {edu.score}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
