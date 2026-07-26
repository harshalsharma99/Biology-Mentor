import React, { useState } from 'react';
import { Dna } from 'lucide-react';
import { siteConfig } from '@/config/site';

// Drop a real photo at /public/images/preeti-bhardwaj.jpg and it replaces this
// placeholder everywhere (hero + about section) with no code changes needed.
export default function PreetiPhoto({ className = '' }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#0F2A24] via-[#122036] to-[#1a1030] text-[#34E7C6] ${className}`}>
        <Dna className="w-14 h-14 mb-3 drop-shadow-[0_0_10px_rgba(52,231,198,0.6)]" />
        <span className="text-3xl font-heading font-bold tracking-wide text-white">PB</span>
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
