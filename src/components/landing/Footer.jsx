import React from 'react';
import { Microscope, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { siteConfig, whatsappLink } from '@/config/site';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F1E16] text-white">
      <div className="container mx-auto px-5 md:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-[#4A9B6F] rounded-xl flex items-center justify-center">
                <Microscope className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold block">{siteConfig.businessName}</span>
                <span className="text-[#4A9B6F] text-xs">by {siteConfig.mentorName}</span>
              </div>
            </div>
            <p className="text-[#7A9A85] leading-relaxed mb-6 max-w-md">
              Specialised Biology coaching for IGCSE, A-Level, CBSE &amp; ICSE students in Dubai &amp; UAE. Also
              supporting NEET preparation, Science Olympiads &amp; competitive exams.
            </p>
            <div className="flex gap-3">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#25D366]/20 hover:bg-[#25D366] rounded-lg flex items-center justify-center transition-colors group"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366] group-hover:text-white" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-5 text-white">Programmes</h3>
            <ul className="space-y-3 text-[#7A9A85]">
              <li>IGCSE Biology</li>
              <li>CBSE Biology</li>
              <li>ICSE Biology</li>
              <li>A-Level Biology</li>
              <li>NEET Preparation</li>
              <li>Olympiad Coaching</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-5 text-white">Contact</h3>
            <ul className="space-y-4 text-[#7A9A85]">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#4A9B6F] flex-shrink-0 mt-0.5" />
                <span>{siteConfig.phoneDisplay}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#4A9B6F] flex-shrink-0 mt-0.5" />
                <span className="break-all">{siteConfig.email}</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#4A9B6F] flex-shrink-0 mt-0.5" />
                <span>{siteConfig.location} &middot; Online Classes</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#1E3828] mt-12 pt-8 text-center">
          <p className="text-[#4A6A55] text-sm">
            &copy; {currentYear} {siteConfig.businessName} &middot; {siteConfig.mentorName} &middot; Dubai, UAE. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
