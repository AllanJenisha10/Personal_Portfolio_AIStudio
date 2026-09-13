import React from 'react';
import {
  Trophy,
  BookOpen,
  Award,
  Sparkles,
  CheckCircle2,
  Terminal,
  Compass,
} from 'lucide-react';
import { achievementsAndTraining } from '../data/portfolioData';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 sm:py-28 relative bg-[#040813]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A1128] border border-[#C5A059]/30 text-xs font-mono text-[#F5E8BA] uppercase tracking-widest mb-3">
            <span>Specialized Learning</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#FAF6E8]">
            Achievements & Training
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mt-3">
            Verified academic workshops, computing training programs, and professional industry readiness initiatives.
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mt-4" />
        </div>

        {/* Training Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievementsAndTraining.map((item, idx) => (
            <div
              key={item.id}
              id={`achievement-card-${item.id}`}
              className="p-6 rounded-xl bg-[#0A1128] border border-[#C5A059]/20 hover:border-[#C5A059]/50 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_28px_rgba(197,160,89,0.12)] group flex flex-col justify-between"
            >
              <div>
                {/* Header with Icon and Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#060B19] border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] group-hover:text-[#F5E8BA] group-hover:border-[#C5A059] transition-colors">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#C5A059] bg-[#16244E]/60 px-2 py-0.5 rounded border border-[#C5A059]/20">
                    {item.category}
                  </span>
                </div>

                <h3 className="font-serif text-base sm:text-lg font-bold text-[#FAF6E8] group-hover:text-[#F5E8BA] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#16244E] flex items-center gap-2 text-xs font-medium text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                <span>Verified Curriculum Track</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
