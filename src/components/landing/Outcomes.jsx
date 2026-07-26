import React from 'react';
import { motion } from 'framer-motion';
import { Brain, FileText, CalendarCheck, Users, BarChart3, Trophy } from 'lucide-react';

const ACCENT = '#FFC24B';

const outcomes = [
  {
    icon: Brain,
    title: 'Deep Conceptual Understanding',
    description: 'Master core Biology topics across IGCSE, A-Level, CBSE & ICSE — with real comprehension, not just memorisation',
  },
  {
    icon: FileText,
    title: 'Structured Exam Preparation',
    description: 'Systematic practice with past papers, mark schemes, and board-specific examiner expectations',
  },
  {
    icon: CalendarCheck,
    title: 'Personalised Study Plan',
    description: "A clear roadmap from today to exam day, tailored to your child's curriculum and goals",
  },
  {
    icon: Trophy,
    title: 'NEET & Olympiad Readiness',
    description: 'Targeted preparation for NEET Biology, Science Olympiads, and other competitive exams',
  },
  {
    icon: Users,
    title: 'Regular Parent Updates',
    description: 'Stay informed with progress reports and clear next steps — no surprises at exam time',
  },
  {
    icon: BarChart3,
    title: 'Measurable Progress',
    description: 'Track improvement through regular mock tests, assessments, and grade milestones',
  },
];

const AtpMotif = () => (
  <svg viewBox="0 0 300 300" className="w-full h-full" fill="none">
    <ellipse cx="150" cy="150" rx="130" ry="90" stroke="#FFC24B" strokeWidth="1.2" transform="rotate(20 150 150)" />
    <g stroke="#FFC24B" strokeWidth="4" strokeLinecap="round">
      <line x1="70" y1="90" x2="90" y2="70" />
      <line x1="90" y1="70" x2="115" y2="90" />
      <line x1="140" y1="150" x2="165" y2="130" />
      <line x1="165" y1="130" x2="195" y2="150" />
      <line x1="90" y1="220" x2="115" y2="200" />
      <line x1="115" y1="200" x2="145" y2="220" />
    </g>
    <g fill="#FFC24B">
      <circle cx="70" cy="90" r="4" /><circle cx="90" cy="70" r="4" /><circle cx="115" cy="90" r="4" />
      <circle cx="140" cy="150" r="4" /><circle cx="165" cy="130" r="4" /><circle cx="195" cy="150" r="4" />
      <circle cx="90" cy="220" r="4" /><circle cx="115" cy="200" r="4" /><circle cx="145" cy="220" r="4" />
    </g>
  </svg>
);

export default function Outcomes() {
  return (
    <section className="py-20 md:py-28 bg-[#0A0E12] relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[28rem] h-[28rem] bg-[#FFC24B]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 -left-10 w-72 h-72 opacity-[0.12] pointer-events-none hidden lg:block">
        <AtpMotif />
      </div>

      <div className="container mx-auto px-5 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-[#FFC24B] font-medium text-sm tracking-wider uppercase mb-3 block">
            What You'll Achieve
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Results That Parents &amp; Students Love
          </h2>
          <p className="text-[#8A9A95] text-lg">Our structured approach delivers real, measurable outcomes across all curricula</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white/[0.03] hover:bg-white/[0.06] rounded-2xl p-7 border transition-all duration-300 group"
              style={{ borderColor: `${ACCENT}33` }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${ACCENT}18`, boxShadow: `0 0 20px ${ACCENT}30` }}
              >
                <outcome.icon className="w-7 h-7" style={{ color: ACCENT }} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-white mb-3">{outcome.title}</h3>
              <p className="text-[#9FADA8] leading-relaxed">{outcome.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
