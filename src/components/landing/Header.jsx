import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Dna, Menu, X, Phone, Calendar } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { scrollToId } from '@/lib/scroll';
import { useBookingModal } from '@/context/BookingModalContext';

const NAV_ITEMS = [
  { label: 'About', id: 'about' },
  { label: 'Courses', id: 'programmes' },
  { label: 'Process', id: 'process' },
  { label: 'FAQ', id: 'faq' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openModal } = useBookingModal();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goTo = (id) => {
    scrollToId(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled ? 'bg-[#0A0E12]/95 backdrop-blur-md border-white/10' : 'bg-[#0A0E12]/70 backdrop-blur-sm border-white/5'
        }`}
      >
        <div className="container mx-auto px-5 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#0A0E12] border border-[#34E7C6]/50 shadow-[0_0_16px_rgba(52,231,198,0.35)]">
                <Dna className="w-5 h-5 text-[#34E7C6]" />
              </div>
              <div>
                <span className="font-heading font-bold text-lg text-white">{siteConfig.businessName}</span>
                <span className="text-xs block -mt-1 text-[#34E7C6] tracking-wide uppercase">For UAE Students</span>
              </div>
            </a>

            <nav className="hidden lg:flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => goTo(item.id)}
                  className="text-sm font-medium text-[#B9C4C0] transition-colors hover:text-[#34E7C6]"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="flex items-center gap-2 text-sm font-medium text-[#B9C4C0] transition-colors hover:text-[#34E7C6]"
              >
                <Phone className="w-4 h-4" />
                <span>{siteConfig.phoneDisplay}</span>
              </a>
              <Button
                onClick={openModal}
                className="bg-gradient-to-r from-[#34E7C6] to-[#6EE7A8] hover:brightness-110 text-[#06120F] font-bold px-5 py-2 rounded-lg shadow-[0_0_20px_rgba(52,231,198,0.35)]"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book Free Trial Class
              </Button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              className="lg:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>
      </motion.header>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="fixed inset-0 top-16 z-40 bg-[#0A0E12] lg:hidden"
        >
          <div className="container mx-auto px-5 py-6">
            <nav className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => goTo(item.id)}
                  className="text-left py-3 px-4 text-lg font-medium text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  {item.label}
                </button>
              ))}

              <hr className="my-4 border-white/10" />

              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="flex items-center gap-3 py-3 px-4 text-[#B9C4C0] hover:bg-white/5 rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5 text-[#34E7C6]" />
                <span>{siteConfig.phoneDisplay}</span>
              </a>

              <Button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openModal();
                }}
                className="mt-4 bg-gradient-to-r from-[#34E7C6] to-[#6EE7A8] text-[#06120F] py-6 text-lg font-bold rounded-xl shadow-[0_0_24px_rgba(52,231,198,0.4)]"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Free Trial Class
              </Button>
            </nav>
          </div>
        </motion.div>
      )}
    </>
  );
}
