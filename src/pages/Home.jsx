import React from 'react';
import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
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

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Header />

      <main>
        <Hero />
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
    </div>
  );
}
