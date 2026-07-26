import React from 'react';
import { Dna, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { siteConfig, whatsappLink } from '@/config/site';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="container mx-auto px-5 md:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#0A0E12] border border-[#34E7C6]/50 shadow-[0_0_16px_rgba(52,231,198,0.3)]">
                <Dna className="w-5 h-5 text-[#34E7C6]" />
              </div>
              <div>
                <span className="text-xl font-heading font-bold block">{siteConfig.businessName}</span>
                <span className="text-[#34E7C6] text-xs">by {siteConfig.mentorName}</span>
              </div>
            </div>
            <p className="text-[#34E7C6] italic mb-3">Helping students fall in love with Biology.</p>
            <p className="text-[#8A9A95] leading-relaxed mb-6 max-w-md">
              Specialised Biology coaching for IGCSE, A-Level, CBSE &amp; ICSE students in Dubai &amp; UAE. Also
              supporting NEET preparation, Science Olympiads &amp; competitive exams.
            </p>
            <div className="flex gap-3">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#25D366]/15 hover:bg-[#25D366] border border-[#25D366]/40 rounded-lg flex items-center justify-center transition-colors group"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366] group-hover:text-white" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-5 text-white">Curricula We Cover</h3>
            <ul className="space-y-3 text-[#8A9A95]">
              <li>IGCSE Biology</li>
              <li>CBSE Biology</li>
              <li>ICSE Biology</li>
              <li>A-Level Biology</li>
              <li>NEET Preparation</li>
              <li>Olympiad Coaching</li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-5 text-white">Contact</h3>
            <ul className="space-y-4 text-[#8A9A95]">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#34E7C6] flex-shrink-0 mt-0.5" />
                <span>{siteConfig.phoneDisplay}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#34E7C6] flex-shrink-0 mt-0.5" />
                <span className="break-all">{siteConfig.email}</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#34E7C6] flex-shrink-0 mt-0.5" />
                <span>{siteConfig.location} &middot; Online Classes</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-[#5C6D68] text-sm">
            &copy; {currentYear} {siteConfig.businessName} &middot; {siteConfig.mentorName} &middot; Dubai, UAE. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
