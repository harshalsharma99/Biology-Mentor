import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Calendar, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { whatsappLink, siteConfig } from '@/config/site';
import { scrollToId } from '@/lib/scroll';

const DNAHelix = () => (
  <svg viewBox="0 0 260 360" className="w-[70%] h-[70%]" fill="none">
    <g stroke="#34E7C6" strokeWidth="2.2" opacity="0.9">
      <path d="M60,10 C 200,60 60,120 200,170 C 60,220 200,280 60,340" />
      <path d="M200,10 C 60,60 200,120 60,170 C 200,220 60,280 200,340" />
    </g>
    <g stroke="#6EE7A8" strokeWidth="1.6" opacity="0.8">
      <line x1="60" y1="30" x2="200" y2="30" />
      <line x1="90" y1="70" x2="170" y2="70" />
      <line x1="60" y1="120" x2="200" y2="120" />
      <line x1="90" y1="170" x2="170" y2="170" />
      <line x1="60" y1="220" x2="200" y2="220" />
      <line x1="90" y1="270" x2="170" y2="270" />
      <line x1="60" y1="320" x2="200" y2="320" />
    </g>
    <g fill="#34E7C6">
      <circle cx="60" cy="30" r="5" /><circle cx="200" cy="30" r="5" />
      <circle cx="90" cy="70" r="4" /><circle cx="170" cy="70" r="4" />
      <circle cx="60" cy="120" r="5" /><circle cx="200" cy="120" r="5" />
      <circle cx="90" cy="170" r="4" /><circle cx="170" cy="170" r="4" />
      <circle cx="60" cy="220" r="5" /><circle cx="200" cy="220" r="5" />
      <circle cx="90" cy="270" r="4" /><circle cx="170" cy="270" r="4" />
      <circle cx="60" cy="320" r="5" /><circle cx="200" cy="320" r="5" />
    </g>
  </svg>
);

const STATS = [
  { number: '2000+', label: 'Students Mentored' },
  { number: '10+', label: 'Years Experience' },
  { number: 'A/A*', label: 'Grade Success' },
];

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#0A0E12]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[8%] right-[10%] w-[36rem] h-[36rem] bg-[#34E7C6]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-[5%] left-[8%] w-[28rem] h-[28rem] bg-[#B07CFF]/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-5 md:px-8 py-24 md:py-28 relative z-10">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#B07CFF]/10 backdrop-blur-sm border border-[#B07CFF]/40 rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 bg-[#B07CFF] rounded-full shadow-[0_0_8px_#B07CFF] animate-pulse" />
              <span className="text-sm text-[#D3BFFF] font-medium">
                For IGCSE, A-Level, CBSE &amp; ICSE Students in Years 9-13 &middot; Dubai &amp; UAE
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-white leading-[1.12] tracking-tight mb-6"
            >
              Turn Biology{' '}
              <span className="bg-gradient-to-r from-[#34E7C6] to-[#6EE7A8] bg-clip-text text-transparent">
                confusion
              </span>{' '}
              into{' '}
              <span className="bg-gradient-to-r from-[#B07CFF] to-[#FF7CA3] bg-clip-text text-transparent">
                exam-ready
              </span>{' '}
              confidence
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-[#B9C4C0] leading-relaxed mb-8 max-w-xl"
            >
              Personalised online support from <span className="font-semibold text-white">Ms. Preeti Bhardwaj</span> —
              an experienced Biology mentor helping students move from confusion to confidence, and from average
              grades to <span className="font-semibold text-[#34E7C6]">A/A*</span>. Also supporting{' '}
              <span className="font-semibold text-[#D3BFFF]">NEET prep, Olympiads &amp; competitive exams</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-8 mb-10"
            >
              {STATS.map((stat, index) => (
                <div key={index}>
                  <span className="font-heading font-bold text-2xl text-white block">{stat.number}</span>
                  <span className="text-[#8A9A95] text-sm">{stat.label}</span>
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
                className="bg-gradient-to-r from-[#34E7C6] to-[#6EE7A8] hover:brightness-110 text-[#06120F] px-8 py-6 text-lg font-bold rounded-xl shadow-[0_0_30px_rgba(52,231,198,0.4)] hover:shadow-[0_0_40px_rgba(52,231,198,0.55)] hover:-translate-y-0.5"
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
                  className="border-2 border-white/20 text-white hover:bg-white/5 hover:border-[#25D366]/60 px-8 py-6 text-lg font-semibold rounded-xl"
                >
                  <MessageCircle className="w-5 h-5 mr-2 text-[#25D366]" />
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
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-[#34E7C6]/15 to-[#B07CFF]/15 blur-2xl" />

            <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] bg-[#0d1512] border border-[#34E7C6]/30 shadow-[0_0_60px_rgba(52,231,198,0.15)]">
              <HeroVisual />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <p className="font-heading font-bold text-lg">Ms. Preeti Bhardwaj</p>
                <p className="text-white/70 text-sm">Biology Mentor &middot; Dubai</p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -left-6 top-10 bg-[#0A0E12] border border-[#34E7C6]/40 rounded-2xl p-4 shadow-[0_0_24px_rgba(52,231,198,0.25)]"
            >
              <p className="text-xs text-[#8A9A95]">Trusted by</p>
              <p className="text-lg font-heading font-bold text-[#34E7C6]">2000+ families</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#34E7C6]/60"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
}

// Shows the glowing DNA illustration until a real photo is dropped at
// /public/images/preeti-bhardwaj.jpg, then switches to it automatically.
function HeroVisual() {
  const [imgFailed, setImgFailed] = React.useState(false);

  if (imgFailed) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#0F2A24] via-[#0d1512] to-[#1a1030]">
        <DNAHelix />
      </div>
    );
  }

  return (
    <img
      src="/images/preeti-bhardwaj.jpg"
      alt={`${siteConfig.mentorName} — The Biology Mentor`}
      className="w-full h-full object-cover object-top"
      onError={() => setImgFailed(true)}
    />
  );
}
