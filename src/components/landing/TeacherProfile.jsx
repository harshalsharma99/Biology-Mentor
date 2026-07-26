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
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 opacity-[0.06] pointer-events-none">
        <svg viewBox="0 0 200 200" fill="none">
          <path
            d="M100,190 C100,190 20,140 25,70 C30,0 100,10 100,10 C100,10 170,0 175,70 C180,140 100,190 100,190Z"
            fill="#4A9B6F"
          />
          <path d="M100,190 L100,10" stroke="#2D7A52" strokeWidth="3" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-48 h-48 opacity-[0.06] pointer-events-none">
        <svg viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="85" stroke="#5BB8E8" strokeWidth="2" strokeDasharray="6 4" />
          <circle cx="100" cy="100" r="55" stroke="#4A9B6F" strokeWidth="1.5" />
          <circle cx="100" cy="100" r="28" fill="#4A9B6F" />
        </svg>
      </div>

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
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#4A9B6F]/15 to-[#5BB8E8]/15 blur-xl" />

              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-gradient-to-br from-[#E8F8F0] to-[#E8F4FB] shadow-xl">
                <PreetiPhoto className="w-full h-full" />
                <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-[#1A2E23]/30 to-transparent" />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-6 -right-2 md:right-4 bg-white rounded-2xl p-5 shadow-xl border border-[#E8F5EE]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#F4B942] fill-[#F4B942]" />
                    ))}
                  </div>
                  <div>
                    <p className="font-bold text-[#1A2E23]">2000+</p>
                    <p className="text-xs text-[#666]">Students Mentored</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute top-4 -left-2 md:-left-6 bg-white rounded-2xl px-4 py-3 shadow-lg border border-[#E8F5EE]"
              >
                <p className="font-bold text-[#1A2E23] text-sm">{siteConfig.mentorName}</p>
                <p className="text-[#4A9B6F] text-xs">Biology Mentor &middot; Dubai</p>
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
            <span className="text-[#4A9B6F] font-medium text-sm tracking-wider uppercase mb-3 block">
              Your Biology Expert
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A2E23] mb-6">Meet {siteConfig.mentorName}</h2>

            <p className="text-[#556] text-lg leading-relaxed mb-6">
              With over a decade of experience mentoring Biology students across British, CBSE and ICSE curricula, Ms.
              Preeti understands exactly what it takes to excel — from IGCSE all the way to A-Level, NEET, and
              Olympiad preparation.
            </p>

            <p className="text-[#556] leading-relaxed mb-8">
              Having guided over <span className="font-semibold text-[#1A2E23]">2,000 students</span> across the
              Middle East and India, she's helped students of every level — from those struggling with basics to
              high achievers aiming for top medical schools. Her approach blends{' '}
              <span className="font-semibold text-[#4A9B6F]">patient teaching</span>,{' '}
              <span className="font-semibold text-[#4A9B6F]">structured exam strategy</span>, and{' '}
              <span className="font-semibold text-[#3A8AC0]">competitive exam coaching</span>.
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
                  <div className="w-10 h-10 bg-[#4A9B6F]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <credential.icon className="w-5 h-5 text-[#4A9B6F]" />
                  </div>
                  <p className="text-[#445] pt-2">{credential.text}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-[#F0FBF4] to-[#EEF7FF] rounded-2xl border-l-4 border-[#4A9B6F]">
              <p className="text-[#445] italic">
                "I believe every student can excel in Biology with the right guidance. My goal is not just to help
                them pass exams, but to ignite a genuine understanding and love for life sciences — whether they're
                preparing for school exams, NEET or Olympiads."
              </p>
              <p className="text-[#4A9B6F] font-semibold mt-3">— {siteConfig.mentorName}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
