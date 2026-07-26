import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const ACCENT = '#FF7CA3';

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
    <section className="py-20 md:py-28 bg-[#0A0E12] relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-[#FF7CA3]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-5 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-[#FF9CBB] font-medium text-sm tracking-wider uppercase mb-3 block">Success Stories</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">What Parents Are Saying</h2>
          <p className="text-[#8A9A95] text-lg">Real results from real families in Dubai</p>
        </motion.div>

        <div className="hidden lg:grid lg:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/[0.03] rounded-2xl p-8 relative border"
              style={{ borderColor: `${ACCENT}30` }}
            >
              <Quote className="w-10 h-10 absolute top-6 right-6" style={{ color: `${ACCENT}40` }} />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#FFC24B] fill-[#FFC24B]" />
                ))}
              </div>

              <p className="text-[#D8E0DC] text-lg leading-relaxed mb-6 italic">"{testimonial.quote}"</p>

              <div>
                <p className="font-semibold text-white">{testimonial.author}</p>
                <p className="text-sm font-medium" style={{ color: ACCENT }}>
                  {testimonial.result}
                </p>
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
                className="bg-white/[0.03] rounded-2xl p-6 relative border"
                style={{ borderColor: `${ACCENT}30` }}
              >
                <Quote className="w-8 h-8 absolute top-4 right-4" style={{ color: `${ACCENT}40` }} />

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#FFC24B] fill-[#FFC24B]" />
                  ))}
                </div>

                <p className="text-[#D8E0DC] leading-relaxed mb-6 italic">"{testimonials[currentIndex].quote}"</p>

                <div>
                  <p className="font-semibold text-white">{testimonials[currentIndex].author}</p>
                  <p className="text-sm font-medium" style={{ color: ACCENT }}>
                    {testimonials[currentIndex].result}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center items-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-[#8A9A95] hover:text-[#FF7CA3] hover:border-[#FF7CA3]/50 transition-colors"
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
                  className={`h-2 rounded-full transition-all ${index === currentIndex ? 'w-6 bg-[#FF7CA3]' : 'w-2 bg-white/20'}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-[#8A9A95] hover:text-[#FF7CA3] hover:border-[#FF7CA3]/50 transition-colors"
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
