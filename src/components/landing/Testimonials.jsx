import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

// TODO(preeti): swap these for real parent/student testimonials when available.
const testimonials = [
  {
    quote:
      "My child's confidence in Biology improved drastically, and so did their grades. The personalised approach made all the difference.",
    author: 'Parent of Year 11 Student',
    result: 'Grade improved from C to A',
    rating: 5,
  },
  {
    quote:
      'The structured exam preparation was exactly what my daughter needed. She went from feeling overwhelmed by past papers to tackling them with confidence.',
    author: 'Parent of A-Level Student',
    result: 'Secured A* in A-Level Biology',
    rating: 5,
  },
  {
    quote:
      'As a parent, the regular updates and clear communication were invaluable. I always knew exactly where my son stood.',
    author: 'Parent of Year 10 Student',
    result: 'Now confidently aiming for medicine',
    rating: 5,
  },
  {
    quote:
      'The revision bootcamp before exams was a game-changer. My daughter covered so much ground in such a short time.',
    author: 'Parent of IGCSE Student',
    result: 'Grade jumped from B to A*',
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="container mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-[#4A7C59] font-medium text-sm tracking-wider uppercase mb-3 block">Success Stories</span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">What Parents Are Saying</h2>
          <p className="text-[#666] text-lg">Real results from real families in Dubai</p>
        </motion.div>

        <div className="hidden lg:grid lg:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#FAFAF8] rounded-2xl p-8 relative"
            >
              <Quote className="w-10 h-10 text-[#4A7C59]/20 absolute top-6 right-6" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#F4B942] fill-[#F4B942]" />
                ))}
              </div>

              <p className="text-[#444] text-lg leading-relaxed mb-6 italic">"{testimonial.quote}"</p>

              <div>
                <p className="font-semibold text-[#1A1A1A]">{testimonial.author}</p>
                <p className="text-[#4A7C59] text-sm font-medium">{testimonial.result}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="lg:hidden relative">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="bg-[#FAFAF8] rounded-2xl p-6 relative"
              >
                <Quote className="w-8 h-8 text-[#4A7C59]/20 absolute top-4 right-4" />

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#F4B942] fill-[#F4B942]" />
                  ))}
                </div>

                <p className="text-[#444] leading-relaxed mb-6 italic">"{testimonials[currentIndex].quote}"</p>

                <div>
                  <p className="font-semibold text-[#1A1A1A]">{testimonials[currentIndex].author}</p>
                  <p className="text-[#4A7C59] text-sm font-medium">{testimonials[currentIndex].result}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white border border-[#E8E8E8] flex items-center justify-center text-[#666] hover:text-[#4A7C59] hover:border-[#4A7C59] transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? 'bg-[#4A7C59] w-6' : 'bg-[#E8E8E8]'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white border border-[#E8E8E8] flex items-center justify-center text-[#666] hover:text-[#4A7C59] hover:border-[#4A7C59] transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
