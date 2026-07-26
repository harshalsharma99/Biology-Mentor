import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { siteConfig } from '@/config/site';

const faqs = [
  {
    question: 'Which curricula do you support?',
    answer:
      'We support IGCSE, A-Level (AS & A2), CBSE and ICSE Biology. We also coach students preparing for NEET, Science Olympiads, and other competitive exams.',
  },
  {
    question: 'Are classes online or in-person?',
    answer:
      'Classes can be conducted online or in-person, making it convenient for students anywhere in Dubai, across the UAE, and the GCC. Sessions are live and interactive — not pre-recorded.',
  },
  {
    question: 'How many students are in each group session?',
    answer:
      'Our small-group sessions are capped at 4-6 students maximum. This ensures every student gets personalised attention while benefiting from peer learning and discussion. 1:1 private sessions are also available.',
  },
  {
    question: 'How do you track and report progress?',
    answer:
      'We conduct regular assessments, topic tests, and mock exams throughout the programme. Parents receive detailed progress updates so you always know exactly where your child stands.',
  },
  {
    question: 'Do you help with homework or only exam prep?',
    answer:
      'Both! While our core focus is exam readiness, we absolutely support day-to-day school work — including homework, class topics, and preparation for school tests and assessments.',
  },
  {
    question: 'Do you offer NEET and Olympiad preparation?',
    answer:
      'Yes! Ms. Preeti has experience coaching students for NEET Biology, Science Olympiads, and other competitive exams. This can be part of a regular coaching plan or a dedicated preparation programme.',
  },
  {
    question: 'Is there a minimum commitment period?',
    answer:
      "We believe in flexibility. We recommend consistent weekly sessions for best results, but we don't lock you into long contracts. Start with a free diagnostic session and choose a plan that fits your goals.",
  },
  {
    question: 'How do we get started?',
    answer: `Simply book a free diagnostic session using the form on this page or message Ms. Preeti directly on WhatsApp (${siteConfig.phoneDisplay}). We'll assess your child's current level, discuss goals, and recommend the best plan — with no obligation.`,
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => setOpenIndex(openIndex === index ? -1 : index);

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-[#F0FBF4] to-white relative overflow-hidden">
      <div className="absolute top-10 right-10 w-40 h-40 opacity-[0.05] pointer-events-none">
        <svg viewBox="0 0 200 200" fill="none">
          <ellipse cx="100" cy="100" rx="90" ry="70" stroke="#4A9B6F" strokeWidth="2" />
          <ellipse cx="100" cy="100" rx="55" ry="42" stroke="#4A9B6F" strokeWidth="1.5" />
          <circle cx="100" cy="100" r="22" fill="#4A9B6F" />
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
          <span className="text-[#4A9B6F] font-medium text-sm tracking-wider uppercase mb-3 block">Common Questions</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2E23] mb-4">Frequently Asked Questions</h2>
          <p className="text-[#556] text-lg">Everything you need to know before getting started</p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="mb-3"
            >
              <button
                onClick={() => toggleFaq(index)}
                className={`w-full flex items-center justify-between p-5 text-left rounded-xl transition-all duration-200 ${
                  openIndex === index
                    ? 'bg-[#4A9B6F] text-white shadow-lg shadow-[#4A9B6F]/20'
                    : 'bg-white hover:bg-[#F0FBF4] text-[#1A2E23] border border-[#E0EEE8]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className={`w-5 h-5 flex-shrink-0 ${openIndex === index ? 'text-white/80' : 'text-[#4A9B6F]'}`} />
                  <span className="font-medium pr-4">{faq.question}</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 pt-4 bg-white border border-t-0 border-[#E0EEE8] rounded-b-xl">
                      <p className="text-[#445] leading-relaxed pl-8">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
