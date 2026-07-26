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
      'We conduct regular assessments, topic tests, and mock exams throughout the term. Parents receive detailed progress updates so you always know exactly where your child stands.',
  },
  {
    question: 'Do you help with homework or only exam prep?',
    answer:
      'Both! While our core focus is exam readiness, we absolutely support day-to-day school work — including homework, class topics, and preparation for school tests and assessments.',
  },
  {
    question: 'Do you offer NEET and Olympiad preparation?',
    answer:
      'Yes! Ms. Preeti has experience coaching students for NEET Biology, Science Olympiads, and other competitive exams. This can be part of a regular coaching plan or a dedicated preparation track.',
  },
  {
    question: 'What happens if my child misses a class?',
    answer:
      "Just message Ms. Preeti on WhatsApp beforehand and we'll reschedule to another convenient slot — no penalty. We know school life gets busy.",
  },
  {
    question: 'Is there a minimum commitment period?',
    answer:
      "We believe in flexibility. We recommend consistent weekly sessions for best results, but we don't lock you into long contracts. Start with a free trial class and choose a plan that fits your goals.",
  },
  {
    question: 'How do we get started?',
    answer: `Simply book a free trial class using the form on this page or message Ms. Preeti directly on WhatsApp (${siteConfig.phoneDisplay}). We'll assess your child's current level, discuss goals, and recommend the best plan — with no obligation.`,
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => setOpenIndex(openIndex === index ? -1 : index);

  return (
    <section className="py-20 md:py-28 bg-[#0A0E12] relative overflow-hidden">
      <div className="absolute top-10 right-10 w-[26rem] h-[26rem] bg-[#34E7C6]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-5 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-[#34E7C6] font-medium text-sm tracking-wider uppercase mb-3 block">Common Questions</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-[#8A9A95] text-lg">Everything you need to know before getting started</p>
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
                className={`w-full flex items-center justify-between p-5 text-left rounded-xl transition-all duration-200 border ${
                  openIndex === index
                    ? 'bg-gradient-to-r from-[#34E7C6] to-[#6EE7A8] text-[#06120F] border-transparent shadow-[0_0_24px_rgba(52,231,198,0.3)]'
                    : 'bg-white/[0.03] hover:bg-white/[0.06] text-white border-white/10'
                }`}
              >
                <div className="flex items-center gap-3">
                  <HelpCircle className={`w-5 h-5 flex-shrink-0 ${openIndex === index ? 'text-[#06120F]/70' : 'text-[#34E7C6]'}`} />
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
                    <div className="p-5 pt-4 bg-white/[0.03] border border-t-0 border-white/10 rounded-b-xl">
                      <p className="text-[#B9C4C0] leading-relaxed pl-8">{faq.answer}</p>
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
