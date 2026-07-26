import React from 'react';
import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import CurriculaStrip from '@/components/landing/CurriculaStrip';
import WhoIsThisFor from '@/components/landing/WhoIsThisFor';
import Outcomes from '@/components/landing/Outcomes';
import TeacherProfile from '@/components/landing/TeacherProfile';
import HowItWorks from '@/components/landing/HowItWorks';
import Packages from '@/components/landing/Packages';
import Testimonials from '@/components/landing/Testimonials';
import FAQ from '@/components/landing/FAQ';
import ContactForm from '@/components/landing/ContactForm';
import Footer from '@/components/landing/Footer';
import WhatsAppButton from '@/components/landing/WhatsAppButton';
import ScrollToTopButton from '@/components/landing/ScrollToTopButton';
import BookingModal from '@/components/landing/BookingModal';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0E12] font-sans antialiased">
      <Header />

      <main>
        <Hero />
        <CurriculaStrip />
        <WhoIsThisFor />
        <Outcomes />

        <div id="about">
          <TeacherProfile />
        </div>

        <div id="process">
          <HowItWorks />
        </div>

        <div id="programmes">
          <Packages />
        </div>

        <Testimonials />

        <div id="faq">
          <FAQ />
        </div>

        <ContactForm />
      </main>

      <Footer />
      <WhatsAppButton />
      <ScrollToTopButton />
      <BookingModal />
    </div>
  );
}
