import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, Route, Video, TrendingUp } from 'lucide-react';

const ACCENT = '#6EE7A8';

const steps = [
  {
    number: '01',
    icon: ClipboardCheck,
    title: 'Free Trial Class',
    description:
      "Join a live trial class with Ms. Preeti so you can see her teaching style firsthand, while we get a feel for your child's current level and goals.",
    highlight: 'No commitment required',
  },
  {
    number: '02',
    icon: Route,
    title: 'Personalised Study Plan',
    description:
      'Based on the assessment, you receive a clear, customised plan covering topics, timings, and exam practice from now until exam day.',
    highlight: 'Tailored to your child',
  },
  {
    number: '03',
    icon: Video,
    title: 'Weekly Coaching Sessions',
    description:
      'Regular 1:1 or small-group lessons (max 4-6 students) online or in-person, focused on concept clarity and exam-style questions.',
    highlight: 'Flexible scheduling',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Progress Tracking & Updates',
    description: 'Regular check-ins, mock tests, and parent updates so you always know exactly how your child is progressing.',
    highlight: 'Complete transparency',
  },
];

const PILLS = [
  { label: '1:1 Private Sessions', color: '#6EE7A8' },
  { label: 'Small Groups (Max 4-6)', color: '#34E7C6' },
  { label: 'Online & In-Person', color: '#B07CFF' },
];

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-28 bg-[#0A0E12] relative overflow-hidden">
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[40rem] h-[20rem] bg-[#6EE7A8]/6 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-5 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-[#6EE7A8] font-medium text-sm tracking-wider uppercase mb-3 block">Simple Process</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-[#8A9A95] text-lg">
            A clear, structured path — whether you're targeting board exams, A-Levels, NEET or Olympiads
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6EE7A8]/40 to-transparent -translate-y-1/2 z-0" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div
                  className="bg-white/[0.03] hover:bg-white/[0.06] rounded-2xl p-6 border transition-all duration-300 h-full group"
                  style={{ borderColor: `${ACCENT}33` }}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <span className="font-heading text-4xl font-bold text-white/10">{step.number}</span>
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${ACCENT}18`, boxShadow: `0 0 20px ${ACCENT}30` }}
                    >
                      <step.icon className="w-6 h-6" style={{ color: ACCENT }} />
                    </div>
                  </div>

                  <h3 className="font-heading text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-[#9FADA8] leading-relaxed mb-4">{step.description}</p>

                  <span
                    className="inline-block text-xs font-medium px-3 py-1 rounded-full"
                    style={{ color: ACCENT, backgroundColor: `${ACCENT}18` }}
                  >
                    {step.highlight}
                  </span>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-20">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: ACCENT, boxShadow: `0 0 10px ${ACCENT}` }}
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-14 text-center"
        >
          <div className="inline-flex flex-wrap justify-center gap-4">
            {PILLS.map((pill) => (
              <div
                key={pill.label}
                className="flex items-center gap-2 bg-white/[0.03] px-5 py-3 rounded-full border"
                style={{ borderColor: `${pill.color}40` }}
              >
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: pill.color, boxShadow: `0 0 6px ${pill.color}` }} />
                <span className="text-[#D8E0DC] font-medium">{pill.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
