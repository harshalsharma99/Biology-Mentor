import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, GraduationCap, Heart, Star, Trophy } from 'lucide-react';
import { siteConfig } from '@/config/site';
import PreetiPhoto from './PreetiPhoto';

const credentials = [
  { icon: BookOpen, text: '10+ years teaching Biology across IGCSE, A-Level, CBSE & ICSE curricula to Years 9-13' },
  { icon: Award, text: 'Deep expertise in IGCSE, AS & A-Level exam patterns, mark schemes & past papers' },
  { icon: Trophy, text: 'Trained students for NEET, Science Olympiads & other competitive exams' },
  { icon: GraduationCap, text: 'Guided 2000+ students into top medical, dental & life science programmes' },
  { icon: Heart, text: 'Patient, encouraging teaching style that builds genuine curiosity for Biology' },
];

export default function TeacherProfile() {
  return (
    <section className="py-20 md:py-28 bg-[#0A0E12] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[26rem] h-[26rem] bg-[#34E7C6]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-5 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#34E7C6]/15 to-[#B07CFF]/15 blur-xl" />

              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-[#0d1512] border border-[#34E7C6]/30 shadow-[0_0_50px_rgba(52,231,198,0.12)]">
                <PreetiPhoto className="w-full h-full" />
                <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-6 -right-2 md:right-4 bg-[#0A0E12] rounded-2xl p-5 border border-[#FFC24B]/40 shadow-[0_0_24px_rgba(255,194,75,0.2)]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#FFC24B] fill-[#FFC24B]" />
                    ))}
                  </div>
                  <div>
                    <p className="font-heading font-bold text-white">2000+</p>
                    <p className="text-xs text-[#8A9A95]">Students Mentored</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute top-4 -left-2 md:-left-6 bg-[#0A0E12] rounded-2xl px-4 py-3 border border-[#34E7C6]/40 shadow-[0_0_24px_rgba(52,231,198,0.2)]"
              >
                <p className="font-heading font-bold text-white text-sm">{siteConfig.mentorName}</p>
                <p className="text-[#34E7C6] text-xs">Biology Mentor &middot; Dubai</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <span className="text-[#34E7C6] font-medium text-sm tracking-wider uppercase mb-3 block">
              Your Biology Expert
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">Meet {siteConfig.mentorName}</h2>

            <p className="text-[#B9C4C0] text-lg leading-relaxed mb-6">
              With over a decade of experience mentoring Biology students across British, CBSE and ICSE curricula, Ms.
              Preeti understands exactly what it takes to excel — from IGCSE all the way to A-Level, NEET, and
              Olympiad preparation.
            </p>

            <p className="text-[#B9C4C0] leading-relaxed mb-8">
              Having guided over <span className="font-semibold text-white">2,000 students</span> across the Middle
              East and India, she's helped students of every level — from those struggling with basics to high
              achievers aiming for top medical schools. Her approach blends{' '}
              <span className="font-semibold text-[#34E7C6]">patient teaching</span>,{' '}
              <span className="font-semibold text-[#34E7C6]">structured exam strategy</span>, and{' '}
              <span className="font-semibold text-[#D3BFFF]">competitive exam coaching</span>.
            </p>

            <div className="space-y-4">
              {credentials.map((credential, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 bg-[#34E7C6]/10 border border-[#34E7C6]/25 rounded-xl flex items-center justify-center flex-shrink-0">
                    <credential.icon className="w-5 h-5 text-[#34E7C6]" />
                  </div>
                  <p className="text-[#B9C4C0] pt-2">{credential.text}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-white/[0.03] rounded-2xl border-l-4 border-[#34E7C6]">
              <p className="text-[#D8E0DC] italic">
                "I believe every student can excel in Biology with the right guidance. My goal is not just to help
                them pass exams, but to ignite a genuine understanding and love for life sciences — whether they're
                preparing for school exams, NEET or Olympiads."
              </p>
              <p className="text-[#34E7C6] font-semibold mt-3">— {siteConfig.mentorName}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
