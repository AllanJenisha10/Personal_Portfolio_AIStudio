import React from 'react';
import {
  Binary,
  Code2,
  Cpu,
  BrainCircuit,
  Compass,
  Zap,
  Target,
  Clock,
  ShieldCheck,
} from 'lucide-react';
import { personalInfo, aboutContent } from '../data/portfolioData';

export const About: React.FC = () => {
  const coreCompetencies = [
    {
      icon: Binary,
      title: "Information Science & Engineering",
      desc: "Comprehensive coursework in algorithms, database engineering, computer networks, and structured software development methodologies at PTU.",
    },
    {
      icon: Code2,
      title: "Full-Stack & Flask Development",
      desc: "Building clean client-server architectures using Python, Flask, HTML/CSS, and PHP with reliable REST API integrations.",
    },
    {
      icon: BrainCircuit,
      title: "Data Science & AI/ML Interest",
      desc: "Practical focus on data pipelines, TF-IDF representations, Cosine Similarity mathematical formulations, and Scikit-learn machine learning algorithms.",
    },
    {
      icon: Target,
      title: "Disciplined Problem Solving",
      desc: "Structured, mathematical approach to debugging and technical implementation with consistency, precision, and quick adaptability.",
    },
  ];

  const workEthicPillars = [
    { label: "Quick Learner", desc: "Rapidly absorbs modern frameworks, language specs, and algorithmic techniques." },
    { label: "Hardworking", desc: "Dedicated work ethic with consistent dedication to project completeness and academic excellence." },
    { label: "Consistent", desc: "Maintains high standards across coursework, internships, and project milestones." },
    { label: "Problem Solver", desc: "Breaks complex engineering tasks into modular, solvable components." },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 relative bg-[#040813]">
      {/* Background ambient divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A1128] border border-[#C5A059]/30 text-xs font-mono text-[#F5E8BA] uppercase tracking-widest mb-3">
            <span>Professional Profile</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#FAF6E8]">
            About Allan Jenisha R.
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mt-4" />
        </div>

        {/* Narrative & Traits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          
          {/* Main Professional Introduction: 7 columns */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-xl bg-[#0A1128] border border-[#C5A059]/25 shadow-[0_4px_24px_rgba(0,0,0,0.4)] relative">
              <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
                <p className="text-[#FAF6E8] font-medium text-base sm:text-lg leading-snug">
                  {aboutContent.summary}
                </p>
                {aboutContent.paragraphs.map((p, idx) => (
                  <p key={idx} className="text-slate-300">
                    {p}
                  </p>
                ))}
              </div>

              {/* Verified academic context bar */}
              <div className="mt-6 pt-6 border-t border-[#16244E] grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div>
                  <p className="text-[11px] font-mono text-[#C5A059] uppercase tracking-wider">Institution</p>
                  <p className="text-xs sm:text-sm font-semibold text-[#FAF6E8] mt-0.5">Women's Engg. College</p>
                </div>
                <div>
                  <p className="text-[11px] font-mono text-[#C5A059] uppercase tracking-wider">Affiliation</p>
                  <p className="text-xs sm:text-sm font-semibold text-[#FAF6E8] mt-0.5">PTU (2023–2027)</p>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <p className="text-[11px] font-mono text-[#C5A059] uppercase tracking-wider">Cumulative GPA</p>
                  <p className="text-xs sm:text-sm font-semibold text-[#D4AF37] mt-0.5">9.00 / 10.0</p>
                </div>
              </div>
            </div>

            {/* Work Ethic Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {workEthicPillars.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-lg bg-[#060B19] border border-[#C5A059]/20 hover:border-[#C5A059]/50 transition-colors"
                >
                  <p className="text-xs font-serif font-bold text-[#F5E8BA]">{item.label}</p>
                  <p className="text-[11px] text-slate-400 mt-1 leading-snug">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pillars & Technical Foundations: 5 columns */}
          <div className="lg:col-span-5 space-y-4">
            {coreCompetencies.map((comp, idx) => {
              const IconComp = comp.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[#060B19] border border-[#16244E] hover:border-[#C5A059]/40 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#0A1128] border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] group-hover:text-[#F5E8BA] group-hover:border-[#C5A059] shrink-0 transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-serif text-base font-semibold text-[#FAF6E8] group-hover:text-[#F5E8BA] transition-colors">
                        {comp.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        {comp.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
