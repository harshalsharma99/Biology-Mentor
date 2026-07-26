import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Dna, Menu, X, Phone, Calendar } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { scrollToId } from '@/lib/scroll';

const NAV_ITEMS = [
  { label: 'About', id: 'about' },
  { label: 'Courses', id: 'programmes' },
  { label: 'Process', id: 'process' },
  { label: 'FAQ', id: 'faq' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-5 md:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="#" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#4A9B6F]">
                <Dna className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-bold text-lg text-[#1A2E23]">{siteConfig.businessName}</span>
                <span className="text-xs block -mt-1 text-[#4A9B6F]">Dubai &amp; UAE</span>
              </div>
            </a>

            <nav className="hidden lg:flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => goTo(item.id)}
                  className="text-sm font-medium text-[#445] transition-colors hover:text-[#4A9B6F]"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="flex items-center gap-2 text-sm font-medium text-[#445] transition-colors hover:text-[#4A9B6F]"
              >
                <Phone className="w-4 h-4" />
                <span>{siteConfig.phoneDisplay}</span>
              </a>
              <Button
                onClick={() => goTo('contact')}
                className="bg-[#E07A5F] hover:bg-[#C86A50] text-white px-5 py-2 rounded-lg shadow-md shadow-[#E07A5F]/20"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Book Free Session
              </Button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              className="lg:hidden p-2 rounded-lg hover:bg-[#F0F9F4] transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-[#1A2E23]" />
              ) : (
                <Menu className="w-6 h-6 text-[#1A2E23]" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="fixed inset-0 top-16 z-40 bg-white lg:hidden"
        >
          <div className="container mx-auto px-5 py-6">
            <nav className="flex flex-col gap-4">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => goTo(item.id)}
                  className="text-left py-3 px-4 text-lg font-medium text-[#1A2E23] hover:bg-[#F0FBF4] rounded-lg transition-colors"
                >
                  {item.label}
                </button>
              ))}

              <hr className="my-4 border-[#E8F5EE]" />

              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="flex items-center gap-3 py-3 px-4 text-[#445] hover:bg-[#F0FBF4] rounded-lg transition-colors"
              >
                <Phone className="w-5 h-5 text-[#4A9B6F]" />
                <span>{siteConfig.phoneDisplay}</span>
              </a>

              <Button
                onClick={() => goTo('contact')}
                className="mt-4 bg-[#E07A5F] hover:bg-[#C86A50] text-white py-6 text-lg font-semibold rounded-xl shadow-lg shadow-[#E07A5F]/25"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Free Discovery Session
              </Button>
            </nav>
          </div>
        </motion.div>
      )}
    </>
  );
}
