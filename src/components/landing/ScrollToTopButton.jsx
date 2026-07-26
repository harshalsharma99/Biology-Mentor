import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 left-6 z-50 w-12 h-12 bg-white/5 hover:bg-white/10 border border-[#34E7C6]/40 backdrop-blur-sm rounded-full flex items-center justify-center shadow-[0_0_16px_rgba(52,231,198,0.2)] hover:shadow-[0_0_24px_rgba(52,231,198,0.35)] transition-shadow"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5 text-[#34E7C6]" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
