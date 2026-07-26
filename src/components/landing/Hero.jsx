import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Calendar, CheckCircle, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { whatsappLink } from '@/config/site';
import { scrollToId } from '@/lib/scroll';

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

const LeafSVG = () => (
  <svg viewBox="0 0 160 200" className="w-full h-full" fill="none">
    <path
      d="M80,190 C80,190 10,140 15,80 C20,20 80,10 80,10 C80,10 140,20 145,80 C150,140 80,190 80,190Z"
      fill="#4A9B6F"
      stroke="#4A9B6F"
      strokeWidth="1"
      opacity="0.15"
    />
    <path d="M80,190 L80,10" stroke="#2D7A52" strokeWidth="1.5" opacity="0.2" />
    <path d="M80,60 C60,65 45,80 40,95" stroke="#2D7A52" strokeWidth="1" opacity="0.2" />
    <path d="M80,60 C100,65 115,80 120,95" stroke="#2D7A52" strokeWidth="1" opacity="0.2" />
    <path d="M80,100 C55,108 38,125 35,145" stroke="#2D7A52" strokeWidth="1" opacity="0.2" />
    <path d="M80,100 C105,108 122,125 125,145" stroke="#2D7A52" strokeWidth="1" opacity="0.2" />
  </svg>
);

const DNAStrand = () => (
  <svg viewBox="0 0 80 400" className="w-full h-full" fill="none">
    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => {
      const y = i * 40 + 20;
      const offset = Math.sin((i * Math.PI) / 2) * 25;
      return (
        <g key={i}>
          <line x1={40 + offset} y1={y} x2={40 - offset} y2={y} stroke="#4A9B6F" strokeWidth="1.5" opacity="0.4" />
          <circle cx={40 + offset} cy={y} r="4" fill="#6EC89A" opacity="0.5" />
          <circle cx={40 - offset} cy={y} r="4" fill="#3D8B64" opacity="0.5" />
        </g>
      );
    })}
    <path d="M65,0 Q40,50 15,100 Q40,150 65,200 Q40,250 15,300 Q40,350 65,400" stroke="#4A9B6F" strokeWidth="1.5" fill="none" opacity="0.35" />
    <path d="M15,0 Q40,50 65,100 Q40,150 15,200 Q40,250 65,300 Q40,350 15,400" stroke="#2D7A52" strokeWidth="1.5" fill="none" opacity="0.35" />
  </svg>
);

const FLOATING_DOTS = [
  { top: '15%', left: '8%', size: 8, color: '#4A9B6F', opacity: 0.25 },
  { top: '70%', left: '5%', size: 5, color: '#5BB8E8', opacity: 0.3 },
  { top: '30%', right: '15%', size: 6, color: '#A8E6CF', opacity: 0.4 },
  { top: '80%', right: '20%', size: 10, color: '#4A9B6F', opacity: 0.2 },
  { top: '50%', left: '15%', size: 4, color: '#5BB8E8', opacity: 0.35 },
];

const STATS = [
  { number: '2000+', label: 'Students Mentored' },
  { number: '10+', label: 'Years Experience' },
  { number: 'A/A*', label: 'Grade Success' },
];

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-[#F0FBF4] via-[#FAFFFE] to-[#EEF7FF]">
      <div className="absolute top-10 right-20 w-80 h-80 bg-[#4A9B6F]/12 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#5BB8E8]/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-[#A8E6CF]/20 rounded-full blur-3xl" />

      <div className="absolute top-8 right-4 w-48 h-48 opacity-60 pointer-events-none hidden md:block">
        <CellSVG />
      </div>
      <div className="absolute bottom-16 left-6 w-32 h-40 opacity-50 pointer-events-none hidden lg:block">
        <LeafSVG />
      </div>
      <div className="absolute right-8 top-0 h-full w-20 opacity-40 pointer-events-none hidden xl:block">
        <DNAStrand />
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
        <div className="max-w-3xl">
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
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A2E23] leading-[1.15] tracking-tight mb-6"
          >
            Expert Biology Coaching for <span className="text-[#4A9B6F]">IGCSE, A-Level,</span>{' '}
            <span className="text-[#3A8AC0]">CBSE &amp; ICSE</span> Students in Dubai
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-[#445] leading-relaxed mb-8 max-w-2xl"
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
              Book a Free Diagnostic Session
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
