import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { whatsappLink } from '@/config/site';

export default function WhatsAppButton() {
  return (
    <motion.a
      href={whatsappLink('Hi Ms. Preeti, I would like to enquire about Biology tutoring for my child.')}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      className="fixed z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] rounded-full flex items-center justify-center shadow-[0_0_24px_rgba(37,211,102,0.5)] hover:shadow-[0_0_32px_rgba(37,211,102,0.65)] transition-all duration-300 group"
      style={{
        bottom: 'calc(1.5rem + env(safe-area-inset-bottom, 0px))',
        right: 'calc(1.5rem + env(safe-area-inset-right, 0px))',
      }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
      <span className="absolute w-full h-full rounded-full bg-[#25D366] animate-ping opacity-30" />
      <span className="absolute right-full mr-3 whitespace-nowrap bg-[#0A0E12] border border-[#25D366]/40 text-white text-sm font-medium px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
        Chat with Ms. Preeti
      </span>
    </motion.a>
  );
}
