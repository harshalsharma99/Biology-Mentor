import React from 'react';
import { ChevronDown } from 'lucide-react';

export const Select = React.forwardRef(function Select(
  { className = '', children, ...props },
  ref
) {
  return (
    <div className="relative">
      <select
        ref={ref}
        className={`w-full appearance-none border px-4 pr-10 text-[#1A2E23] focus:outline-none focus:ring-2 focus:ring-[#4A9B6F]/30 disabled:opacity-50 ${className}`}
        {...props}
      >
        {children}
      </select>
      <ChevronDown className="w-4 h-4 text-[#556] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
    </div>
  );
});
