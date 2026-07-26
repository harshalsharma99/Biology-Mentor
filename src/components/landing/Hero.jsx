import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Calendar, CheckCircle, ChevronDown, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { whatsappLink } from '@/config/site';
import { scrollToId } from '@/lib/scroll';
import PreetiPhoto from './PreetiPhoto';

const CellSVG = () => (
  <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
    <ellipse cx="100" cy="100" rx="90" ry="70" stroke="#4A9B6F" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.5" />
    <ellipse cx="100" cy="100" rx="60" ry="45" stroke="#4A9B6F" strokeWidth="1" opacity="0.4" />
    <circle cx="100" cy="100" r="22" fill="#6EC89A" opacity="0.3" />
    <circle cx="100" cy="100" r="14" fill="#3D8B64" opacity="0.4" />
    <circle cx="68" cy="82" r="7" fill="#7ED9A8" opacity="0.35" />
    <circle cx="132" cy="118" r="9" fill="#7ED9A8" opacity="0.3" />
    <circle cx="125" cy="78" r="5" fill="#7ED9A8" opacity="0.3" />
    <circle cx="75" cy="122" r="6" fill="#7ED9A8" opacity="0.3" />
    <circle cx="140" cy="95" r="4" fill="#5BC490" opacity="0.35" />
  </svg>
);

const FLOATING_DOTS = [
  { top: '12%', left: '6%', size: 8, color: '#4A9B6F', opacity: 0.25 },
  { top: '75%', left: '4%', size: 5, color: '#5BB8E8', opacity: 0.3 },
  { top: '20%', left: '42%', size: 6, color: '#A8E6CF', opacity: 0.35 },
];

const STATS = [
  { number: '2000+', label: 'Students Mentored' },
  { number: '10+', label: 'Years Experience' },
  { number: 'A/A*', label: 'Grade Success' },
];

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-gradient-to-br from-[#F0FBF4] via-[#FAFFFE] to-[#EEF7FF]">
      <div className="absolute top-10 right-0 w-[32rem] h-[32rem] bg-[#4A9B6F]/12 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#5BB8E8]/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#A8E6CF]/20 rounded-full blur-3xl" />

      <div className="absolute top-6 left-4 w-40 h-40 opacity-40 pointer-events-none hidden md:block">
        <CellSVG />
      </div>

      {FLOATING_DOTS.map((dot, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            top: dot.top,
            left: dot.left,
            right: dot.right,
            width: dot.size,
            height: dot.size,
            backgroundColor: dot.color,
            opacity: dot.opacity,
          }}
        />
      ))}

      <div className="container mx-auto px-5 md:px-8 py-24 md:py-28 relative z-10">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-[#4A9B6F]/25 rounded-full px-4 py-2 mb-6 shadow-sm"
            >
              <span className="w-2 h-2 bg-[#4A9B6F] rounded-full animate-pulse" />
              <span className="text-sm text-[#2D7A52] font-medium">
                For IGCSE, A-Level, CBSE &amp; ICSE Students in Years 9-13 &middot; Dubai &amp; UAE
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-[#1A2E23] leading-[1.12] tracking-tight mb-6"
            >
              Expert Biology Coaching for <span className="text-[#4A9B6F]">IGCSE, A-Level,</span>{' '}
              <span className="text-[#3A8AC0]">CBSE &amp; ICSE</span> Students in Dubai
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-[#445] leading-relaxed mb-8 max-w-xl"
            >
              Personalised online support from <span className="font-semibold text-[#1A2E23]">Ms. Preeti Bhardwaj</span> — an
              experienced Biology mentor helping students move from confusion to confidence, and from average grades to{' '}
              <span className="font-semibold text-[#4A9B6F]">A/A*</span>. Also supporting{' '}
              <span className="font-semibold text-[#3A8AC0]">NEET prep, Olympiads &amp; competitive exams</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-6 mb-10"
            >
              {STATS.map((stat, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#4A9B6F]" />
                  <div>
                    <span className="font-bold text-[#1A2E23]">{stat.number}</span>
                    <span className="text-[#556] ml-1 text-sm">{stat.label}</span>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                onClick={() => scrollToId('contact')}
                className="bg-[#E07A5F] hover:bg-[#C86A50] text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg shadow-[#E07A5F]/25 hover:shadow-xl hover:-translate-y-0.5"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book a Free Discovery Session
              </Button>
              <a
                href={whatsappLink('Hi, I would like to enquire about Biology tutoring for my child.')}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-2 border-[#25D366] text-[#1A8C40] hover:bg-[#25D366] hover:text-white px-8 py-6 text-lg font-semibold rounded-xl"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat on WhatsApp
                </Button>
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-[#4A9B6F]/20 to-[#5BB8E8]/20 blur-2xl" />

            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] bg-gradient-to-br from-[#E8F8F0] to-[#E8F4FB] shadow-2xl">
              <PreetiPhoto className="w-full h-full" />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#1A2E23]/40 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <p className="font-bold text-lg">Ms. Preeti Bhardwaj</p>
                <p className="text-white/80 text-sm">Biology Mentor &middot; Dubai</p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -left-6 top-10 bg-white rounded-2xl p-4 shadow-xl border border-[#E8F5EE]"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#F4B942] fill-[#F4B942]" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-[#556] mt-1">Trusted by 2000+ families</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#4A9B6F]/50"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
}
