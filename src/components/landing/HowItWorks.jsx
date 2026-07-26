import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, Route, Video, TrendingUp } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: ClipboardCheck,
    title: 'Free Diagnostic Session',
    description:
      "We start with a comprehensive assessment of your child's current level, strengths, and gaps through a discussion and quick diagnostic quiz.",
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

export default function HowItWorks() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-[#F7FAF8]">
      <div className="container mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-[#4A7C59] font-medium text-sm tracking-wider uppercase mb-3 block">Simple Process</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2E23] mb-4">How the Programme Works</h2>
          <p className="text-[#556] text-lg">
            A clear, structured path — whether you're targeting board exams, A-Levels, NEET or Olympiads
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#4A7C59]/20 via-[#4A7C59]/40 to-[#4A7C59]/20 -translate-y-1/2 z-0" />

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
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-[#F0F0F0] h-full group">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-4xl font-bold text-[#4A7C59]/20 group-hover:text-[#4A7C59]/30 transition-colors">
                      {step.number}
                    </span>
                    <div className="w-12 h-12 bg-[#4A7C59] rounded-xl flex items-center justify-center shadow-lg shadow-[#4A7C59]/20">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-[#1A1A1A] mb-3">{step.title}</h3>
                  <p className="text-[#666] leading-relaxed mb-4">{step.description}</p>

                  <span className="inline-block text-xs font-medium text-[#4A7C59] bg-[#4A7C59]/10 px-3 py-1 rounded-full">
                    {step.highlight}
                  </span>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2 z-20">
                    <div className="w-4 h-4 bg-[#4A7C59] rounded-full" />
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
            <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-full border border-[#E8E8E8] shadow-sm">
              <div className="w-2 h-2 bg-[#4A7C59] rounded-full" />
              <span className="text-[#444] font-medium">1:1 Private Sessions</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-full border border-[#E8E8E8] shadow-sm">
              <div className="w-2 h-2 bg-[#2D6A7A] rounded-full" />
              <span className="text-[#444] font-medium">Small Groups (Max 4-6)</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-5 py-3 rounded-full border border-[#E8E8E8] shadow-sm">
              <div className="w-2 h-2 bg-[#E07A5F] rounded-full" />
              <span className="text-[#444] font-medium">Online &amp; In-Person</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
