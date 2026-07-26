import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, TrendingDown, Stethoscope, FileQuestion, Target, Trophy } from 'lucide-react';

const studentProfiles = [
  {
    icon: AlertCircle,
    title: 'Struggling with concepts',
    description: 'Finding IGCSE, A-Level, CBSE or ICSE Biology topics confusing and hard to grasp',
    color: '#FF7CA3',
  },
  {
    icon: TrendingDown,
    title: 'Underperforming in exams',
    description: "Getting grades that don't reflect their true potential or effort put in",
    color: '#34E7C6',
  },
  {
    icon: Stethoscope,
    title: 'Aspiring medical students',
    description: 'Aiming for medicine, dentistry or life sciences — and preparing for NEET or A-Level',
    color: '#6EE7A8',
  },
  {
    icon: FileQuestion,
    title: 'Overwhelmed by exam prep',
    description: 'Lost in past papers, mark schemes, board patterns and exam techniques',
    color: '#FFC24B',
  },
  {
    icon: Trophy,
    title: 'Competitive exam aspirants',
    description: 'Preparing for NEET, Science Olympiads or other competitive Biology exams',
    color: '#B07CFF',
  },
  {
    icon: Target,
    title: 'Aiming for top grades',
    description: 'Currently doing okay but wanting to push for A/A* or top board exam scores',
    color: '#FF7CA3',
  },
];

const NeuronMotif = () => (
  <svg viewBox="0 0 400 400" className="w-full h-full" fill="none">
    <g stroke="#B07CFF" strokeWidth="1">
      <line x1="60" y1="80" x2="180" y2="140" />
      <line x1="180" y1="140" x2="320" y2="70" />
      <line x1="180" y1="140" x2="150" y2="260" />
      <line x1="150" y1="260" x2="280" y2="320" />
      <line x1="150" y1="260" x2="50" y2="330" />
      <line x1="320" y1="70" x2="360" y2="200" />
    </g>
    <g fill="#B07CFF">
      <circle cx="60" cy="80" r="5" />
      <circle cx="180" cy="140" r="7" />
      <circle cx="320" cy="70" r="5" />
      <circle cx="150" cy="260" r="6" />
      <circle cx="280" cy="320" r="5" />
      <circle cx="50" cy="330" r="4" />
      <circle cx="360" cy="200" r="4" />
    </g>
  </svg>
);

export default function WhoIsThisFor() {
  return (
    <section className="py-20 md:py-28 bg-[#0A0E12] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-[#B07CFF]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-10 -right-16 w-96 h-96 opacity-[0.15] pointer-events-none hidden lg:block">
        <NeuronMotif />
      </div>

      <div className="container mx-auto px-5 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-[#D3BFFF] font-medium text-sm tracking-wider uppercase mb-3 block">
            Is This Right For You?
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            This Is Right For Students Who Are...
          </h2>
          <p className="text-[#8A9A95] text-lg">
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
              className="group bg-white/[0.03] hover:bg-white/[0.06] border rounded-2xl p-6 transition-all duration-300"
              style={{ borderColor: `${profile.color}33` }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `${profile.color}18`, boxShadow: `0 0 20px ${profile.color}25` }}
              >
                <profile.icon className="w-6 h-6" style={{ color: profile.color }} />
              </div>
              <h3 className="font-heading text-lg font-semibold text-white mb-2">{profile.title}</h3>
              <p className="text-[#9FADA8] leading-relaxed">{profile.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-[#8A9A95] mt-10 text-sm"
        >
          Sound familiar? A focused, expert-led approach with Ms. Preeti can make all the difference.
        </motion.p>
      </div>
    </section>
  );
}
