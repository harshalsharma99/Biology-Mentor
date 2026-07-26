import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check, Sparkles, Calendar, Clock } from 'lucide-react';
import { scrollToId } from '@/lib/scroll';

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

export default function Packages() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-[#F0FBF4] to-[#EEF7FF] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 800 600" className="w-full h-full" fill="none">
          <ellipse cx="400" cy="300" rx="380" ry="270" stroke="#4A9B6F" strokeWidth="2" strokeDasharray="8 5" />
          <ellipse cx="400" cy="300" rx="250" ry="180" stroke="#5BB8E8" strokeWidth="1.5" />
          <circle cx="400" cy="300" r="100" stroke="#4A9B6F" strokeWidth="1" />
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
          <span className="text-[#4A9B6F] font-medium text-sm tracking-wider uppercase mb-3 block">Programmes Offered</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A2E23] mb-4">Choose the Right Programme for Your Child</h2>
          <p className="text-[#556] text-lg">Flexible coaching for IGCSE, A-Level, CBSE, ICSE, NEET &amp; Olympiads</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-white rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-xl ${
                pkg.popular ? 'border-2 border-[#4A9B6F] shadow-lg shadow-[#4A9B6F]/10' : 'border border-[#DDF0E6] shadow-sm'
              }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-[#4A9B6F] text-white text-xs font-semibold px-4 py-1.5 rounded-bl-xl">Most Popular</div>
                </div>
              )}

              <div className="p-7">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${
                    pkg.popular ? 'bg-[#4A9B6F]' : 'bg-[#4A9B6F]/10'
                  }`}
                >
                  <pkg.icon className={`w-7 h-7 ${pkg.popular ? 'text-white' : 'text-[#4A9B6F]'}`} />
                </div>

                <h3 className="text-xl font-bold text-[#1A2E23] mb-1">{pkg.name}</h3>
                <p className="text-[#4A9B6F] font-medium text-sm mb-3">{pkg.subtitle}</p>
                <p className="text-[#556] mb-6">{pkg.description}</p>

                <div className="mb-6 pb-6 border-b border-[#F0F0F0]">
                  <span className="text-2xl font-bold text-[#1A2E23]">Contact for</span>
                  <br />
                  <span className="text-[#666] text-sm">Pricing &amp; Availability</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#4A9B6F] flex-shrink-0 mt-0.5" />
                      <span className="text-[#445]">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  onClick={() => scrollToId('contact')}
                  className={`w-full py-6 text-base font-semibold rounded-xl transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-[#4A9B6F] hover:bg-[#3D8860] text-white shadow-lg shadow-[#4A9B6F]/20'
                      : 'bg-[#F0FBF4] hover:bg-[#4A9B6F] text-[#4A9B6F] hover:text-white border border-[#4A9B6F]/30'
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
          className="text-center text-[#778] mt-10 text-sm"
        >
          All programmes include a free diagnostic session. Custom packages available on request.
        </motion.p>
      </div>
    </section>
  );
}
