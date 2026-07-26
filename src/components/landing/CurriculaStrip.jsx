import React from 'react';

const CURRICULA = [
  { label: 'IGCSE', color: '#34E7C6' },
  { label: 'A-Level', color: '#B07CFF' },
  { label: 'CBSE', color: '#FFC24B' },
  { label: 'ICSE', color: '#6EE7A8' },
  { label: 'NEET & Olympiads', color: '#FF7CA3' },
];

export default function CurriculaStrip() {
  return (
    <div className="bg-[#0A0E12] border-y border-white/10 py-7">
      <div className="container mx-auto px-5 md:px-8">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {CURRICULA.map((item) => (
            <span
              key={item.label}
              className="font-semibold text-sm md:text-base px-5 py-2.5 rounded-full border"
              style={{
                color: item.color,
                borderColor: `${item.color}66`,
                backgroundColor: `${item.color}1A`,
              }}
            >
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
