import React from 'react';

const CURRICULA = ['IGCSE', 'A-Level', 'CBSE', 'ICSE', 'NEET', 'Olympiads'];

export default function CurriculaStrip() {
  return (
    <div className="bg-[#1A2E23] py-5">
      <div className="container mx-auto px-5 md:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
          <span className="text-[#7A9A85] text-xs font-semibold tracking-[0.2em] uppercase">Coaching for</span>
          {CURRICULA.map((item) => (
            <span key={item} className="text-white font-semibold text-sm md:text-base tracking-wide">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
