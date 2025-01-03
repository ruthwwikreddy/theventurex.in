import React from 'react';

interface NavigationItemProps {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
}

export function NavigationItem({ href, children, isActive }: NavigationItemProps) {
  return (
    <a
      href={href}
      className={`relative px-2 py-1 text-sm font-medium transition-all duration-300 ${
        isActive 
          ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#6D5DFB] to-[#FF6EC7]' 
          : 'text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#6D5DFB] hover:to-[#FF6EC7]'
      }`}
    >
      {children}
      <span 
        className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#6D5DFB] to-[#FF6EC7] transform origin-left transition-transform duration-300 ${
          isActive ? 'scale-x-100' : 'scale-x-0'
        }`}
      />
    </a>
  );
}