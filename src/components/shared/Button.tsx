import React from 'react';

type ButtonProps = {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export function Button({ variant = 'primary', children, className = '', onClick }: ButtonProps) {
  const baseStyles = "px-8 py-3 rounded-full transition-all duration-300";
  const variants = {
    primary: "bg-gradient-to-r from-[#6D5DFB] to-[#FF6EC7] text-white hover:shadow-[0_0_30px_rgba(109,93,251,0.5)]",
    secondary: "text-white border-2 border-transparent bg-gradient-to-r from-[#6D5DFB] to-[#FF6EC7] hover:text-white [background-clip:padding-box] relative after:absolute after:inset-0 after:p-[2px] after:rounded-full after:bg-gradient-to-r after:from-[#6D5DFB] after:to-[#FF6EC7] after:-z-10 after:[mask-composite:exclude] hover:after:opacity-0"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}