import React from 'react';

export const Textarea = React.forwardRef(function Textarea({ className = '', ...props }, ref) {
  return (
    <textarea
      ref={ref}
      className={`w-full border px-4 py-3 text-[#1A2E23] placeholder:text-[#9AA] focus:outline-none focus:ring-2 focus:ring-[#4A9B6F]/30 disabled:opacity-50 ${className}`}
      {...props}
    />
  );
});
