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
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] rounded-full flex items-center justify-center shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/40 transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
      <span className="absolute w-full h-full rounded-full bg-[#25D366] animate-ping opacity-30" />
      <span className="absolute right-full mr-3 whitespace-nowrap bg-white text-[#1A1A1A] text-sm font-medium px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
        Chat with Ms. Preeti
      </span>
    </motion.a>
  );
}
