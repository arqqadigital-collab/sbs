import React from 'react';

interface GlowingButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const GlowingButton = ({ children, className = "", onClick, type = "button" }: GlowingButtonProps) => (
  <button 
    type={type}
    onClick={onClick}
    className={`relative inline-flex overflow-hidden rounded-lg p-[2px] shadow-[0_0_15px_rgba(132,204,22,0.4)] hover:shadow-[0_0_25px_rgba(132,204,22,0.6)] transition-shadow duration-300 group ${className}`}
  >
    <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,#84cc16_50%,transparent_100%)]"></span>
    <span className="relative flex h-full w-full items-center justify-center rounded-md bg-white px-8 py-3 text-sm font-bold uppercase tracking-wide text-[#003366] transition-colors group-hover:bg-lime-50">
      {children}
    </span>
  </button>
);

export default GlowingButton;
