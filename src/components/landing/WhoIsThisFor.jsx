import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, TrendingDown, Stethoscope, FileQuestion, Target, Trophy } from 'lucide-react';

const studentProfiles = [
  {
    icon: AlertCircle,
    title: 'Struggling with concepts',
    description: 'Finding IGCSE, A-Level, CBSE or ICSE Biology topics confusing and hard to grasp',
    color: '#E07A5F',
  },
  {
    icon: TrendingDown,
    title: 'Underperforming in exams',
    description: "Getting grades that don't reflect their true potential or effort put in",
    color: '#3A8AC0',
  },
  {
    icon: Stethoscope,
    title: 'Aspiring medical students',
    description: 'Aiming for medicine, dentistry or life sciences — and preparing for NEET or A-Level',
    color: '#4A9B6F',
  },
  {
    icon: FileQuestion,
    title: 'Overwhelmed by exam prep',
    description: 'Lost in past papers, mark schemes, board patterns and exam techniques',
    color: '#9B6B4A',
  },
  {
    icon: Trophy,
    title: 'Competitive exam aspirants',
    description: 'Preparing for NEET, Science Olympiads or other competitive Biology exams',
    color: '#F4B942',
  },
  {
    icon: Target,
    title: 'Aiming for top grades',
    description: 'Currently doing okay but wanting to push for A/A* or top board exam scores',
    color: '#6B4A9B',
  },
];

export default function WhoIsThisFor() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute -top-10 -right-10 w-52 h-52 opacity-[0.05] pointer-events-none">
        <svg viewBox="0 0 200 200" fill="none">
          <ellipse cx="100" cy="100" rx="90" ry="70" stroke="#4A9B6F" strokeWidth="2" strokeDasharray="5 3" />
          <circle cx="100" cy="100" r="30" fill="#4A9B6F" />
          <circle cx="65" cy="80" r="10" fill="#6EC89A" />
          <circle cx="135" cy="120" r="12" fill="#6EC89A" />
        </svg>
      </div>

      <div className="container mx-auto px-5 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-[#4A9B6F] font-medium text-sm tracking-wider uppercase mb-3 block">
            Is This Right For You?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2E23] mb-4">
            This Is Right For Students Who Are...
          </h2>
          <p className="text-[#556] text-lg">
            From school exams to NEET and Olympiads — we support every type of Biology learner
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {studentProfiles.map((profile, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-[#F7FDF9] hover:bg-white border border-[#E0EEE8] hover:border-[#4A9B6F]/30 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#4A9B6F]/8"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300"
                style={{ backgroundColor: `${profile.color}15` }}
              >
                <profile.icon className="w-6 h-6" style={{ color: profile.color }} />
              </div>
              <h3 className="text-lg font-semibold text-[#1A2E23] mb-2">{profile.title}</h3>
              <p className="text-[#556] leading-relaxed">{profile.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-[#778] mt-10 text-sm"
        >
          Sound familiar? A focused, expert-led approach with Ms. Preeti can make all the difference.
        </motion.p>
      </div>
    </section>
  );
}
