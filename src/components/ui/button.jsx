import React from 'react';

export const Button = React.forwardRef(function Button(
  { className = '', type = 'button', ...props },
  ref
) {
  return (
    <button
      ref={ref}
      type={type}
      className={`inline-flex items-center justify-center font-medium transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none disabled:cursor-not-allowed ${className}`}
      {...props}
    />
  );
});
