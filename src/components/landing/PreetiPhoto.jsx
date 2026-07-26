import React, { useState } from 'react';
import { Dna } from 'lucide-react';
import { siteConfig } from '@/config/site';

// Drop a real photo at /public/images/preeti-bhardwaj.jpg and it replaces this
// placeholder everywhere (hero + about section) with no code changes needed.
export default function PreetiPhoto({ className = '' }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#4A9B6F] to-[#3A8AC0] text-white ${className}`}>
        <Dna className="w-14 h-14 mb-3 opacity-90" />
        <span className="text-3xl font-bold tracking-wide">PB</span>
      </div>
    );
  }

  return (
    <img
      src="/images/preeti-bhardwaj.jpg"
      alt={`${siteConfig.mentorName} — The Biology Mentor`}
      className={`object-cover object-top ${className}`}
      onError={() => setFailed(true)}
    />
  );
}
