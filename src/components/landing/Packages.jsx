import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check, Sparkles, Calendar, Clock } from 'lucide-react';
import { useBookingModal } from '@/context/BookingModalContext';

const packages = [
  {
    name: 'CBSE, ICSE & IGCSE Support',
    subtitle: 'Years 9-11',
    description:
      'Comprehensive weekly coaching for students in CBSE, ICSE and IGCSE Biology, including school exam prep and Olympiad foundations.',
    features: [
      'Weekly 1:1 or small group sessions',
      'Full syllabus coverage',
      'Past paper & board exam practice',
      'Science Olympiad preparation',
      'Regular progress assessments',
      'Parent progress reports',
    ],
    icon: Calendar,
    popular: false,
  },
  {
    name: 'A-Level Intensive / NEET Prep',
    subtitle: 'Years 12-13 · AS & A2 Level',
    description:
      'Focused exam coaching for A-Level Biology success and NEET / competitive exam preparation for aspiring medical students.',
    features: [
      'Intensive weekly sessions',
      'Advanced topic mastery',
      'A-Level exam technique training',
      'NEET Biology preparation',
      'Mock exams & detailed feedback',
      'University & med school guidance',
      'Priority scheduling',
    ],
    icon: Sparkles,
    popular: true,
  },
  {
    name: 'Revision Bootcamp',
    subtitle: 'Pre-Exam Intensive · All Curricula',
    description: 'Short-term crash course before board exams, IGCSE, A-Level, or competitive exam season.',
    features: [
      'Concentrated targeted revision',
      'Key topic summaries & notes',
      'Exam strategies & mark scheme tips',
      'Multiple past paper practice',
      'Last-minute doubt clearing',
      'Competitive exam quick prep',
    ],
    icon: Clock,
    popular: false,
  },
];

const VIOLET = '#B07CFF';

export default function Packages() {
  const { openModal } = useBookingModal();

  return (
    <section className="py-20 md:py-28 bg-[#0A0E12] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-[30rem] bg-[#B07CFF]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-5 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-[#D3BFFF] font-medium text-sm tracking-wider uppercase mb-3 block">What We Offer</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Choose the Right Plan for Your Child</h2>
          <p className="text-[#8A9A95] text-lg">Flexible coaching for IGCSE, A-Level, CBSE, ICSE, NEET &amp; Olympiads</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-3xl overflow-hidden transition-all duration-300 ${
                pkg.popular
                  ? 'bg-white/[0.04] border-2 border-[#34E7C6]/60 shadow-[0_0_50px_rgba(52,231,198,0.15)]'
                  : 'bg-white/[0.03] border border-[#B07CFF]/25'
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-gradient-to-r from-[#34E7C6] to-[#6EE7A8] text-[#06120F] text-xs font-bold px-4 py-1.5 rounded-bl-xl">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-7">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
                  style={
                    pkg.popular
                      ? { background: 'linear-gradient(135deg, #34E7C6, #6EE7A8)' }
                      : { backgroundColor: `${VIOLET}18`, boxShadow: `0 0 20px ${VIOLET}25` }
                  }
                >
                  <pkg.icon className={`w-7 h-7 ${pkg.popular ? 'text-[#06120F]' : ''}`} style={pkg.popular ? {} : { color: VIOLET }} />
                </div>

                <h3 className="font-heading text-xl font-bold text-white mb-1">{pkg.name}</h3>
                <p className={`font-medium text-sm mb-3 ${pkg.popular ? 'text-[#34E7C6]' : 'text-[#D3BFFF]'}`}>{pkg.subtitle}</p>
                <p className="text-[#9FADA8] mb-6">{pkg.description}</p>

                <div className="mb-6 pb-6 border-b border-white/10">
                  <span className="text-2xl font-heading font-bold text-white">Contact for</span>
                  <br />
                  <span className="text-[#8A9A95] text-sm">Pricing &amp; Availability</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${pkg.popular ? 'text-[#34E7C6]' : 'text-[#B07CFF]'}`} />
                      <span className="text-[#D8E0DC]">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={openModal}
                  className={`w-full py-6 text-base font-bold rounded-xl transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-[#34E7C6] to-[#6EE7A8] hover:brightness-110 text-[#06120F] shadow-[0_0_24px_rgba(52,231,198,0.3)]'
                      : 'bg-transparent hover:bg-[#B07CFF]/10 text-[#D3BFFF] border border-[#B07CFF]/40'
                  }`}
                >
                  Enquire Now
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-[#8A9A95] mt-10 text-sm"
        >
          All plans include a free trial class. Custom packages available on request.
        </motion.p>
      </div>
    </section>
  );
}
