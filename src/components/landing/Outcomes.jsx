import React from 'react';
import { motion } from 'framer-motion';
import { Brain, FileText, CalendarCheck, Users, BarChart3, Trophy } from 'lucide-react';

const outcomes = [
  {
    icon: Brain,
    title: 'Deep Conceptual Understanding',
    description: 'Master core Biology topics across IGCSE, A-Level, CBSE & ICSE — with real comprehension, not just memorisation',
    color: '#4A9B6F',
  },
  {
    icon: FileText,
    title: 'Structured Exam Preparation',
    description: 'Systematic practice with past papers, mark schemes, and board-specific examiner expectations',
    color: '#3A8AC0',
  },
  {
    icon: CalendarCheck,
    title: 'Personalised Study Plan',
    description: "A clear roadmap from today to exam day, tailored to your child's curriculum and goals",
    color: '#E07A5F',
  },
  {
    icon: Trophy,
    title: 'NEET & Olympiad Readiness',
    description: 'Targeted preparation for NEET Biology, Science Olympiads, and other competitive exams',
    color: '#F4B942',
  },
  {
    icon: Users,
    title: 'Regular Parent Updates',
    description: 'Stay informed with progress reports and clear next steps — no surprises at exam time',
    color: '#9B6B4A',
  },
  {
    icon: BarChart3,
    title: 'Measurable Progress',
    description: 'Track improvement through regular mock tests, assessments, and grade milestones',
    color: '#6B4A9B',
  },
];

export default function Outcomes() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[#F7FAF8] to-white">
      <div className="container mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-[#4A7C59] font-medium text-sm tracking-wider uppercase mb-3 block">
            What You'll Achieve
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2E23] mb-4">Results That Parents &amp; Students Love</h2>
          <p className="text-[#556] text-lg">Our structured approach delivers real, measurable outcomes across all curricula</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 border border-[#F0F0F0] hover:border-transparent group"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${outcome.color}15` }}
              >
                <outcome.icon className="w-7 h-7" style={{ color: outcome.color }} />
              </div>
              <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">{outcome.title}</h3>
              <p className="text-[#666] leading-relaxed">{outcome.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
